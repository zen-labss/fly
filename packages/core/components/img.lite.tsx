interface Props {
  children: any;
  styled: any;
  props: any;
  width;
  height;
  src;
}

export default function Image(props: Props) {
  return (
    <img
      src={props.src}
      style={{
        display: "block",
        outline: "none",
        border: "none",
        textDecoration: "none",
        ...props.styled,
      }}
      width={props.width}
      height={props.height}
      {...props.props}
    />
  );
}
