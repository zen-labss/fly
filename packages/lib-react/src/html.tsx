import * as React from "react";

function Html(props) {
  return (
    <html lang={props.lang} {...props.props}>
      {props.content}
    </html>
  );
}

const observedHtml = observer(Html);
export default observedHtml;
