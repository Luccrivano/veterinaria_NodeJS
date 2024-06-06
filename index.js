const { add, read } = require("./workdata.js");
const [accion, id, nombre, edad, animal, color, enfermedad] =
  process.argv.slice(2);

if (accion === "add") {
  add(nombre, edad, animal, color, enfermedad);
} else if (accion === "read") {
  read();
} else {
  console.log("Acción no reconocida. Use 'add' o 'read'.");
}
