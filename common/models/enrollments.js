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
        //학생이 지정되지 않을 수 있고, 학생의 이메일이 설정되어 있지 않을 수 있다.
        if(student && student.email){
          enrollment.lessons(function(err, lesson){
            lesson.teachers(function(err, teacher){
              if(err) throw err;
              // 강사가 삭제되어 노출되지 않거나, 강사의 이메일이 설정되어 있지 않을 수 있다.
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

  // 모델에 저장되기전 호출
  Enrollments.observe('before save', function updateTimestamp(ctx, next) {
    if (ctx.instance) {
      // 강사, 학생별로 수강시간이 겹치지 않도록 체크 (개발중)
      Enrollments.find(function(err, enrollment) {
        if(err) throw err;
        if(enrollment.length > 0){
          console.log(ctx.instance.startAt);
          console.log(ctx.instance.endAt);

          enrollment.forEach(function(enrollment) {
            // 기존강의 시작시간보다 종료기간이 같거나 작고 기존강의 종료시간보다 시작시간이 같거나 커야 만족
            if(!(ctx.instance.endAt <= enrollment.startAt && enrollment.endAt <= ctx.instance.startAt)) {
              var err = new Error("겹치는 시간이 있다.");
              err.statusCode = 400;
              console.log(err.toString());
              next(err);
            } else {
              // 겹치는게 없으므로 진행
              next();
            }
          });
        } else {
          // 객체가 하나도 없으니 생성
          next();
        }
      });
    } else {
      var err = new Error("not exists instance");
      err.statusCode = 400;
      console.log(err.toString());
      next(err);
    }
  });

};
