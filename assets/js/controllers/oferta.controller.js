app.controller('ofertaController', ['$scope', '$http', ($scope, $http) => {
 
$scope.ofertaSel = {};
$scope.ofertaSel.descriptionUs = ''
$scope.ofertaSel.scheduleUs = null
$scope.ofertas = [
    {
        id:1,
        offer: 'Sergio Cortes Popoca',
        status: 'Atendido',
        name: 'Instalacion paneles solares',
        img: '../../../assets/images/thingjpg.jpg',
        price: '$300',
        slogan: 'La energía en tus manos',
        description: 'Contactame para acordar precios y fechas.',
        offerPhone: '+527776542313',
        rating: 55,
        descriptionUs: '',
        scheduleUs: null,
        schedule: '09:00 am - 03:00 pm'

    },
    {
        id:2,
        offer: 'Sergio Cortes Popoca',
        name: 'Manteniento de equipo de computo',
        img: '../../../assets/images/thingjpg.jpg',
        price: '$400',
        slogan: 'El rendimiento a tu alcanze',
        description: 'Contactame para conocer tus necesidades y brindarte los precios a tu medida.',
        offerPhone: '+52777098765',
        rating: 80,
        descriptionUs: '',
        scheduleUs: null,
        schedule: '10:00 am - 04:30 pm'
    },
    {
        id:3,
        offer: 'Sergio Cortes Popoca',
        status: 'Verificado',
        name: 'Limpieza de albera',
        img: '../../../assets/images/thingjpg.jpg',
        price: '$900',
        slogan: 'Calidad y claridad al contacto.',
        description: 'Contactame para ofrecerte los mejores precios acorde al tamaño de tu piscina.',
        offerPhone: '+527776541235',
        rating: 75,
        descriptionUs: '',
        scheduleUs: '',
        schedule: '08:00 am - 03:30 pm'
    },
    {
        id:4,
        offer: 'Sergio Cortes Popoca',
        status: 'Sin verificar',
        name: 'Desbloqueo/Flexeo - Cuenta Google/Icloud',
        img: '../../../assets/images/thingjpg.jpg',
        price: '$900',
        slogan: 'Calidad y claridad al contacto.',
        description: 'Contactame para ofrecerte los mejores precios acorde al tamaño de tu piscina.',
        offerPhone: '+527776234556',
        rating: 90,
        descriptionUs: '',
        scheduleUs: '',
        schedule: '11:00 am - 05:00 pm'
    }
];


$scope.adicionInfo = (oferta) =>{
    $scope.ofertaSel = angular.copy(oferta);
    $('#offerDetails').modal('show');
}

$scope.contratar = () =>{
    $('#offerDetails').modal('hide');
    $('#offerContract').modal('show');
}


$scope.regContrato = (ofer) =>{
    if(ofer.descriptionUs != '' && ofer.scheduleUs != null){
        Swal.fire({
            title: "Contratación del servicio",
            text: `¿Seguro de solicitarlo?`,
            icon: "info",
            showCancelButton: true,
            confirmButtonText: "Aceptar",
            cancelButtonText: "Cancelar"
        }).then(res => {
            //0883C1  5CC8FF
            if(res.isConfirmed){
                Toastify({
                    text: "Contratado",
                    gravity: "top",
                    position: 'right',
                    duration: 1700,
                    className: 'success',
                    close: true,
                    style: {
                      background: "linear-gradient(to right, #44C862, #6EFF8F)",
                    }
                  }).showToast();
            }else{
                Toastify({
                    text: "Piensalo más adelante",
                    gravity: "bottom",
                    position: 'left',
                    close: true,
                    style: {
                      background: "linear-gradient(to right, #C8770F, #FFB250)",
                    }
                  }).showToast();
            }
            $('#offerContract').modal('hide');
        })
    }else{
        Toastify({
            text: "Campos faltantes",
            gravity: "bottom",
            position: 'left',
            close: true,
            style: {
              background: "linear-gradient(to right, #C8770F, #FFB250)",
            }
          }).showToast();
    }
 
}
}]);