export class Ingredient {
  nombre: string;
  cantidad: string;
  unidad: string;

  constructor(nombre: string, cantidad: string, unidad: string) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.unidad = unidad;
  }
}
