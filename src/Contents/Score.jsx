import "../App.css";

function Score({ DSA, JAVA, Web, System, Stastics }) {
  return (
    <>
      {" "}
      <div className="box">
        <h3>Scores</h3>
        <p>DSA: {DSA}</p>
        <p>OOP in JAVA: {JAVA}</p>
        <p>Web Technology: {Web}</p>
        <p>System Analysis: {System}</p>
        <p>Probablity & Stastics: {Stastics}</p>
      </div>
    </>
  );
}

export default Score;
