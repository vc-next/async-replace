require('./index')

test('replace', () => {
  const reg = /[a-zA-Z]+/g
  expect('+91936778875s5ab'.replace(reg, function (content) {
    return ''
  })).toBe('+919367788755')
})

test('replace Async', async () => {
  const reg = /[a-zA-Z]+/g
  return '+91936778875s5ab'.replaceAsyc(reg, async function (content) {
    await Promise.resolve('')
    return ''
  }).then(data => {
    expect(data).toBe('+919367788755')
  })
})
