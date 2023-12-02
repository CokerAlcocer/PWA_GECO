app.controller('ofertServiciosController', ['$scope', '$http', ($scope, $http) => {

    $scope.oferta = {}
    $scope.eOferta = {}

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
            hStart: 'Thu Jan 01 1970 00:53:00 GMT-0600 (hora estándar central)',
            hEnd: 'Thu Jan 01 1970 10:53:00 GMT-0600 (hora estándar central)',
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
            hStart: 'Thu Jan 01 1970 00:53:00 GMT-0600 (hora estándar central)',
            hEnd: 'Thu Jan 01 1970 10:53:00 GMT-0600 (hora estándar central)',
            schedule: '10:00 am - 04:30 pm'
        }
    ];

    
    
    $scope.registrarServicio = () =>{
        $('#offerDetails').modal('show');
    }


    $scope.editarInfo = (oferta) =>{

        $scope.eOferta = angular.copy(oferta);
        $scope.eOferta.hStart = new Date($scope.eOferta.hStart);
        $scope.eOferta.hEnd = new Date($scope.eOferta.hEnd);
        $('#offerEdit').modal('show');
    }

    $scope.modificar =(oferta) =>{
        console.log(oferta)
    }
    document.getElementById('customFile').onchange = (event) =>{
         const selectedImage = document.getElementById('selectedImage');
        console.log(event.target.files);
        if (event.target.files && event.target.files[0]) {
                    const reader = new FileReader();
            
                    reader.onload = function(e) {
                        selectedImage.src = e.target.result;
                    };
            
                    reader.readAsDataURL(event.target.files[0]);
                }
    }

    document.getElementById('customFile1').onchange = (event) =>{
        const selectedImage = document.getElementById('selectedImage1');
       console.log(event.target.files);
       if (event.target.files && event.target.files[0]) {
                   const reader = new FileReader();
           
                   reader.onload = function(e) {
                       selectedImage.src = e.target.result;
                   };
           
                   reader.readAsDataURL(event.target.files[0]);
               }
   }

   $scope.editar = () =>{
    Swal.fire({
        title: "Modificación de información",
        text: `¿Seguro de realizarlo?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Aceptar",
        cancelButtonText: "Cancelar"
    }).then(res => {
        //0883C1  5CC8FF
        if(res.isConfirmed){
            $('#offerEdit').modal('hide');
            Toastify({
                text: "Actualizado",
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
            $('#offerEdit').modal('hide');
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

   $scope.guardar = () =>{
    Swal.fire({
        title: "Guardando servicio",
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
                text: "Registrado",
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