# async-replace

![npm](https://img.shields.io/npm/v/async-replace)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/async-replace)
![NPM](https://img.shields.io/npm/l/async-replace)

add String.prototype.replaceAsync method

### Usage

```node
require('async-replace')
async function name () {
  const result = await 'abcd'.replaceAsync(/[a-zA-Z]/g, async function (content) {
    return content
  })
  return result
}
```

### License

MIT
