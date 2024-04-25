console.log("Let's get this party started!");

async function getGif() {
  const respond = await axios.get("https://api.giphy.com/v1/gifs/search", {
    params: {
      api_key: "DHy2Qz3zZd1xQ9v5IvahNpHlzVM7DP8e",
      q: "cheeseburgers",
      limit: 1,
      rating: "g",
    },
  });
  const url = respond.data.data[0].bitly_gif_url;
  console.log(respond.data.data[0]);
  const img = document.querySelector("img");
  img.src = url;
}

getGif();
