app.controller('ROOMS_CONTROLLER', ['$scope', '$http', '$rootScope', ($scope, $http, $rootScope) => {
    const API_URL = 'http://localhost:8080';
    $scope.loader = true;
    $scope.roomList = [];
    $scope.typeList = [];
    $scope.typeRoom = {};
    $scope.roomListShowed = [];
    $scope.room = {};
    
    $scope.findRoom = async () => {
        $scope.loader = true;
        await $http({
            url: `${API_URL}/api/room/hotel/${$rootScope.rootConfig.hotel.idHotel}`,
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        }).then(({data}) => {
            $scope.roomList = data.data ? data.data : [];
            $scope.filterList();
            $scope.findTypes();
        }).catch(() => {
            Swal.fire({
                title: 'Error...',
                text: 'No se pudo realizar la operación',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            $scope.loader = false;
        });
    }

    $scope.filterList = () => $scope.roomListShowed = $scope.roomList;

    $scope.findTypes = async () => {
        await $http({
            url: `${API_URL}/api/type-room/hotel/${$rootScope.rootConfig.hotel.idHotel}`,
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        }).then(({data}) => {
            $scope.typeList = data.data ? data.data : [];
            $scope.loader = false;
        }).catch(() => {
            Swal.fire({
                title: 'Error...',
                text: 'No se pudo realizar la operación',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            $scope.loader = false;
        });
    }

    $scope.create = async () => {
        $scope.loader = true;
        $scope.buttonLoader = true;
        $scope.room.idHotel = {idHotel: $rootScope.rootConfig.hotel.idHotel};
        let typo = $scope.room.idTypeRoom;
        $scope.room.idTypeRoom = {idTypeRoom: typo.idTypeRoom};
        await $http({
            url: `${API_URL}/api/room`,
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            data: JSON.stringify($scope.room)
        }).then(({data}) => {
            Swal.fire({
                title: 'Operación exitosa',
                text: 'El registro se realizó con exito',
                icon: 'success',
                confirmButtonText: 'OK'
            });
            $scope.findRoom();
        }).catch(() => {
            $scope.loader = false;
            $scope.buttonLoader = false;
            Swal.fire({
                title: 'Error...',
                text: 'No se pudo realizar la operación',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        });
    }
}]);