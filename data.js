// Obtener el valor guardado en el localStorage
const storedText = localStorage.getItem('storedText');

// Verificar si hay datos en el localStorage
if (storedText) {
    // Crear un elemento <p> para mostrar el valor guardado
    const p = document.createElement('p');
    p.textContent = `Texto guardado: ${storedText}`;
    
    // Agregar el elemento al cuerpo del documento
    document.body.appendChild(p);
} else {
    const p = document.createElement('p');
    p.textContent = 'No hay datos guardados en localStorage.';
    document.body.appendChild(p);
}
