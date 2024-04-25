const input = document.querySelector("#search");
const form = document.querySelector("#search-form");
const imagesCTR = document.querySelector("#images-container");
const removeBtn = document.querySelector("#remove-btn");

async function getGif(value) {
  const idx = Math.floor(Math.random() * 25);
  const respond = await axios.get("https://api.giphy.com/v1/gifs/search", {
    params: {
      api_key: "DHy2Qz3zZd1xQ9v5IvahNpHlzVM7DP8e",
      q: value,
    },
  });
  const url = respond.data.data[idx].images.original.url;
  const img = document.createElement("img");
  img.src = url;
  imagesCTR.append(img);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  getGif(input.value.trim().toLowerCase());
  form.reset();
});

removeBtn.addEventListener("click", function (e) {
  imagesCTR.innerHTML = "";
});
