import "../App.css";
import Score from "./Score";
import { useState } from "react";

function Java() {
  let questions = [
    {
      question: "Which of the of following is not a feature of JAVA?",
      answers: ["Simple", "Socure", "Pointer", "Robust"],
      ans: "Pointer",
    },
    {
      question:
        "What function is used to get angle character from the scanner?",
      answers: [
        "next()",
        "next().chatAt(1)",
        "next().chatAt(0)",
        "next.line()",
      ],
      ans: "next().chatAt(0)",
    },
    {
      question: "Which of the following is not jumping statemtnt in JAVA?",
      answers: ["goto", "break", "return", "continue"],
      ans: "goto",
    },
    {
      question:
        "What is process by which can control which part of program can access the memory of class?",
      answers: ["Polymorphism", "Abstraction", "Encapsulation", "Inheritance"],
      ans: "Encapsulation",
    },
    {
      question: "What is the return type of constructor in JAVA?",
      answers: ["int", "String", "void", "none"],
      ans: "none",
    },
    {
      question: "Which of the following is not method of Wrapper class?",
      answers: ["valueOf()", "indexOf()", "parseDouble()", "equals()"],
      ans: "equals()",
    },
    {
      question:
        "Which of the following keyword used to refer base class constructor to subclass costructor in JAVA?",
      answers: ["this", "final", "super", "finally"],
      ans: "super",
    },
    {
      question: "Which of the following is not part of exception handling?",
      answers: ["throw", "catch", "try", "finally"],
      ans: "throw",
    },

    {
      question:
        "Which of the following is not adapter class used in event handline? ",
      answers: ["ActionAdapter", "KeyAdpter", "MouseAdpter", "WindowAdpter"],
      ans: "ActionAdapter",
    },
    {
      question:
        "Which of the following method used to execute select query in JDBC API? ?",
      answers: [
        "executeQuery()",
        "executeUpdate()",
        "executeNonQuery()",
        "executeReader()",
      ],
      ans: "executeQuery(0",
    },
  ];
  let nullAnswers = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ];

  let [answerArr, setAnswer] = useState(nullAnswers);

  function handleClick(qindex, answer) {
    let ans = [...answerArr];
    ans[qindex] = answer;
    setAnswer(ans);
  }

  let [checkAns, setCheckAns] = useState(questions);
  let [finalScore, setScore] = useState();
  function answerCheck() {
    let checkAnswer = [];
    let score = 0;
    for (let i = 0; i <= answerArr.length - 1; i++) {
      if (questions[i].ans === answerArr[i]) {
        score = score + 1;
        checkAnswer.push(answerArr[i]);
      }
    }
    setCheckAns(checkAnswer);
    setScore(score);
  }

  return (
    <>
      <div className="rightContainer">
        <div className="top">
          {" "}
          <h1>MCQ Question of OOP in JAVA</h1>
          <button className="btn" onClick={answerCheck}>
            Submit
          </button>
        </div>
        {questions.map((item, qindex) => (
          <>
            <h2>
              {qindex + 1}. {item.question}
            </h2>
            <div className="buttonContainer">
              {item.answers.map((ans, aindex) => (
                <button
                  className={`${answerArr[qindex] === ans ? "selected" : ""} ${
                    !checkAns.includes(ans) ? "red" : ""
                  }`}
                  onClick={() => handleClick(qindex, ans)}
                >
                  <span className="color"> {aindex + 1}.</span> {ans}
                </button>
              ))}
            </div>
          </>
        ))}
      </div>
      <Score JAVA={finalScore} />
    </>
  );
}

export default Java;
