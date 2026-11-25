import { useEffect } from 'react';

function DetalleProducto({ producto, alCerrar, alComprar }) {

    // Detectamos cuando el usuario presiona Escape.
    useEffect(() => {
        function cerrarConEscape(evento) {
            if (evento.key === 'Escape') {
                alCerrar();
            }
        }

        document.addEventListener('keydown', cerrarConEscape);

        // Quitamos el evento cuando se cierra el modal.
        return () => {
            document.removeEventListener('keydown', cerrarConEscape);
        };
    }, [alCerrar]);

    return (
        <div
            className="tienda-vmx-modal-fondo"
            onClick={alCerrar}
        >
            <section
                className="tienda-vmx-modal"
                onClick={(evento) => evento.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="titulo-detalle-producto"
            >

                <button
                    className="tienda-vmx-modal-cerrar"
                    onClick={alCerrar}
                    aria-label="Cerrar ventana"
                >
                    &times;
                </button>

                <div className="tienda-vmx-modal-imagen">
                    <img
                        src={producto.imagen}
                        alt={producto.nombre}
                    />
                </div>

                <div className="tienda-vmx-modal-info">

                    <span className="tienda-vmx-modal-etiqueta">
                        VELOXMAX COLLECTION
                    </span>

                    <h2 id="titulo-detalle-producto">
                        {producto.nombre}
                    </h2>

                    <p className="tienda-vmx-modal-precio">
                        ${producto.precio.toFixed(2)}
                    </p>

                    <p className="tienda-vmx-modal-descripcion">
                        {producto.detalle}
                    </p>

                    <p className="tienda-vmx-modal-stock">
                        <strong>Disponibilidad:</strong>{' '}
                        {producto.disponible
                            ? `Disponible (${producto.stock} unidades de ejemplo)`
                            : 'Producto agotado'}
                    </p>

                    <button
                        className="tienda-vmx-modal-boton"
                        onClick={alComprar}
                        disabled={!producto.disponible}
                    >
                        {producto.disponible
                            ? 'Iniciar pedido'
                            : 'No disponible'}
                    </button>

                    <button
                        className="tienda-vmx-modal-volver"
                        onClick={alCerrar}
                    >
                        Volver a la tienda
                    </button>

                </div>
            </section>
        </div>
    );
}

export default DetalleProducto;