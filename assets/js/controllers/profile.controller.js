app.controller('profileController', ['$scope', '$http','$rootScope', ($scope, $rootScope,$http) => {

        $scope.infoUser = JSON.parse(localStorage.getItem('infUser'));
        $scope.infoUser.birthdate =  new Date($scope.infoUser.birthdate);
        $scope.infoUser.oldPass = ''
        $scope.infoUser.confirmPass = ''
        $scope.infoUser.newPass = ''

        $scope.actu = () =>{
        }

        $scope.modContra = (userInfo) =>{
          if(userInfo.oldPass == '' ||
          userInfo.newPass == '' || userInfo.confirmPass == ''){
            Toastify({
              text: "Contraseñas faltantes",
              gravity: "top",
              position: 'right',
              close: true,
              style: {
                background: "linear-gradient(to right, #C8770F, #FFB250)",
              }
            }).showToast();
          }else{
            $scope.sendUpdate('Contra',userInfo);
          }
        }
        $scope.modinfo = (op,userInfo) =>{
          if(op == 'Usuario' && userInfo.name == '' ||
          userInfo.surname == '' || userInfo.lastname == '' ||
          userInfo.email == '' || userInfo.birthdate == null ){
            Toastify({
              text: "Información de usuario incompleta.",
              gravity: "top",
              position: 'right',
              close: true,
              style: {
                background: "linear-gradient(to right, #C8770F, #FFB250)",
              }
            }).showToast();
          }else if(op == 'Contacto' && userInfo.address == '' ||
          userInfo.references == '' || userInfo.phone == ''){
            Toastify({
              text: "Información de contacto incompleta.",
              gravity: "top",
              position: 'right',
              close: true,
              style: {
                background: "linear-gradient(to right, #C8770F, #FFB250)",
              }
            }).showToast();
          }else{
            $scope.sendUpdate(op,userInfo);
          }
          
           }

           $scope.sendUpdate = (op,userInfo) =>{
            if(op == 'Contra' && userInfo.oldPass != userInfo.confirmPass){
              Toastify({
                text: "Contraseñas no confirmadas, verificalas.",
                gravity: "top",
                position: 'right',
                close: true,
                style: {
                  background: "linear-gradient(to right, #C8770F, #FFB250)",
                }
              }).showToast();  
            }else{
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
                        text: op == 'Usuario'  ? "Informacion de usuario actualizada" :op == 'Contacto' ? 'Informacion de contacto actualizada' : op == 'Contra' ? 'Contraseña modificada': '',
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
     
           }


    }]);