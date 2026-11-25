function CategoriaExplorar({ titulo, descripcion, imagen, temas }) {
    return (
        <article className="categoria-explorar">

            <div className="categoria-explorar-imagen">
                <img src={imagen} alt={titulo} loading="lazy" />
            </div>

            <div className="categoria-explorar-contenido">

                <h3>{titulo}</h3>

                <p>{descripcion}</p>

                <ul>
                    {temas.map((tema, index) => (
                        <li key={index}>{tema}</li>
                    ))}
                </ul>

            </div>

        </article>
    );
}

export default CategoriaExplorar;
