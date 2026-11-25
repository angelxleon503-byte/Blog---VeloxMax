
import { useState } from 'react';
import Producto from '../Components/Producto.jsx';
import FormularioPedido from '../Components/FormularioPedido.jsx';
import DetalleProducto from '../Components/DetalleProducto.jsx';
import './Tienda.css';

// Datos de ejemplo de los productos.
// Los precios y las existencias no son datos comerciales reales.

const productos = [
    // AUTOS DE COLECCIÓN
    {
        id: 1,
        nombre: 'Lamborghini Aventador',
        descripcion: 'Miniatura de colección de uno de los superdeportivos más reconocidos.',
        detalle: 'Modelo a escala del Lamborghini Aventador. Una pieza de colección inspirada en su diseño deportivo, sus líneas aerodinámicas y su potente motor V12.',
        precio: 18,
        imagen: '/images/juguete2.jpg',
        categoria: 'autos_coleccion',
        stock: 5,
        disponible: true
    },
    {
        id: 2,
        nombre: 'Nissan Skyline GT-R R34',
        descripcion: 'Un clásico japonés que no puede faltar en una colección.',
        detalle: 'Miniatura inspirada en el Nissan Skyline GT-R R34, un automóvil reconocido por su historia en la cultura automotriz y deportiva japonesa.',
        precio: 15,
        imagen: '/images/juguete1.jpg',
        categoria: 'autos_coleccion',
        stock: 4,
        disponible: true
    },
    {
        id: 3,
        nombre: 'Toyota Supra MK4',
        descripcion: 'Una miniatura inspirada en una leyenda de los deportivos japoneses.',
        detalle: 'Modelo a escala del Toyota Supra MK4. Su diseño representa a uno de los automóviles más admirados por los amantes de la velocidad.',
        precio: 12,
        imagen: '/images/juguete3.jpg',
        categoria: 'autos_coleccion',
        stock: 0,
        disponible: false
    },
    {
        id: 4,
        nombre: 'Ferrari F40',
        descripcion: 'Un superdeportivo clásico convertido en pieza de colección.',
        detalle: 'Miniatura inspirada en el Ferrari F40, un modelo histórico de la marca italiana reconocido por su diseño y enfoque deportivo.',
        precio: 20,
        imagen: '/images/ferrari-f40-miniatura.jpg',
        categoria: 'autos_coleccion',
        stock: 3,
        disponible: true
    },
    {
        id: 5,
        nombre: 'Porsche 911 GT3 RS',
        descripcion: 'Diseño deportivo y detalles inspirados en la competición.',
        detalle: 'Modelo a escala del Porsche 911 GT3 RS, inspirado en su aerodinámica y su relación con el mundo de las carreras.',
        precio: 22,
        imagen: '/images/porsche-911-miniatura.jpg',
        categoria: 'autos_coleccion',
        stock: 2,
        disponible: true
    },
    {
        id: 6,
        nombre: 'McLaren F1',
        descripcion: 'Una miniatura inspirada en uno de los grandes superdeportivos.',
        detalle: 'Modelo de colección inspirado en el McLaren F1, un automóvil histórico por su ingeniería y su importancia en la historia de los superdeportivos.',
        precio: 25,
        imagen: '/images/mclaren-f1-miniatura.jpg',
        categoria: 'autos_coleccion',
        stock: 0,
        disponible: false
    },

    // ACCESORIOS
    {
        id: 7,
        nombre: 'Llavero deportivo',
        descripcion: 'Un accesorio inspirado en el estilo de los automóviles deportivos.',
        detalle: 'Llavero decorativo con diseño automotriz. Una opción sencilla para llevar un detalle de tu pasión por los automóviles.',
        precio: 5,
        imagen: '/images/accesorio-llavero.jpg',
        categoria: 'accesorios',
        stock: 10,
        disponible: true
    },
    {
        id: 8,
        nombre: 'Gorra automotriz',
        descripcion: 'Una gorra casual para los amantes del mundo del motor.',
        detalle: 'Gorra de estilo automotriz pensada para complementar un atuendo casual. Producto de demostración.',
        precio: 12,
        imagen: '/images/accesorio-gorra.jpg',
        categoria: 'accesorios',
        stock: 6,
        disponible: true
    },
    {
        id: 9,
        nombre: 'Miniatura de motor',
        descripcion: 'Una pieza decorativa inspirada en la ingeniería automotriz.',
        detalle: 'Miniatura decorativa de un motor. Ideal para exhibir en un escritorio, estantería o espacio dedicado a los automóviles.',
        precio: 16,
        imagen: '/images/accesorio-motor.jpg',
        categoria: 'accesorios',
        stock: 3,
        disponible: true
    },
    {
        id: 10,
        nombre: 'Camiseta automotriz',
        descripcion: 'Diseño inspirado en la cultura de los automóviles deportivos.',
        detalle: 'Camiseta de temática automotriz. El diseño y las características son ilustrativos y se podrán personalizar posteriormente.',
        precio: 15,
        imagen: '/images/accesorio-camiseta.jpg',
        categoria: 'accesorios',
        tipo: 'camisa',
        stock: 8,
        disponible: true
    },
    {
        id: 11,
        nombre: 'Póster deportivo',
        descripcion: 'Una imagen automotriz para decorar tu espacio.',
        detalle: 'Póster decorativo con temática de automóviles deportivos. Una opción para personalizar tu habitación o espacio de colección.',
        precio: 8,
        imagen: '/images/accesorio-poster.jpg',
        categoria: 'accesorios',
        stock: 0,
        disponible: false
    },
    {
        id: 12,
        nombre: 'Volante decorativo',
        descripcion: 'Un detalle de colección inspirado en el automovilismo.',
        detalle: 'Volante decorativo de demostración, pensado para exhibirse como parte de una colección relacionada con el mundo automotriz.',
        precio: 30,
        imagen: '/images/accesorio-volante.jpg',
        categoria: 'accesorios',
        stock: 2,
        disponible: true
    }
];

