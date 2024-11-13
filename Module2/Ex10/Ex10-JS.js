const candidateNumber = +prompt("How many candidates do we have?")
let candidateList = []
for (let i = 1; i <= candidateNumber; i++) {
  let candidateName = prompt(`Enter the name of candidate #${i}`)
  candidateList.push({
    name: candidateName,
    votes: 0,
  })
}
console.log("Candidate list:")
for (let i = 0; i < candidateList.length; i++) {
  console.log(`${candidateList[i].name}`)
}

const voterNumber = +prompt("How many voters do we have?")
for (let i = 1; i <= voterNumber; i++) {
  let vote = prompt("Which candidate do you vote for?")
  for (let i = 0; i < candidateList.length; i++) {
    if (vote === candidateList[i].name) {
      candidateList[i].votes += 1
    }
  }
}

candidateList.sort((a,b) => {
  //console.log(a.votes, b.votes)
  return b.votes-a.votes;
})

console.log(`The winner is ${candidateList[0].name} with ${candidateList[0].votes}`)
console.log("results:")
for (let i = 0; i < candidateList.length; i++) {
  console.log(`${candidateList[i].name}: ${candidateList[i].votes}`)
}
