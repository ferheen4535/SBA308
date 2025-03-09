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




  function getLearnerData(course, ag, submissions) {                      ////function given////
    let learners = {};                                                  ////empty box for info/////
  
    try{
   for (const assignment of ag.assignments) 
    {                                                ///loop through assigments to get assigments submitted///                       
  const mainSubmissions = submissions.filter(sub => sub.assignment_id === assignment.id);          ///filter through assigments to find submitted with id //
      
   for (const submission of mainSubmissions) 
    {                                                      //loop through Main submissions to find the ones submitted//      
   if (!learners[submission.learner_id]) {                                                           //check if there are learner that do not exist///
   learners[submission.learner_id] = { id: submission.learner_id, totalScore: 0, totalPoints: 0};        //switch statements///
    }
  
  let score = submission.submission.score;                                //access scores in submission//
  const isLate = new Date(submission.submission.submitted_at) > new Date(assignment.due_at);  //for late assignments//
    // return(score)
  if (isLate)                                                                 
    {
  score *= 0.9; // Deduct 10% for late submission                                   //calculate late asssignments//
   }
  // return(learners)

   learners[submission.learner_id][assignment.id] = score / assignment.points_possible;         // calculate scores///
    learners[submission.learner_id].totalScore += score;                                           
    learners[submission.learner_id].totalPoints += assignment.points_possible;

    // return(submission)
    
   }
   }

  return Object.values(learners).map(learner =>                     ///convert learners objects into an array and loop///
    
    {
   learner.avg = learner.totalScore / learner.totalPoints;   
          ////calculate average///
          delete learner.totalPoints;       ///not needed//
          delete learner.totalScore;      //not needed//
        
  return learner;

  
  });
} catch (error) {                               //try/catch statement////
  console.error("Error");
  return[];
}
  }


///////RETURN VALUE- WHEN WE RUN THE FUN
////////////////////////OUTPUT//////////////////////////////////  

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
console.log(result);









// ///SOURCES/////
// //30 min TURTORING SESSION WITH JABEEN KHAN///
// https://www.youtube.com/watch?v=brQhuxmd-R4
// https://youtu.be/q-lUgFxwjEM?si=5tywJG3HLEAKebaK
// https://youtu.be/ifi6dXOl3g4?si=7A4U1jqseLtBCbVB
// https://youtu.be/ujlnQfd1ams?si=EOHsxbb5NpcV49tg
// https://youtu.be/ujlnQfd1ams?si=h5mC6KHzbKfk1i1Q
// https://youtu.be/Y8sMnRQYr3c?si=pkPjkv4Nh3_JVvhL
// https://youtu.be/FioqUnOGlq8?si=EOVnZ3ERAC3ZhjB5