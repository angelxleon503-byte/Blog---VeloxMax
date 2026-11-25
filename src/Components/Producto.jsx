function Producto({ producto, alVerDetalles }) {
    return (
        <article className="tienda-vmx-producto"
            onClick={alVerDetalles}
            tabIndex={0}
            onKeyDown={(evento) => {
                if (evento.key === 'Enter' || evento.key === ' ') {
                    evento.preventDefault();
                    alVerDetalles();
                }
            }}
        >

            <div className="tienda-vmx-imagen-contenedor">
                <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    className="tienda-vmx-imagen"
                    loading="lazy"
                />

                <span
                    className={
                        producto.disponible
                            ? 'tienda-vmx-disponibilidad disponible'
                            : 'tienda-vmx-disponibilidad agotado'
                    }
                >
                    {producto.disponible ? 'Disponible' : 'Agotado'}
                </span>
            </div>

            <div className="tienda-vmx-info-producto">
                <h3>{producto.nombre}</h3>

                <p className="tienda-vmx-descripcion">
                    {producto.descripcion}
                </p>

                <div className="tienda-vmx-pie-producto">
                    <p className="tienda-vmx-precio">
                        ${producto.precio.toFixed(2)}
                    </p>

                    <button
                        className="tienda-vmx-boton"
                        onClick={(evento) => {
                            evento.stopPropagation();
                            alVerDetalles();
                        }}
                    >
                        Ver producto
                    </button>
                </div>
            </div>

        </article>
    );
}

export default Producto;
