const questions = [
  {text:"¿En qué año comenzó la Primera Guerra Mundial?", options:['1492', '1776', '1914', '1945'], correct:2}, // 1914
  {text:"¿Qué planeta es conocido como el planeta anillado?", options:['Marte', 'Júpiter', 'Venus', 'Saturno'], correct:3}, // Saturno
  {text:"¿Qué país ganó el mundial de fútbol en 1998?", options:['Brasil', 'Alemania', 'Italia', 'Francia'], correct:3}, // Francia
  {text:"Capital de Egipto", options:['Roma', 'El Cairo', 'Madrid', 'Lisboa'], correct:1}, // El Cairo (opción corregida)
  {text:"¿Qué instrumento musical tiene viento?", options:['Guitarra', 'Piano', 'Violín', 'Flauta'], correct:3}, // Flauta
  {text:"¿Qué instrumento musical tiene teclas?", options:['Guitarra', 'Piano', 'Violín', 'Flauta'], correct:1}, // Piano
  {text:"Capital de México", options:['Roma', 'Ciudad de México', 'Madrid', 'Lisboa'], correct:1}, // Ciudad de México (opción corregida)
  {text:"¿En qué año terminó la Segunda Guerra Mundial?", options:['1492', '1776', '1914', '1945'], correct:3}, // 1945
  {text:"¿Quién escribió Hamlet?", options:['Cervantes', 'Shakespeare', 'Gabriel García Márquez', 'Homero'], correct:1}, // Shakespeare
  {text:"¿Qué país ganó el mundial de fútbol en 2018?", options:['Brasil', 'Alemania', 'Italia', 'Francia'], correct:3}, // Francia
  {text:"¿Qué planeta es conocido como el planeta gigante?", options:['Marte', 'Júpiter', 'Venus', 'Saturno'], correct:1}, // Júpiter
  {text:"¿Qué planeta es conocido como el planeta rojo?", options:['Marte', 'Júpiter', 'Venus', 'Saturno'], correct:0}, // Marte
  {text:"Capital de Argentina", options:['Roma', 'Buenos Aires', 'Madrid', 'Lisboa'], correct:1}, // Buenos Aires
  {text:"Capital de España", options:['Roma', 'París', 'Madrid', 'Lisboa'], correct:2}, // Madrid
  {text:"Capital de Canadá", options:['Roma', 'Ottawa', 'Madrid', 'Lisboa'], correct:1}, // Ottawa
  {text:"¿Quién escribió Cien Años de Soledad?", options:['Cervantes', 'Shakespeare', 'Gabriel García Márquez', 'Homero'], correct:2}, // Gabriel García Márquez
  {text:"¿En qué año se descubrió América?", options:['1492', '1776', '1914', '1945'], correct:0}, // 1492
  {text:"¿Quién escribió Don Quijote?", options:['Cervantes', 'Shakespeare', 'Gabriel García Márquez', 'Homero'], correct:0}, // Cervantes
  {text:"¿Cuál es la montaña más alta del mundo?", options:['Everest', 'K2', 'Aconcagua', 'Kilimanjaro'], correct:0}, // Everest
  {text:"¿Qué país ganó el mundial de fútbol en 1970?", options:['Brasil', 'Alemania', 'Italia', 'Francia'], correct:0}, // Brasil
  {text:"¿En qué continente está Italia?", options:['Europa', 'Asia', 'África', 'América'], correct:0}, // Europa
  {text:"¿En qué continente está Japón?", options:['Europa', 'Asia', 'África', 'América'], correct:1}, // Asia
  {text:"¿En qué continente está Francia?", options:['Europa', 'Asia', 'África', 'América'], correct:0}, // Europa
  {text:"¿Cuál es el elemento químico con símbolo H?", options:['Hidrógeno', 'Oxígeno', 'Carbono', 'Helio'], correct:0}, // Hidrógeno
  {text:"¿Cuál es el animal más grande?", options:['Elefante', 'Ballena Azul', 'Tiburón', 'Águila'], correct:1}, // Ballena Azul
  {text:"¿Quién escribió La Odisea?", options:['Cervantes', 'Shakespeare', 'Gabriel García Márquez', 'Homero'], correct:3}, // Homero
  {text:"¿En qué año comenzó la Independencia de Estados Unidos?", options:['1492', '1776', '1914', '1945'], correct:1}, // 1776
  {text:"¿Cuál es el elemento químico con símbolo O?", options:['Hidrógeno', 'Oxígeno', 'Carbono', 'Helio'], correct:1}, // Oxígeno
  {text:"¿Cuál es el animal más alto?", options:['Elefante', 'Jirafa', 'Tiburón', 'Águila'], correct:1}, // Jirafa (opción corregida)
  {text:"¿Cuál es el animal más pesado?", options:['Elefante', 'Ballena Azul', 'Tiburón', 'Águila'], correct:1}, // Ballena Azul
  {text:"¿En qué continente está Canadá?", options:['Europa', 'Asia', 'África', 'América'], correct:3}, // América
  {text:"¿En qué continente está España?", options:['Europa', 'Asia', 'África', 'América'], correct:0}, // Europa
  {text:"¿Cuál es el elemento químico con símbolo He?", options:['Hidrógeno', 'Oxígeno', 'Carbono', 'Helio'], correct:3}, // Helio
  {text:"¿En qué continente está México?", options:['Europa', 'Asia', 'África', 'América'], correct:3}, // América
  {text:"¿Qué instrumento musical tiene cuerdas?", options:['Guitarra', 'Piano', 'Violín', 'Flauta'], correct:0}, // Guitarra
  {text:"¿Qué instrumento musical tiene arco?", options:['Guitarra', 'Piano', 'Violín', 'Flauta'], correct:2}, // Violín
  {text:"¿Qué país ganó el mundial de fútbol en 1958?", options:['Brasil', 'Alemania', 'Italia', 'Francia'], correct:0}, // Brasil
  {text:"¿En qué continente está Egipto?", options:['Europa', 'Asia', 'África', 'América'], correct:2}, // África
  {text:"¿Cuál es el animal más rápido?", options:['Elefante', 'Guepardo', 'Tiburón', 'Águila'], correct:1}, // Guepardo (opción corregida)
  {text:"¿Cuál es el elemento químico con símbolo C?", options:['Hidrógeno', 'Oxígeno', 'Carbono', 'Helio'], correct:2}, // Carbono
  {text:"¿Qué planeta es conocido como el planeta gemelo de la Tierra?", options:['Marte', 'Júpiter', 'Venus', 'Saturno'], correct:2}, // Venus
  {text:"Capital de Francia", options:['Roma', 'París', 'Madrid', 'Lisboa'], correct:1}, // París
  {text:"Capital de China", options:['Roma', 'Pekín', 'Madrid', 'Lisboa'], correct:1}, // Pekín
  {text:"¿En qué continente está Chile?", options:['Europa', 'Asia', 'África', 'América'], correct:3}, // América
  {text:"Capital de Italia", options:['Roma', 'París', 'Madrid', 'Lisboa'], correct:0}, // Roma
  {text:"Capital de Japón", options:['Roma', 'Tokio', 'Madrid', 'Lisboa'], correct:1}, // Tokio
  {text:"Capital de Chile", options:['Roma', 'Santiago', 'Madrid', 'Lisboa'], correct:1}, // Santiago
  {text:"¿En qué continente está Argentina?", options:['Europa', 'Asia', 'África', 'América'], correct:3}, // América
];
