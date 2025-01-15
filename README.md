# S4-API
**S4.API** es un proyecto divertido que combina múltiples APIs de bromas y una API del tiempo. Permite obtener bromas aleatorias de **Dad Jokes** y **Chuck Norris Jokes**, mientras también muestra el estado actual del tiempo. 

Este proyecto está desarrollado con **TypeScript**, **Bootstrap**, **SASS**, y **HTML**.

## Tecnologías Utilizadas

- **Frontend:**
  - HTML
  - CSS / SASS
  - TypeScript
- **Frameworks/Librerías:**
  - Bootstrap
- **APIs:**
  - [ICanHazDadJoke API](https://icanhazdadjoke.com/)
  - [Chuck Norris Jokes API](https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/)
  - [Meteosource Weather API](https://www.meteosource.com/)

---

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto localmente:

```bash
# Clonar el repositorio
git clone https://github.com/JuanAlis/S4-API.git

# Moverse al directorio del proyecto
cd s4-api

# Instalar dependencias
npm install

# Compilar SASS a CSS
npm "watch:sass"

# Ejecutar el proyecto
npx tsc --watch
```

---

## Uso

1. Haz clic en el botón **"Next Joke"** para obtener una broma aleatoria de Dad Jokes o Chuck Norris Jokes.
2. Consulta el estado del tiempo mostrado automáticamente en la parte superior de la página.
3. ¡Diviértete puntuando las bromas usando los botones de calificación!

---

## APIs Utilizadas

- **Dad Jokes API:**
  - Proporciona bromas aleatorias relacionadas con "Dad Jokes".
  - URL: [https://icanhazdadjoke.com/](https://icanhazdadjoke.com/)

- **Chuck Norris Jokes API:**
  - Devuelve bromas sobre Chuck Norris.
  - URL: [https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/](https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/)

- **Meteosource Weather API:**
  - Muestra el estado actual del tiempo basado en una ubicación específica.
  - URL: [https://www.meteosource.com/](https://www.meteosource.com/)

---
