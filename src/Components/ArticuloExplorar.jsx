import { Link } from "react-router";

function ArticuloExplorar({ titulo, descripcion, imagen, etiqueta, ruta }) {
    return (
        <article className="articulo-explorar">

            <div className="articulo-explorar-imagen">
                <img src={imagen} alt={titulo} loading="lazy" />
                <span className="etiqueta-explorar">
                    {etiqueta}
                </span>
            </div>

            <div className="articulo-explorar-contenido">

                <h3>{titulo}</h3>

                <p>{descripcion}</p>

                <Link
                    to={ruta || "#articulos"}
                    className="enlace-explorar"
                >
                    Leer artículo <span>→</span>
                </Link>

            </div>

        </article>
    );
}

export default ArticuloExplorar;
