# DISEÑO MECÁNICO: SELECCIÓN DE PESO NOMINAL Y GRADO DE ACERO DE LOS REVESTIDORES
Existen dos (02) métodos para llevar a cabo el diseño mecánico de las sartas de revestidores:
* Método Convencional API.
* Método de Vida de Servicio.

Cuando se diseña una sarta de tubería de revestimiento, ambos métodos tienen como propósito lograr factores de diseño adecuados para las cargas de estallido, colapso y tensión.
Ahora bien, en el método convencional API estas cargas se consideran por separado. Por lo general, no se toman en cuenta la cementación, el pandeo, los cambios de temperatura, los esfuerzos de flexión, ni las variaciones en el área transversal.
Para cualquier caso, los Factores de Diseño pueden expresarse en el siguiente formato:

F.D. = Resistencia interna del Material / Carga Aplicada

Los tres factores de diseño según los cuales se evalúa una sarta, cuando se aplica El método convencional API, son:

F.D.<sub>estallido</sub> = Presión interna de fluencia / Diferencial de presión interna

F.D.<sub>colapso</sub> = Resistencia al colapso de la tubería / Presión de colapso equivalente

F.D.<sub>tensión</sub> = Resistencia a tensión de la junta / Carga máxima a tensión

Los valores de Factor de Diseño aceptados por PDVSA como mínimos para el diseño de revestidores se muestran en la siguiente tabla.

![](https://github.com/manuelmad/manuelmad.github.io/blob/main/docs/proyectos/diseno_rev/3-diseno_mec/img/tabla-fd.JPG)

## MÉTODO CONVENCIONAL API

El diseño de revestidores según el método API utiliza el concepto de ***carga máxima***, que es un procedimiento que analiza todas las posibles cargas que puedan generarse en el revestidor, durante la perforación o durante la vida útil del pozo.
En general, para cada sarta de revestimiento, el procedimiento es el siguiente:
* Primero se establecen las cargas que generen la máxima presión de estallido y se selecciona, tentativamente, el revestidor más económico que pueda satisfacer esta carga.
* Posteriormente se definen las cargas máximas de colapso y se evalúa la resistencia al colapso del revestidor seleccionado en el paso anterior. Si alguna sección de este revestidor no soporta las nuevas cargas definidas, se utiliza otro con mayor resistencia.
* A continuación, se definen las cargas por tensión y se evalúa la resistencia del cuerpo del revestidor seleccionado previamente. En caso de que una sección de este revestidor esté subdiseñada, se usa otra sección con acero de mayor grado o con mayor peso.
* Adicionalmente, las cargas de tensión/compresión pueden modificar los valores de resistencia al estallido y al colapso del revestidor. Estos efectos, llamados biaxiales, deben ser analizados para asegurar que no reducen la resistencia al estallido y al colapso por debajo de los requerimientos mínimos establecidos. Los efectos específicos de las cargas de tensión son los siguientes:

![](https://github.com/manuelmad/manuelmad.github.io/blob/main/docs/proyectos/diseno_rev/3-diseno_mec/img/tabla-cargas.JPG)

* Finalmente, se calculan los factores de diseño para cada caso de carga.