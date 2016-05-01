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
};
