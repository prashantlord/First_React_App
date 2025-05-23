import "../App.css";

function Quiz() {
  let questions = [
    {
      question: "What is the conditio for staact underflow?",
      answers: ["top=0", "top=1", "top=-1", "top=maxSize-1"],
    },
    {
      question:
        "The result of evaluating the postfix expression 546+*493/+* is?",
      answers: ["600", "350", "650", "588"],
    },
    {
      question:
        "In linked list implementation, a node carries information regarding...",
      answers: ["Data and Link", "data", "Link", "Node"],
    },
    {
      question:
        "Which data structure is required to convert the infix to prefix notation?",
      answers: ["Array", "Queue", "List", "top=maxSize-1"],
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
    },
    {
      question: "What is an internal sorting algorithm?",
      answers: [
        "Algorithm that uses tape or disk during the sort",
        "Algorithm that involdes swappint",
        "Algorithm that involves swappint",
        "Algorithm that are considered in pla",
      ],
    },
    {
      question:
        "What is the number of edges present in a complete graph having n vertices?",
      answers: ["(n*(n+1))/2", "(n*(n-1))/2", "n", "n/2+1"],
    },
    {
      question:
        "In circular linked list, nsertion of node requires modification of?",
      answers: ["One Pointer", "Two Pointer", "Three Pointer", "Four Pointer"],
    },
    {
      question: "The size of incidence matriz of a graph is represented as,",
      answers: [
        "Total number of vertices by total",
        "Total number of vertices by total number of vertices",
        "Total number of edges by total number of edges",
        "Total number of edges by total number of vertices",
      ],
    },
    {
      question: "The post form of A*B+C/D is?",
      answers: ["AB/CD+", "ABCD/+", "ABCD+/D", "ABCD+/"],
    },
  ];

  return (
    <>
      <div className="top">
        <h1>DSA MCQ Questions </h1>
        <div className="btnContainer">
          <button className="btn">Submit</button>
          <button className="btn">Reset</button>
        </div>
      </div>

      <div className="questionContainer">
        {questions.map((item, index) => (
          <>
            <h2>
              {index + 1}. {item.question}
            </h2>
            <div className="buttonContainer">
              {item.answers.map((ans, index) => (
                <button>
                  <span className="color"> {index + 1}.</span> {ans}
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
