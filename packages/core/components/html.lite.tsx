interface Props {
  children: any;
  props: any;
  lang: string;
}

export default function Html(props: Props) {
  return (
    <html lang={props.lang} {...props.props}>
      {props.children}
    </html>
  );
}
