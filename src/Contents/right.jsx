import Dsa from "./DSA";
import Java from "./JAVA";
import Web from "./Web";
import System from "./System";
import Probability from "./Probability";
import "../App.css";
import Score from "./Score";

function Right({ sub }) {
  switch (sub) {
    case "DSA":
      return <Dsa />;
      break;

    case "JAVA":
      return <Java />;
      break;
    case "Web":
      return <Web />;
      break;

    case "System":
      return <System />;
      break;
    case "Stastics":
      return <Probability />;
      break;
  }
  <Score />;
}

export default Right;
