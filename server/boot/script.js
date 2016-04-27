module.exports = function(app) {
  var MongoDB = app.datasources.MongoDB;
  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;

  // 초기 Admin 계정을 추가한다.
  // 테스트 계정하나도 추가한다. bruce
  MongoDB.automigrate('Students', function(err){
    if(err) throw (err);
    var Students = app.models.Students;
    Students.create([
      {username: 'admin', email: 'admin@mplayground.com', password: 'Admin1234!'},  // admin user
      {username: 'bruce', email: 'bruce@mplayground.com', password: 'bruce1234!'}   // default user
    ], function(err, students){
        if(err) return cb(err);
        Role.create({
          name:'admin'
        }, function(err,role){
          if(err) cb(err);
          // admin 권한 생성
          role.principals.create({
            principalType: RoleMapping.USER,
            principalId: students[0].id
          }, function(err, principal) {
            if (err) throw err;
            console.log('Created principal:', principal);
          });
        });
    });
  });
}
