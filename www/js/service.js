myApp = angular.module('starter.service', []);
var url = adminUUU + '/api/';
var imgurl = url + "upload/";
var imgpath = imgurl + "readFile";
var maxRow = 10;
myApp.factory('Service', function ($http, $ionicLoading, $ionicActionSheet, $timeout, $state) {
  var obj = {
    getNavigation: function () {
      return chats;
    },
    getCategory: function (callback) {
      return $http.post(url + 'Category/search').then(function (data) {
        callback(data);
      });
    },

  };
  return obj;
});
