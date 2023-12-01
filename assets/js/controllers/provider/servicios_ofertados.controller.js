app.controller('ofertServiciosController', ['$scope', '$http', ($scope, $http) => {

    $scope.ofertas = [
        {
            id:1,
            status: 'Verificado',
            name: 'Instalacion paneles solares',
            img: '../../../assets/images/thingjpg.jpg',
            price: '$300',
            slogan: 'La energía en tus manos',
            description: 'Contactame para acordar precios y fechas.',
            offerPhone: '+527776542313',
            rating: 55,
            schedule: '09:00 am - 03:00 pm'
    
        },
        {
            id:2,
            status: 'Por verificar',
            name: 'Manteniento de equipo de computo',
            img: '../../../assets/images/thingjpg.jpg',
            price: '$400',
            slogan: 'El rendimiento a tu alcanze',
            description: 'Contactame para conocer tus necesidades y brindarte los precios a tu medida.',
            offerPhone: '+52777098765',
            rating: 80,
            schedule: '10:00 am - 04:30 pm'
        }
    ];
    
    
    $scope.registrarServicio = () =>{
        $('#offerDetails').modal('show');
    }
    
    }]);