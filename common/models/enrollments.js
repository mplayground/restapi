module.exports = function(Enrollments) {
  Enrollments.disableRemoteMethod("create", false);       // PUT  /enrollments
  Enrollments.disableRemoteMethod("upsert", false);       // POST /enrollments
  Enrollments.disableRemoteMethod("updateAll", true);
  Enrollments.disableRemoteMethod("updateAttributes", false);
  Enrollments.disableRemoteMethod('createChangeStream', true);

  Enrollments.disableRemoteMethod("find", false);
  Enrollments.disableRemoteMethod("findById", true);
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

  Enrollments.start = function(msg, cb) {
    console.log("start lesson");
    cb(null, 'Greetings... ' + msg);
  }

  Enrollments.remoteMethod(
      'start',
      {
        accepts: {arg: 'msg', type: 'string'},
        returns: {arg: 'greeting', type: 'string'}
      }
  );
};
