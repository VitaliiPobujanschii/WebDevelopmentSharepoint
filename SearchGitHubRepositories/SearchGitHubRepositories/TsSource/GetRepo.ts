/// <reference path="../scripts/typings/jquery/jquery.d.ts" />

namespace github {
    declare var repos: any;
    export class RepositoryInfo {
        static RenderRepositories() {

            var input = $("#SearchInput").val();

            var url = "https://api.github.com/search/repositories?q=" + input;


            $.getJSON(url,
                function (data) {
                    //success
                    console.log(data);
                    var repos = data.items;
                    var divOutput = $('#Output');

                    // foreach(var repo in repos)
                    $.each(repos, function (indexInArray, repo) {
                        console.log(repo.name);
                        var RepoName = repo.name;
                        var RepoOwner = repo.owner.login;
                        var RepoNumOfForks = repo.forks;
                        var RepoNumOfWatchers = repo.watchers;
                        var RepoURL = "'https://github.com/'+ RepoOwner + '/' + RepoName";
                        var html = "<div class='infobox'>"
                            + "</p><b>Repository: </b>" + "<a href='https://github.com/  ' >" + RepoName + "</a>" + "</p>"
                                    + "<p><b>Owner: </b>" + RepoOwner + "</p>"
                                    + "<p><b>Forks: </b> " + RepoNumOfForks + "</p>"
                                    + "<p><b>Watchers: </b> " + RepoNumOfWatchers + "</p>"
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