interface Props {
  children: any;
  styled: any;
  props: any;
}

export default function Container(props: Props) {
  return (
    <div style={{ maxWidth: "700px", ...props.style }} {...props.props}>
      {props.children}
    </div>
  );
}
