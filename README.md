Common TailwindCSS configuration for Slipmat.io projects.

It adds

- Slipmat colors
- Slipmat font added to Tailwind default sans fonts
- PurgeCSS tweaked for Vue CLI TS projects
- Plugins:
  - `@tailwindcss/ui`
  - `@tailwindcss/typography`
  - `@tailwindcss/custom-forms`

# Usage

First install the package:

```
yarn add -D @slipmatio/tailwind-config
```

You can then extend the config:

```js
// tailwind.config.js

module.exports = {
  presets: [require('@sipmatio/tailwind-config')],
  theme: {
    extend: {
      fontFamily: {
        source: ['Source Sans Pro', 'sans-serif'],
      },
    },
  },
}
```

More from [Tailwind documentation](https://tailwindcss.com/docs/).
