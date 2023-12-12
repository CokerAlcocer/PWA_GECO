app.controller('INDEX_CONTROLLER', ['$rootScope', '$http', ($rootScope, $http) => {
    const API_URL = 'http://localhost:8080';
    (() => {
        let token = localStorage.getItem('token');
        if (!token) {
            window.location.replace('../../../view/errors/403.html');
        }
    })();
    let isSideShowing = false;
    $rootScope.loader = false;
    $rootScope.rootConfig = {
        page: 0
    };
    $rootScope.styles = {};

    $rootScope.logout = () => {
        localStorage.clear();
        window.location.replace('../../../view/login.html');
    }

    $rootScope.loadPage = () => {
        let userInSession = JSON.parse(localStorage.getItem('userInSession'));
        $rootScope.rootConfig = {
            user: {username, email, status, turn, idUser} = userInSession,
            hotel: userInSession.idHotel,
            rol: userInSession.idRol,
            person: userInSession.idPerson,
            page: 0
        }

        $rootScope.styles = {
            active: {
                'background-color': $rootScope.rootConfig.hotel.primaryColor,
                'color': '#FFFFFF'
            },
            inactive: {
                'background-color': '#FFFFFF',
                'color': $rootScope.rootConfig.hotel.secondaryColor
            }
        }
    }

    $rootScope.changeView = page => {
        switch(page) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                $rootScope.showSideBar();
                localStorage.setItem('page', page);
                $rootScope.rootConfig.page = page;
                break;
            default:
                $rootScope.rootConfig.page = 0;
        }
    }
    
    $rootScope.loadUpperbar = () => {
        const element = document.getElementById('upperbar');
        element.style.backgroundColor = $rootScope.rootConfig.hotel.primaryColor;
    }

    $rootScope.loadSidebarItem = page => page === $rootScope.rootConfig.page ? $rootScope.styles.active : $rootScope.styles.inactive;

    $rootScope.showSiteSettings = flag => {
        if(flag) {
            $rootScope.rootConfig.settings = !$rootScope.rootConfig.settings;
        } else {
            $rootScope.showSideBar();
        }
    };

    $rootScope.loadSettings = () => $rootScope.rootConfig.settings ? $rootScope.styles.active : $rootScope.styles.inactive;

    $rootScope.showSideBar = () => {
        if(!isSideShowing) {
            document.getElementById('sidebar').classList.remove('hidden');
            document.getElementById('backdrop').classList.remove('hidden');
        } else {
            document.getElementById('sidebar').classList.add('hidden');
            document.getElementById('backdrop').classList.add('hidden');
        }

        isSideShowing = !isSideShowing;
    }

}]);