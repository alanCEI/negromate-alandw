'use strict'

// Efecto Parallax para .backgroundHero

    window.addEventListener('scroll', () => {
    const backgroundHero = document.querySelector('.backgroundHero');
    const scrollPosition = window.pageYOffset;
    // Efecto parallax
    if (backgroundHero) {
        backgroundHero.style.transform = `translateY(${scrollPosition * 0.4}px)`;
    }
    // Animación de expansión para centralHero
    const centralHero = document.querySelector('.centralHero');
    if (centralHero) {
        if (scrollPosition > 50) {
            centralHero.classList.add('isExpand');
        } else {
            centralHero.classList.remove('isExpand');
        }
    }
});

// Menu oculto de .Nav responsive - Header

    // Botón del menú y listado de navegación
    // Variables
    const menuButton = document.querySelector('.Menu');
    const navList = document.querySelector('.ulNav');  
    // Función para mostrar/ocultar el menú al hacer clic en el botón
    menuButton.addEventListener('click', () => {
    navList.classList.toggle('isActive');
});
    // Cerrar el menú al hacer clic en cualquier enlace del menú
    const listLinks = document.querySelectorAll('.ulLink');

    listLinks.forEach(navLinks => {
    navLinks.addEventListener('click', () => {
    navList.classList.remove('isActive');
    });

});

// Función para mostrar/ocultar el texto del acordeón - First Gallery

    // Variables
    const allGalleryItems = document.querySelectorAll('.item-galleryContainer');

    allGalleryItems.forEach(containerItems => {
    containerItems.addEventListener('click', () => {
        // Texto del acordeón dentro del contenedor actual
        const clickText = containerItems.querySelector('.textGallery');
        // Verificar si el texto está visible
        if (clickText.style.display === 'block') {
            // Si está visible, ocultamos
            clickText.style.display = 'none';
        } else {
        // Si no está visible, primero ocultar todos los textos
        const allTexts = document.querySelectorAll('.textGallery');
        allTexts.forEach(containerTexts => {
        containerTexts.style.display = 'none';
    });
            // Mostrar el texto del contenedor actual
            clickText.style.display = 'block';
        }
    });
});

// Second Gallery JS

// Función para la galería de marcas - Second Gallery

    // Variables
    const brandItems = document.querySelectorAll('.media-GalleryBrand');
    const galleryImages = document.querySelectorAll('.item-MediaGallery');
    
    // Mostrar la primera imagen por defecto
    const fImage = document.getElementById('bg-portfolio-7');
    fImage.classList.add('isActive');
    
    // Asignar eventos a cada elemento de marca
        brandItems.forEach(brand => {
        brand.addEventListener('click', () => {
            // Obtener el ID de la imagen a mostrar
            const imgId = brand.getAttribute('data-bg');
            
            // Ocultar todas las imágenes
            galleryImages.forEach(image => {
            image.classList.remove('isActive');
            });
            
            // Quitar la clase active de todas las marcas
            brandItems.forEach(item => {
            item.classList.remove('isActive');
            });
            
            // Mostrar la imagen correspondiente
            document.getElementById(imgId).classList.add('isActive');
            
            // Activar la marca seleccionada
            brand.classList.add('isActive');
        });
    });

// Función para manejar los paneles de productos

// Variables para la sección de productos
    const marcaItems = document.querySelectorAll('.productBrand');
    const panelItems = document.querySelectorAll('.productPanel');

// Asignar eventos a cada marca
    marcaItems.forEach(marca => {
    marca.addEventListener('click', () => {
        // Obtener el ID del panel a mostrar
        const panelId = marca.getAttribute('data-brand');
        
        // Ocultar todos los paneles
        panelItems.forEach(panel => {
        panel.classList.remove('isActive');
        });
        
        // Quitar la clase active de todas las marcas
        marcaItems.forEach(item => {
        item.classList.remove('isActive');
        });
        
        // Mostrar el panel correspondiente
        document.getElementById(panelId).classList.add('isActive');
        
        // Activar la marca seleccionada
        marca.classList.add('isActive');
    });
});

// Modo oscuro

    // Función para manejar el cambio de tema
        const themeToggle = document.getElementById('themeToggle');
    
    // Manejador de evento para el botón de cambio de tema
        themeToggle.addEventListener('click', () => {

        // Alternar la clase dark-theme en el body
            document.body.classList.toggle('darkMode');
    
        // Actualizar el texto del botón de cambio de tema
            if (document.body.classList.contains('darkMode')) {
            themeToggle.textContent = 'Modo oscuro';
            } else {
            themeToggle.textContent = 'Modo claro';
            }
        
});
