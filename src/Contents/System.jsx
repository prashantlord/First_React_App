import "../App.css";
import Score from "./Score";
import { useState } from "react";

function System() {
  let questions = [
    {
      question: "Which is the first step in software development?",
      answers: [
        "Analysis",
        "Design",
        "Development and documentation",
        "Problem / Opportunity identification",
      ],
      ans: "Problem / Opportunity identification",
    },
    {
      question:
        "The importance of software design can be summarized in a single word, which is",
      answers: ["Efficiency", "Accuracy", "Quality", "Complexity"],
      ans: "Quality",
    },
    {
      question:
        "Cohesion is a qualitative indication of the degree to which a model",
      answers: [
        "Is written more compactly",
        "Functions in a timely manner",
        "Focuses on just one thing",
        "Connects to other models and the outside world",
      ],
      ans: "Focuses on just one thing",
    },
    {
      question:
        "A programmer reviews the accuracy of an algorithm by _____ it.",
      answers: ["Analyzing", "Coding", "Desk checking", "Planning"],
      ans: "Desk checking",
    },
    {
      question:
        "Which of the following is not considered as a tool at the system design phase?",
      answers: [
        "Dataflow diagram",
        "Decision table",
        "System flowchart",
        "plot",
      ],
      ans: "plot",
    },
    {
      question:
        "_____ is software that is designed for drawing diagrams of IS systems and writing process specifications.",
      answers: [
        "System development tool",
        "CASE tool",
        "Phase conversion tools",
        "Success factors",
      ],
      ans: "CASE tool",
    },
    {
      question:
        "Which of the following prototypes is not associated with the prototyping model?",
      answers: ["Domain", "Vertical", "Diagonal", "Horizontal"],
      ans: "Diagonal",
    },
    {
      question:
        "Which model is used to analyze the risk factor in developing software?",
      answers: ["Agile", "Waterfall", "Spiral", "Prototype"],
      ans: "Spiral",
    },
    {
      question:
        "Which of the following activities of the generic process framework delivers a feedback report?",
      answers: ["Deployment", "Planning", "Modeling", "Coding"],
      ans: "Deployment",
    },
    {
      question:
        "The current software development model is built based on _____",
      answers: [
        "Agile software",
        "Classic software",
        "Iterative development",
        "Both incremental and iterative development",
      ],
      ans: "Both incremental and iterative development",
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
          <h1>MCQ Question of System Analysis and Design</h1>
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
      <Score System={finalScore} />
    </>
  );
}

export default System;
