'use strict'
async function search(input) {
  try {
    const response = await fetch (`https://api.tvmaze.com/search/shows?q=${input}`)
    const json = await response.json();
    const formattedJson = JSON.stringify(json, null, 2);
    console.log(json);
  } catch (error) {
    console.log(error.message)
  }
}

const formEvent = document.querySelector("form");
formEvent.addEventListener("submit", async evt => {
  evt.preventDefault();
  const keyword = document.querySelector("#query").value
  await search(keyword)
});