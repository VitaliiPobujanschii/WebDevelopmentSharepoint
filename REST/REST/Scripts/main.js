var northwind;
(function (northwind) {
    var Employee = (function () {
        function Employee() {
        }
        Employee.RenderEmployees = function () {
            var url = "http://services.odata.org/V4/Northwind/Northwind.svc/Employees";
            $.getJSON(url, function (data) {
                //success 
                console.log(data);
                var employees = data.value;
                var divEmployees = $('#Employees');
                // foreach (var employee in employees) 
                $.each(employees, function (idx, employee) {
                    // generate html to apend to the page 
                    var textToAdd = "<div>" + employee.FirstName + " " + employee.LastName + " (" + employee.Title + ")</div>";
                    // create jquery object of our new element 
                    var jqueryElement = $(textToAdd);
                    // add click event to our new element 
                    jqueryElement.click(function () {
                        northwind.Order.RenderOrdersForEmployee(employee.EmployeeID);
                    });
                    // add element to the page.  
                    divEmployees.append(jqueryElement);
                });
            }, function (a, b) {
                // fail 
                console.log(a);
                console.log(b);
            });
        };
        return Employee;
    }());
    northwind.Employee = Employee;
})(northwind || (northwind = {}));
var northwind;
(function (northwind) {
    var Order = (function () {
        function Order() {
        }
        Order.RenderOrdersForEmployee = function (empId) {
            var url = "http://services.odata.org/V4/Northwind/Northwind.svc/Orders?$expand=Customer&$filter=EmployeeID eq " + empId.toString();
            $.getJSON(url, function (data) {
                //success
                //clear the orders element
                var orderDiv = $('#Orders');
                orderDiv.html("");
                console.log(data);
                //loop through all orders
                $.each(data.value, function (index, order) {
                    var date = new Date(order.OrderDate);
                    orderDiv.append("<div>" + order.Customer.CompanyName + " (" + date.toLocaleDateString() + ")</div>");
                });
            }, function (a, b) {
                //fail
                console.log(a);
                console.log(b);
            });
        };
        return Order;
    }());
    northwind.Order = Order;
})(northwind || (northwind = {}));
//# sourceMappingURL=main.js.map