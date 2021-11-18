class PlanetModel {  
    constructor({ 
      id = null,
      nombre = null,
      periodo_rotacion= null,
      periodo_orbital= null,
      diametro= 0,
      gravedad= 0,
      terreno= null,
      superficie_agua= null, 
      poblacion = 0,
      residentes= [], 
      peliculas= [], 
      creado= null,
      editado= null, 
    }) {
      this.id = id;
      this.nombre = nombre;
      this.periodo_rotacion = periodo_rotacion;
      this.periodo_orbital = periodo_orbital;
      this.diametro = diametro;
      this.gravedad = gravedad;
      this.terreno = terreno;
      this.superficie_agua = superficie_agua;
      this.poblacion = poblacion;
      this.residentes = residentes;
      this.peliculas = peliculas;
      this.creado = creado;
      this.editado = editado;
    }
  }
  
  export {
    PlanetModel
  } 
 