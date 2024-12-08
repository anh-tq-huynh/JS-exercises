'use strict'
async function search(input) {
  try {
    const response = await fetch (`https://api.tvmaze.com/search/shows?q=${input}`)
    const json = await response.json();
    console.log(json);
    return json
  } catch (error) {
    console.log(error.message)
  }
}

const formEvent = document.querySelector("form");
formEvent.addEventListener("submit", async evt => {
  evt.preventDefault();
  document.querySelector("#results").innerHTML = ""
  const keyword = document.querySelector("#query").value
  //await search(keyword.value)
  //print out
  let resultSearch = await search(keyword)
  for (let result of resultSearch) {
    //print name
    const h2 = document.createElement("h2")
    document.querySelector("#target").appendChild(h2)
    h2.innerHTML = result.show.name

    //print url
    const url = document.createElement("a")
    document.querySelector("#target").appendChild(url)
    url.href = result.show.officialSite

    //print medium img
    const img = document.createElement("img")
    document.querySelector("#target").appendChild(img)
    img.src = result.show.image?.medium
    img.alt = result.show.name

    //print summary
    const divSummary = document.createElement("div")
    document.querySelector("#target").appendChild(divSummary)
    divSummary.innerHTML = result.show.summary

    //append article
    const article = document.createElement("article")
    document.querySelector("#results").appendChild(article)
    document.querySelector("#target").innerHTML = ""
    article.appendChild(h2)
    article.appendChild(url)
    article.appendChild(img)
    article.appendChild(divSummary)


  }
});