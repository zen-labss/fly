interface Props {
  children: any;
  styled: any;
  props: any;
}

export default function Button(props: Props) {
  return (
    <a style={{ padding: "10px", ...props.styled }} {...props.props}>
      {props.children}
    </a>
  );
}
