var nodemailer = require('nodemailer');

module.exports = function(from, to, hangoutUrl, cb) {
  // TODO pass 부분을 Gmail App Password로 변경해야 함.
  // mPlayGround를 위한 대표 gmail 계정이 필요함.
  var transporter = nodemailer.createTransport('smtps://ssshow16@gmail.com:[pass]@smtp.gmail.com');
  var mailOptions = {
      from: from, // Teacher's email
      to: to, // Student's email
      subject: '수업을 시작합니다. ', // Subject line
      html: '<b>수업이 시작되었습니다. 아래 Link 를 클릭하면 Hangout으로 이동합니다.</b><br> ' + hangoutUrl // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          cb(error, null)
          return console.log(error);
      }
      console.log('Message sent: ' + info.response);
      cb(null,info.response)
  });
}
