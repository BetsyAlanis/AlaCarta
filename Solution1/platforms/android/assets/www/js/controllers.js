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


.controller('MenuCtrl', function($scope)
{
    $scope.columna1 = [{
        imagen: 'img/takeshi.jpg',
        titulo: 'Takeshi',
        descripcion: 'takeshidesc',
    }, {
        imagen: 'img/especial.jpg',
        titulo: 'Especial',
        descripcion: 'californiadesc'
    }, {
        imagen: 'img/togareshi.jpg',
        titulo: 'Togareshi',
        descripcion: 'takeshidesc'
    }];
    $scope.columna2 = [{
        imagen: 'img/california.jpg',
        titulo: 'California',
        descripcion: 'takeshidesc'
    }, {
        imagen: 'img/cordonblue.jpg',
        titulo: 'Cordon Blue',
        descripcion: 'takeshidesc'
    }, {
        imagen: 'img/Charolas.jpg',
        titulo: 'Charolas',
        descripcion: 'takeshidesc'
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