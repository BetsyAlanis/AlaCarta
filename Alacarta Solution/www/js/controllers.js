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
        descripcion: 'Por dentro pepino, aguacate, camarón y philadelphia, encima spicy.  <br/>Otras variaciones:  <br/>Camaron - $95.00  <br/>Pulpo - $80.00\nSurimi - $75.00 \nSalmon - $85.00\nAtun - $85.00',
        precio: 85.00,
        platilloId:1
    }, {
        imagen: 'img/especial.jpg',
        titulo: 'Especial Roll',
        descripcion: 'Por dentro camarón, salmón, philadelphia.'+
            'Encima ensalada especial y rebanadas de aguacate.',
        precio: 80.00,
        platilloId:2
    }, {
        imagen: 'img/togareshi.jpg',
        titulo: 'Togareshi',
        descripcion: '(Rollo natural) Por dentro salmón, pepino y aguacate, forado en togareshi.',
        precio: 65.00,
        platilloId: 3
    },{
        imagen: 'img/california.jpg',
        titulo: 'California Roll',
        descripcion: 'Surimi, philadelphia y aguacate por dentro.',
        precio: 55.00,
        platilloId: 4
    }, {
        imagen: 'img/cordonblue.jpg',
        titulo: 'Cordon Blue',
        descripcion: 'Por dentro pechuga de pollo, tocino y philadelphia. Por fuera queso gratinado.',
        precio:65.00,
        platilloId: 5
    }, {
        imagen: 'img/manchis.jpg',
        titulo: 'Mancis Roll',
        descripcion: 'Por dentro res, tocino, camarón, surimi, pollo, '+
            'aguacate y queso philadelphia. Por fuera queso' +
            'manchego y americano gratinado.',
        precio: 90.00,
        platilloId: 6
    },
    {
        imagen: 'img/kiyoshi-roll.jpg',
        titulo: 'Kiyoshi Roll',
        descripcion: '(Rollo sin arroz) Por dentro tampico, camarón,'+
        'aguacate y philadelphia, alga por fuera y empanizado.',
        precio: 55.00,
        platilloId:7
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