module.exports = function(Teachers) {
  Teachers.disableRemoteMethod("create", false);       // PUT  /Teachers
  Teachers.disableRemoteMethod("upsert", false);       // POST /Teachers
  Teachers.disableRemoteMethod("updateAll", true);
  Teachers.disableRemoteMethod("updateAttributes", false);
  Teachers.disableRemoteMethod('createChangeStream', true);

  Teachers.disableRemoteMethod("find", false);         //GET /Teachers
  Teachers.disableRemoteMethod("findById", false);
  Teachers.disableRemoteMethod("findOne", true);

  Teachers.disableRemoteMethod("deleteById", false);

  Teachers.disableRemoteMethod("confirm", true);
  Teachers.disableRemoteMethod("count", true);
  Teachers.disableRemoteMethod("exists", true);
  Teachers.disableRemoteMethod("resetPassword", true);

  Teachers.disableRemoteMethod('__count__accessTokens', false);
  Teachers.disableRemoteMethod('__create__accessTokens', false);
  Teachers.disableRemoteMethod('__delete__accessTokens', false);
  Teachers.disableRemoteMethod('__destroyById__accessTokens', false);
  Teachers.disableRemoteMethod('__findById__accessTokens', false);
  Teachers.disableRemoteMethod('__get__accessTokens', false);
  Teachers.disableRemoteMethod('__updateById__accessTokens', false);

  // 모델에 저장되기전 호출
  Teachers.observe('before save', function updateTimestamp(ctx, next) {

    var app = require('../../server/server');
    var Role = app.models.Role;
    var RoleMapping = app.models.RoleMapping;

    if (ctx.instance) {

      Role.findOne({
        name:'teacher'
      }, function(err,role){
        role.principals.create({
          principalType: RoleMapping.USER,
          principalId: ctx.instance.id
        }, function(err, principal) {
          if (err) throw err;
          console.log('Created principal:', principal);
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

};
