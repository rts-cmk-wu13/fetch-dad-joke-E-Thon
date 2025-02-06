fetch("https://icanhazdadjoke.com/", {
  headers: {
    Accept: "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let body = document.querySelector("body");
    let jokeElm = document.createElement("div");
    jokeElm.classList.add("jokes");

    jokeElm.innerHTML = `
    ${data.joke}
    `


    body.appendChild(jokeElm);
  });
