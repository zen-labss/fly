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

export default Text;
