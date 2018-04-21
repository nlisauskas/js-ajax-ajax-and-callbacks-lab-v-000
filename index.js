$(document).ready(function (){
});

function searchRepositories() {
  const input = $("#searchTerms")[0].value;
  const url = "https://api.github.com/search/repositories?q=" + input;

  $.get(url, function(data) {
    console.log(data.items);

    const repos = data.items;
  })
}
