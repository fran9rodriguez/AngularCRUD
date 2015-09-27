/**
 * Created by Fran Rodriguez on 23/09/2015
 */


angular.module('invoiceApp.services', []).factory('InvoiceFactory', function ($resource, $http) {
    return {
        showAllInvoices: function () {
            return $http.get('http://localhost:50199/Service1.svc/ShowAll').
               success(function (data, status, headers, config) {
                   //console.log(data);
                   //console.log(data["lInvoices"]);

               }).
               error(function (data, status, headers, config) {
                   // log error

               });

        },
        deleteInvoice: function (idInvoice) {

            return $http.get('http://localhost:50199/Service1.svc/Delete/' + idInvoice).
             success(function (data, status, headers, config) {
                 console.log(data);
             }).
             error(function (data, status, headers, config) {
                 // log error
             });

        },
        viewInvoice: function (idInvoice) {

            return $http.get('http://localhost:50199/Service1.svc/Search/' + idInvoice).
            success(function (data, status, headers, config) {
                //console.log("Inovice:" + data["lInvoices"][0]);
               
            }).
            error(function (data, status, headers, config) {
                // log error
            });

        },
        addInvoice: function (number, concept, description, total, dateI, dateF) {

            return $http.get('http://localhost:50199/Service1.svc/Insert/' + number + "/" + concept + "/" + description + "/" + total + "/" + dateI + "/" + dateF).
            success(function (data, status, headers, config) {
                //console.log(data);

            }).
            error(function (data, status, headers, config) {
                // log error
            });

        }

    }

}).service('crudService', function ($http, $window) {


    this.showPopup = function (message) {
        return $window.confirm(message);
    }
});