Common TailwindCSS configuration for Slipmat.io projects.

Configures:

- Slipmat colors (as `slipmat` key)
- Play font added to default sans fonts
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

then add `require('@sipmatio/tailwind-config')` to `presets` array in `tailwind.config.js`.

You can then extend the config if you want. Extended properties override the defaults:

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
