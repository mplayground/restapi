module.exports = function(Students) {

  Students.disableRemoteMethod("create", false);       // PUT  /Students
  Students.disableRemoteMethod("upsert", false);       // POST /Students
  Students.disableRemoteMethod("updateAll", true);
  Students.disableRemoteMethod("updateAttributes", false);
  Students.disableRemoteMethod('createChangeStream', true);

  Students.disableRemoteMethod("find", false);         //GET /Students
  Students.disableRemoteMethod("findById", false);
  Students.disableRemoteMethod("findOne", false);

  Students.disableRemoteMethod("deleteById", true);

  Students.disableRemoteMethod("confirm", true);
  Students.disableRemoteMethod("count", true);
  Students.disableRemoteMethod("exists", true);
  Students.disableRemoteMethod("resetPassword", true);

  Students.disableRemoteMethod('__count__accessTokens', false);
  Students.disableRemoteMethod('__create__accessTokens', false);
  Students.disableRemoteMethod('__delete__accessTokens', false);
  Students.disableRemoteMethod('__destroyById__accessTokens', false);
  Students.disableRemoteMethod('__findById__accessTokens', false);
  Students.disableRemoteMethod('__get__accessTokens', false);
  Students.disableRemoteMethod('__updateById__accessTokens', false);

  // Purchases
  Students.disableRemoteMethod("__count__purchases", false);
  // Students.disableRemoteMethod("__upsert__purchases", false);       // POST /Students
  // Students.disableRemoteMethod("__create__purchases", false);       // POST /Students


  // 모델에 저장되기전 호출
  Students.observe('after save', function updateTimestamp(ctx, next) {

    var app = require('../../server/server');
    var Role = app.models.Role;
    var RoleMapping = app.models.RoleMapping;

    if (ctx.instance) {

      Role.findOne({
        name:'student'
      }, function(err,role){
        role.principals.create({
          principalType: RoleMapping.USER,
          principalId: ctx.instance.id
        }, function(err, principal) {
          if (err) throw err;
          console.log('Created principal for Students:', principal);
          next();
        });
      });

    } else {
      var err = new Error("not exists instance");
      err.statusCode = 400;
      console.log(err.toString());
      next(err);
    }
  });

  Students.afterRemote('login', function setLoginCookie(context, accessToken, next) {
    var res = context.res;
    var req = context.req;

    if (accessToken != null) {
        if (accessToken.id != null) {
            res.cookie('access_token', accessToken.id, {
                signed: req.signedCookies ? true : false,
                maxAge: 1000 * accessToken.ttl
            });
            return res.redirect('/');
        }
    }
    return next();
  });

};
