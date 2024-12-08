'use strict';

async function joke() {
  try {
    const response = await fetch ('https://api.chucknorris.io/jokes/random')
    const jsonResponse = await response.json();
    console.log(jsonResponse.value);
  } catch (error) {
    console.log(error.message)
  }
}

joke()