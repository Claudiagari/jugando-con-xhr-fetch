const form = document.getElementById('search-form');
const searchField = document.getElementById('search-keyword');
const responseContainer = document.getElementById('response-container');
let searchedForText;
form.addEventListener('submit', function(event) {
  event.preventDefault();
  responseContainer.innerHTML = '';
  searchedForText = searchField.value;
  let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=53f3f12c4348428c8e9add335c42bd3d`;
  fetch(url)
    .then(function(response) {
      console.log(response);
      return response.json();
    })
    .then(function(data) {
      let article = data.response.docs;
      console.log(article);
      for (var i = 0; i < article.length; i++) {
        let news = '<li><h2>' + article[i].headline.main + '</h2><p>' + article[i].snippet + '</p><p><a href=' + article[i].web_url + '>Leer mas</a></p><img src=https://static01.nyt.com/' + article[i].multimedia[0].url + '>  </li>';
        $('#response-container').append(news);
      }
    })
    .catch(function(error) {
      console.log(error);
    }); 
});
