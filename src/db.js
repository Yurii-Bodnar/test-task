//task-1
export const UnitOfMeasurementToCm = {
  m: 100,
  cm: 1,
  in: 2.54,
  ft: 30.48,
  mm: 0.1,
  yd: 91.44,
  km: 100000,
};
export const UnitOfMeasurementFromCm = {
  m: 0.01,
  cm: 1,
  in: 0.39,
  ft: 0.0328084,
  mm: 10,
  yd: 0.0109361,
  km: 0.00001,
};
//
export const dataForSortingAndSelection = [
  { user: "mike@mail.com", name: "Mike", rating: 20, disabled: false },
  { user: "greg@mail.com", name: "Greg", rating: 14, disabled: false },
  { user: "greg@mail.com", name: "Greg", rating: 15, disabled: true },
  { user: "john@mail.com", name: "John", rating: 25, disabled: true },
  { user: "robert@mail.com", name: "Robert", rating: 32, disabled: true },
  { user: "robert@mail.com", name: "Robert", rating: 32, disabled: false },
  { user: "robert@mail.com", name: "Rabert", rating: 34, disabled: false },
  { user: "robert@mail.com", name: "Robert", rating: 33, disabled: false },
  { user: "robert@mail.com", name: "Robert", rating: 31, disabled: false },
  { user: "arnold@mail.com", name: "Arnold", rating: 32, disabled: true },
  { user: "greg@mail.com", name: "Greg", rating: 32, disabled: false },
  { user: "jeck@mail.com", name: "Jeck", rating: 32, disabled: false },
];
//task-4

export const quiz = {
  0: {
    q: "Do you have a job?",
    answers: [
      { answer: "yes", nextIdQues: 1 },
      { answer: "no", nextIdQues: 2 },
    ],
  },
  2: {
    q: "In which field are you looking for a job?",
    answers: [{ answer: "IT" }, { answer: "Driver" }],
  },
  1: {
    q: "Who do you work for?",
    answers: [
      { answer: "Developer", nextIdQues: 3 },
      { answer: "Driver", nextIdQues: 5 },
    ],
  },
  3: {
    q: "Do you work remotely?",
    answers: [{ answer: "yes" }, { answer: "no" }],
  },
  5: {
    q: "Do you like your job?",
    answers: [{ answer: "yes" }, { answer: "no" }],
  },
};
