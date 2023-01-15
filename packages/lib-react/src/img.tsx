import * as React from "react";

function Image(props) {
  return (
    <img
      src={props.src}
      style={{
        display: "block",
        outline: "none",
        border: "none",
        textDecoration: "none",
        ...props.style,
      }}
      width={props.width}
      height={props.height}
      {...props.props}
    />
  );
}

export default Image;
