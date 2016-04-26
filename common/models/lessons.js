module.exports = function(Lessons) {
  Lessons.disableRemoteMethod("create", true);       // PUT  /Lessons
  Lessons.disableRemoteMethod("upsert", true);       // POST /Lessons
  Lessons.disableRemoteMethod("updateAll", true);
  Lessons.disableRemoteMethod("updateAttributes", true);
  Lessons.disableRemoteMethod('createChangeStream', true);

  Lessons.disableRemoteMethod("find", true);         //GET /Lessons
  Lessons.disableRemoteMethod("findById", true);
  Lessons.disableRemoteMethod("findOne", true);

  Lessons.disableRemoteMethod("deleteById", true);

  Lessons.disableRemoteMethod("confirm", true);
  Lessons.disableRemoteMethod("count", true);
  Lessons.disableRemoteMethod("exists", true);
  Lessons.disableRemoteMethod("resetPassword", true);

  Lessons.disableRemoteMethod('__count__accessTokens', false);
  Lessons.disableRemoteMethod('__create__accessTokens', false);
  Lessons.disableRemoteMethod('__delete__accessTokens', false);
  Lessons.disableRemoteMethod('__destroyById__accessTokens', false);
  Lessons.disableRemoteMethod('__findById__accessTokens', false);
  Lessons.disableRemoteMethod('__get__accessTokens', false);
  Lessons.disableRemoteMethod('__updateById__accessTokens', false);

};
