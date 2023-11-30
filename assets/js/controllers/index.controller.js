app.controller('INDEX_CONTROLLER', ['$rootScope', '$http', ($rootScope, $http) => {
    const CONST_URL = 'http://localhost:8080';
    (() => {
        let token = localStorage.getItem('token');
        if (!token) {
            window.location.replace('../../../view/errors/403.html');
        }
    })();

    let isSideShowing = false;
    $rootScope.loader = true;
    $rootScope.rootConfig = {}
    $rootScope.styles = {}

    $rootScope.loadPage = async () => {
        await fetch('http://localhost:8080/hotel/getHotel/2', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem('token')
            }
        }).then(res => {
            console.log(res);
        })
    }

    $rootScope.changeView = page => {
        switch(page) {
            case 0:
            case 1:
            case 2:
            case 3:
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
        element.style.backgroundColor = $rootScope.rootConfig.hotel.colors[0];
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