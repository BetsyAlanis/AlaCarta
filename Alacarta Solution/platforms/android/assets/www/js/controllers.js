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

.controller('CategoriasCtrl', function ($scope, $window, $state) {
    $scope.Categorias = window.categorias;

    $scope.ContarOpciones = function(categoriaId)
    {
        var cantidad = 0;
        angular.forEach(window.menu, function (x)
        {
            if(x.categoriaId == categoriaId)
            {
                cantidad++;
            }
        }
        )
        return cantidad;
    }
    /*
    $scope.IrA  = function(categoriaId)
    {
        $state.go('tab.menu-cat', {platilloId:1, categoriaId:categoriaId} )
    }*/
})
.controller('MenuCtrl', function($scope, $window, $log, $stateParams)
{
    $scope.platilloId = $stateParams.platilloId;
    $scope.currentImagenObjeto = {};
    $scope.cols = [0, 1, 2];
    if ($window.screen.width < 480) {
        $scope.cols = [0, 1];
    }
    $scope.columna1 = window.menu;

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