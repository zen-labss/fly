interface Props {
  styled: any;
  props: any;
}

export default function Button(props: Props) {
  return <hr style={props.styled} {...props.props} />;
}
