const productos = [
  {
    manzanas: 3,
    peras: 2,
    carne: 1,
    jugos: 5,
    dulces: 2,
  },
  {
    manzanas: 1,
    sandias: 1,
    huevos: 6,
    jugos: 1,
    panes: 4,
  },
];

const tipos = [];

productos.forEach((e) => {
  const tiposProductos = Object.keys(e);

  tiposProductos.forEach((item) => {
    if (!tipos.includes(item)) {
      tipos.push(item);
    }
  });
});

console.log(tipos);
