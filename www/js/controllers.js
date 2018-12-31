angular
  .module("starter.controllers", [])

  .controller("AppCtrl", function ($scope, $ionicModal, $timeout) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal
      .fromTemplateUrl("templates/login.html", {
        scope: $scope
      })
      .then(function (modal) {
        $scope.modal = modal;
      });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
      console.log("Doing login", $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function () {
        $scope.closeLogin();
      }, 1000);
    };
  })


  .controller('HomeCtrl', function ($scope, $cordovaInAppBrowser) {

    var options = {
      location: 'yes',
      hideurlbar: 'yes',
      clearcache: 'yes',
      toolbar: 'no',
      zoom: 'no',
      hidenavigationbuttons: 'yes',
      closebuttoncaption: '⟨ Back',
      toolbarcolor: '#3f62ae'
    };
    $scope.tradeRoute = function () {
      $cordovaInAppBrowser.open('http://www.mybizpayetrade.com/', '_self', options)
        .then(function (event) {
          // successx
        })
        .catch(function (event) {
          // error
        });
    }

    $scope.accountRoute = function () {
      $cordovaInAppBrowser.open('https://account.bizpaye.com/', '_self', options)
        .then(function (event) {
          // success
        })
        .catch(function (event) {
          // error
        });
    }

    $scope.shopRoute = function () {
      $cordovaInAppBrowser.open('https://account.bizpaye.com/store', '_self', options)
        .then(function (event) {
          // success
        })
        .catch(function (event) {
          // error
        });
    }

    $scope.propertyRoute = function () {
      $cordovaInAppBrowser.open('http://www.mybizpayetrade.com/BIZpaye-Property--Investments--Properties-For-Sale/4207', '_self', options)
        .then(function (event) {
          // success
        })
        .catch(function (event) {
          // error
        });
    }

    $scope.corperateRoute = function () {
      $cordovaInAppBrowser.open('http://www.mybizpayetrade.com/BIZpaye-Corporate-Trading-Division/4174', '_self', options)
        .then(function (event) {
          // success
        })
        .catch(function (event) {
          // error
        });
    }

    $scope.radioRoute = function () {
      $cordovaInAppBrowser.open('http://www.radiobizpaye.com/', '_self', options)
        .then(function (event) {
          // success
        })
        .catch(function (event) {
          // error
        });
    }

    $scope.rewardRoute = function () {
      $cordovaInAppBrowser.open('http://www.mybizpayetrade.com/BIZpaye-BONUS-Program-/4181', '_self', options)
        .then(function (event) {
          // success
        })
        .catch(function (event) {
          // error
        });
    }

    $scope.franchiseRoute = function () {
      $cordovaInAppBrowser.open('http://www.mybizpayetrade.com/About-BIZpaye-Franchising/4177', '_self', options)
        .then(function (event) {
          // success
        })
        .catch(function (event) {
          // error
        });
    }



  })
