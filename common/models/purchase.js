module.exports = function(Purchase) {

  Purchase.disableRemoteMethod("create", true);       // PUT  /Purchase
  Purchase.disableRemoteMethod("upsert", true);       // POST /Purchase
  Purchase.disableRemoteMethod("updateAll", true);
  Purchase.disableRemoteMethod("updateAttributes", false);
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

  // 모델에 저장되기전 호출
  Purchase.observe('after save', function updateTimestamp(ctx, next) {
    if (ctx.instance) {
      var purchase = ctx.instance
      ctx.instance.students(function(err, student){
        if(err) throw err;
        if(student){
          var sumCoins = parseInt(student.coins) + parseInt(purchase.coins)
          student.updateAttributes({coins:sumCoins},
            function(err,instance){
              if(err) throw err;
              console.log('complete to update student coins');
            });
        } else { //if(student)
          console.log('not found student. id[' + ctx.instance.id + ']');
        }
      });
    } else { // if (ctx.instance)
      console.log('not found purchases');
    }
    next();
  });


};
