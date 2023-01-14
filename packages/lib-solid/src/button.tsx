import { css } from "solid-styled-components";

function Button(props) {
  return (
    <a
      style={{
        border: "2px solid #000",
        "border-radius": "10px",
        padding: "10px",
      }}
    >
      <span>{props.text}</span>
    </a>
  );
}

export default Button;
