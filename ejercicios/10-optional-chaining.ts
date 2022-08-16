interface Pasajero {
  nombre: string;
  hijos?: string[];
}

const pasajero1: Pasajero = {
  nombre: 'Fernando'
}

const pasajero2: Pasajero = {
  nombre:'Melissa',
  hijos: [ 'Natalia', 'Gabriel']
}

function imprimiendoHijos (pasajero: Pasajero): void {
  const cuantosHijos = pasajero.hijos?.length || 0;
  //Por prevalencia de datos cuando no hay hijos, consolea cero en vez de undefined
  console.log(cuantosHijos);
}
imprimiendoHijos(pasajero2);