// app.js
// create questions
var questions = [
  new Question(
    "Who was the first president of the United States?",
    ["George Washington", "Thomas Jefferson"],
    "George Washington"
  ),
  new Question(
    "What is the answer to the Ultimate Question of life, the Universe and Everything?",
    ["Pi", "42"],
    "42"
  ),
  new Question(
    "What was the first political party in Nigeria?",
    ["Nigeria National Democracy Party", "Nigeria National Democratic Party"],
    "Nigeria National Democratic Party"
  ),
  new Question(
    "Who formed the first political party in Nigeria?",
    ["Chief Obafemi Awolowo", "Herbert Macauly"],
    "Herbert Macauly"
  ),
  new Question(
    "Who was the first female Vice-chancellor in Nigerian University?",
    ["Grace Alele Williams", "Folashade Adeola John"],
    "Grace Alele Williams"
  ),
  new Question(
    "Who was the first Nigerian to become a Noble Laureate?",
    ["Kevin Chisom", "Wole Soyinka"],
    "Wole Soyinka"
  ),
  new Question(
    "In which of the following countries is governmental powers most used?",
    ["Nigeria", "France"],
    "France"
  ),
  new Question(
    "Who was the first Nigerian President?",
    ["Alhaji Shehu Aliyu Shagari", "Dr. Nnamdi Azikiwe"],
    "Dr. Nnamdi Azikiwe"
  ),
  new Question(
    "Who was Nigerian first executive president?",
    ["Alhaji Shehu Aliyu Shagari", "Dr. Nnamdi Azikiwe"],
    "Alhaji Shehu Aliyu Shagari"
  ),
  new Question("When did Nigeria became a Republic?", ["1963", "1965"], "1963"),
];
// create quiz
var quiz = new Quiz(questions);
// display next
QuizUI.displayNext();
