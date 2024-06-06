const fs = require("fs");

const add = (nombre, edad, animal, color, enfermedad) => {
  const dates = JSON.parse(fs.readFileSync("dates.json", "utf8"));
  const id = Math.floor(Math.random() * 100).toString();
  if (!nombre || !edad || !animal || !color || !enfermedad) {
    console.log("Por favor ingrese todos los datos");
    return;
  }
  dates.push({ id, nombre, edad, animal, color, enfermedad });
  fs.writeFileSync("dates.json", JSON.stringify(dates));
  console.log(dates);
};

const read = () => {
  const dates = JSON.parse(fs.readFileSync("dates.json", "utf8"));
  console.log(dates);
};

module.exports = { add, read };
