let numList = []
for (let i = 1; i<=5; i++) {
  const num = prompt(`Enter number #${i}`)
  numList.push(num)
}

for (let i = 1; i<=5; i++) {
  console.log(`${numList[numList.length-i]}`)

}
