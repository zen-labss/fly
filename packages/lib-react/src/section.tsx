import * as React from "react";

function Section(props) {
  return (
    <table align="center" style={props.style} {...props.props}>
      <tbody>
        <tr>
          <td>{props.children}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Section;
