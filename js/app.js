(function () {
    'use strict';
     
    var app = angular.module('application', []);

    app.controller('NationalIDReceiverController', function ($scope,sharedProperties) {
        $scope.submitNationalID = function () { 
            alert($scope.nationalID);
            sharedProperties.setNowPage("CheckDocument");
        };

        $scope.isShow = function(){
        	return sharedProperties.getNowPage()=='NationalIDReceiver';
        };
    });

    app.controller('CheckDocumentController', function ($scope,sharedProperties) {
    	$scope.requireDocuments=[
    		{
    			name:'สำเนาบัตรประชาชน',
    			isHave:true
    		},{
    			name:'สำเนาทะเบียนบ้าน',
    			isHave:true
    		}];

    	$scope.passClick = function(){
    		alert(angular.toJson($scope.requireDocuments));
    	};

    	$scope.notPassClick = function(){
    		alert("Not Pass");
    	};

    	$scope.isShow = function(){
        	return sharedProperties.getNowPage()=='CheckDocument';
        };
    });

    app.service('sharedProperties', function () {
    	var nowPage = 'NationalIDReceiver';

    	return {
            getNowPage: function () {
                return nowPage;
            },
            setNowPage: function(value) {
                nowPage = value;
            }
        };
    });
     
})();