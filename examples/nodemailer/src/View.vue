<template>
  <Html lang="ptbr">
    <Section
      style="
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
          'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
          'Helvetica Neue', sans-serif;
      "
    >
      <Container style="max-width: 500px">
        <Section style="margin-bottom: 05vh">
          <Image
            src="data:image/png;base64,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"
          />
        </Section>
        <Text
          style="
            font-size: 16px;
            color: #0d1d52;
            font-weight: bold;
            text-align: center;
          "
        >
          Olá, Miguel
        </Text>
        <Text
          style="
            font-size: 16px;
            color: #0d1d52;
            font-weight: bold;
            text-align: center;
          "
        >
          Seu Cadastro Foi Realizado Com Sucesso!
        </Text>
        <Section>
          <Text style="text-align: center">
            A partir de agora, você pode contar com todas as facilidades da
            nossa ferramenta para potencializar os orçamentos e pedidos do seu
            projeto. Conte conosco nesta parceria!
          </Text>
        </Section>
        <Section>
          <Button
            style="
              width: 221px;
              height: 45px;
              border: none;
              border-radius: 4px;
              background-color: #0d1d52;
              color: #fff;
            "
          >
            Acesse a plataforma
          </Button>
        </Section>
        <Hr
          style="
            height: 1px;
            border: none;
            background-color: #0d1d52;
            margin-top: 10vh;
          "
        />
        <table
          border="0"
          cellPadding="0"
          cellSpacing="10"
          align="left"
          style="width: 100%"
        >
          <tr>
            <td align="left" valign="top">
              <Image
                style="display: inline"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAXCAYAAADQpsWBAAABJElEQVQ4T2NkwAMENCIU/n795QBTwszM9ECAgecCIzY9EgoRCl///pzPwMAI1wDXyM2miFUTn1zQ/f//GRSwGciMTROvbFACUDHQFuwAh6bA/cjOYvr//wIjC1MjUOwDyJgPD9YcwHAej3zwecZ//w2QPO8IUohsL4YmdP8wMzMbfniw+gJpmoAe/3BjxQMUTQoGCQJv334KgAkyMjH0///HIADj/2NmLmD6+/cjjP/58boFjBLACPz69dd9fJEMN5CR4cOnR+sESdL0n+H/gS+P1zuSpImB8f/Gz4/WBzCC/PTu3ZcCuPMY/+Uj++n///8TmZiYwXHExMRwAGs8YQQ5ttBDD4BRTdAQGeQBIaAQHPD37394Khdm5tvw4MECcIqAAQA51q3YSXkejgAAAABJRU5ErkJggg=="
              />
              <Image
                style="display: inline; margin-left: 25px"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAACy0lEQVQ4T8VVwW7TQBDdXbdV1BKzlCL1QNLtAYkb6ReQfAFN0iJuSb+A5guSfgHlC3BvlWga+gUNX5Bw45ZVK06orZvgEFnsLjNOnBpjBcKFlSzZOzuzb2bePFMSWVzs5LU2FUJMHra5MYRH7fF3SolLtZGGsS5j5MyVzQ/hGYovQlT5lbptEUIx4D8vSqmzytI1KR03CGxni44xtIIICGFv2fKCw1MpV3Yd+J69+JPdnBqpHPjWIUMB2bYHl60C5eLltlI/WmCQbHmp4H4+ln8KFrVjtvg9So348LvfMZpwy2IFGqIlFq0OZPNonqDr4pUYar8DPu4qs7eu9bd9Y3QdS0LvbZQ70ICcZVlbrnzfjQdGRF+JV7G0zqFNQaMWiQWNOpbYbKX0Oe4jylRqQXqe38Psqb1RukH4g8vToN7RxcXua61VI4kd4NzoX5wepDOlKmRrMFuRAxJc9W8CtoDBYLB4YPtxqW7AeXwRBRqZs+CNmjw2eoKy5sqTwyiYMF5iYKydp/zexGEPLnVizlX4fofIoLabSK/QPjNwkF7gSJ3+RXMvqaHpTBl4b7a1ZjXvyx3qmYGnTCHkN7QRZImX/5/AK2Jnnyn9Bps2uGwWk0oRZjVXKZA21zf9HtIwaXDSolwhygQNtVaWNqPTOrMU6HCHGilGQUvMxwn1XmDTAupZ7KAvTyaUHFungcMBeWjZD6K0wUN2dgeGQ9fjpUCaKcUOomyI0i0YEDtb6qEqxVMKD64/BU57fh5QP8c9HOlHfOUoSflgUnNKqQ4zpjsVoaS0kpo2ay/Kf5DNsZAgfMaWQIjmk81pZmOlOw+yJ4vbgfCkM0VQKArpEvjN0IZF2KckpYujReVzQYf10EftAMkkPJzW8a8J6XV9exiKy7wlCM8Dc9pra/eLWP9fpJKLMsy+hoc8Y4yKv/mZQlAQINqG80egdO3wkp+pQZtTrKK27wAAAABJRU5ErkJggg=="
              />
            </td>
            <td align="right" valign="top">
              <Text style="font-size: 12px; font-weight: 400">
                odex.com.br
              </Text>
            </td>
          </tr>
        </table>
      </Container>
    </Section>
  </Html>
</template>

<script setup>
import {
  Button,
  Hr,
  Html,
  Image,
  Section,
  Text,
  Container,
} from "../../../packages/lib-vue3/src/main.js";

import { ref, computed } from "vue";
</script>
