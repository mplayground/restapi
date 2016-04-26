module.exports = function(Enrollments) {
  Enrollments.disableRemoteMethod("create", false);       // PUT  /enrollments
  Enrollments.disableRemoteMethod("upsert", false);       // POST /enrollments
  Enrollments.disableRemoteMethod("updateAll", true);
  Enrollments.disableRemoteMethod("updateAttributes", false);
  Enrollments.disableRemoteMethod('createChangeStream', true);

  Enrollments.disableRemoteMethod("find", false);         //GET /enrollments
  Enrollments.disableRemoteMethod("findById", false);
  Enrollments.disableRemoteMethod("findOne", true);

  Enrollments.disableRemoteMethod("deleteById", true);

  Enrollments.disableRemoteMethod("confirm", true);
  Enrollments.disableRemoteMethod("count", true);
  Enrollments.disableRemoteMethod("exists", true);
  Enrollments.disableRemoteMethod("resetPassword", true);

  Enrollments.disableRemoteMethod('__count__accessTokens', false);
  Enrollments.disableRemoteMethod('__create__accessTokens', false);
  Enrollments.disableRemoteMethod('__delete__accessTokens', false);
  Enrollments.disableRemoteMethod('__destroyById__accessTokens', false);
  Enrollments.disableRemoteMethod('__findById__accessTokens', false);
  Enrollments.disableRemoteMethod('__get__accessTokens', false);
  Enrollments.disableRemoteMethod('__updateById__accessTokens', false);

  //GET /enrollments/start
  Enrollments.start = function(enrollmentsId, cb) {
    var startLesson = function(enrollment, cb){
      enrollment.students(function(err, student){
        if(err) throw err;
        if(student && student.email){
          enrollment.lessons(function(err, lesson){
            lesson.teachers(function(err, teacher){
              if(err) throw err;
              if(teacher && teacher.email){
                console.log('launch Handout teacher:' + teacher.email + ', student:' + student.email);
                enrollment.status = 'start'
                Enrollments.upsert(enrollment, function(err){
                  cb(null,'OK')
                });
              }else{
                cb(new Error("teachers'email must be set."),null)
              }
            });
          });
        }else{
          cb(new Error("students'email must be set."),null)
        }
      });
    }

    Enrollments.findById(enrollmentsId,[], function(err, enrollment){
      if(err) throw err;
      if(enrollment){
        switch (enrollment.status) {
          case 'open': startLesson(enrollment, cb); break;
          default: cb(null,'cannot start lesson. invalid status ' + enrollment.status)
        }
      } else {
        cb(new Error('not found enrollment ' + enrollmentsId),null)
      }
    });
  }

  Enrollments.remoteMethod(
      'start',
      {
        accepts: {arg: 'enrollmentsId', type: 'string'},
        returns: {arg: 'result', type: 'string'}
      }
  );
};
