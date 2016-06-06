/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
var github;
(function (github) {
    var RepositoryInfo = (function () {
        function RepositoryInfo() {
        }
        RepositoryInfo.RenderRepositories = function () {
            var input = $("#SearchInput").val();
            var test = "";
            console.log(input);
            var url = "https://api.github.com/search/repositories?q=" + input;
            $.getJSON(url, function (data) {
                //success
                console.log(data);
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