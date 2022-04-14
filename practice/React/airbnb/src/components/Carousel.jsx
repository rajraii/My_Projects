const arr= ["alice", "raj", "mayank"]

const upper = arr.map((name) => {
  return name[0].toUpperCase() + name.slice(1)
})

console.log(upper);