interface Props {
  children: any;
  styled: any;
  props: any;
}

export default function Container(props: Props) {
  return (
    <div style={{ maxWidth: "700px", ...props.children }} {...props.props}>
      {props.children}
    </div>
  );
}
