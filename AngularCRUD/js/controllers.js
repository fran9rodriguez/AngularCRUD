/**
 * Created by Fran Rodriguez on 23/09/2015
 */


angular.module('invoiceApp.controllers', []).controller('crudController', function ($scope, $http, crudService, InvoiceFactory) {    

    $scope.loadInvoices = function () {
        InvoiceFactory.showAllInvoices().then(
         function (response) {
             $scope.Invoices = response["data"]["lInvoices"];
             console.log($scope.Invoices);
         }
        );
    }

    $scope.deleteInvoice = function (idInvoice) {
        console.log('delete Invoice:' + idInvoice);

        if (crudService.showPopup('Really delete this?')) {

            InvoiceFactory.deleteInvoice(idInvoice).then(
            function (response) {
                $scope.loadInvoices();
            }
           );

        }
    }

    $scope.loadInvoices();

}).controller('viewController', function ($scope, $stateParams, $http, InvoiceFactory) {

    console.log('viewInvoice:' + $stateParams.id);
    var iNum = $stateParams.id;

    InvoiceFactory.viewInvoice(iNum).then(
        function (response) {
            $scope.Invoice = response["data"]["lInvoices"][0];
        }
        );

    
}).controller('editController', function ($scope, $stateParams, $http) {

    console.log('viewInvoice:' + $stateParams.id);

}).controller('addController', function ($scope, $stateParams, $http, InvoiceFactory) {

    console.log('add:');

    $scope.addInvoice = function () {
        console.log('add Invoice:');

        var number = document.getElementById("number").value;
        var concept = document.getElementById("concept").value;
        var description = document.getElementById("description").value;
        var total = document.getElementById("total").value;
        var dateI = '2015-11-13';
        var dateF = '2015-11-13';

        InvoiceFactory.addInvoice(number, concept, description, total, dateI, dateF).then(
        function (response) {
            console.log(response);
        }
        );

        
    }




});