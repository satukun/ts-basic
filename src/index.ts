import World from './world'

const root = document.getElementById('root')
console.log(root)
const world = new World('Hello world')
console.log(world)
world.sayHello(root)
