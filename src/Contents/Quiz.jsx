import "../App.css";
import { useState } from "react";

function Quiz() {
  let questions = [
    {
      question: "What is the conditio for staact underflow?",
      answers: ["top=0", "top=1", "top=-1", "top=maxSize-1"],
      ans: "top=-1",
    },
    {
      question:
        "The result of evaluating the postfix expression 546+*493/+* is?",
      answers: ["600", "350", "650", "588"],
      ans: "350",
    },
    {
      question:
        "In linked list implementation, a node carries information regarding...",
      answers: ["Data and Link", "Data", "Link", "Node"],
      ans: "Link",
    },
    {
      question:
        "Which data structure is required to convert the infix to prefix notation?",
      answers: ["Array", "Queue", "List", "Stack"],
      ans: "Stack",
    },
    {
      question:
        "Which on of the following is the ovrflow condition if a circular queue is inplementation using array having size MAX?",
      answers: [
        "rear=MAX-1",
        "rear MAX",
        "Front (rear+1)mod max",
        "front-front+1 monte",
      ],
      ans: "rear=MAX-1",
    },
    {
      question: "What is an internal sorting algorithm?",
      answers: [
        "Algorithm that uses tape or disk during the sort",
        "Algorithm that uses main memory during the sort",
        "Algorithm that involves swappint",
        "Algorithm that are considered in pla",
      ],
      ans: "Algorithm that uses main memory during the sort",
    },
    {
      question:
        "What is the number of edges present in a complete graph having n vertices?",
      answers: ["(n*(n+1))/2", "(n*(n-1))/2", "n", "n/2+1"],
      ans: "(n*(n-1))/2",
    },
    {
      question:
        "In circular linked list, nsertion of node requires modification of?",
      answers: ["One Pointer", "Two Pointer", "Three Pointer", "Four Pointer"],
      ans: "Two Pointer",
    },

    {
      question: "The size of incidence matriz of a graph is represented as,",
      answers: [
        "Total number of vertices by total",
        "Total number of vertices by total number of vertices",
        "Total number of edges by total number of edges",
        "Total number of edges by total number of vertices",
      ],
      ans: "Total number of vertices by total",
    },
    {
      question: "The post form of A*B+C/D is?",
      answers: ["AB/CD+", "ABCD/+", "ABCD+/D", "ABCD+/"],
      ans: "ABCD/+",
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
  function reset() {
    setAnswer(nullAnswers);
    setScore("Sumit to know your Score");
  }
  let [finalScore, setScore] = useState("Sumit to know your Score");
  function answerCheck() {
    let score = 0;
    for (let i = 0; i <= answerArr.length - 1; i++) {
      if (questions[i].ans === answerArr[i]) {
        score = score + 1;
      }
    }
    setScore(`You Scored: ${score}`);
  }

  return (
    <>
      <div className="top">
        <h1>DSA MCQ Questions </h1>
        <p>{finalScore}</p>
        <div className="btnContainer">
          <button
            className={"btn"}
            onClick={answerCheck}
            disabled={answerArr.includes(null)}
          >
            Submit
          </button>
          <button className="btn" onClick={reset}>
            Reset
          </button>
        </div>
      </div>

      <div className="questionContainer">
        {questions.map((item, qindex) => (
          <>
            <h2>
              {qindex + 1}. {item.question}
            </h2>
            <div className="buttonContainer">
              {item.answers.map((ans, aindex) => (
                <button
                  className={answerArr.includes(ans) ? "selected" : ""}
                  onClick={() => handleClick(qindex, ans)}
                >
                  <span className="color"> {aindex + 1}.</span> {ans}
                </button>
              ))}
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default Quiz;
