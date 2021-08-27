addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn-menu')
    if (btn_menu) {
        btn_menu.addEventListener('click', () => {
            const menu_items = document.querySelector('.menuItems')
            const informacion = document.querySelector('.informacionUs')
            //const imagen = document.querySelector('.imagen')
            //const servicios = document.querySelector('.servicios')
            //const informacionServicios = document.querySelector('.informacionServicios')
            //const imagenServicios = document.querySelector('.imagenServicios')
            menu_items.classList.toggle('show')
            informacion.classList.toggle('animate__zoomIn')
            //imagen.classList.toggle('animate__zoomIn')
            //servicios.classList.toggle('animate__animated')
            //informacionServicios.classList.toggle('animate__zoomIn')
            //imagenServicios.classList.toggle('animate__zoomIn')
        })
    }
})