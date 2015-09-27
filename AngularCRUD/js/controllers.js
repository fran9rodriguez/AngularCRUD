/**
 * Created by Fran Rodriguez on 23/09/2015
 */


angular.module('invoiceApp.controllers', []).controller('crudController', function ($scope, $http) {

    $scope.IsNewRecord = 1; //The flag for the new record

    loadRecords();

    //Function to load all Invoices records
    function loadRecords() {

        $http.get('http://localhost:50199/Service1.svc/ShowAll').
        success(function (data, status, headers, config) {
            console.log(data);
            console.log(data["lInvoices"]);
            $scope.Invoices = data["lInvoices"];
        }).
        error(function (data, status, headers, config) {
            // log error
        });

    }

    $scope.deleteInvoice = function (idInvoice) {
        console.log('delete Invoice:' + idInvoice);

        $http.get('http://localhost:50199/Service1.svc/Delete/' + idInvoice).
        success(function (data, status, headers, config) {
            console.log(data);
            loadRecords();
        }).
        error(function (data, status, headers, config) {
            // log error
        });
    }

}).controller('viewController', function ($scope, $stateParams, $http) {

    console.log('viewInvoice:' + $stateParams.id);
    var iNum = $stateParams.id;
    $http.get('http://localhost:50199/Service1.svc/Search/' + iNum).
    success(function (data, status, headers, config) {
        console.log("Inovice:" + data["lInvoices"][0]);
        $scope.Invoice = data["lInvoices"][0];
    }).
    error(function (data, status, headers, config) {
        // log error
    });
}).controller('editController', function ($scope, $stateParams, $http) {

    console.log('viewInvoice:' + $stateParams.id);
   
}).controller('addController', function ($scope, $stateParams, $http) {

    console.log('add:' );

    $scope.addInvoice = function () {
        console.log('add Invoice:');

        var number = document.getElementById("number").value;
        var concept = document.getElementById("concept").value;
        var description = document.getElementById("description").value;
        var total = document.getElementById("total").value;
        var dateI = '2015-11-13';
        var dateF = '2015-11-13';

       

        $http.get('http://localhost:50199/Service1.svc/Insert/' + number + "/" + concept + "/" + description + "/" + total + "/" + dateI + "/" + dateF).
        success(function (data, status, headers, config) {
            console.log(data);
            
        }).
        error(function (data, status, headers, config) {
            // log error
        });
    }

    


});