import * as React from "react";

function Button(props) {
  return (
    <a
      style={{
        padding: "10px",
        ...props.style,
      }}
      {...props.props}
    >
      {props.children}
    </a>
  );
}

const observedButton = observer(Button);
export default observedButton;
