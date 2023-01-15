interface Props {
  children: any;
  styled: any;
  props: any;
}

export default function Text(props: Props) {
  return (
    <p style={{ ...props.styled }} {...props.props}>
      {props.children}
    </p>
  );
}
