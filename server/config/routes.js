var students = require("../controllers/students.js");
var teachers = require("../controllers/teachers.js");
var activity = require("../controllers/activity.js");
var status = require("../controllers/status.js");

module.exports = function(app) {

  // ===================
  // Student API
  // ===================
  app.get('/api/v1/students', function(req, res){
    students.getAllStudents(req, res);
  });


  //Deactivate students
  app.put('/api/v1/students/:id', function(req, res){
    students.putStudentById(req, res);
  })
  //This will return the roster of students for a given avtivity
  //ID CALL2
  app.get('/api/v1/students/activity', function(req, res){
    console.log('test');
    students.getAllStudentsByActivityAndDate(req, res);
  });

  //Student info for a particular studentID
  app.get('/api/v1/students/:id', function(req, res){
    students.getStudentById(req, res);
  });

  //Add new student
  app.post('/api/v1/students', function(req, res){
    students.addNewStudent(req, res);
  });

  //Get all the activities for a partictular studentId.
  //Send you a history for the students.
  //ID call1
  app.get('/api/v1/students/:id/activities', function(req, res){
    //NOT IMPLEMENTED LOL
    students.getStudentsActivities(req, res);
  });

  //Bulk upload of the attendance.....
  //ID call3
  //[{"data" : [{"STUDENT_ID":"2", "STATUS_ID":"1", "COMMENT":"HHAHA", "ACTIVITY_ID":"4", "DATE":"2015-10-01"}]}

  app.post('/api/v1/students/activity', function(req, res){
    students.postStudentAttendance(req, res);
  });

  // ===================
  // Activity API
  // ===================
  app.get('/api/v1/activity', function(req, res){
    activity.getAllActivity(req, res)
  })




  // ===================
  // Status API
  // ===================
  app.get('/api/v1/status', function(req, res){
    status.getAllStatus(req, res)
  })

  // ===================
  // Teacher API
  // ===================
  app.get('/api/v1/teachers/', function(req, res){
    teachers.getTeachers(req, res);
  });
  app.get('/api/v1/teachers/:email', function(req, res){
    teachers.getTeacherByEmail(req, res);
  });
  app.get('/api/v1/teachers/:email/activity', function(req, res){
    teachers.getActivityByTeacherEmail(req, res);
  });
  app.put('/api/v1/teachers/:id', function(req, res){
    teachers.updateTeacherInfo(req, res);
  });
  app.post('/api/v1/teachers', function(req, res){
    teachers.addNewTeacher(req, res);
  });

}
