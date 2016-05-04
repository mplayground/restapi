getParameters = function(){
  var ret = {};

  console.log('location : ' + window.location)

  var queryString = window.location.search.substring(1);
  var params = queryString.split('&')
  for(var co = 0 ; co < params.length; co++){
    var keyValue = params[co].split('=')
    ret[keyValue[0]] = unescape(keyValue[1])
  }
  return ret;
}

onClientReady = function(){

    console.log('onClientReady')

  gapi.hangout.onApiReady.add(function(e){
    if(e.isApiReady){
      onApiReady();
    }
  });
}

onApiReady = function(){
  console.log('onApiReady')
  var param = getParameters();
  var now = new Date();
  var hangoutUrl = gapi.hangout.getHangoutUrl();
  console.log('hangoutUrl' + hangoutUrl)

  // var callbackUrl = 'register_hangout.json';
  //
  // $.ajax({
  //   url:callbackUrl,
  //   dataType:'json',
  //   data:{
  //     "hangoutUrl":hangoutUrl,
  //     "topic":param["gd"]
  //   }
  // }).done(function(data,status, xhr){
  //   console.log('result : ' + data.msg)
  //   $('#msg').html(data.msg);
  // }).fail(function(xhr, status, error){
  //   $('#msg').html('Handout 연결 실패, 다시 시도해주세요. (' + textStatus + ')');
  // });
}
