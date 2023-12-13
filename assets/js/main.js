if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../../sw.js')
        .then(registration => {
            console.log('Instalación con exito: ' + registration);
        }).catch(error => {
            console.log('Instalación sin exito: ' + error);
        });
} else {
    console.log('No se puede instalar el service worker');
}

const isOnline = () => {
    if (navigator.onLine) {
        Swal.fire({
            title: 'Cambio de estado',
            text: 'Actualmente se encuentra en modo ONLINE',
            icon: 'info',
            confirmButtonText: 'OK',
        });
    } else {
        Swal.fire({
            title: 'Cambio de estado',
            text: 'Actualmente se encuentra en modo OFFLINE',
            icon: 'info',
            confirmButtonText: 'OK',
        });
    }
}

window.addEventListener('online', isOnline());
window.addEventListener('offline', isOnline());