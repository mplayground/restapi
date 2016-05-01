module.exports = function(app) {
  var MongoDB = app.datasources.MongoDB;
  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;

  app.models.Admin.destroyAll(function(err, info){});
  app.models.RoleMapping.destroyAll(function(err, info){});
  app.models.Role.destroyAll(function(err, info){});
  app.models.Students.destroyAll(function(err, info){});
  app.models.StudentAccessToken.destroyAll(function(err, info){});
  app.models.AccessToken.destroyAll(function(err, info){});
  app.models.Teachers.destroyAll(function(err, info){});
  app.models.Lessons.destroyAll(function(err, info){});

  Role.create({name:'student'},function(err, role){});
  Role.create({name:'teacher'},function(err, role){});

  var initAdmin = function(){
    var Admin = app.models.Admin;
    Admin.create([
      {username: 'admin', email: 'admin@mplayground.com', password: 'Admin1234!', id:'1'}  // default user
    ], function(err, admin){
        if(err) return cb(err);
        Role.create({
          name:'admin'
        }, function(err,role){
          if(err) cb(err);
          // admin 권한 생성
          role.principals.create({
            principalType: RoleMapping.USER,
            principalId: admin[0].id
          }, function(err, principal) {
            if (err) throw err;
            console.log('Created principal:', principal);
          });
        });
    });
  }

  var initTestStudents = function(){
    var Students = app.models.Students;
    Students.create([
      {username: 'bruce', email: 'bruce@mplayground.com', password: 'bruce1234!', id:'1000'},   // default user
      {username: 'sononpos', email: 'sononpos@mplayground.com', password: 'sononpos1234!', id:'1001'}   // default user
    ], function(err, students){
        if(err) return cb(err);
        console.log('inserted default users for test');
        console.log('students : ' + students);
    });
  }

  // 초기 Admin 계정을 추가한다.
  MongoDB.automigrate('Admin', function(err){
    if(err) throw (err);
    initAdmin()
  });

  // 초기 Admin 계정을 추가한다.
  MongoDB.automigrate('Students', function(err){
    if(err) throw (err);
    initTestStudents()
  });

  Role.registerResolver('teacher', function(role, context, cb) {

    function reject(err) {
      if(err) {
        return cb(err);
      }
      cb(null, false);
    }

    console.log('registerResolver >> ' + context.modelName);

    if (context.modelName !== 'lessons') {
      // the target model is not project
      return reject();
    }

    var userId = context.accessToken.userId;

    console.log('registerResolver.userId >> ' + userId);

    if (!userId) {
      return reject(); // do not allow anonymous users
    }

    // check if userId is in team table for the given project id
    context.model.findOne({ id:context.modelId, teachersId:userId }, function(err, lesson) {
      if(err || !lesson){
        reject(err);
      }

      console.log("Y can access Lesson");

    });
  });
}
