String.prototype.replaceAsyc = async function (regex, asyncFn) {
  const promises = []
  this.replace(regex, (match, ...args) => {
    const promise = asyncFn(match, ...args)
    promises.push(promise)
  })
  const data = await Promise.all(promises)
  return this.replace(regex, () => data.shift())
}
