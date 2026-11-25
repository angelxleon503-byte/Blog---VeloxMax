import { Link } from "react-router";
import ArticuloExplorar from "../Components/ArticuloExplorar";
import CategoriaExplorar from "../Components/CategoriaExplorar";

import "./Explorar.css";

function Datos() {

    const articulos = [
        {
            titulo: "¿Por qué los motores V12 son tan especiales?",
            descripcion: "Doce cilindros, un sonido inconfundible y una ingeniería fascinante. Conoce qué hace que los motores V12 sean tan admirados en el mundo de los superdeportivos.",
            imagen: "/images/motor-v12.jpg",
            etiqueta: "RECIENTE"
        },

        {
            titulo: "¿Qué significa realmente JDM?",
            descripcion: "Detrás de estas tres letras existe toda una cultura automotriz. Descubre su significado, sus orígenes y por qué los vehículos japoneses tienen tantos seguidores.",
            imagen: "/images/cultura-jdm.jpg",
            etiqueta: "RECIENTE"
        },

        {
            titulo: "Las 24 Horas de Le Mans: la carrera que pone a prueba los límites",
            descripcion: "No se trata solamente de velocidad: resistencia, estrategia y trabajo en equipo son fundamentales. Conoce por qué esta competición es una de las más importantes del automovilismo.",
            imagen: "/images/le-mans.jpg",
            etiqueta: "RECOMENDADO"
        },

        {
            titulo: "Toyota Supra MK4: cómo se convirtió en un icono",
            descripcion: "Su diseño, su motor y su enorme presencia en la cultura popular lo hicieron inolvidable. Descubre los detalles que llevaron a este deportivo a convertirse en una leyenda.",
            imagen: "/images/supra-mk4.jpg",
            etiqueta: "RECOMENDADO"
        }
    ];


    // CATEGORÍAS DE EXPLORAR

    const categorias = [
        {
            titulo: "Autos legendarios",
            descripcion: "Conoce los automóviles que marcaron generaciones y dejaron una huella imborrable en la historia.",
            imagen: "/images/autos-legendarios.jpg",
            temas: [
                "Historias de automóviles que dejaron huella",
                "Nissan Skyline GT-R R34",
                "Toyota Supra MK4",
                "McLaren F1",
                "Ferrari F40"
            ]
        },

        {
            titulo: "Récords automotrices",
            descripcion: "Descubre las increíbles marcas y hazañas que llevan los límites de la ingeniería automotriz cada vez más lejos.",
            imagen: "/images/records-automotrices.jpg",
            temas: [
                "Autos de producción más rápidos",
                "Récords de aceleración",
                "Hazañas en circuitos",
                "Récords de resistencia"
            ]
        },

        {
            titulo: "Curiosidades automotrices",
            descripcion: "Detalles sorprendentes, datos poco conocidos y características que hacen especial a cada automóvil.",
            imagen: "/images/curiosidades-automotrices.jpg",
            temas: [
                "Datos interesantes de los automóviles",
                "Significado de siglas como GT, RS y SV",
                "Características especiales de algunos motores",
                "Curiosidades sobre diseños automotrices"
            ]
        },

        {
            titulo: "Marcas que hacen historia",
            descripcion: "Conoce el origen, las rivalidades y los acontecimientos que construyeron las marcas más importantes.",
            imagen: "/images/marcas-historia.jpg",
            temas: [
                "Origen de Ferrari y Lamborghini",
                "Rivalidades entre fabricantes",
                "Historia de modelos famosos",
                "Evolución de marcas reconocidas"
            ]
        },

        {
            titulo: "Cultura automotriz",
            descripcion: "Explora las comunidades, tendencias y estilos que han convertido los automóviles en una pasión mundial.",
            imagen: "/images/cultura-automotriz.jpg",
            temas: [
                "Tuning y personalización",
                "Cultura JDM",
                "Autos de películas",
                "Eventos y exhibiciones"
            ]
        },

        {
            titulo: "Mundo del automovilismo",
            descripcion: "Adéntrate en las competiciones donde la velocidad, la estrategia y la habilidad se encuentran.",
            imagen: "/images/mundo-automovilismo.jpg",
            temas: [
                "Fórmula 1",
                "Rally",
                "Carreras de resistencia",
                "Automóviles de competición"
            ]
        }
    ];


    return (
        <main className="contenido pagina-explorar">

            {/* INTRODUCCIÓN */}

            <section className="explorar-introduccion">

                <h2>EXPLORAR</h2>

                <h3>
                    Historias, curiosidades y pasión por los automóviles.
                </h3>

                <p>
                    Descubre el lado más interesante del mundo automotriz.
                    Desde vehículos legendarios y récords sorprendentes
                    hasta curiosidades que todo amante de los automóviles
                    debería conocer.
                </p>

            </section>


            {/* Articulo destacado */}

            <section className="explorar-destacado">

                <div className="destacado-imagen">
                    <img
                        src="/images/supra-mk4.jpg"
                        alt="Toyota Supra MK4"
                    />
                </div>

                <div className="destacado-contenido">

                    <span className="destacado-etiqueta">
                        RECOMENDADO
                    </span>

                    <h2>
                        Toyota Supra MK4: el deportivo japonés
                        que se convirtió en leyenda.
                    </h2>

                    <p>
                        Un automóvil que marcó una generación y
                        conquistó a los amantes de la velocidad.
                        Descubre qué hace tan especial al Supra MK4
                        y cómo llegó a convertirse en uno de los
                        deportivos japoneses más admirados de todos
                        los tiempos.
                    </p>

                    <Link
                        to="#articulos"
                        className="destacado-enlace"
                    >
                        Leer artículo <span>→</span>
                    </Link>

                </div>

            </section>


            {/* SECCIÓN DE ARTÍCULOS */}

            <section className="explorar-articulos" id="articulos">

                <div className="explorar-titulo-seccion">

                    <h2>Descubre más historias</h2>

                    <p>
                        Historias, datos y curiosidades que
                        hacen único al mundo automotriz.
                    </p>

                </div>

                <div className="articulos-grid">

                    {articulos.map((articulo, index) => (

                        <ArticuloExplorar
                            key={index}
                            titulo={articulo.titulo}
                            descripcion={articulo.descripcion}
                            imagen={articulo.imagen}
                            etiqueta={articulo.etiqueta}
                            ruta={articulo.ruta}
                        />

                    ))}

                </div>

            </section>


            {/* SECCIÓN DE CATEGORÍAS */}

            <section className="explorar-categorias">

                <div className="explorar-titulo-seccion">

                    <h2>Explora el mundo automotriz</h2>

                    <p>
                        Seis formas de descubrir todo lo que
                        hace fascinante al mundo de los automóviles.
                    </p>

                </div>

                <div className="categorias-explorar-grid">

                    {categorias.map((categoria, index) => (

                        <CategoriaExplorar
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

export default Datos;
