import Image from "next/image";

export default function Renderlistas() {

//funciones

const productos = [
{ id: 1, nombre: "Camiseta", precio: 25, categoria: { id: 1, nombre: "Ropa" } },
{ id: 2, nombre: "Zapatos deportivos", precio: 60, categoria: { id: 2, nombre: "Calzado" }
},
{ id: 3, nombre: "Gorra", precio: 15, categoria: { id: 1, nombre: "Ropa" } },
{ id: 4, nombre: "Pantalón", precio: 40, categoria: { id: 1, nombre: "Ropa" } },
{ id: 5, nombre: "Bolso", precio: 30, categoria: { id: 3, nombre: "Accesorios" } },
];

const usuarios = [
{ id: 1, nombre: "Ana", direccion: { calle: "Calle 10", ciudad: "Bogotá", pais: "Colombia"
} },
{ id: 2, nombre: "Luis", direccion: { calle: "Av. Reforma", ciudad: "Ciudad de México",
pais: "México" } },
{ id: 3, nombre: "Marta", direccion: { calle: "Gran Vía", ciudad: "Madrid", pais: "España"
} },
{ id: 4, nombre: "John", direccion: { calle: "Main St", ciudad: "New York", pais: "USA" }
},
{ id: 5, nombre: "Pedro", direccion: { calle: "Rua Augusta", ciudad: "Lisboa", pais:
"Portugal" } },
];

const cursos = [
{ id: 1, nombre: "React", modulos: [{ nombre: "Componentes" }, { nombre: "Hooks" }] },
{ id: 2, nombre: "Next.js", modulos: [{ nombre: "SSR" }, { nombre: "Static Props" }] },
{ id: 3, nombre: "Node.js", modulos: [{ nombre: "Express" }, { nombre: "Middlewares" }]
},
{ id: 4, nombre: "Django", modulos: [{ nombre: "Modelos" }, { nombre: "Templates" }] },
{ id: 5, nombre: "Flutter", modulos: [{ nombre: "Widgets" }, { nombre: "State Management" }] },
];

const pedidos = [
{ id: 1, cliente: "Ana", productos: [{ nombre: "Camiseta", cantidad: 2 }, { nombre:
"Gorra", cantidad: 1 }] },
{ id: 2, cliente: "Luis", productos: [{ nombre: "Zapatos", cantidad: 1 }, { nombre:
"Bolso", cantidad: 2 }] },
{ id: 3, cliente: "Marta", productos: [{ nombre: "Pantalón", cantidad: 3 }] },
{ id: 4, cliente: "John", productos: [{ nombre: "Sudadera", cantidad: 1 }, { nombre:
"Gorra", cantidad: 2 }] },
{ id: 5, cliente: "Pedro", productos: [{ nombre: "Camiseta", cantidad: 5 }] },
];

const blogs = [
{
id: 1,
titulo: "Aprendiendo React",
autor: { nombre: "Ana", pais: "Colombia" },
categorias: ["JavaScript", "Frontend"],
comentarios: [
{
usuario: "Luis",
texto: "Muy útil",
respuestas: [
{
usuario: "Marta",
texto: "Totalmente de acuerdo",
reacciones: [
{ tipo: "like", usuario: { nombre: "Pedro", rol: "Estudiante" } },
{ tipo: "love", usuario: { nombre: "John", rol: "Desarrollador" } }
]
}
]
}
]
},
{
id: 2,
titulo: "Next.js SSR",
autor: { nombre: "Luis", pais: "México" },
categorias: ["JavaScript", "SSR"],
comentarios: [
{
usuario: "Marta",
texto: "Interesante",
respuestas: [
{
usuario: "Ana",
texto: "Lo probaré",
reacciones: [
{ tipo: "like", usuario: { nombre: "Luis", rol: "Frontend Dev" } }
]
}
]
}
]
},
{
id: 3,
titulo: "Node.js API",
autor: { nombre: "John", pais: "USA" },
categorias: ["Backend", "API"],
comentarios: [
{
usuario: "Pedro",
texto: "Me sirvió mucho",
respuestas: [
{
usuario: "Luis",
texto: "Gracias por compartir",
reacciones: [
{ tipo: "clap", usuario: { nombre: "Ana", rol: "Fullstack Dev" } }
]
}
]
}
]
},
{
id: 4,
titulo: "Django ORM",
autor: { nombre: "Marta", pais: "España" },
categorias: ["Backend", "Python"],
comentarios: [
{
usuario: "Ana",
texto: "Claro y conciso",
respuestas: [
{
usuario: "John",
texto: "Lo usaré en mi proyecto",
reacciones: [
{ tipo: "like", usuario: { nombre: "Luis", rol: "Backend Dev" } }
]
}
]
}
]
},
{
id: 5,
titulo: "Flutter Widgets",
autor: { nombre: "Pedro", pais: "Portugal" },
categorias: ["Mobile", "UI"],
comentarios: [
{
usuario: "Luis",
texto: "Genial explicación",
respuestas: [
{
usuario: "Marta",
texto: "Muy claro todo",
reacciones: [
{ tipo: "love", usuario: { nombre: "Ana", rol: "UI Designer" } }
]
}
]
}
]
}
];


  return (
  //solo la parte visual 
  
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Productos</h1>
        <h2 className="text-xl font-semibold mb-2">Ejercicio Numero 1</h2>
      <ul className="space-y-3 mb-8">
        {productos.map((producto) => (
          <li key={producto.id} className="border-b pb-2">
            <h2 className="text-xl font-semibold">{producto.nombre}</h2>
            <p className="text-gray-600">
              Precio: ${producto.precio} - Categoría: {producto.categoria.nombre}
            </p>
          </li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mb-2">Ejercicio Numero 2</h2>
      <ul className="space-y-3 mb-8">
        {usuarios.map((usuario) => (
          <li key={usuario.id} className="border-b pb-2">
            <h3 className="text-lg font-semibold">{usuario.nombre}</h3>
            <p className="text-gray-600">
              Dirección: {usuario.direccion.calle}, {usuario.direccion.ciudad}, {usuario.direccion.pais}
            </p>
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">Ejercicio Numero 3</h2>
      <ul className="space-y-3 mb-8">
        {cursos.map((curso) => (
          <li key={curso.id} className="border-b pb-2">
            <h3 className="text-lg font-semibold">{curso.nombre}</h3>
            <ul className="list-disc list-inside">
              {curso.modulos.map((modulo, index) => (
                <li key={index} className="text-gray-600">
                  {modulo.nombre}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">Ejercicio Numero 4</h2>
      <ul className="space-y-3 mb-8">
        {pedidos.map((pedido) => (
          <li key={pedido.id} className="border-b pb-2">
            <h3 className="text-lg font-semibold">Pedido de {pedido.cliente}</h3>
            <ul className="list-disc list-inside">
              {pedido.productos.map((producto, index) => (
                <li key={index} className="text-gray-600">
                  {producto.nombre} - Cantidad: {producto.cantidad}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <main className="p-6 space-y-6">
        <h1 className="text-3xl font-bold">Ejercicio Numero 5</h1>
        <ul className="space-y-3">
          {blogs.map((blog) => (
            <li key={blog.id} className="border-b pb-2">
              <h2 className="text-xl font-semibold">{blog.titulo}</h2>
              <p className="text-gray-600">
                Autor: {blog.autor.nombre} - País: {blog.autor.pais}
              </p>
              <p className="text-gray-600">
                Categorías: {blog.categorias.join(", ")}
              </p>
              <h3 className="text-lg font-semibold">Comentarios:</h3>
              <ul className="list-disc list-inside">
                {blog.comentarios.map((comentario, index) => (
                  <li key={index} className="text-gray-600">
                    <strong>{comentario.usuario}:</strong> {comentario.texto}
                    {comentario.respuestas && comentario.respuestas.length > 0 && (
                      <ul className="list-disc list-inside ml-4">
                        {comentario.respuestas.map((respuesta, index) => (
                          <li key={index} className="text-gray-600">
                            <strong>{respuesta.usuario}:</strong> {respuesta.texto}
                            {respuesta.reacciones && respuesta.reacciones.length > 0 && (
                              <ul className="list-disc list-inside ml-4">
                                {respuesta.reacciones.map((reaccion, index) => (
                                  <li key={index} className="text-gray-600">
                                    {reaccion.tipo} - {reaccion.usuario.nombre} ({reaccion.usuario.rol})
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </main>
    </main>

    

  );
}
