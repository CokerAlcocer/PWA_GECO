app.controller('ROOMS_CONTROLLER', ['$scope', '$http', '$rootScope', ($scope, $http, $rootScope) => {
    const API_URL = 'http://localhost:8080';
    $scope.loader = true;
    $scope.roomList = [];
    $scope.typeList = [];
    $scope.userListM = [];
    $scope.userListV = [];
    $scope.typeRoom = {};
    $scope.evaluation = [];
    $scope.roomListShowed = [];
    $scope.room = {};

    $scope.clearForm = () => $scope.room = {}; 
    $scope.findRoom = async () => {
        $scope.loader = true;
        await $http({
            url: `${API_URL}/api/room/hotel/${$rootScope.rootConfig.hotel.idHotel}`,
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        }).then(({data}) => {
            $scope.roomList = data.data ? data.data : [];
            $scope.filterList();
            $scope.findTypes();
        }).catch(() => {
            Swal.fire({
                title: 'Error...',
                text: 'No se pudo realizar la operación',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            $scope.loader = false;
        });
    }

    $scope.filterList = () => {
        switch($rootScope.rootConfig.rol.name) {
            case 'ROLE_GERENTE':
                $scope.roomListShowed = $scope.roomList;
                break;
            case 'ROLE_RECEPCIONISTA':
                $scope.roomListShowed = $scope.roomList.filter(room => room.status < 3);
                break;
            case 'ROLE_LIMPIEZA':
                $scope.roomListShowed = $scope.roomList.filter(room => room.status >= 3);
                break;
            default:
                Swal.fire({
                    title: 'Error...',
                    text: 'No se pudo filtrar la lista según el rol',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
        }
    };

    $scope.findTypes = async () => {
        await $http({
            url: `${API_URL}/api/type-room/hotel/${$rootScope.rootConfig.hotel.idHotel}`,
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        }).then(({data}) => {
            $scope.typeList = data.data ? data.data : [];
            $scope.findUsers();
        }).catch(() => {
            Swal.fire({
                title: 'Error...',
                text: 'No se pudo realizar la operación',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            $scope.loader = false;
        });
    }

    $scope.findUsers = async () => {
        await $http({
            url: `${API_URL}/api/user/hotel/${$rootScope.rootConfig.hotel.idHotel}`,
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        }).then(({data}) => {
            data.data.forEach(user => {
                user.fullName = `${user.idPerson.name} ${user.idPerson.surname}${user.idPerson.lastname ? ` ${user.idPerson.lastname}` : ''}`
            });
            $scope.userListM = data.data ? data.data.filter(user => user.turn === 1 && user.idRol.idRol === 3) : [];
            $scope.userListV = data.data ? data.data.filter(user => user.turn === 2 && user.idRol.idRol === 3) : [];
            $scope.loader = false;
        }).catch(err => {
            console.log(err);
            Swal.fire({
                title: 'Error...',
                text: 'No se pudo realizar la operación',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            $scope.loader = false;
        });
    }

    $scope.create = async () => {
        $scope.loader = true;
        $scope.buttonLoader = true;
        $scope.room.idHotel = {idHotel: $rootScope.rootConfig.hotel.idHotel};
        let typo = $scope.room.idTypeRoom;
        $scope.room.idTypeRoom = {idTypeRoom: typo.idTypeRoom};
        await $http({
            url: `${API_URL}/api/room`,
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            data: JSON.stringify($scope.room)
        }).then(({data}) => {
            Swal.fire({
                title: 'Operación exitosa',
                text: 'El registro se realizó con exito',
                icon: 'success',
                confirmButtonText: 'OK'
            });
            $scope.findRoom();
        }).catch(() => {
            $scope.loader = false;
            $scope.buttonLoader = false;
            Swal.fire({
                title: 'Error...',
                text: 'No se pudo realizar la operación',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        });
    }

    $scope.sendUpdate = async () => {
        $scope.loader = true;
        $scope.buttonLoader = true;
        $scope.room.idHotel = {idHotel: $rootScope.rootConfig.hotel.idHotel};
        let typo = $scope.room.idTypeRoom;
        $scope.room.idTypeRoom = {idTypeRoom: typo.idTypeRoom};
        $scope.room.firstIdUser = $scope.room.firstIdUser ? {idUser: $scope.room.firstIdUser.idUser} : null;
        $scope.room.secondIdUser = $scope.room.secondIdUser ? {idUser: $scope.room.secondIdUser.idUser} : null; 
        console.log($scope.room);
        await $http({
            url: `${API_URL}/api/room`,
            method: 'PUT',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            data: JSON.stringify($scope.room)
        }).then(({data}) => {
            Swal.fire({
                title: 'Operación exitosa',
                text: 'La actualización se realizó con exito',
                icon: 'success',
                confirmButtonText: 'OK'
            });
            $scope.findRoom();
        }).catch(() => {
            $scope.loader = false;
            $scope.buttonLoader = false;
            Swal.fire({
                title: 'Error...',
                text: 'No se pudo realizar la operación',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        });
    }

    $scope.modify = room => $scope.room = angular.copy(room); 

    $scope.rent = async id => {
        await $http({
            url: `${API_URL}/api/room/status/${id}`,
            method: 'PUT',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            data: JSON.stringify({status: 2})
        }).then(({data}) => {
            Swal.fire({
                title: 'Operación exitosa',
                text: 'La renta del cuarto se realizó con exito',
                icon: 'success',
                confirmButtonText: 'OK'
            });
            $scope.findRoom();
        }).catch(() => {
            $scope.loader = false;
            $scope.buttonLoader = false;
            Swal.fire({
                title: 'Error...',
                text: 'No se pudo realizar la operación',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        });
    }

    $scope.left = async id => {
        await $http({
            url: `${API_URL}/api/room/status/${id}`,
            method: 'PUT',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            data: JSON.stringify({status: 5})
        }).then(({data}) => {
            Swal.fire({
                title: 'Operación exitosa',
                text: 'El cuarto ha sido desocupado y preparado para limpieza',
                icon: 'warning',
                confirmButtonText: 'OK'
            });
            $scope.findRoom();
        }).catch(() => {
            $scope.loader = false;
            $scope.buttonLoader = false;
            Swal.fire({
                title: 'Error...',
                text: 'No se pudo realizar la operación',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        });
    }

    $scope.setAsCleaned = async id => {
        Swal.fire({
            title: 'Confirmación',
            text: '¿Está seguro de que quiere marcar esta cuarto para revisión?',
            icon: 'question',
            showDenyButton: true,
            confirmButtonText: 'Sí',
            denyButtonText: 'No',
        }).then(async result => {
            if(result.isConfirmed) {
                await $http({
                    url: `${API_URL}/api/room/status/${id}`,
                    method: 'PUT',
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                    },
                    data: JSON.stringify({status: 3})
                }).then(({data}) => {
                    Swal.fire({
                        title: 'Operación exitosa',
                        text: 'El gerente hará la reivisión correspondiente',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    });
                    $scope.findRoom();
                }).catch(() => {
                    $scope.loader = false;
                    $scope.buttonLoader = false;
                    Swal.fire({
                        title: 'Error...',
                        text: 'No se pudo realizar la operación',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
                });
            }
        });
    }

    $scope.prepareToEvaluate = room => {
        $scope.room = room;
        $scope.room.idTypeRoom.evaluationItems.forEach(evi => {
            $scope.evaluation.push({
                idEvi: evi.idEvaluationItem,
                nameEvi: evi.name,
                radioValue: 2
            });
        });
    }

    $scope.checkList = () => {
        let flag = false;
        Swal.fire({
            title: 'Confirmación',
            text: '¿Todos los rubros se llenaron correctamente?',
            icon: 'question',
            showDenyButton: true,
            confirmButtonText: 'Sí',
            denyButtonText: 'No',
        }).then(async result => {
            $scope.evaluation.forEach(evi => {
                if(evi.radioValue === 2) {
                    flag = true;
                    return;
                }
            });

            if(result.isConfirmed) {
                //mandar a llamar al endopint para validar incidencias
                // si llega vacia, que haga el put
                // si llega llena, que mande un sweet alert

                if(false) {
                    await $http({
                        url: `${API_URL}/api/room/status/${$scope.room.idRoom}`,
                        method: 'PUT',
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${localStorage.getItem('token')}`
                        },
                        data: JSON.stringify({status: !flag ? 1 : 5})
                    }).then(({data}) => {
                        Swal.fire({
                            title: 'Operación exitosa',
                            text: `La actualización se realizó correctamente${flag ? ', pero se encontraron detalles durante la revisión' : ''}`,
                            icon: !flag ? 'success' : 'warning',
                            confirmButtonText: 'OK'
                        });
                        $scope.evaluation = [];
                        $scope.room = {};
                        $scope.findRoom();
                    }).catch(() => {
                        $scope.loader = false;
                        $scope.buttonLoader = false;
                        Swal.fire({
                            title: 'Error...',
                            text: 'No se pudo realizar la operación',
                            icon: 'error',
                            confirmButtonText: 'OK'
                        });
                    });
                }
            }
        });
    }
}]);