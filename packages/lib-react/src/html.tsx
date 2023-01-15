import * as React from "react";

function Html(props) {
  return (
    <html lang={props.lang} {...props.props}>
      {props.children}
    </html>
  );
}

export default Html;
