export interface Props {
  text: any;
  style: any;
}

export default function Button(props: Props) {
  return (
    <a
      style={{
        border: "2px solid #000",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <span>{props.text}</span>
    </a>
  );
}
