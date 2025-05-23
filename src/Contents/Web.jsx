import "../App.css";
import Score from "./Score";
import { useState } from "react";

function Web() {
  let questions = [
    {
      question: "What are empty elements and is it valid?",
      answers: [
        "No, There is no such term like empty elements",
        "Empty elements are element with no data",
        "No, it is not valid to use empty element",
        "None of the above",
      ],
      ans: "Empty elements are element with no data",
    },
    {
      question:
        "In the three-tier architecture, the intermediate layer between database and client servers is classified as",
      answers: [
        "Functional server",
        "Transaction server",
        "Application server",
        "Disk server",
      ],
      ans: "Application server",
    },
    {
      question: "CSS uses Tilde(~) operator for,",
      answers: [
        "General sibling selector",
        "Descendent selector",
        "Adjacent sibling selector",
        "Child selector",
      ],
      ans: "General sibling selector",
    },
    {
      question: "Namespace in XML is used to,",
      answers: [
        "Distinguishes one XML vocabulary from another",
        "Provides the space into name",
        "Quering language",
        "Provide tag name",
      ],
      ans: "Distinguishes one XML vocabulary from another",
    },
    {
      question: "Default, Session is destroyed on.............",
      answers: [
        "Closing of browser",
        "Logging out of system",
        "Session can’t be destroyed",
        "Clearing all cookies from browser",
      ],
      ans: "Closing of browser",
    },
    {
      question: "Which of the following is not type of screen frames in HTML?",
      answers: ["Iframe", "Noframe", "Frameset", "Uframe"],
      ans: "Uframe",
    },
    {
      question: "Which protocol is used to transmit data on the www?",
      answers: ["FTP", "HTTP", "SMTP", "HTML"],
      ans: "HTTP",
    },
    {
      question: "Which of the following is not the valid XPath Expression?",
      answers: [
        "/hospital/patient",
        "//patient",
        "/hospital/patient[2]",
        "//hospital/patent",
      ],
      ans: "//hospital/patent",
    },
    {
      question: "What is the default username for MySQL database?",
      answers: [
        "admin",
        "root",
        "Manager",
        "These is no default usename in MySQL",
      ],
      ans: "root",
    },
    {
      question:
        "Which of the foollowing HTML tag is the special formatting tag?",
      answers: ["<p></p>", "<span>", "<pre>", "<em> "],
      ans: "<em> ",
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
          <h1>MCQ Question of Web Technology</h1>
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
      <Score Web={finalScore} />
    </>
  );
}

export default Web;
