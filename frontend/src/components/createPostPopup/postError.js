import React from "react";

export default function postError({ error, setError }) {
  return (
    <div className="postError">
      <div>{error}</div>
      <button
        className="fav_button"
        onClick={() => {
          setError("");
        }}
      >
        Try again
      </button>
    </div>
  );
}
