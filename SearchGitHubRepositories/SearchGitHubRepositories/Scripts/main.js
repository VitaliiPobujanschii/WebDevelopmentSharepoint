/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
var github;
(function (github) {
    var RepositoryInfo = (function () {
        function RepositoryInfo() {
        }
        RepositoryInfo.RenderRepositories = function () {
            var input = $("#SearchInput").val();
            console.log("Hej");
            console.log(input);
            console.log("HejDå");
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
                    var html = "<div>" + RepoName + "</div>";
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