import * as React from "react";

function Button(props) {
  return <hr style={props.style} {...props.props} />;
}

const observedButton = observer(Button);
export default observedButton;
