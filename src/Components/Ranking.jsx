import Auto from './Auto.jsx';

function Ranking() {
    const autos = [
        {
            numero: 10,
            nombre: 'Lamborghini Aventador SVJ',
            imagen: '/images/Lamborghini10.jpg',
            marca: 'Lamborghini (Italia)',
            velocidad: '349 km/h',
            motor: 'V12 de 6.5 L, 770 hp',
            aceleracion: '2,6 segundos',
            descripcion: 'Este modelo representa la ingeniería de Lamborghini, con un rendimiento impresionante y un diseño agresivo.'
        },
        {
            numero: 9,
            nombre: 'Pagani Huayra',
            imagen: '/images/Pagani92.jpg',
            marca: 'Pagani (Italia)',
            velocidad: '383 km/h',
            motor: 'V12 biturbo de 6.0 L, 730 hp',
            aceleracion: '3,2 segundos',
            descripcion: 'Con una atención al detalle artesanal y un diseño único, el Huayra es tanto una obra de arte como una máquina de velocidad.'
        },
        {
            numero: 8,
            nombre: 'Aston Martin Valkyrie',
            imagen: '/images/Aston8.jpg',
            marca: 'Aston Martin (Reino Unido)',
            velocidad: '402 km/h',
            motor: 'V12 híbrido de 6.5 L, aproximadamente 1.160 hp',
            aceleracion: 'aproximadamente 2,5 segundos',
            descripcion: 'Desarrollado con tecnología inspirada en la competición, este automóvil de calle tiene ADN de Fórmula 1.'
        },
        {
            numero: 7,
            nombre: 'Koenigsegg Regera',
            imagen: '/images/koenigsegg7.jpg',
            marca: 'Koenigsegg (Suecia)',
            velocidad: 'más de 400 km/h, según el fabricante',
            motor: 'V8 biturbo híbrido de 5.0 L, 1.500 hp',
            aceleracion: 'aproximadamente 2,8 segundos',
            descripcion: 'Combina potencia eléctrica y de combustión para ofrecer una experiencia de conducción extraordinaria.'
        },
        {
            numero: 6,
            nombre: 'McLaren Speedtail',
            imagen: '/images/McLaren6.jpg',
            marca: 'McLaren (Reino Unido)',
            velocidad: '403 km/h',
            motor: 'V8 biturbo híbrido de 4.0 L, 1.055 hp',
            aceleracion: 'aproximadamente 3 segundos',
            descripcion: 'Su diseño aerodinámico y su configuración de tres asientos lo convierten en un automóvil muy particular.'
        },
        {
            numero: 5,
            nombre: 'Rimac Nevera',
            imagen: '/images/Rimac5.jpg',
            marca: 'Rimac (Croacia)',
            velocidad: '412 km/h',
            motor: 'cuatro motores eléctricos, 1.914 hp',
            aceleracion: '1,81 segundos',
            descripcion: 'Este hiperdeportivo eléctrico combina tecnología avanzada con una aceleración impresionante.'
        },
        {
            numero: 4,
            nombre: 'SSC Tuatara',
            imagen: '/images/SSC4.jpg',
            marca: 'SSC North America (Estados Unidos)',
            velocidad: '455 km/h registrados en una prueba; otras cifras anunciadas son superiores',
            motor: 'V8 biturbo de 5.9 L, hasta 1.750 hp con combustible E85',
            aceleracion: 'cifra variable según las condiciones',
            descripcion: 'Su diseño futurista y su enfoque aerodinámico lo convierten en uno de los grandes protagonistas de la búsqueda de velocidad máxima.'
        },
        {
            numero: 3,
            nombre: 'Hennessey Venom F5',
            imagen: '/images/Hennessey3.jpg',
            marca: 'Hennessey (Estados Unidos)',
            velocidad: 'objetivo superior a 480 km/h; no debe confundirse con una velocidad máxima oficialmente demostrada',
            motor: 'V8 biturbo de 6.6 L, hasta 1.817 hp',
            aceleracion: 'aproximadamente 2,6 segundos, según las condiciones',
            descripcion: 'Diseñado para alcanzar velocidades extremas, este hiperdeportivo estadounidense destaca por su potencia y ligereza.'
        },
        {
            numero: 2,
            nombre: 'Bugatti Chiron Super Sport 300+',
            imagen: '/images/Bugatti2.jpg',
            marca: 'Bugatti (Francia)',
            velocidad: '490,48 km/h en una prueba especial',
            motor: 'W16 de 8.0 L, 1.600 PS',
            aceleracion: 'aproximadamente 2,4 segundos',
            descripcion: 'Este modelo alcanzó una velocidad superior a las 300 millas por hora durante una prueba realizada en una pista de pruebas.'
        },
        {
            numero: 1,
            nombre: 'Koenigsegg Jesko Absolut',
            imagen: '/images/Koenigsegg1.jpg',
            marca: 'Koenigsegg (Suecia)',
            velocidad: 'más de 500 km/h como objetivo teórico; no es una velocidad máxima oficialmente demostrada',
            motor: 'V8 biturbo de 5.0 L, hasta 1.600 hp con combustible E85',
            aceleracion: 'depende de las condiciones de prueba',
            descripcion: 'Diseñado para minimizar la resistencia al aire, el Jesko Absolut busca alcanzar velocidades extraordinarias.'
        }
    ];

    return (
        <main className="contenido ranking-pagina">

            <section className="ranking-intro">

                <span className="ranking-intro-etiqueta">
                    VELOXMAX | ALTO RENDIMIENTO
                </span>

                <h1>La velocidad no tiene límites</h1>

                <p>
                    Potencia, ingeniería y aerodinámica se unen en algunas de las
                    máquinas más extraordinarias del mundo. Descubre los
                    hiperdeportivos que desafían los límites de la velocidad,
                    conoce sus características y explora la tecnología que los
                    convierte en verdaderas obras de ingeniería automotriz.
                </p>

            </section>

                {autos.map((auto) => (
                    <Auto
                        key={auto.numero}
                        numero={auto.numero}
                        nombre={auto.nombre}
                        imagen={auto.imagen}
                        marca={auto.marca}
                        velocidad={auto.velocidad}
                        motor={auto.motor}
                        aceleracion={auto.aceleracion}
                        descripcion={auto.descripcion}
                    />
                ))}
            

            <section className="frase-final">
                <h2>
                    "Detrás de cada máquina extrema hay algo más poderoso
                    que la ingeniería: el sueño humano de ir siempre más
                    lejos, más rápido y sin límites."
                </h2>
            </section>

        </main>
    );
}

export default Ranking;