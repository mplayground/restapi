module.exports = function(Students) {

  Students.disableRemoteMethod("create", false);       // PUT  /Students
  Students.disableRemoteMethod("upsert", false);       // POST /Students
  Students.disableRemoteMethod("updateAll", true);
  Students.disableRemoteMethod("updateAttributes", false);
  Students.disableRemoteMethod('createChangeStream', true);

  Students.disableRemoteMethod("find", false);         //GET /Students
  Students.disableRemoteMethod("findById", true);
  Students.disableRemoteMethod("findOne", true);

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

};
