import * as React from "react";

function Container(props) {
  return (
    <div
      style={{
        maxWidth: "700px",
        ...props.style,
      }}
      {...props.props}
    >
      {props.children}
    </div>
  );
}

export default Container;
