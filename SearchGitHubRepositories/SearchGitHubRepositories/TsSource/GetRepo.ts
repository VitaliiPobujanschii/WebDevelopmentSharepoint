namespace github {
    export class RepositoryInfo {
        static RenderRepositories() {
            var url = "http://services.odata.org/V4/Northwind/Northwind.svc/Employees";

            $.getJSON(url,
                function (data) {
                //success
                    console.log(data);

                },
                function (a, b) {
                    // fail 
                    console.log(a);
                    console.log(b);

                });
        }
    }
}