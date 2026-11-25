import { useState, useEffect } from 'react';

function FormularioPedido({ producto, alCancelar, alConfirmar }) {
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const [cantidad, setCantidad] = useState(1);
    const [talla, setTalla] = useState('M');
    const [procesando, setProcesando] = useState(false);

    // Cerramos la ventana con Escape, excepto mientras procesa.
    useEffect(() => {
        function cerrarConEscape(evento) {
            if (evento.key === 'Escape' && !procesando) {
                alCancelar();
            }
        }

        document.addEventListener('keydown', cerrarConEscape);

        return () => {
            document.removeEventListener('keydown', cerrarConEscape);
        };
    }, [alCancelar, procesando]);

    function enviarPedido(evento) {
        evento.preventDefault();

        if (procesando) {
            return;
        }

        setProcesando(true);

        const total = producto.precio * cantidad;

        let resumen = 'Producto: ' + producto.nombre;
        resumen += '. Nombre: ' + nombre;
        resumen += '. Teléfono: ' + telefono;
        resumen += '. Dirección: ' + direccion;
        resumen += '. Cantidad: ' + cantidad;

        if (producto.tipo === 'camisa') {
            resumen += '. Talla: ' + talla;
        }

        resumen += '. Total: $' + total.toFixed(2);

        // Simulamos el procesamiento del pedido.
        setTimeout(() => {
            alConfirmar(resumen);
        }, 1500);
    }

    return (
        <div
            className="tienda-vmx-formulario-fondo"
            onClick={() => {
                if (!procesando) {
                    alCancelar();
                }
            }}
        >
            <section
                className="tienda-formulario"
                onClick={(evento) => evento.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="titulo-formulario"
            >
                <button
                    className="tienda-vmx-formulario-cerrar"
                    type="button"
                    onClick={alCancelar}
                    disabled={procesando}
                    aria-label="Cerrar formulario"
                >
                    &times;
                </button>

                <h2 id="titulo-formulario">Completa tu pedido</h2>

                <p>Producto: {producto.nombre}</p>
                <p>Precio: ${producto.precio.toFixed(2)}</p>

                <form onSubmit={enviarPedido}>
                    <label>Nombre completo</label>
                    <input
                        type="text"
                        value={nombre}
                        onChange={(evento) => setNombre(evento.target.value)}
                        required
                        disabled={procesando}
                    />

                    <label>Teléfono</label>
                    <input
                        type="tel"
                        value={telefono}
                        onChange={(evento) => setTelefono(evento.target.value)}
                        required
                        disabled={procesando}
                    />

                    <label>Dirección de entrega</label>
                    <input
                        type="text"
                        value={direccion}
                        onChange={(evento) => setDireccion(evento.target.value)}
                        required
                        disabled={procesando}
                    />

                    <label>Cantidad</label>
                    <input
                        type="number"
                        min="1"
                        max={producto.stock}
                        value={cantidad}
                        onChange={(evento) =>
                            setCantidad(Number(evento.target.value))
                        }
                        required
                        disabled={procesando}
                    />

                    {producto.tipo === 'camisa' && (
                        <>
                            <label>Talla</label>
                            <select
                                value={talla}
                                onChange={(evento) => setTalla(evento.target.value)}
                                disabled={procesando}
                            >
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>
                        </>
                    )}

                    <p className="tienda-total">
                        Total: ${(producto.precio * cantidad).toFixed(2)}
                    </p>

                    <button
                        className="tienda-boton"
                        type="submit"
                        disabled={procesando}
                    >
                        {procesando ? (
                            <span className="tienda-vmx-cargando">
                                <span className="tienda-vmx-circulo"></span>
                                Procesando pedido...
                            </span>
                        ) : (
                            'Confirmar pedido'
                        )}
                    </button>

                    <button
                        className="tienda-boton tienda-vmx-cancelar"
                        type="button"
                        onClick={alCancelar}
                        disabled={procesando}
                    >
                        Cancelar
                    </button>
                </form>
            </section>
        </div>
    );
}

export default FormularioPedido;
