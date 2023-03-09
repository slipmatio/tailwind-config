Common TailwindCSS configuration for Slipmat.io projects. The project versioning follows Tailwind major versions (ie. v3.x of this package use Tailwind 3.x).

This configuration adds:

- Slipmat colors:
  - `slipmat` for Slipmat red (`slipmat-500` is the logo color)
- Play font to default sans fonts

# Usage

First install the package:

```
pnpm add -D @slipmatio/tailwind-config
```

then add `require('@slipmatio/tailwind-config')` to `presets` array in `tailwind.config.js`.

You can then extend the config if you want. Extended properties override the defaults:

```js
// tailwind.config.js

module.exports = {
  presets: [require('@slipmatio/tailwind-config')],
  theme: {
    extend: {
      fontFamily: {
        source: ['Source Sans Pro', 'sans-serif'],
      },
    },
  },
}
```

Install the Play font by adding following tags to the `<head>` of the main template:

```html
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link
  href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap"
  rel="stylesheet"
/>
```

More from [Tailwind documentation](https://tailwindcss.com/docs/).

[Follow @Uninen](https://twitter.com/uninen) on Twitter.
