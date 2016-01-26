angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})


.controller('MenuCtrl', function($scope, $window, $log)
{
    $scope.cols = [0, 1, 2];
    if ($window.screen.width < 480) {
        $scope.cols = [0, 1];
    }
    $scope.columna1 = [{
        imagen: 'img/takeshi.jpg',
        titulo: 'Takeshi',
        descripcion: 'takeshidesc',
        precio: 10.50,
        width:'50%'
    }, {
        imagen: 'img/especial.jpg',
        titulo: 'Especial',
        descripcion: 'californiadesc',
        precio: 11.30,
        width:'50%'
    }, {
        imagen: 'img/togareshi.jpg',
        titulo: 'Togareshi',
        descripcion: 'takeshidesc',
        precio: 10.00,
        width:'50%'
    },{
        imagen: 'img/california.jpg',
        titulo: 'California',
        descripcion: 'takeshidesc',
        precio: 11.34,
        width:'50%'
    }, {
        imagen: 'img/cordonblue.jpg',
        titulo: 'Cordon Blue',
        descripcion: 'takeshidesc',
        precio:10.30,
        width:'50%'
    }, {
        imagen: 'img/Charolas.jpg',
        titulo: 'Charolas',
        descripcion: 'takeshidesc',
        precio: 11.23,
        width:'50%'
    }];


})

    .controller('MapCtrl', function ($scope, $state, $cordovaGeolocation) {
        var options = { timeout: 10000, enableHighAccuracy: true };

        
            //32.529138, -116.977350
            var latLng = new google.maps.LatLng(32.529138, -116.977350);

            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            var marker = new google.maps.Marker({
                position: latLng,
                map: map,
                title: 'Sikisushi Tijuana'
            });
            $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
            marker.setMap($scope.map);
        
    });