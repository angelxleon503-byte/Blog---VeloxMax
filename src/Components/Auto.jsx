function Auto({numero, nombre, imagen, marca, velocidad, motor, aceleracion, descripcion}) 
{
    return (
        <article className="auto">

            <div className="auto-encabezado">

                <span className="auto-numero">
                    {String(numero).padStart(2, '0')}
                </span>

                <div className="auto-titulo">
                    <h3>{nombre}</h3>
                    <p className="auto-marca">{marca}</p>
                </div>

            </div>

            <img
                className="auto-imagen"
                src={imagen}
                alt={nombre}
                loading="lazy"
            />

            <div className="auto-datos">

                <div className="auto-dato">
                    <span className="auto-dato-etiqueta">
                        <span className="auto-dato-icono" aria-hidden="true">
                            ◉
                        </span>
                        Velocidad máxima
                    </span>

                    <span className="auto-dato-valor">
                        {velocidad}
                    </span>
                </div>

                <div className="auto-dato">
                    <span className="auto-dato-etiqueta">
                        <span className="auto-dato-icono" aria-hidden="true">
                            ⚙
                        </span>
                        Motor
                    </span>

                    <span className="auto-dato-valor">
                        {motor}
                    </span>
                </div>

                <div className="auto-dato">
                    <span className="auto-dato-etiqueta">
                        <span className="auto-dato-icono" aria-hidden="true">
                            ◷
                        </span>
                        Aceleración 0-100 km/h
                    </span>

                    <span className="auto-dato-valor">
                        {aceleracion}
                    </span>
                </div>

            </div>

            <p className="auto-descripcion">
                <strong>Sobre el modelo:</strong> {descripcion}
            </p>

        </article>
    );
}

export default Auto;
