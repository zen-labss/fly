import * as React from "react";

function Button(props) {
  return (
    <a
      style={{
        border: "2px solid #000",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <span>{props.text}</span>
    </a>
  );
}

const observedButton = observer(Button);
export default observedButton;
