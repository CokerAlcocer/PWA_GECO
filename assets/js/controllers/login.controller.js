app.controller('LOGIN_CONTROLLER', ['$scope', '$http', ($scope, $http) => {
    document.addEventListener('submit', e => {
        $scope.switchOperation();
    });

    $scope.sessionActive = false;

    $scope.user = {
        role: 'Gerente',
        hotel: {
            name: 'Hoteles Super Mario Bros con un nombre super largo para ve el responsive',
            colors: [
                '#212529', '#59367d', '#6FFD73'
            ]
        }
    }

    $scope.form = true;
    $scope.changeForm = () => {
        $scope.form = !$scope.form;
        document.title = `GECO | ${$scope.form ? 'Inicio de sesión' : 'Formulario de registro'}`;
    } 

    const login = () => {
        // TODO del login
        localStorage.setItem('role', $scope.user.role);
        localStorage.setItem('user', $scope.user.name);
        localStorage.setItem('hotelName', $scope.user.hotel.name);
        localStorage.setItem('hotelColors', $scope.user.hotel.colors);
        localStorage.setItem('page', 0);
        window.location.replace('../../../view/auth/index.html');
    }

    const register = () => {
        
    }

    $scope.switchOperation = () => $scope.form ? login() : register();
}]);