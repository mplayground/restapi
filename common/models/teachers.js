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
  Teachers.observe('after save', function updateTimestamp(ctx, next) {

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
          console.log('Created principal for Teachers:', principal);
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

  Teachers.startHangout = function(id, data, cb) {

    var app = require('../../server/server');
    var Enrollments = app.models.Enrollments;

    console.log('start hangout. id:' + id + ', data:' + data.hangoutUrl);

    var startLesson = function(enrollment, cb){
      enrollment.students(function(err, student){
        if(err) throw err;
        //학생이 지정되지 않을 수 있고, 학생의 이메일이 설정되어 있지 않을 수 있다.
        if(student && student.email){
          enrollment.updateAttributes({status:'start'},
            function(err,instance){
              if(err) throw err;
              console.log('sendEmail to student[email:]' + student.email + '] with url :'+ data.hangoutUrl);
              cb(null,'OK')
            });
        }else{
          cb(new Error("students'email must be set."),null)
        }
      });
    }

    Enrollments.findById(data.enrollmentsId,[], function(err, enrollment){
      if(err) throw err;
      if(enrollment){
        switch (enrollment.status) {
          case 'reserved': startLesson(enrollment, cb); break;
          default: cb(null,'status must be "reserve" . invalid status ' + enrollment.status)
        }
      } else {
        cb(new Error('not found enrollment ' + id),null)
      }
    });
  }

  Teachers.remoteMethod(
      'startHangout',
      {
        accepts: [
          {arg: 'id', type: 'string', required: true},
          {arg: 'data', type: '{ "enrollmentsId":"string","hangoutUrl": "string" }', required: true, http: { source: 'body' }}
        ],
        http: {path: '/:id/startHangout', verb: 'post'},
        returns: {arg: 'result', type: 'string'}
      }
  );

};
