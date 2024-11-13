const fullList = [1,5,10,24,16,100,8,4,12,80,57,79,35]
let evenList = []

function even(list) {
  for (let i of list) {
    if (i%2 === 0) {
      evenList.push(i)
    }
  }
  return evenList
}
console.log(`Initial list: ${fullList}`)
console.log(`New list: ${even(fullList)}`)