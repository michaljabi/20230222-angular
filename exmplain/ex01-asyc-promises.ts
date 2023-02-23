function hello() {
  return '!'
}

console.log(hello())


function helloAsyncWithoutSyntacticSugar() {
  return Promise.resolve('!')
}

async function helloAsync() {
  return '!'
}

helloAsync().then((exc) => {
  console.log(exc)
})
