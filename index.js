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

//////////////////////////////////////////////////////////////////////////////////////////////////////
function getLearnerData(course, ag, submissions) {    /////DECLARING THE FUNCTION///// 
  /// course = 1,  ag = 2 , submissions = 3////
let learners = {}   ///empty box to load learners info//
////////////////INFO TO RUN THE FUNCITION- PRAMATERS /////////////////////////////
let assignments = {};    //empty box to load assignments info//
for (let assignment of ag.assignments) {                      ///2///
     assignments[assignment.id] = assignment;
}

    ////LOOP THROUGH EACH SUBMISSION///

for (let submission of submissions) {                          ///3///
   let learnerId = submission.learner_id;
   let assignmentId = submission.assignment_id;
   let submittedScore = submission.submission.score;
   let assignment = assignments[assignmentId]; 


   let dueAt = new Date(assignment.due_at);
   let maxPoints = assignment.points_possible;
   return{dueAt, maxPoints};                 
  }

   let latePenalty = 0; 
   if (submittedAt > dueAt) {
       latePenalty = maxPoints * 0.1; 

   }

   let finalScore = Math.max(0, submittedScore - latePenalty);
   let avgScore = FinalScore / maxPoints;


  if (learners) {
      learners = {id: learnerId, totalScore: 0, totalMax: 0};   ///get learners: id with average for assignment/////
     return{learners}
  }
























///////RETURN VALUE- WHEN WE RUN THE FUNCTION- IT SHOULD GIVE THIS RESULTS- BREAKOUT WITH OBJECTS//////////











////////////////////////OUTPUT//////////////////////////////////  
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);























//   const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

//   console.log(result);





///https://www.youtube.com/watch?v=ifi6dXOl3g4//



