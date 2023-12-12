app.controller('DASHBOARD_CONTROLLER', ['$scope', '$http', '$rootScope', ($scope, $http, $rootScope) => {
    const API_URL = 'http://localhost:8080';
    $scope.roomList = [];
    $scope.loader = true;
    
    $scope.findRooms = () => {
        $http({
            url: `${API_URL}/api/room/hotel/${$rootScope.rootConfig.hotel.idHotel}`,
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        }).then(({data}) => {
            $scope.roomList = data.data;
            $scope.loader = false;
        }).catch(() => {
            console.log('Error al recuperar la información');
        });
    }

    $scope.findRooms();
}]);