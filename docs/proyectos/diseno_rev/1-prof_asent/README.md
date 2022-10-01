# SELECCIÓN DE LA PROFUNDIDAD DE ASENTAMIENTO
El método convencional de selección de la profundidad de asentamiento de la tubería de revestimiento comienza por la identificación del gradiente de presión intersticial, o presión de poro, y del gradiente de fractura. El primero se refiere a la presión que ejercen los fluidos de la formación, mientras que el gradiente de fractura se refiere a la presión que es capaz de romper la formación.
Entonces, para la selección de la profundidad de asentamiento de la tubería de revestimiento se utiliza un gráfico donde se muestren: el gradiente de presión de poro y el gradiente de fractura.
La operación normal de perforación se desarrollará en el espacio entre ambos gradientes. Es decir, se utilizará un fluido de perforación que genere más presión que la presión de poro para “controlar” el pozo y sin embargo, ese fluido no deberá generar una presión tan grande que fracture la formación y se fugue hacia ésta. Por razones de seguridad, se trabaja entonces con una presión ligeramente superior o sobrebalance a la presión de poro, generalmente entre 0.5 y 1.0 lpg. (margen de viaje). Igual se hace con la presión de fractura a la que se le sustrae un valor similar (margen de arremetida) por seguridad.
Así finalmente, el proceso de selección de la profundidades de asentamiento se inicia en el fondo, proyectando la densidad del lodo a la profundidad total (presión intersticial más sobrebalance) hasta el punto en que intercepta el gradiente de fractura menos un margen de arremetida (segmento a-b). Se “asienta” el revestidor en ese punto y da inicio al proceso otra vez (segmento c-d).

![](https://github.com/manuelmad/manuelmad.github.io/blob/main/docs/proyectos/diseno_rev/1-prof_asent/doc/img/curva_densidad.JPG)

## AJUSTE POR PEGA DIFERENCIAL

Se ajusta inicialmente la profundidad de asentamiento de el(los) revestidor(es) intermedio(s), esto se hace tomando en cuenta una posible pega por presión diferencial, lo que a menudo ocurre a la profundidad donde la presión de formación pasa de normal a anormal.
Los límites permitidos para bajar un revestidor intermedio dependen de las condiciones siguientes:

* A través de zonas de presión normal ΔP<sub>T</sub> = 2000 lpc.
* A través de zonas de presión anormal ΔP<sub>T</sub> = 3000 lpc.

Para calcular la presión diferencial a la cual estará sometido el revestidor durante las condiciones antes mencionadas, se toma la diferencia entre la densidad del fluido utilizado a la profundidad de asentamiento del revestidor intermedio y la densidad normal equivalente de la formación (9 lpg.), y se covierte en presión utilizando la siguiente ecuación.

ΔP<sub>C</sub> = 0.052 * (D<sub>L</sub> - D<sub>N</sub>) * Prof<sub>n-a</sub>

Donde:
ΔP<sub>C</sub>: Diferencial de Presión Calculado (lpc.).
D<sub>L</sub>: Densidad del lodo a profundidad de asentamiento del revestidor intermedio (lpg.).
D<sub>N</sub>: Densidad normal equivalente de la formación (9 lpg.).
Prof<sub>n-a</sub>: Profundidad donde la presión de formación pasa de normal a anormal (pies).

**Nota**: Si el revestidor a analizar no estará expuesto a la zona de transición normal – anormal, las variables y deben ser substituidas por la Densidad Equivalente de la formación más propensa a causar pega diferencial y su respectiva profundidad, respectivamente.

Si el valor de ΔP<sub>C</sub> < ΔP<sub>T</sub>, entonces el revestidor intermedio SÍ puede ser asentado a la profunidad determinada gráficamente.

Si de ΔP<sub>C</sub> > ΔP<sub>T</sub> , NO se puede asentar a dicha profundidad y se calcula entonces la D<sub>L</sub> que nos permita asentar el revestidor sin riesgo de pega diferencial, usando la misma ecuación arriba mostrada, pero sustituyendo ΔP<sub>C</sub> por el valor máximo permitido y despejando D<sub>L</sub>:

2000 = 0.052 * (D<sub>L</sub> - D<sub>N</sub>) * Prof<sub>n-a</sub>

D<sub>L</sub> = (2000 / (0.052 * Prof<sub>n-a</sub>)) + D<sub>N</sub>

Finalmente, con D<sub>L</sub> calculado, ubicamos en la gráfica la profundidad de asentamiento corregida del revestidor intermedio (Prof<sub>correg</sub>), la cual será obviamente menor a la originalmente observada (Prof<sub>orig</sub>).

Este ajuste de disminución en la profundidad de asentamiento trae como consecuencia que en la perforación del siguiente hoyo quedarían expuestas las formaciones en el intervalo comprendido entre la profundidad original y la corregida, las cuales podrían ser fracturadas. Esta nueva condición obliga a añadir una sarta de revestimiento o liner adicional en el diseño para cubrir el intervalo que ha quedado comprometido (Prof<sub>correg</sub> – Prof<sub>orig</sub>).

Opcionalmente, dicho revestimiento o liner adicional podría asentarse a una profundidad mayor a Prof<sub>orig</sub>, tal decisión dependerá de las políticas de la empresa o consideraciones económicas. Para conocer la máxima profundidad a la cual puede asentarse la sarta adicional, se sigue el siguiente procedimiento: i) entrar en la gráfica Densidad Equivalente vs. Profundidad con el valor de Prof<sub>correg</sub> hasta interceptar la curva de margen de arremetida, ii) desplazarse verticalmente hacia abajo hasta interceptar la curva de densidad de lodo, iii) leer el valor de profundidad para dicho punto (Prof<sub>máx</sub>).

