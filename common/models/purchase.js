module.exports = function(Purchase) {

  Purchase.disableRemoteMethod("create", true);       // PUT  /Purchase
  Purchase.disableRemoteMethod("upsert", true);       // POST /Purchase
  Purchase.disableRemoteMethod("updateAll", true);
  Purchase.disableRemoteMethod("updateAttributes", true);
  Purchase.disableRemoteMethod('createChangeStream', true);

  Purchase.disableRemoteMethod("find", true);         //GET /Purchase
  Purchase.disableRemoteMethod("findById", true);
  Purchase.disableRemoteMethod("findOne", true);

  Purchase.disableRemoteMethod("deleteById", true);

  Purchase.disableRemoteMethod("confirm", true);
  Purchase.disableRemoteMethod("count", true);
  Purchase.disableRemoteMethod("exists", true);
  Purchase.disableRemoteMethod("resetPassword", true);

  Purchase.disableRemoteMethod('__count__accessTokens', false);
  Purchase.disableRemoteMethod('__create__accessTokens', false);
  Purchase.disableRemoteMethod('__delete__accessTokens', false);
  Purchase.disableRemoteMethod('__destroyById__accessTokens', false);
  Purchase.disableRemoteMethod('__findById__accessTokens', false);
  Purchase.disableRemoteMethod('__get__accessTokens', false);
  Purchase.disableRemoteMethod('__updateById__accessTokens', false);

};
