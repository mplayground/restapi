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

};
