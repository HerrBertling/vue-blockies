# vue-blockies

This is a simple Vue3 wrapper component for [ethereum-blockies](https://github.com/ethereum/blockies).

<ClientOnly>
  <VueBlockie
    seed="ASimpleVue3WrapperComponentForEthereumBlockies"
    :size="16"
    :scale="16"
    color="#41B883"
    bgcolor="#35495E"
    spot-color="#35495E"
  />
</ClientOnly>

## Installation

```sh
yarn add vue-blockies
```

or

```sh
npm i vue-blockies
```

## Usage

Import the component, make it known to the component you're using it in.

```js
import VueBlockies from vue-blockies

export default {
  name: 'MyAwesomeComponent',

  components: {
    VueBlockies,
  },
  …
}
```

In the template, just™ use it.

```html
<template>
  <div>
    …
    <VueBlockies />
    …
  </div>
</template>
```

### Props

| Prop        | Type     | Default value    | Description                                                                                                                                            |
| ----------- | -------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `seed`      | `String` | `"randomString"` | Seed used to generate icon data                                                                                                                        |
| `color`     | `String` | `"#dfe"`         | To manually specify the icon color                                                                                                                     |
| `bgcolor`   | `String` | `#aaa`           | Choose a different background color                                                                                                                    |
| `size`      | `String` | `8`              | Width/height of the icon in blocks                                                                                                                     |
| `scale`     | `Number` | `4`              | Width/height of each block in pixels.                                                                                                                  |
| `spotColor` | `String` | `#000`           | Each pixel has a 13% chance of being of a third color. Set to -1 to disable it. These "spots" create structures that look like eyes, mouths and noses. |

## Full example

```html
<template>
  <div>
    …
    <VueBlockies
      seed="0x4f5F6D3c7e8aDef6be8e51288F098d440bAc12ec"
      color="#09e"
      bgcolor="#f3f"
      :size="16"
      :scale="2"
      spot-color="#666"
    />
    …
  </div>
</template>
```

The example outputs this blockie:

<ClientOnly>
  <VueBlockie
    seed="0x4f5F6D3c7e8aDef6be8e51288F098d440bAc12ec"
    color="#09e"
    bgcolor="#f3f"
    :size="16"
    :scale="2"
    spot-color="#666"
  />
</ClientOnly>