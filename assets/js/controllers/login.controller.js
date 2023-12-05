app.controller('LOGIN_CONTROLLER', ['$scope', '$http', ($scope, $http) => {
    document.addEventListener('submit', e => {
        $scope.switchOperation();
    });

    $scope.register = {}
    $scope.sessionActive = false;
    $scope.users = [
        {
            name: 'Sergio',
            surname: 'Cortes',
            lastname: 'Popoca',
            password: "admin",
            role: "Cliente",
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
        },
        {
            name: 'Alcocer',
            surname: 'Dominguez',
            lastname: 'Popoca',
            email:'alcocer32@gmail.com',
            password: "admin",
            role:"Proveedor",
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

    ]
$scope.user = {}


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

       
        console.log($scope.users.findIndex(us => us.email == $scope.user.email ))
        console.log($scope.users)
        // TODO del login
       if($scope.users.find(us => us.email == $scope.user.email ) != undefined){
        let findUsIndex = $scope.users.findIndex(us => us.email == $scope.user.email );
        if($scope.user.password == $scope.users[findUsIndex].password){
            $scope.user =$scope.users[findUsIndex];
            Toastify({
                text: "Bienvenido " + `${$scope.user.name} ${$scope.user.surname} ${$scope.user.lastname}` ,
                gravity: "top",
                position: 'right',
                duration: 1700,
                className: 'success',
                close: true,
                style: {
                  background: "linear-gradient(to right, #44C862, #6EFF8F)",
                }
              }).showToast();
              localStorage.setItem('role', $scope.user.role);
              localStorage.setItem('user', $scope.user.email);
              localStorage.setItem('infUser', JSON.stringify($scope.user));
              localStorage.setItem('hotelName', $scope.user.hotel.name);
              localStorage.setItem('hotelColors', $scope.user.hotel.colors);
              localStorage.setItem('page', 0);
              
           window.location.replace('../../../view/auth/index.html');
        }else{
            Toastify({
                text: "Correo/Contraseña incorrectos",
                gravity: "top",
                position: 'right',
                close: true,
                style: {
                  background: "linear-gradient(to right, #C8770F, #FFB250)",
                }
              }).showToast();    
        }
        
       }else{
        Toastify({
            text: "Usuario no existente",
            gravity: "top",
            position: 'right',
            close: true,
            style: {
              background: "linear-gradient(to right, #C8770F, #FFB250)",
            }
          }).showToast();
       }
   
     
        
    }

    const register = () => {
        
    }

    $scope.registrar = (user) =>{
        user.birthdate = ''
        user.references = ''
        user.hotel = {
            name: 'Labored',
            colors: [
                '#212529', '#59367d', '#6FFD73'
            ]
        }

        $scope.users.push(user);
        console.log($scope.users)
        Toastify({
            text: "Usuario registrado, ya puedes iniciar sesión",
            gravity: "top",
            position: 'right',
            duration: 1700,
            className: 'success',
            close: true,
            style: {
              background: "linear-gradient(to right, #44C862, #6EFF8F)",
            }
          }).showToast();
          $scope.changeForm();
    }

    $scope.switchOperation = () => $scope.form ? login() : $scope.registrar();
}]);