import { NavLink, useLocation } from 'react-router';

function Header() {
    const location = useLocation();
    const esInicio = location.pathname === '/';

    return (
        <>
            <header className="encabezado">
                <NavLink to="/" end className="logo">
                    VELOXMAX
                </NavLink>

                <nav className="menu">
                    <NavLink to="/" end>Inicio</NavLink>
                    <NavLink to="/ranking">Ranking</NavLink>
                    <NavLink to="/tienda">Tienda</NavLink>
                    <NavLink to="/tecnologia">Innovación</NavLink>
                    <NavLink to="/historia">Historia</NavLink>
                    <NavLink to="/datos">Explorar</NavLink>
                </nav>
            </header>

            {esInicio && (
                <section className="portada-inicio">
                    <div className="portada-texto">
                        <h1 className="titulo">VELOXMAX</h1>

                        <p className="subtitulo">
                            "Cuando la velocidad se convierte en arte"
                        </p>
                    </div>
                </section>
            )}
        </>
    );
}

export default Header;