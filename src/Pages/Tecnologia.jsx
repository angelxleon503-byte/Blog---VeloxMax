import CategoriaInnovacion from "../Components/CategoriaInnovacion";
import "./Innovacion.css";

function Tecnologia() {

    const categorias = [
        {
            titulo: "Autos eléctricos",
            descripcion: "Descubre cómo funcionan los automóviles eléctricos y cómo están transformando la industria automotriz.",
            imagen: "/images/autos-electricos.jpg",
            temas: [
                "Funcionamiento de los motores eléctricos",
                "Autonomía y tiempos de carga",
                "Automóviles deportivos eléctricos",
                "Ventajas y desafíos de la movilidad eléctrica"
            ]
        },

        {
            titulo: "Conducción autónoma",
            descripcion: "Conoce las tecnologías que permiten a los vehículos desplazarse con cada vez menos intervención humana.",
            imagen: "/images/conduccion-autonoma.jpg",
            temas: [
                "Vehículos que pueden conducirse solos",
                "Sensores, cámaras y radares",
                "Asistentes de conducción",
                "El futuro de la conducción autónoma"
            ]
        },

        {
            titulo: "Tecnología inteligente",
            descripcion: "Explora los sistemas digitales y las funciones inteligentes que mejoran la experiencia dentro del automóvil.",
            imagen: "/images/tecnologia-inteligente.jpg",
            temas: [
                "Tableros digitales y pantallas",
                "Asistentes de voz",
                "Conectividad con teléfonos",
                "Sistemas multimedia"
            ]
        },

        {
            titulo: "Innovación en motores",
            descripcion: "Descubre los avances en motores y sistemas de propulsión que buscan mejorar la potencia y eficiencia.",
            imagen: "/images/innovacion-motores.jpg",
            temas: [
                "Motores híbridos",
                "Nuevos sistemas de propulsión",
                "Rendimiento y eficiencia",
                "Tecnología aplicada a la competición"
            ]
        },

        {
            titulo: "Seguridad automotriz",
            descripcion: "Conoce los sistemas tecnológicos que ayudan a prevenir accidentes y proteger a los ocupantes.",
            imagen: "/images/seguridad-automotriz.jpg",
            temas: [
                "Frenado automático de emergencia",
                "Detección de puntos ciegos",
                "Asistencia de mantenimiento de carril",
                "Sistemas de protección"
            ]
        },

        {
            titulo: "Futuro del automóvil",
            descripcion: "Explora los diseños y las tecnologías que podrían definir la próxima generación de automóviles.",
            imagen: "/images/futuro-automovil.jpg",
            temas: [
                "Concept cars",
                "Diseños futuristas",
                "Materiales ligeros",
                "Nuevas tecnologías automotrices"
            ]
        }
    ];

    return (
        <main className="contenido pagina-innovacion">

            {/* Encabezado*/}
            <section className="innovacion-introduccion">

                <h2>INNOVACIÓN AUTOMOTRIZ</h2>

                <h3>La tecnología que impulsa el futuro</h3>

                <p>
                    El mundo automotriz evoluciona constantemente.
                    Nuevas tecnologías, motores más eficientes y
                    sistemas inteligentes están transformando la
                    manera en que conducimos y entendemos los
                    automóviles. En VELOXMAX exploramos los avances
                    que están marcando el presente y construyendo
                    el futuro de la industria.
                </p>

            </section>


            {/* Artículo destacado */}
            <section className="articulo-destacado">

                <div className="articulo-imagen">
                    <img
                        src="/images/articulo-innovacion.jpg"
                        alt="Innovación y tecnología automotriz"
                    />
                </div>

                <div className="articulo-informacion">

                    <span className="etiqueta-articulo">
                        ARTÍCULO DESTACADO
                    </span>

                    <h2>
                        El futuro de los automóviles:
                        tecnologías que están revolucionando
                        la industria
                    </h2>

                    <p>
                        Un recorrido por los avances que están
                        cambiando el diseño, el rendimiento,
                        la seguridad y la movilidad.
                    </p>

                    <span className="articulo-proximamente">
                        Próximamente: artículo completo
                    </span>

                </div>

            </section>


            {/* Categorías de innovación */}
            <section className="seccion-categorias">

                <div className="categorias-encabezado">

                    <h2>Explora la innovación</h2>

                    <p>
                        Descubre las tecnologías que están
                        transformando el mundo automotriz.
                    </p>

                </div>

                <div className="categorias-grid">

                    {categorias.map((categoria, index) => (

                        <CategoriaInnovacion
                            key={index}
                            titulo={categoria.titulo}
                            descripcion={categoria.descripcion}
                            imagen={categoria.imagen}
                            temas={categoria.temas}
                        />

                    ))}

                </div>

            </section>

        </main>
    );
}

export default Tecnologia;
