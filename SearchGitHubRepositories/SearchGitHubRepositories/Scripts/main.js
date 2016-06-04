var github;
(function (github) {
    var RepositoryInfo = (function () {
        function RepositoryInfo() {
        }
        RepositoryInfo.RenderRepositories = function () {
            var url = "http://services.odata.org/V4/Northwind/Northwind.svc/Employees";
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