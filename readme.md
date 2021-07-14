# Presentación de principios SOLID con Pokémon
En este ejemplo elaborado con Node.js se ha desarrollado un grupo de clases con la base de principios SOLID. Estamos trabajando con los eventos que ocurren en el mundo pokémon

## Funcionamiento del programa.

1. Instalar Node.js https://nodejs.org/es/
2. Clonar este repositorio
4. ingresar desde cualquier terminal a la ubicación de este repositorio
5. usar el comando
```
npm install
node solid.js
```
## Aplicación de principios SOLID

### (S) Single Responsability Principle (Principio de responsabilidad simple)

Este ejemplo se puede replicar con la clase Pokemon: responsabilidad de leer y generar un objeto pokemon y Pokedesk responsabilidad de guardar pokemon Mostrar guardado en la pokedesk

### (O) Open / Closed Principle (Principio Abierto / Cerrado)

Para este ejemplo estamos utilizando los diferentes tipos de ataques según elemento del pokemon TypeFire, TypeWater, TypeEarth aplicando principios de herencia y polimorfismo

### (L) Liskov Substitution Principle (Principio de Sustitución de Liskov)

Para este ejemplo hemos aplicado la clase Pokemon Fly, que permite el manejo de la posibilidad que un Pokemon pueda volar o no, y hereda de Pokemon. para aplicar un polimorfismo bien ubicado.

### (I) Interface Segregation Principle (Principio de Segregación de Interfaces)

Debemos simular interfaces mediante mixins, de la siguiente forma const [Nombre] = (clasePadre) => class extends [clasePadre]

### (D) Dependency Inversion Principle (Principio de Inversión de Dependencia)

Para poder implementar DIP inyectaremos dependencias así la Clase Dexter solo se encargará de solicitar mediante una API un determinado Pokemon.
