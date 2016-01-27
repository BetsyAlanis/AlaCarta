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


.controller('MenuCtrl', function($scope, $window, $log, $stateParams)
{
    $scope.platilloId = $stateParams.platilloId;
    $scope.currentImagenObjeto = {};
    $scope.cols = [0, 1, 2];
    if ($window.screen.width < 480) {
        $scope.cols = [0, 1];
    }
    $scope.columna1 = [{
        imagen: 'img/takeshi.jpg',
        titulo: 'Takeshi',
        descripcion: 'Alga por dentro, salmon en salsa de no estoy segura que, aguacate y filadelfia',
        precio: 10.50,
        platilloId:1
    }, {
        imagen: 'img/especial.jpg',
        titulo: 'Especial',
        descripcion: 'californiadesc',
        precio: 11.30,
        platilloId:2
    }, {
        imagen: 'img/togareshi.jpg',
        titulo: 'Togareshi',
        descripcion: 'takeshidesc',
        precio: 10.00,
        platilloId: 3
    },{
        imagen: 'img/california.jpg',
        titulo: 'California',
        descripcion: 'takeshidesc',
        precio: 11.34,
        platilloId: 4
    }, {
        imagen: 'img/cordonblue.jpg',
        titulo: 'Cordon Blue',
        descripcion: 'takeshidesc',
        precio:10.30,
        width: '50%',
        platilloId: 5
    }, {
        imagen: 'img/Charolas.jpg',
        titulo: 'Charolas',
        descripcion: 'takeshidesc',
        precio: 11.23,
        width: '50%',
        platilloId: 6
    }];

    angular.forEach($scope.columna1, function (current) {
        if(current.platilloId == $scope.platilloId)
        {
            $scope.currentImagenObjeto = current;
        }

    })

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