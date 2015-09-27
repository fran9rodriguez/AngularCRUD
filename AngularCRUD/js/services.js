/**
 * Created by Fran Rodriguez on 23/09/2015
 */


angular.module('invoiceApp.services', []).service('crudService', function ($http) {


    //Create new record
    this.post = function (Employee) {
        var request = $http({
            method: "post",
            url: "/api/EmployeesAPI",
            data: Employee
        });
        return request;
    }
    //Get Single Records
    this.get = function (EmpNo) {
        return $http.get("/api/EmployeesAPI/" + EmpNo);
    }

    //Get All Employees
    this.getEmployees = function () {
        $http.get('http://localhost:50199/Service1.svc/ShowAll').
        success(function (data, status, headers, config) {
            console.log(data);
            return data;
        }).
        error(function (data, status, headers, config) {
            // log error
        });

    }



    //Update the Record
    this.put = function (EmpNo, Employee) {
        var request = $http({
            method: "put",
            url: "/api/EmployeesAPI/" + EmpNo,
            data: Employee
        });
        return request;
    }
    //Delete the Record
    this.delete = function (EmpNo) {
        var request = $http({
            method: "delete",
            url: "/api/EmployeesAPI/" + EmpNo
        });
        return request;
    }
});