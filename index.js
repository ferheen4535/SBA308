// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",        //TOPIC//
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",           ///ASSIGNMENT///
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",              ///ASSIGNMENT///
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",               ///ASSIGNMENT///
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {                                  // LEARNER  125 SUBMISSION//
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,                   // LEARNER  125 SUBMISSION//
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,                  // LEARNER  125 SUBMISSION//
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,                     // LEARNER  132 SUBMISSION//
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,              // LEARNER  125 SUBMISSION//
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }

];




function getLearnerData(course, ag, submissions)  {  /////DECLARING THE FUNCTION///// 
  /// course = 1,  ag = 2 , submissions = 3////

  let learners = {},    ////empty box for results//

for (const assignment of ag.assignments) {
const mainSubmissions = submissions.filter (sub => sub.assignment_id === assignment.id);   ///using the filter method///

for (const submission of mainSubmissions) {
if (!learners[submission.learner_id]) {
learners[submission.learner_id]; {
  learners[submission.learner_id] = { id: submission.learner_id, totalScore: 0, totalPoints: 0};
}
 let score = submission.submission.score;
 const isLate = new Date(submission.submission.submitted_at) > new Date(assignment.due_at);

 if (isLate) { 
  score * = 0.9;

 }
 learners[submission.learner_id] [assignment.id] = score / assignment.points_possible;
 learners[submission.learner_id].totalScore += score;
 learners[submission.learner_id].totalPoints += assignment.points_possible;
}
}
}

return Object.values(learners).map(learner => {
learner.avg = learner.totalScore/ learner.totalPoints;
delete learner.totalScore;
delete learner.totalPoints;
return learner;

});
}



///////RETURN VALUE- WHEN WE RUN THE FUN
////////////////////////OUTPUT//////////////////////////////////  


const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
console.log(result);