/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../scripts/typings/es6-promise/es6-promise.d.ts" />


namespace repoinfo {
    export class GitHub {
        static Init() {
            var repId = GitHub.getParameterByName("repId");
            console.log(repId);
            var url = "https://api.github.com/repos/" + repId;

            var divOutput = $('#totalPage');


            $.getJSON(url, (repoName) => {

                console.log(repoName);

                var RepoName = repoName.name;

                var html = "<div class='titel'>"
                    + "<>" + RepoName + "</p>"
                    + "</div>"

                // create jquery object of our new element
                var jqueryObject = $(html);


                // add object to the page
                divOutput.append(jqueryObject);


                //  });

            },
                function (a, b) {
                    // fail 
                    console.log(a);
                    console.log(b);

                });

            var infoUrl = "https://api.github.com/repos/" + repId;

            //json to get repository basic info
            $.getJSON(infoUrl, (contributor) => {

                console.log(contributor);
                var repoInfo = contributor.items;

                // foreach(var repo in repoInfo)
                $.each(repoInfo, (indexInArray, repo) => {

                var RepoNumOfForks = repo.forks;
                var RepoNumOfWatchers = repo.watchers;
                var RepoLanguage = repo.language;
                var NumberOfSubscribers = repo.subscribers_count;
                var html = "<div class='info'>"
                + "<p><b>Forks: </b> " + RepoNumOfForks + "</p>"
                + "<p><b>Watchers: </b> " + RepoNumOfWatchers + "</p>"
                + "<p><b>Language: </b> " + RepoLanguage + "</p>"
                + "<p><b>Subscribers: </b> " + NumberOfSubscribers + "</p>"
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


            //var url = "https://api.github.com/repos/" + repId + "/open_issues";
            //    $.getJSON(url, (repo) => {

            //        console.log(repo);

            //        var RepoNumOfForks = repo.forks;

            //        var html = "<div class='titel'>"
            //            + "<>" + RepoNumOfForks + "</p>"
            //            + "</div>"


            //        // create jquery object of our new element
            //        var jqueryObject = $(html);


            //        // add object to the page
            //        divOutput.append(jqueryObject);


            //        //  });

            //    },
            //        function (a, b) {
            //            // fail 
            //            console.log(a);
            //            console.log(b);

            //        });
        }
        static getParameterByName(name) {
            var url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }
    }
}