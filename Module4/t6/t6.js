'use strict';

async function joke(query) {
  try {
    const response = await fetch (`https://api.chucknorris.io/jokes/search?query=${query}`)
    const jsonResponse = await response.json();
    return jsonResponse.result
  } catch (error) {
    console.log(error.message)
  }
}

const formSubmit = document.querySelector("form");
formSubmit.addEventListener("submit", async evt => {
  evt.preventDefault();
  const keyword = document.querySelector("#query").value
  const results = await joke(keyword)
  console.log(results)

  for (let joke of results) {
    const addArticle = document.createElement("article");
    document.querySelector("body").appendChild(addArticle)
    const addP = document.createElement("p");
    addP.innerHTML = joke.value
    addArticle.appendChild(addP)
  }
})
