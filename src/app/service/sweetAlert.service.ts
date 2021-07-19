import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable()

export class SweetAlertService {

  constructor() { }

//Alert min
    minExitoso(mensaje: any): any {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
            }
        });
        Toast.fire({
            icon: 'success',
            title: 'El ' + mensaje + ' se creo con exito'
        });
    }

    minExitosoGeneral(mensaje: any): any {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
            }
        });
        Toast.fire({
            icon: 'success',
            title:  mensaje
        });
    }

    minExitosoActualizar(mensaje: any): any {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
            }
        });
        Toast.fire({
            icon: 'success',
            title: 'El ' + mensaje + ' se actualizo con exito.'
        });
    }

    minExitosoEliminar(mensaje: any): any {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
            }
        });
        Toast.fire({
            icon: 'success',
            title: 'El ' + mensaje + ' se elimino con exito.'
        });
    }

    minError(mensaje: any): any {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
            }
        });
        Toast.fire({
            icon: 'error',
            title: mensaje
        });
    }

    minAdvertencia(mensaje: any): any {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
            }
        });
        Toast.fire({
            icon: 'warning',
            title: mensaje
        });
    }

    minInformativo(mensaje: any): any {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
            }
        });
        Toast.fire({
            icon: 'info',
            title: mensaje
        });
    }

//alert big

    Exitoso(mensaje: any): any {
          Swal.fire({
            title: 'Excelente',
            text: mensaje,
            icon: 'success',
            showCancelButton: false,
            confirmButtonColor: '#339C02',
            confirmButtonText: 'Aceptar',
            iconColor: '#339C02'
        })
    }

    Error(mensaje: any): any {
          Swal.fire({
            title: 'Opsssss!',
            text: mensaje,
            icon: 'error',
            showCancelButton: false,
            confirmButtonColor: '#C70000',
            confirmButtonText: 'Cerrar',
            iconColor: '#C70000'
        })
    }

    Advertencia(mensaje: any): any {
        Swal.fire({
            title: 'Advertencia',
            text: mensaje,
            icon: 'warning',
            showCancelButton: false,
            confirmButtonColor: '#FE8B00',
            confirmButtonText: 'Entiendo',
            iconColor: '#FE8B00'
        })
    }

    Confirmacion(mensaje: any): any {
        Swal.fire({
            title: 'Advertencia',
            text: mensaje,
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#19A500',
            cancelButtonColor: '#BC0202',
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar',
            iconColor: '#3B8CF9'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    }

    //Loading

    Loading() {
    Swal.fire({
        title: 'Ingresando....',
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
            },
        });
    }

    OffSeewtAlert() {
        Swal.close();
    }

}