En conclusión, la sarta adicional de revestimiento o liner podrá asentarse a cualquier profundidad entre Prof<sub>orig</sub> y Prof<sub>máx</sub>.

## AJUSTE POR ARREMETIDAS
Posteriormente, se ajusta la profundidad de asentamiento de el(los) revestidor(es) superficial(es), basados en la capacidad para resistir con seguridad una arremetida que cause un aumento en el peso del lodo de 0,5 lpg, cuando la perforación haya alcanzado la profundidad de asentamiento del siguiente revestidor (superficial o intermedio). Para esto, se realiza un procedimiento de ensayo y error, donde se calcula la densidad equivalente del fluido (DE<sub>f</sub>) a nivel de las formaciones expuestas justo por debajo del revestidor superficial que se está analizando, utilizando la siguiente ecuación:

DE<sub>f</sub> = D<sub>L</sub> + [(Prof<sub>rev-int</sub> / Prof<sub>rev-sup</sub>) * 0.5]

Donde:
DE<sub>f</sub>: Densidad equivalente del fluido a nivel de la zapata del revestidor superficial (lpg.).
D<sub>L</sub>: Densidad del lodo a profundidad de asentamiento del revestidor intermedio (lpg.).
Prof<sub>rev-int</sub>: Profundidad de asentamiento del revestidor intermedio (pies).
Prof<sub>rev-sup</sub>: Profundidad de asentamiento del revestidor superficial (pies).
0.5: Incremento del valor de la densidad del lodo durante la arremetida (lpg.).

Luego de calcular la Densidad Equivalente de Fluido, se compara con la densidad equivalente de fractura a la misma profundidad (Prof<sub>rev-sup</sub>).

Si DE<sub>f</sub> < Densidad Equiv. de Fractura, el revestidor SÍ puede asentarse a la profundidad observada en la gráfica.

Si DE<sub>f</sub> > Densidad Equiv. de Fractura, el revestidor superficial NO puede ser asentado a dicha profundidad y debe escogerse una distinta, obviamente mayor. Se repite el procedimiento hasta conseguir un valor de Profrev-sup que asegure cumplir que DE<sub>f</sub> < Densidad Equiv. de Fractura.

**Nota**: Se pueden graficar los puntos obtenidos en el proceso de ensayo y error, en la misma gráfica de Densidad Eq. vs. Profundidad para obtener una curva y observar en qué punto ésta intercepta a la curva de Densidad Equivalente de Fractura, obteniendo así de forma más precisa ( DE<sub>f</sub> = Densidad Equiv. de Fractura) la profundidad de asentamiento del revestidor en cuestión.

![](https://github.com/manuelmad/manuelmad.github.io/blob/main/docs/proyectos/diseno_rev/1-prof_asent/doc/img/ajuste-arremetida.JPG)

## PROFUNDIDAD DE ASENTAMIENTO DEL REVESTIDOR CONDUCTOR
Las profundidades de asentamiento del conductor y de la primera tubería de revestimiento por encima de la tubería de superficie generalmente están determinadas en las normas o se establecen de acuerdo a los riesgos de perforación que presente el área. Las arenas que contienen agua, las formaciones no consolidadas, y el gas poco profundo constituyen algunos de los riesgos que se pueden controlar eficazmente usando la primera tubería de revestimiento o un conductor. La mayoría de los gobiernos exige proteger las arenas que contienen agua dulce con tubería de revestimiento.