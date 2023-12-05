app.controller('ofertServiciosController', ['$scope', '$http', ($scope, $http) => {

    $scope.oferta = {}
    $scope.eOferta = {}
    $scope.rOfer = {}
    $scope.rOfer.img = '';
    $scope.rOfer.status = 'Activo';
    $scope.rOfer.rating = 1;
    $scope.rOfer.schedule = '';
    $scope.rOfer.id = 0;
    $scope.ofertas = []

    $scope.fillOfertas = (object) => {
        if(object != undefined){
            $scope.ofertas.push(object);
        }else{
            $scope.ofertas.push({
                id:1,
                status: 'Activo',
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
                status: 'Inactivo',
                name: 'Manteniento de equipo de computo',
                img: '../../../assets/images/thingjpg.jpg',
                price: '$400',
                slogan: 'El rendimiento a tu alcanze',
                description: 'Contactame para conocer tus necesidades.',
                offerPhone: '+52777098765',
                rating: 80,
                hStart: 'Thu Jan 01 1970 00:53:00 GMT-0600 (hora estándar central)',
                hEnd: 'Thu Jan 01 1970 10:53:00 GMT-0600 (hora estándar central)',
                schedule: '10:00 am - 04:30 pm'
            })
        }
      
    }
  

    
    
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
    }
    document.getElementById('customFile').onchange = (event) =>{
         const selectedImage = document.getElementById('selectedImage');
        if (event.target.files && event.target.files[0]) {
                    const reader = new FileReader();
            
                    reader.onload = function(e) {
                        selectedImage.src = e.target.result;
                        $scope.rOfer.img = e.target.result;
                    };
            
                    reader.readAsDataURL(event.target.files[0]);
                }
    }

    document.getElementById('customFile1').onchange = (event) =>{
        const selectedImage = document.getElementById('selectedImage1');
       if (event.target.files && event.target.files[0]) {
                   const reader = new FileReader();
           
                   reader.onload = function(e) {
                       selectedImage.src = e.target.result;
                       $scope.eOferta.img = e.target.result
                   };
           
                   reader.readAsDataURL(event.target.files[0]);
               }
   }


   $scope.camStatus = (ofer) =>{
    Swal.fire({
        title: 'Modificación de disponibilidad',
        text: ofer.status == 'Activo' ? '¿Seguro de inhabilitarlo?' : '¿Seguro de habilitarlo?',
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Aceptar",
        cancelButtonText: "Cancelar"
    }).then(res=>{
        if(res.isConfirmed){
            ofer.status = ofer.status == 'Activo' ? 'Inactivo': 'Activo';
            $scope.ofertas[$scope.ofertas.findIndex(of=>of.id == ofer.id)] = ofer;
            Toastify({
                text:   ofer.status == 'Activo' ? 'Servicio inhabilitado': 'Servicio habilitado',
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
        $scope.$apply()
    })
   }
   $scope.editar = (ofer) =>{
    if(ofer.name != '' && ofer.slogan != '' && ofer.price != '' &&
    ofer.hStart != null && ofer.hEnd != null && ofer.description && 
    ofer.offerPhone != '' && ofer.img != '' ){
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
                $scope.ofertas[$scope.ofertas.findIndex(of => of.id ==  ofer.id)] = ofer;
                $scope.$apply()
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
    }else{

    }
  
   }

   $scope.guardar = (ofer) =>{
    if(ofer.name != '' && ofer.slogan != '' && ofer.price != '' &&
    ofer.hStart != null && ofer.hEnd != null && ofer.description && 
    ofer.offerPhone != '' && ofer.img != '' ){
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
                ofer.id = $scope.ofertas.length + 1;
                $scope.fillOfertas(ofer);
                $scope.$apply()
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
                    gravity: "top",
                    position: 'right',
                    close: true,
                    style: {
                      background: "linear-gradient(to right, #C8770F, #FFB250)",
                    }
                  }).showToast();
            }
        })
    }else{
        Toastify({
            text: "Campos faltantes.",
            gravity: "top",
            position: 'right',
            close: true,
            style: {
              background: "linear-gradient(to right, #C8770F, #FFB250)",
            }
          }).showToast();
    }
   
   }

    
    }]);