/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
var github;
(function (github) {
    var RepositoryInfo = (function () {
        function RepositoryInfo() {
        }
        RepositoryInfo.RenderRepositories = function () {
            var input = $("#SearchInput").val();
            var url = "https://api.github.com/search/repositories?q=" + input;
            $.getJSON(url, function (data) {
                //success
                console.log(data);
                var repos = data.items;
                var divOutput = $('#Output');
                // foreach(var repo in repos)
                $.each(repos, function (indexInArray, repo) {
                    console.log(repo.name);
                    var RepoName = repo.name;
                    var RepoOwner = repo.owner.login;
                    var html = "<div class='infobox'>" + "<h4>Name of repository:</h4> " + RepoName + " <h4>Owner:</h4> " + RepoOwner + "</div>";
                    // create jquery object of our new element
                    var jqueryObject = $(html);
                    // add object to the page
                    divOutput.append(jqueryObject);
                });
            }, function (a, b) {
                // fail 
                console.log(a);
                console.log(b);
            });
        };
        return RepositoryInfo;
    }());
    github.RepositoryInfo = RepositoryInfo;
})(github || (github = {}));
//# sourceMappingURL=main.js.map