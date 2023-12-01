app.controller('LOGIN_CONTROLLER', ['$scope', '$http', ($scope, $http) => {
    document.addEventListener('submit', e => {
        $scope.switchOperation();
    });

    $scope.sessionActive = false;
    $scope.users = ['sergiocortes518@gmail.com',
     'alcocer32@gmail.com',
     'rodolfo21@gmail.com']

    $scope.user = {
        
        hotel: {
            name: 'Labored',
            colors: [
                '#212529', '#59367d', '#6FFD73'
            ]
        }
    }

    $scope.form = true;
    
    $scope.changeForm = () => {
        $scope.form = !$scope.form;
        document.title = `laboRed | ${$scope.form ? 'Inicio de sesión' : 'Formulario de registro'}`;
    } 

    const login = () => {
        // TODO del login
       if($scope.user.name == 'sergiocortes518@gmail.com'){
        $scope.user.role = 'Cliente';
       }else if($scope.user.name == 'alcocer32@gmail.com'){
        $scope.user.role = 'Proveedor';
       }else if($scope.user.name == 'rodolfo21@gmail.com'){
        $scope.user.role = 'Admin';
       }
        localStorage.setItem('role', $scope.user.role);
        localStorage.setItem('user', $scope.user.name);
        localStorage.setItem('hotelName', $scope.user.hotel.name);
        localStorage.setItem('hotelColors', $scope.user.hotel.colors);
        localStorage.setItem('page', 0);
        if($scope.users.includes($scope.user.name)){
            window.location.replace('../../../view/auth/index.html');
        }else{
            alert('Usuario no existente')
        }
        
    }

    const register = () => {
        
    }

    $scope.switchOperation = () => $scope.form ? login() : register();
}]);