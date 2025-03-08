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

function getLearnerData(course, ag, submissions) {

//remove assignment 3 from the results//
AssignmentGroup.assignments = AssignmentGroup.assignments.filter(assignment => assignment.id !== 3);






























console.log(AssignmentGroup.assignments);  //first console log, remove assignment 3//













}
//   const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

//   console.log(result);









