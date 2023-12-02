app.controller('ofertSolicitadosController', ['$scope', '$http', ($scope, $http) => {

    $scope.servicio = {}

    $scope.solicitados = [
        {
            id:1,
            status: 'Por atender',
            service: 'Instalacion paneles solares',
            client: 'Sergio Cortes Popoca',
            description: 'Instalación de paneles solares',
            schedule: '10:30 am',
            contactPhone: '+527776542313',
            hStart: 'Thu Jan 01 1970 00:53:00 GMT-0600 (hora estándar central)',
            hEnd: 'Thu Jan 01 1970 10:53:00 GMT-0600 (hora estándar central)',
            address: 'Col.Altapalmira #23, Avenida Allende',
            references: 'Casa 2 pisos verde, carro blanco fuera de la misma, porton gris'
        },
        {
            id:2,
            status: 'Atendido',
            client: 'Jorge Alberto Ortiz',
            service: 'Reparación de refris, microondas...etc',
            description: 'Reparación de refrigerador ya no congela',
            schedule: '12:30 am',
            contactPhone: '+527776542313',
            hStart: 'Thu Jan 01 1970 00:53:00 GMT-0600 (hora estándar central)',
            hEnd: 'Thu Jan 01 1970 10:53:00 GMT-0600 (hora estándar central)',
            address: 'Col.Altapalmira #23, Avenida Allende',
            references: 'Casa 2 pisos verde, carro blanco fuera de la misma, porton gris'
        }
    ];


    $scope.completar = () =>{
            Swal.fire({
                title: "Finalizando Servicios",
                text: `¿Seguro de realizarlo?`,
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Aceptar",
                cancelButtonText: "Cancelar"
            }).then(res => {
                //0883C1  5CC8FF
                if(res.isConfirmed){
                    $('#offerDetails').modal('hide');
                    Toastify({
                        text: "Completado",
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
                    $('#offerDetails').modal('hide');
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
            })
    }

    }]);