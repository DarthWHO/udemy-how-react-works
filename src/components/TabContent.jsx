import { useState } from "react";

export default function TabContent({ item }) {
  const [showDetails, setShowDetails] = useState(true);
  const [likes, setLikes] = useState(0);

  function handleInc() {
    setLikes(() => likes + 1);
  }

  function handleInceThree() {
    setLikes(() => likes + 3);
  }

  function handleUndo() {
    setLikes(0);
    setShowDetails(true);
  }

  function handleUndoInTwoSeconds() {
    setTimeout(handleUndo, 2000);
  }

  return (
    <div className="tab-content">
      <h4>{item.summary}</h4>
      {showDetails && <p>{item.details}</p>}

      <div className="tab-actions">
        <button onClick={() => setShowDetails((h) => !h)}>
          {showDetails ? "Hide" : "Show"} details
        </button>

        <div className="hearts-counter">
          <span>{likes} ❤️</span>
          <button onClick={handleInc}>+</button>
          <button onClick={handleInceThree}>+++</button>
        </div>
      </div>

      <div className="tab-undo">
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleUndoInTwoSeconds}>Undo in 2s</button>
      </div>
    </div>
  );
}
