import { Container } from "./styles";

export function Button({ title, heightOfButton, ...rest }) {
  return <Container {...rest} style={{ height: heightOfButton }}>{title}</Container>;
}
