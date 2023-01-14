import { css } from "solid-styled-components";

function Html(props) {
  return (
    <html lang={props.lang} {...props.props}>
      {props.content}
    </html>
  );
}

export default Html;
