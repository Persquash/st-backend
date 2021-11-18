class PersonModel {  
  constructor({ 
    id = null,
    nombre = null,
    tamano = 0,
    masa = 0,
    color_cabello= null,
    color_piel= null,
    color_ojos= null,
    anio_nacimiento= null,
    genero= null,
    mundoNatal= null,
    peliculas = [],
    especies= [],
    vehiculos= [],
    naves= [],
    creado= null,
    editado= null,
  }) {
    this.id = id;
    this.nombre = nombre;
    this.tamano = tamano;
    this.masa = masa;
    this.color_cabello = color_cabello;
    this.color_piel = color_piel;
    this.color_ojos = color_ojos;
    this.anio_nacimiento = anio_nacimiento;
    this.genero = genero;
    this.mundoNatal = mundoNatal;
    this.peliculas = peliculas;
    this.especies = especies;
    this.vehiculos = vehiculos;
    this.naves = naves;
    this.creado = creado;
    this.editado = editado;
  }
}

export {
  PersonModel
}

