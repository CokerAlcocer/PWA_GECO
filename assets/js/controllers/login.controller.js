app.controller('LOGIN_CONTROLLER', ['$scope', '$http', ($scope, $http) => {
    const CONST_URL = 'ip_servicios';
    (() => {
        let token = localStorage.getItem('token');
        if (token) {
            window.location.replace('../../../view/auth/index.html');
        }
    })();

    document.addEventListener('submit', e => {
        $scope.switchOperation();
    });

    $scope.sessionActive = false;

    $scope.user = {}

    $scope.form = true;
    $scope.changeForm = () => {
        $scope.form = !$scope.form;
        document.title = `GECO | ${$scope.form ? 'Inicio de sesión' : 'Formulario de registro'}`;
    } 

    const login = async () => {
        // try {
        //     await $http({
        //         url: `${CONST_URL}/user/login`,
        //         method: 'POST',
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json'
        //         },
        //         data: JSON.stringify({
        //             email: $scope.user.name,
        //             password: $scope.user.password
        //         })
        //     }).then(({data: {data: {token, idUser}}}) => {
        //         if(token && idUser) {
        //             initSession(token, idUser);
        //         } else {
        //             $scope.error = 500;
        //         }
        //     }).catch(err => {
        //         console.log(err);
        //     });
        // } catch (error) {
        //     console.log('SIGNING_ERROR');
        // }
        initSession('token xd', {});
    }

    const initSession = (token, idUser) => {
        localStorage.setItem('token', token);
        localStorage.setItem('user', 'Test User');
        localStorage.setItem('role', 'Gerente');
        //localStorage.setItem('userSession', JSON.stringify(idUser));
        localStorage.setItem('page', 0);
        window.location.replace('../../../view/auth/index.html');
    }

    const register = () => {
        
    }

    $scope.switchOperation = () => $scope.form ? login() : register();
}]);