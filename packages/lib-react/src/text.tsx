import * as React from "react";

function Text(props) {
  return (
    <p
      style={{
        ...props.style,
      }}
      {...props.props}
    >
      {props.children}
    </p>
  );
}

const observedText = observer(Text);
export default observedText;
