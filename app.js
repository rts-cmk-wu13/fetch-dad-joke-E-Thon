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
    `;
    
    //ekstra for fun:
    let header = document.createElement("h1");
    header.innerHTML = `
    <a href="index.html">Dad Jokes</a>
    `
    // tilføjelse af elementer til body:
    body.append(header, jokeElm);
  });
