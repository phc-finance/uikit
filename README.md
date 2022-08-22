# 🥞 PHC Finance UIkit

[![Version](https://img.shields.io/npm/v/@phcfinance/uikit)](https://www.npmjs.com/package/@phcfinance/uikit) [![Size](https://img.shields.io/bundlephobia/min/@phcfinance/uikit)](https://www.npmjs.com/package/@phcfinance/uikit)

PHC Finance UIkit is a set of React components and hooks used to build pages on PHC Finance's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @phcfinance/uikit`

## Setup

### Theme

Before using PHC Finance UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@phcfinance/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@phcfinance/uikit'
...
<ResetCSS />
```
