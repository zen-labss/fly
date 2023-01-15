interface Props {
  children: any;
  styled: any;
  props: any;
}

export default function Text(props: Props) {
  return (
    <p style={{ ...props.style }} {...props.props}>
      {props.children}
    </p>
  );
}
