document.getElementById('buttonText').addEventListener('click', function () {
    // Obtener el valor del input
    const inputText = document.getElementById('inputText').value;
    
    // Guardar el valor en el localStorage
    localStorage.setItem('storedText', inputText);
    
    // Limpiar el input después de guardar
    document.getElementById('inputText').value = '';
});
