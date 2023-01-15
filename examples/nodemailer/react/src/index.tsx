import {
  Button,
  Hr,
  Html,
  Image,
  Section,
  Text,
  Container,
} from "@fly-email/react";
import Odex from "../assets/odex.png";
import fb from "../assets/fb.png";
import ig from "../assets/ig.png";

export default function App() {
  return (
    <Html lang="ptbr">
      <Section
        style={{
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
        }}
      >
        <Container style={{ maxWidth: "500px" }}>
          <Section style={{ marginBottom: "05vh" }}>
            <Image src={Odex} width="126px" />
          </Section>
          <Text
            style={{
              fontSize: "16px",
              color: "#0D1D52",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Olá, Miguel
          </Text>
          <Text
            style={{
              fontSize: "16px",
              color: "#0D1D52",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Seu Cadastro Foi Realizado Com Sucesso!
          </Text>
          <Section>
            <Text style={{ textAlign: "center" }}>
              A partir de agora, você pode contar com todas as facilidades da
              nossa ferramenta para potencializar os orçamentos e pedidos do seu
              projeto. Conte conosco nesta parceria!
            </Text>
          </Section>
          <Section>
            <Button
              style={{
                width: "221px",
                height: "45px",
                border: "none",
                borderRadius: "4px",
                backgroundColor: "#0D1D52",
                color: "#fff",
              }}
            >
              Acesse a plataforma
            </Button>
          </Section>
          <Hr
            style={{
              height: "1px",
              border: "none",
              backgroundColor: "#0D1D52",
              marginTop: "10vh",
            }}
          />
          <table
            border={0}
            cellPadding="0"
            cellSpacing="10"
            align="left"
            style={{ width: "100%" }}
          >
            <tr>
              <td align="left" valign="top">
                <Image style={{ display: "inline" }} src={fb} />
                <Image
                  style={{ display: "inline", marginLeft: "25px" }}
                  src={ig}
                />
              </td>
              <td align="right" valign="top">
                <Text style={{ fontSize: "12px", fontWeight: "400" }}>
                  odex.com.br
                </Text>
              </td>
            </tr>
          </table>
        </Container>
      </Section>
    </Html>
  );
}
