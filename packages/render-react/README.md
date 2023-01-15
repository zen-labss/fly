# Vue Render

Convert Vue file into HTML email template.

## Install

```
yarn add @zen-labs/render-vue
```

```
npm install --save @zen-labs/render-vue
```

## Getting started

```javascript
import View from "./View.vue";
import { render } from "@zen-labs/render-vue";

(async () => {
  const html = await render(View, props);
})();
```
