/**
 * Created by Fran Rodriguez 23/09/2015
 */

angular.module('invoiceApp', ['ui.router', 'ngResource', 'invoiceApp.controllers', 'invoiceApp.services']);

angular.module('invoiceApp').config(function ($stateProvider, $httpProvider) {
    $stateProvider.state('invoices', {
        url: '/invoices',
        templateUrl: 'partials/invoices.html',
        controller: 'crudController'
    }).state('viewInvoice', {
        url: '/invoices/:id/view',
        templateUrl: 'partials/viewInvoice.html',
        controller: 'viewController'
    }).state('addInvoice', {
        url: '/invoices/new',
        templateUrl: 'partials/addInvoice.html',
        controller: 'addController'
    }).state('editInvoice', {
        url: '/invoices/:id/edit',
        templateUrl: 'partials/editInvoice.html',
        controller: 'editController'
    });
}).run(function ($state) {
    $state.go('invoices');
});