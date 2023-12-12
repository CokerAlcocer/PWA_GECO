app.controller('LOGIN_CONTROLLER', ['$scope', '$http', ($scope, $http) => {
    const API_URL = 'http://localhost:8080';
    (() => {
        let token = localStorage.getItem('token');
        if (token) {
            window.location.replace('../../../view/auth/index.html');
        }
    })();

    document.addEventListener('submit', e => {
        $scope.switchOperation();
    });

    $scope.loginButtonLoader = false;
    $scope.error = false;
    $scope.sessionActive = false;

    $scope.user = {}

    $scope.form = true;
    $scope.changeForm = () => {
        $scope.form = !$scope.form;
        document.title = `GECO | ${$scope.form ? 'Inicio de sesión' : 'Formulario de registro'}`;
    } 

    const login = async () => {
        $scope.loginButtonLoader = true;
        $scope.error = false;
        $http({
            url: `${API_URL}/api/user/login`,
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            data: JSON.stringify($scope.user)
        }).then(({data}) => {
            initSession(data);
        }).catch(() => {
            $scope.error = true;
            $scope.loginButtonLoader = false;
        });
    }

    const initSession = ({user, token}) => {
        delete user.password;
        console.log(user);
        localStorage.setItem('userInSession', JSON.stringify(user));
        localStorage.setItem('token', token);
        localStorage.setItem('page', 0);
        window.location.replace('../../../view/auth/index.html');
    }

    const register = () => {
        
    }

    $scope.switchOperation = () => $scope.form ? login() : register();
}]);