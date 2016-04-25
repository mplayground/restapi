module.exports = function(Enrollments) {
  Enrollments.disableRemoteMethod("create", true);
  Enrollments.disableRemoteMethod("upsert", true);
  Enrollments.disableRemoteMethod("updateAll", true);
  Enrollments.disableRemoteMethod("updateAttributes", false);
  Enrollments.disableRemoteMethod("find", true);
  Enrollments.disableRemoteMethod("findById", true);
  Enrollments.disableRemoteMethod("findOne", true);

  Enrollments.greet = function(msg, cb) {
    console.log("greeting!!!");
    cb(null, 'Greetings... ' + msg);
  }

    Enrollments.remoteMethod(
        'greet',
        {
          accepts: {arg: 'msg', type: 'string'},
          returns: {arg: 'greeting', type: 'string'}
        }
    );
};
