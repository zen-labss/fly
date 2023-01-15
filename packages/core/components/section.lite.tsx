interface Props {
  children: any;
  styled: any;
  props: any;
}

export default function Section(props: Props) {
  return (
    <table style={props.styled} align="center" {...props.props}>
      <tbody>
        <tr>
          <td>{props.children}</td>
        </tr>
      </tbody>
    </table>
  );
}
