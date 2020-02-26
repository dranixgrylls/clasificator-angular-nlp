# Clasificator · Spanish Unsupervised Machine Learning

**Proyecto generado con [Angular CLI] versión 9.0.3 que trata sobre el análisis del lenguaje natural, clasificación de opiniones mediante aprendizaje no supervisado.**
Project generated with [Angular CLI] version 9.0.3 that deals with the analysis of natural language, classification of opinions through unsupervised learning.

## Aprendizaje No Supervisado (Unsupervised Machine Learning)

**El aprendizaje no supervisado es una técnica de clasificación de opiniones que no requiere de información etiquetada previamente. Se caracteriza por el uso de recursos léxicos para determinar la orientación semántica de las palabras presentes en un comentario.**
Unsupervised learning is a technique of rating opinions that does not require previously labeled information. It is characterized by the use of lexical resources to determine the semantic orientation of the words present in a comment.

**Se reduce el comentario a su mínima expresión, esto es, quedarnos con palabras únicas que tienen significado propio (tokens), para ello se eliminan las palabras vacías (stopwords) como son las preposiciones, por ejemplo, y finalmente se comparan con una bolsa de palabras positivas y negativas para hacer un recuento total de coincidencias obteniendo la polaridad del comentario (positivo, negativo o neutro).**
The comment is reduced to its minimum expression, that is, staying with unique words that have their own meaning (tokens), for this purpose empty words (stopwords) such as prepositions are eliminated, for example, and finally they are compared with a bag of positive and negative words to make a total count of coincidences obtaining the polarity of the comment (positive, negative or neutral).

### Pre-requisitos (Pre requirements)

_Angular CLI_

```
npm install -g @angular/cli@next
```
### Instalación y lanzamiento (Installation and launch)

**Nos posicionamos en la carpeta del proyecto**
We position ourselves in the project folder

```
cd /clasificator
```

**Lo ejecutamos**
We run it 

```
ng serve
```

**Por defecto, se lanzará en http://localhost:4200**
By default, it will be launched at http://localhost:4200

### Referencia (Reference)

_Molina-González, M. D., Martínez-Cámara, E., Martín-Valdivia, M. T., & Perea-Ortega, J. M. (2013). Semantic orientation for polarity classification in Spanish reviews. Expert Systems with Applications, 40(18), 7250-7257._

