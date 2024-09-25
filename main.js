

// Función para generar corazones con animación
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        // Posición aleatoria
        const xPos = Math.random() * window.innerWidth;
        const yPos = Math.random() * window.innerHeight;
        heart.style.left = xPos + 'px';
        heart.style.top = yPos + 'px';

        // Variación de la inclinación del corazón (izquierda o derecha)
        const rotation = Math.random() < 0.5 ? '5deg' : '-60deg';
        console.log(rotation);
        heart.style.setProperty('--rotation', rotation);

        // Variación de tamaño inicial del corazón
        const initialSize = Math.random() * 0.5 + 0.5; // Tamaño inicial entre 0.5x y 1x
        heart.style.transform = `scale(${initialSize}) rotate(${rotation})`;

        // Crear el círculo verde conectado al corazón
        createCircle(xPos, yPos);

        // Añadir corazón al documento
        document.body.appendChild(heart);

        

        // Eliminar corazón después de 2.5 segundos
        setTimeout(() => {
           // heart.remove();
        }, 2500);
    }

    // Función para generar el borde verde (círculo) en el centro del corazón
    function createCircle(x, y) {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        
        // Posición del círculo centrada con respecto al corazón
        circle.style.left = (x ) + 'px'; // Alineamos el círculo en el centro del corazón
        circle.style.top = (y) + 'px';

        // Añadir círculo al documento
        document.body.appendChild(circle);

        // Eliminar círculo después de 2 segundos
        setTimeout(() => {
            circle.remove();
        }, 2000);
    }

    // Crear corazones y círculos de manera sincronizada
    function createHeartWithCircle() {
        createHeart();
    }

    // Generar corazones y círculos continuamente
    //setInterval(createHeartWithCircle, 1000);



onload = () =>{
    //document.body.classList.remove("container");
};
