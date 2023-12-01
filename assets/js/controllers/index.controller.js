app.controller('INDEX_CONTROLLER', ['$rootScope', ($rootScope) => {
    $rootScope.rootConfig = {
        user: {
            name: localStorage.getItem('user'),
            role: localStorage.getItem('role')
        },
        hotel: {
            name: `LaboRed | ${localStorage.getItem('hotelName')}`,
            colors: localStorage.getItem('hotelColors').split(',')
        },
        page: parseInt(localStorage.getItem('page')),
        settings: false
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

    $rootScope.signup = () => {
        window.location.replace('../../../view/login.html');
    }

    $rootScope.loadUpperbar = () => {
        const element = document.getElementById('upperbar');
        element.style.backgroundColor = $rootScope.rootConfig.hotel.colors[0];
    }

    $rootScope.styles = {
        active: {
            'background-color': $rootScope.rootConfig.hotel.colors[0],
            'color': '#FFF',
            'transition': '0.25s'
        },
        inactive: {
            'color': $rootScope.rootConfig.hotel.colors[1],
            'transition': '0.25s'
        }
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

    let isSideShowing = false;
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