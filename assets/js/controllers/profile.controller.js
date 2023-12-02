app.controller('profileController', ['$scope', '$http','$rootScope', ($scope, $rootScope,$http) => {

        $scope.infoUser = JSON.parse(localStorage.getItem('infUser'));
        $scope.infoUser.birthdate =  new Date($scope.infoUser.birthdate);
        console.log(new Date($scope.infoUser.birthdate))

        $scope.actu = () =>{
            console.log($scope.infoUser.birthdate)
        }


        $scope.modinfo = (op) =>{
            Swal.fire({
                title: op == 'Usuario' ? "Modificando Información de usuario": op == 'Contacto' ? 'Modificando Información de contacto': op == 'Contra' ? 'Cambio de Contraseña' : '',
                text: `¿Seguro de realizarlo?`,
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Aceptar",
                cancelButtonText: "Cancelar"
            }).then(res => {
                //0883C1  5CC8FF
                if(res.isConfirmed){
                    Toastify({
                        text: op == 'Usuario' || op == 'Contacto' ? "Actualizado" : op == 'Contra' ? 'Contraseña modificada': '',
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
            })
           }


    }]);