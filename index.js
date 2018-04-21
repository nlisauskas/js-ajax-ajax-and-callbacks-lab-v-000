$(document).ready(function (){
});

function searchRepositories() {
  const input = $("#searchTerms")[0].value;
  const url = "https://api.github.com/search/repositories?q=" + input;

  $.get(url, function(data) {
    console.log(data.items);

    const repos = data.items;
    const repoList = "<ul>" + repos.map(r => {
      return (`
        <li>
        <h2><a href="${r.html_url}">${r.name}</a></h2>
        <p>Description: ${r.description}</p>
        <p>Created by: ${r.owner.login}</p>
        <a href="#" onclick="showCommits(this)" data-repository="${r.name}" data-owner="${r.owner.login}">Show Commits</a>
        <p><img src="${r.owner.avatar_url}" height="45" width="45"></p>
        </li>
        `)
    }).join('') + "</ul>"
    document.getElementById("results").innerHTML = repoList
  }).fail(function() {
    displayError();
  });
}
