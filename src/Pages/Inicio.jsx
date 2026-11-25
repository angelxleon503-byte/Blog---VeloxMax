import { Link } from 'react-router';

function Inicio() {
    return (
        <main className="contenido inicio-contenido">

            <section className="introduccion">
                <h2>VELOXMAX — Donde comienza la pasión por los automóviles</h2>

                <p>
                    El mundo automotriz es mucho más que motores,
                    velocidad y diseño: es una combinación extraordinaria
                    de ingeniería, innovación, historia y pasión.
                    En VELOXMAX, cada automóvil tiene algo que contar
                    y cada avance representa un nuevo límite por superar.
                </p>

                <p>
                    Descubre los superdeportivos más impresionantes,
                    conoce las historias que marcaron generaciones,
                    explora las tecnologías que están transformando
                    el futuro y adéntrate en los detalles que convierten
                    a una máquina en una obra de arte.
                </p>

                <p className="frase-final">
                    La velocidad es solo el comienzo. Lo extraordinario
                    está en todo lo que hay detrás.
                </p>

                <p>
                    Bienvenido a VELOXMAX. Tu próxima pasión comienza aquí.
                </p>
            </section>

            <section className="frase-tarjeta">
                <blockquote>
                    <p>
                        Y cuando alcanzas ese límite, algo sucede y de
                        repente puedes ir un poco más allá. Con la fuerza
                        de tu mente, tu determinación, tu instinto y tu
                        experiencia, puedes llegar muy alto.
                    </p>

                    <cite>— Ayrton Senna</cite>
                </blockquote>
            </section>

            <section className="explorar">
                <h2>Explora nuestro sitio</h2>

                <p className="explorar-descripcion">
                    Descubre todo lo que VELOXMAX tiene preparado para ti.
                </p>

                <div className="explorar-grid">

                    <Link to="/" className="explorar-tarjeta">
                        <h3>Inicio</h3>
                        <p>
                            Conoce VELOXMAX y descubre nuestra pasión
                            por el mundo automotriz.
                        </p>
                        <span>Descubrir →</span>
                    </Link>

                    <Link to="/ranking" className="explorar-tarjeta">
                        <h3>Ranking</h3>
                        <p>
                            Conoce los superdeportivos más rápidos
                            y sus impresionantes prestaciones.
                        </p>
                        <span>Ver los autos →</span>
                    </Link>

                    <Link to="/tienda" className="explorar-tarjeta">
                        <h3>Tienda</h3>
                        <p>
                            Explora autos de colección, camisas
                            y accesorios para los amantes de los autos.
                        </p>
                        <span>Visitar tienda →</span>
                    </Link>

                    <Link to="/tecnologia" className="explorar-tarjeta">
                        <h3>Innovación</h3>
                        <p>
                            Descubre la tecnología y la ingeniería
                            que impulsan los autos del futuro.
                        </p>
                        <span>Explorar tecnología →</span>
                    </Link>

                    <Link to="/historia" className="explorar-tarjeta">
                        <h3>Historia</h3>
                        <p>
                            Recorre los acontecimientos y los modelos
                            que marcaron la evolución del automóvil.
                        </p>
                        <span>Conocer la historia →</span>
                    </Link>

                    <Link to="/datos" className="explorar-tarjeta">
                        <h3>Explorar</h3>
                        <p>
                            Descubre curiosidades, datos sorprendentes
                            y detalles del universo automotriz.
                        </p>
                        <span>Descubrir más →</span>
                    </Link>

                </div>
            </section>

        </main>
    );
}

export default Inicio;
