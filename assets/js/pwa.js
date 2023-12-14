
if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js');
}

const isOnline = () => {
    if (navigator.onLine) {
        Swal.fire({
            title: 'Modo ONLINE',
            text: 'Ya cuentas con conexión a internet',
            icon: 'success',
            confirmButtonText: 'OK',
        });
    } else {
        Swal.fire({
            title: 'Modo OFFLINE',
            text: 'No cuentas con conexión a internet',
            icon: 'warning',
            confirmButtonText: 'OK',
        });
    }
}

window.addEventListener('online', isOnline);
window.addEventListener('offline', isOnline);