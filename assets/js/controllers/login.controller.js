app.controller('LOGIN_CONTROLLER', ['$scope', '$http', ($scope, $http) => {
    document.addEventListener('submit', e => {
        $scope.switchOperation();
    });

    $scope.sessionActive = false;
    $scope.users = ['sergiocortes518@gmail.com',
     'alcocer32@gmail.com',
     'rodolfo21@gmail.com']
$scope.user = {}

$scope.user1 = {
    name: 'Sergio',
    surname: 'Cortes',
    lastname: 'Popoca',
    email: 'sergiocortes518@gmail.com',
    birthdate: formatDate(new Date('2000-12-09')),
    address: 'Col.Altapalmira, Av.Insurgentes #6 ',
    references: 'Col.Rivera, Av.Portillo #4',
    phone: '(+52)7779876543',
    hotel: {
        name: 'Labored',
        colors: [
            '#212529', '#59367d', '#6FFD73'
        ]
    }
}
//`${new Date('2000/09/12').getDate().toString().padStart(2,'0')}-${(new Date('2000/09/12').getMonth() + 1).toString().padStart(2, '0')}-${new Date('2000/09/12').getFullYear()}`
    $scope.user2 = {
        name: 'Alcocer',
        surname: 'Dominguez',
        lastname: 'Popoca',
        email:'alcocer32@gmail.com',
        birthdate: formatDate(new Date('2000-12-09')),
        address: 'Col.Altapalmira, Av.Insurgentes #6 ',
        references: 'Col.Rivera, Av.Portillo #4',
        phone: '(+52)7779876543',
        hotel: {
            name: 'Labored',
            colors: [
                '#212529', '#59367d', '#6FFD73'
            ]
        }
    }

    function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
      
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      }

    $scope.form = true;
    
    $scope.changeForm = () => {
        $scope.form = !$scope.form;
        document.title = `laboRed | ${$scope.form ? 'Inicio de sesión' : 'Formulario de registro'}`;
    } 

    const login = () => {
        // TODO del login
       if($scope.user.name == 'sergiocortes518@gmail.com'){
        $scope.user = $scope.user1;
        $scope.user.role = 'Cliente';
       }else if($scope.user.name == 'alcocer32@gmail.com'){
        $scope.user = $scope.user2;
        $scope.user.role = 'Proveedor';
       }else{
        alert('Usuario no existente')
       }
       localStorage.setItem('role', $scope.user.role);
       localStorage.setItem('user', $scope.user.email);
       localStorage.setItem('infUser', JSON.stringify($scope.user));
       localStorage.setItem('hotelName', $scope.user.hotel.name);
       localStorage.setItem('hotelColors', $scope.user.hotel.colors);
       localStorage.setItem('page', 0);
       
    window.location.replace('../../../view/auth/index.html');
     
        
    }

    const register = () => {
        
    }

    $scope.switchOperation = () => $scope.form ? login() : register();
}]);