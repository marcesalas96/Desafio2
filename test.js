const Contenedor = require('./Contenedor')

const container = new Contenedor("./productos.txt")

const product1 = {tittle: "Lapiz", precio: 125, thumbnail: "google.com"}
const product2 = {tittle: "Lapiz", precio: 125, thumbnail: "google.com"}

const test = async () => {
    console.log(await container.save(product1))
    console.log(await container.save(product2))
    console.log(await container.getAll())
    console.log(await container.getById(2))
    console.log(await container.getById(3))
    await container.deleteById(2)
    console.log(await container.getById(2))
    await container.deleteAll()
}

test()