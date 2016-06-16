/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../scripts/typings/es6-promise/es6-promise.d.ts" />
var repoinfo;
(function (repoinfo) {
    var GitHub = (function () {
        function GitHub() {
        }
        GitHub.Init = function () {
            var repId = GitHub.getParameterByName("repId");
            console.log(repId);
            var url = "https://api.github.com/repos/" + repId;
            var divOutput = $('#totalPage');
            $.getJSON(url, function (repoName) {
                console.log(repoName);
                var RepoName = repoName.name;
                var html = "<div class='titel'>"
                    + "<>" + RepoName + "</p>"
                    + "</div>";
                // create jquery object of our new element
                var jqueryObject = $(html);
                // add object to the page
                divOutput.append(jqueryObject);
                //  });
            }, function (a, b) {
                // fail 
                console.log(a);
                console.log(b);
            });
            var infoUrl = "https://api.github.com/repos/" + repId;
            //json to get repository basic info
            $.getJSON(infoUrl, function (contributor) {
                console.log(contributor);
                var repoInfo = contributor.items;
                // foreach(var repo in repoInfo)
                $.each(repoInfo, function (indexInArray, repo) {
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
            }, function (a, b) {
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
        };
        GitHub.getParameterByName = function (name) {
            var url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
            if (!results)
                return null;
            if (!results[2])
                return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        };
        return GitHub;
    }());
    repoinfo.GitHub = GitHub;
})(repoinfo || (repoinfo = {}));
/// <reference path="repositorypage.ts" />
/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
var github;
(function (github) {
    var RepositoryInfo = (function () {
        function RepositoryInfo() {
        }
        RepositoryInfo.RenderRepositories = function () {
            var input = $("#SearchInput").val();
            var divOutput = $('#Output');
            var url = "https://api.github.com/search/repositories?q=" + input;
            if (!input) {
                $("#SearchInput").detach('#Output');
            }
            $.getJSON(url, function (data) {
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
                        + "</div>";
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
/// <reference path="getrepo.ts" />
var Myspace;
(function (Myspace) {
    var AutoComplete = (function () {
        function AutoComplete() {
        }
        AutoComplete.Init = function () {
            $('#SearchInput').keyup(AutoComplete.TextBoxChanged);
        };
        AutoComplete.TextBoxChanged = function () {
            AutoComplete.Delay(function () {
                github.RepositoryInfo.RenderRepositories();
            }, 1000);
        };
        AutoComplete.Delay = (function () {
            var timer = 0;
            return function (callback, ms) {
                clearTimeout(timer);
                timer = setTimeout(callback, ms);
            };
        })();
        return AutoComplete;
    }());
    Myspace.AutoComplete = AutoComplete;
})(Myspace || (Myspace = {}));
$(document).ready(function () {
    Myspace.AutoComplete.Init();
});
//# sourceMappingURL=main.js.map