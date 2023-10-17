// console.log("Let's get this party started!");

const $search = $("#search")
const $gifContainer = $("#gifContainer")

// request to Giphy, set to search bar, call appendGif()
$("form").on('submit', function (e) {
  e.preventDefault();
  const search = $search.val();
  $search.val('');
  async function request() {
    const res = await axios.get('http://api.giphy.com/v1/gifs/search', {
      params: {
        api_key: 'Eo95Q0ijBG93M0vamawLs7920NkabSpH',
        q: search
      }
    });
    console.log(res.data);
    appendGif(res.data);
  };
  request();
});

// create img element with random gif and append to $gifContainer
function appendGif(res) {
  const gifArray = res.data.length
  const randomGif = Math.floor(Math.random() * gifArray);
  const $img = $("<img>", {
    src: res.data[randomGif].images.original.url
  });
  $gifContainer.append($img)
};

// remove all gifs
$("#remove").on('click', function () {
  $gifContainer.empty();
});
