export interface Props {
  content: any;
  lang: String;
  props: any;
}

export default function Html(props: Props) {
  return (
    <html lang={props.lang} {...props.props}>
      {props.content}
    </html>
  );
}
