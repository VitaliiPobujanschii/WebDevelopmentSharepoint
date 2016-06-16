/// <reference path="repositorypage.ts" />
/// <reference path="../scripts/typings/jquery/jquery.d.ts" />

namespace github {
    declare var repos: any;
    export class RepositoryInfo {
        static RenderRepositories() {

            var input = $("#SearchInput").val();
            var divOutput = $('#Output');

            var url = "https://api.github.com/search/repositories?q=" + input;

            if (!input) {
                $("#SearchInput").detach('#Output');
            }

            $.getJSON(url,
                function (data) {
                    //success
                    console.log(data);
                    var repos = data.items;

                    // foreach(var repo in repos)
                    $.each(repos, function (indexInArray, repo) {
                        console.log(repo.name);
                        var RepoName = repo.name;
                        var RepoOwner = repo.owner.login;
                        var RepoNumOfForks = repo.forks;
                        var RepoNumOfWatchers = repo.watchers;
                        var RepoPage = "RepositoryPage.html?repId=" + repo.full_name;
                        //var RepoURL = "https://github.com/" + RepoOwner + "/" + RepoName;         // If click the url of repository "RepoURL" it open original GitHub repository's page
                        var html = "<div class='infobox'>"
                            + "</p><b>Repository: </b>" + "<a href='https://github.com/  ' >" + RepoName + "</a>" + "</p>"
                                    + "<p><b>Owner: </b>" + RepoOwner + "</p>"
                                    + "<p><b>Forks: </b> " + RepoNumOfForks + "</p>"
                                    + "<p><b>Watchers: </b> " + RepoNumOfWatchers + "</p>"
                                    + "<p><a href=" + RepoPage + "><b>Repository Page</b></a></</p>"
                                    //+ "<p><a href=" + RepoURL + "><b>Repo url</b></a></</p>"      // This row is part of HTML page
                                    + "</div>";

                        // create jquery object of our new element
                        var jqueryObject = $(html);

                      
                        // add object to the page
                        divOutput.append(jqueryObject);


                    });

                },
                function (a, b) {
                    // fail 
                    console.log(a);
                    console.log(b);

                });
        }
    }
}