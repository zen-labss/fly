![Cover Fly](/assets/coverfly.png)

## Why

Writing emails is still difficult as 2010 with HTML and CSS Inline. Well, fly is a framework that generates code for your email in your best framework, write in .vue or .tsx, either way, an HTML build is 100% compatible with your email client.

## Motivation

Well, the motivation is basically beacuse [React emails](react.emails), but React emails has a problem, it is only compatible with react... Well, why not be compatible with Vue, React, Angular? Everyone has to have access.

## Install

With yarn

```
yarn add @fly-email/react -E
```

With npm

```
npm install @fly-email/react -E
```

## Getting started

Add component generate in your email template.

```jsx
import { Text } from "@fly-email/react";

const Email = () => {
  <Text
    style={{
      fontSize: "16px",
      color: "#0D1D52",
      fontWeight: "bold",
      textAlign: "center",
    }}
  >
    Hello, World
  </Text>;
};
```

## Components

- Html ([React](https://github.com/zen-labss/fly/blob/main/packages/lib-react/src/html.tsx), [Vue](https://github.com/zen-labss/fly/blob/main/packages/lib-vue/src/html.vue))
- Button ([React](https://github.com/zen-labss/fly/blob/main/packages/lib-react/src/button.tsx), [Vue](https://github.com/zen-labss/fly/blob/main/packages/lib-vue/src/button.vue))
- Container ([React](https://github.com/zen-labss/fly/blob/main/packages/lib-react/src/container.tsx), [Vue](https://github.com/zen-labss/fly/blob/main/packages/lib-vue/src/container.tsx))
- Img ([React](https://github.com/zen-labss/fly/blob/main/packages/lib-react/src/img.tsx), [Vue](https://github.com/zen-labss/fly/blob/main/packages/lib-vue/src/img.vue))
- Section ([React](https://github.com/zen-labss/fly/blob/main/packages/lib-react/src/section.tsx), [Vue](https://github.com/zen-labss/fly/blob/main/packages/lib-vue/src/section.vue))
- Text ([React](https://github.com/zen-labss/fly/blob/main/packages/lib-react/src/text.tsx), [Vue](https://github.com/zen-labss/fly/blob/main/packages/lib-vue/src/text.vue))
- Hr ([React](https://github.com/zen-labss/fly/blob/main/packages/lib-react/src/hr.tsx), [Vue](https://github.com/zen-labss/fly/blob/main/packages/lib-vue/src/hr.vue))

## Integrations

- [Nodemailer](https://github.com/zen-labss/fly/tree/main/examples/nodemailer)

## Support

Components compatible with your best client email.

| <img src="https://react.email/static/icons/gmail.svg" width="48px" height="48px" alt="Gmail logo"> | <img src="https://react.email/static/icons/apple-mail.svg" width="48px" height="48px" alt="Apple Mail"> | <img src="https://react.email/static/icons/outlook.svg" width="48px" height="48px" alt="Outlook logo"> | <img src="https://react.email/static/icons/yahoo-mail.svg" width="48px" height="48px" alt="Yahoo! Mail logo"> |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| Gmail ✔                                                                                            | Apple Mail ✔                                                                                            | Outlook ✔                                                                                              | Yahoo! Mail ✔                                                                                                 |

## Contributors

- [Giovanni Soares](https://github.com/shumtz)
