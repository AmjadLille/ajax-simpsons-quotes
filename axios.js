const fetchSimpsons = () => {
  const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;

  axios
    .get(url)
    .then((response) => {
      //return response.data; // response.data instead of response.json() with fetch
      return response.data;
    })
    .then((simpson) => {
      console.log("data decoded from JSON:", simpson);

      // Build a block of HTML
      const simpsonsHtml = `
        <h2><strong>${simpson[0].character}</strong></h2>
        <p>${simpson[0].quote}</p>
        <img src="${simpson[0].image}" />
      `;
      document.querySelector("#chuck-norris").innerHTML = simpsonsHtml;
    });
};

fetchSimpsons();
