// Añadir evento a los enlaces del menú para cambiar el fondo de cada sección y desplazarse suavemente
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();  // Prevenir la acción predeterminada (desplazamiento)
        
        // Obtener el id de la sección que se va a mostrar
        const sectionId = this.getAttribute('href').substring(1);
        
        // Quitar la clase 'active' de todas las secciones
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Añadir la clase 'active' a la sección correspondiente
        const targetSection = document.getElementById(sectionId);
        targetSection.classList.add('active');
        
        // Desplazarse suavemente hacia la sección
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