function Tienda() {
    const [productoDetalle, setProductoDetalle] = useState(null);
    const [productoElegido, setProductoElegido] = useState(null);
    const [mensaje, setMensaje] = useState('');

    // Recibimos los productos de la categoría autos de colección.
    const autos = productos.filter(
        (producto) => producto.categoria === 'autos_coleccion'
    );

    // Recibimos los productos de la categoría accesorios.
    const accesorios = productos.filter(
        (producto) => producto.categoria === 'accesorios'
    );

    function confirmarPedido(resumen) {
        setMensaje(resumen);
        setProductoElegido(null);
    }

    function iniciarPedido(producto) {
        setProductoDetalle(null);
        setMensaje('');
        setProductoElegido(producto);
    }

    return (
        <main className="tienda-vmx">

            {/* INTRODUCCIÓN */}
            <section className="tienda-vmx-portada">

                <h1>VELOXMAX STORE</h1>

                <h2>
                    Encuentra piezas de colección y accesorios
                    inspirados en el mundo automotriz
                </h2>

                <p>
                    Explora nuestra selección de miniaturas y artículos
                    especiales para los apasionados por los automóviles.
                    Cada producto representa una parte de la cultura,
                    el diseño y la historia del mundo motor.
                </p>
            </section>

            {/* CATEGORÍA 1 */}
            <section className="tienda-vmx-seccion">
                <div className="tienda-vmx-encabezado-seccion">
                    <div>
                        <span>COLECCIÓN VELOXMAX</span>
                        <h2>Autos de colección</h2>
                        <p>
                            Miniaturas inspiradas en automóviles
                            legendarios y deportivos.
                        </p>
                    </div>

                    <span className="tienda-vmx-contador">
                        06 PRODUCTOS
                    </span>
                </div>

                <div className="tienda-vmx-grid">
                    {autos.map((producto) => (
                        <Producto
                            key={producto.id}
                            producto={producto}
                            alVerDetalles={() => setProductoDetalle(producto)}
                        />
                    ))}
                </div>
            </section>

            {/* CATEGORÍA 2 */}
            <section className="tienda-vmx-seccion">
                <div className="tienda-vmx-encabezado-seccion">
                    <div>
                        <span>ESTILO AUTOMOTRIZ</span>
                        <h2>Accesorios</h2>
                        <p>
                            Artículos para llevar tu pasión por los
                            automóviles a cualquier lugar.
                        </p>
                    </div>

                    <span className="tienda-vmx-contador">
                        06 PRODUCTOS
                    </span>
                </div>

                <div className="tienda-vmx-grid">
                    {accesorios.map((producto) => (
                        <Producto
                            key={producto.id}
                            producto={producto}
                            alVerDetalles={() => setProductoDetalle(producto)}
                        />
                    ))}
                </div>
            </section>

            {/* MODAL DE DETALLES */}
            {productoDetalle && (
                <DetalleProducto
                    producto={productoDetalle}
                    alCerrar={() => setProductoDetalle(null)}
                    alComprar={() => iniciarPedido(productoDetalle)}
                />
            )}

            {/* FORMULARIO DE PEDIDO EXISTENTE */}
            {productoElegido && (
                <FormularioPedido
                    producto={productoElegido}
                    alCancelar={() => setProductoElegido(null)}
                    alConfirmar={confirmarPedido}
                />
            )}

            {/* MENSAJE DE CONFIRMACIÓN EXISTENTE */}
            {mensaje && (
                <div className="tienda-vmx-formulario-fondo">
                    <section className="tienda-vmx-confirmacion" role="dialog" aria-modal="true">
                        <div className="tienda-vmx-icono-exito">✓</div>

                    <h2>¡Pedido registrado correctamente!</h2>

                <p>
                    Gracias por elegir VELOXMAX STORE.
                    Hemos recibido los datos de tu solicitud.
                </p>

                <p className="tienda-vmx-resumen">
                    {mensaje}
                </p>

                <button
                    className="tienda-vmx-modal-boton"
                    onClick={() => setMensaje('')}
                >
                    Continuar comprando
                </button>
            </section>
        </div>
    )}
        </main>
    );
}

export default Tienda;