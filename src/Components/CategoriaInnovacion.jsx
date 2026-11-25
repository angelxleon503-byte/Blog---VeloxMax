
function CategoriaInnovacion({ titulo, descripcion, imagen, temas }) {
    return (
        <article className="categoria-innovacion">

            <div className="categoria-imagen">
                <img src={imagen} alt={titulo} loading="lazy" />
            </div>

            <div className="categoria-contenido">

                <h3>{titulo}</h3>

                <p>{descripcion}</p>

                <h4>Temas que exploraremos:</h4>

                <ul>
                    {temas.map((tema, index) => (
                        <li key={index}>{tema}</li>
                    ))}
                </ul>

            </div>

        </article>
    );
}

export default CategoriaInnovacion;
