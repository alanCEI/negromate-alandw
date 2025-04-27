'use strict'

//-------------------------------//
//-------------------------------//
//   Variables const globales    //
//-------------------------------//
//-------------------------------//

    // Botón del .Menú y listado de .Nav
    const menuButton = document.querySelector('.Menu');
    const navList = document.querySelector('.ulNav');

    // Cerrar el menú al hacer clic en cualquier enlace
    const listLinks = document.querySelectorAll('.ulLink');

    // Texto del acordeón - .sectionGallery
    const allGalleryItems = document.querySelectorAll('.item-galleryContainer');

    // Galeria de imagenes - .sectionMediaGallery
    const brandItems = document.querySelectorAll('.media-GalleryBrand');
    const galleryImages = document.querySelectorAll('.item-MediaGallery');
    
    // Mostrar la primera imagen por defecto
    const fImage = document.getElementById('bg-portfolio-7');

    // Sección de productos - .sectionProduct
    const marcaItems = document.querySelectorAll('.productBrand');
    const panelItems = document.querySelectorAll('.productPanel');

    // Cambio de modo oscuro/claro
    const themeToggle = document.getElementById('themeToggle');

//-------------------------------//
//-------------------------------//
//  Event listeners y funciones  //
//-------------------------------//
//-------------------------------//

//---------------------------------------//
// Efecto Parallax para .backgroundHero  //
//---------------------------------------//

/*
Efecto de expasión en el logo central al desplazarse y parallax en el fondo.

- Evento de desplazamiento de la ventana
- Efecto parallax al fondo del header (.backgroundHero) moviéndolo 
en con la posición del scroll
- Expande el logo central (.centralHero) al desplazarse más de 50px
*/
    window.addEventListener('scroll', () => {
    const backgroundHero = document.querySelector('.backgroundHero');
    const scrollPosition = window.pageYOffset;
    // Efecto parallax, mueve el fondo .backgroundHero en proporcion al scroll
    if (backgroundHero) {
        backgroundHero.style.transform = `translateY(${scrollPosition * 0.4}px)`;
    }
    // Expansión para el logo central .centralHero si se mueve mas de 50px
    const centralHero = document.querySelector('.centralHero');
    if (centralHero) {
        if (scrollPosition > 50) {
            centralHero.classList.add('isExpand'); // Aumenta el tamaño o escala
        } else {
            centralHero.classList.remove('isExpand'); // Regresa al tamaño original
        }
    }
});

//-----------------------------------------//
// Menu oculto de .Nav responsive - Header //
//-----------------------------------------//

/*
Menu responsive .Nav, muestra la navegación de las secciones de la web para formato 
de dispositivos pequeños o moviles.

- Al hacer click en el boton de menu, se muestra/oculta la lista del menu
- Cierra el menú al seleccionar una de las opciones de la lista de enlaces
- Visibilidad usando la clase (.isActive)
*/
    // Toggle del menu al hacer click
    menuButton.addEventListener('click', () => {
    navList.classList.toggle('isActive'); // Muestra/oculta el menu
});
    // Cerrar el menú al hacer clic en cualquier enlace del menú
    listLinks.forEach(navLinks => {
    navLinks.addEventListener('click', () => {
    navList.classList.remove('isActive'); // Oculta el menu despues de la selección
    });
});

//-----------------------------------------------------------------------//
//      Mostrar/ocultar el texto del acordeón - .sectionGallery          //
//-----------------------------------------------------------------------//

/*
Acordeon de texto en la sección de .sectionGallery

- Muestra/oculta información al hacer click
- Permite expandir el texto de cada proyecto
*/
    allGalleryItems.forEach(containerItems => {
    containerItems.addEventListener('click', () => {
    // Texto del acordeón dentro del contenedor actual
    const clickText = containerItems.querySelector('.textGallery');
    // Verificar si el texto está visible
    if (clickText.style.display === 'block') {
        clickText.style.display = 'none'; // Si está visible, ocultamos
    } else {
    // Si no está visible, primero ocultar todos los textos
    const allTexts = document.querySelectorAll('.textGallery');
    allTexts.forEach(containerTexts => {
    containerTexts.style.display = 'none';
});
        clickText.style.display = 'block'; // Mostrar el texto seleccionado
    }
});
});

//-----------------------------------------------------------------------//
//      Mostar/ocultar la galeria de marcas - .sectionMediaGallery       //
//-----------------------------------------------------------------------//

/*
Galeria de marcas en la sección .sectionMediaGallery

- Muestra la imagen correspondiente de los proyectos de cada marca seleccionada
- Usando los atributos data-bg para vincular los elementos
- Visibilidad usando la clase (.isActive)
*/
    // Mostrar la primera imagen por defecto
    fImage.classList.add('isActive');
    // Asignar eventos a cada marca
    brandItems.forEach(brand => {
    brand.addEventListener('click', () => {
    const imgId = brand.getAttribute('data-bg'); // Obtiene el id de la imagen a mostrar

    galleryImages.forEach(image => {
    image.classList.remove('isActive'); // Oculta todas las imagenes
});
    // Quitar la clase active
    brandItems.forEach(item => { 
    item.classList.remove('isActive');
});
    // Mostrar la imagen seleccionada
    document.getElementById(imgId).classList.add('isActive');
    // Activar la marca seleccionada con la clase active
    brand.classList.add('isActive');
});
});

//-----------------------------------------------------------------------//
//  Mostrar/ocultar paneles en la seccion de productos - .sectionProduct //
//-----------------------------------------------------------------------//

/*
Paneles de productos en la sección .sectionProduct

- Cambia los paneles de productos al hacer click en cada marca correspondiente y sus imagenes
- Visibilidad usando la clase (.isActive)
- Atributos data-bg para vincular los elementos
*/
    // Asignar eventos a cada marca
    marcaItems.forEach(marca => {
    marca.addEventListener('click', () => {
    // Obtener el ID del panel a mostrar
    const panelId = marca.getAttribute('data-brand');
    // Ocultar todos los paneles
    panelItems.forEach(panel => {
    panel.classList.remove('isActive');
});
    // Quita la seleccion-clase active de todas las marcas
    marcaItems.forEach(item => {
    item.classList.remove('isActive');
});
    // Mostrar el panel seleccionado
    document.getElementById(panelId).classList.add('isActive');
    // Activar la marca seleccionada
    marca.classList.add('isActive');
});
});

//-------------------------------//
//      Modo oscuro/claro        //
//-------------------------------//

/*
Permite alternar entre el modo oscuro y el modo claro, al hacer click en el boton

- Usa la clase .darkMode en Custom properties
- Cambia el texto del botón para indicar el modo actual
- Almacena el modo en la clase del body
- La web en general es oscura en modo normal por lo cual, en este caso, se ha creado al contrario
el boton de cambio de tema a modo claro
*/
    // Evento para el botón de cambio de tema
    themeToggle.addEventListener('click', () => {
    // Alternar el tema
        document.body.classList.toggle('darkMode');
    // Actualizar el texto del botón
        if (document.body.classList.contains('darkMode')) {
        themeToggle.textContent = 'Modo oscuro'; // Si esta claro - mostrar modo oscuro
        } else {
        themeToggle.textContent = 'Modo claro'; // Si esta oscuro - mostrar modo claro
        }
        
});