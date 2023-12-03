app.controller('userServiceController', ['$scope', '$http', ($scope, $http) => {
 
    $scope.serviceSel = {};
    $scope.user = {}
    $scope.user.score = 0;
    $scope.service ={};
    $scope.services = [
        {
            id:1,
            offer: 'Sergio Cortes Popoca',
            status: 'Atendido',
            name: 'Instalacion paneles solares',
            price: '$1200',
            description: 'Realizada instalación de calentador de agua solar',
            schedule: '12:00 pm',
            valoration: 0
        },
        {
            id:2,
            offer: 'Jorge Bahena Gonzales',
            status: 'En espera',
            name: 'Reparación de refris, aires acondicionados',
            price: '$500',
            description: 'Rellenado de tanque del refrigerador',
            schedule: '12:00 pm',
            valoration: 0
        },
        {
            id:3,
            offer: 'Kelly Vasquez Alonso',
            status: 'En espera',
            name: 'Maquillado y uñas',
            price: '$200',
            description: 'Eres bella en cualquier ambito.',
            schedule: '12:00 pm',
            valoration: 0
        },
    ];
    
$scope.valorar = (user,service) =>{
    if(user.score != undefined && user.comment != undefined){
        service.valoration = 1
        Toastify({
            text: "Valoración guardada",
            gravity: "top",
            position: 'right',
            duration: 1700,
            className: 'success',
            close: true,
            style: {
              background: "linear-gradient(to right, #44C862, #6EFF8F)",
            }
          }).showToast();
    }
    
}
    }]);