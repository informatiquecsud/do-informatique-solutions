# Solutions du chapitre 4

## Table des matières

[[toc]]

## Activité 1, page 44

Il suffit d'appeler la commande `carre(cote)` en fournissant les différentes
valeurs en paramètre lors de l'appel.

```python webtj[autorun]

from gturtle import *

def carre(cote):
    repeat 4:
        forward(cote)
        right(90)

makeTurtle()
carre(100)
carre(75)
carre(150)
carre(200)
```

## Activité 2, page 45

La commande `hexagone` vous est maintenant bien familière. Il suffit de
reprendre le code de l'activité 1, page 32 en rajoutant un paramètre `cote` qui
indique la longueur des côtés.

```python webtj[autorun]

from gturtle import *

def polygone(cote):
    repeat 6:
        forward(cote)
        right(360 / 6)

makeTurtle()
polygone(80)
polygone(96)
```

## Activité 3, page 45

Comme la commande doit être capable de dessiner n'importe quel polygone
régulier, il faut qu'elle prenne le nombre de côtés en paramètre. Appelons ce
paramètre `nombre_cotes`:

```python webtj[autorun, width=120%]

from gturtle import *

def polygone(nombre_cotes):
    repeat nombre_cotes:
        forward(50)
        right(360 / nombre_cotes)

makeTurtle()
# dessin du pentagone
polygone(5)
# dessin de l'octogone
polygone(8)
```

## Activité 4, page 46 (facultatif)

```python webtj[autorun, width=120%]

from gturtle import *

def triangle_couleur(couleur):
    setPenColor(couleur)
    right(90)
    repeat 3:
        forward(200)
        left(360 / 3)
    left(90)

def deplacement():
    right(90)
    forward(200)
    left(90)

makeTurtle()
setPos(-200, 0)
triangle_couleur("red")
deplacement()
triangle_couleur("green")
deplacement()
triangle_couleur("blue")
```

## Activité 5, page 48

Comme nous l'avons déjà à l'exercice-projet 6 du chapitre 4, page 41, il est
très utile pour dessiner des animations de définir une seule commande pour
dessiner une forme à animer qui prend ensuite un paramètre de couleur permettant
d'utiliser cette même commande pour afficher l'objet et pour l'effacer ensuite
en le redessinant dans la même couleur que le fond.

Par exemple, pour l'animation des planètes, on aurait pu définir une commande
`dessine_terre(rayon, couleur)` de la manière suivante:

```python webtj[width=120%, autorun]

from gturtle import *

def dessine_terre(rayon, couleur):
    setPenWidth(10)
    setPenColor(couleur)
    repeat 36:
        forward(rayon)
        back(rayon)
        right(360 / 36)

def deplace_a_droite(distance):
    penUp()
    right(90)
    forward(distance)
    right(-90)
    penDown()

makeTurtle()
hideTurtle()
repeat:
    # afficher la terre en bleu
    dessine_terre(30, "blue")
    # environ 10 images par seconde
    delay(1000 / 20)
    # cacher la terre en la redessinant dans la même
    # couleur que le fond
    dessine_terre(32, "white")
    # déplacer la tortue de 1 pixel vers la droite
    deplace_a_droite(1)
```

## Activité 6, page 48

```python webtj[width=120%, autorun, speed=4]

from gturtle import *

#dessine un escalier d'une longueur donnée, d'une hauteur donnée, et d'un certain nombre de marche donné
def escalier(longueur, hauteur, nombre_marches):
    repeat nombre_marches:
        forward(hauteur)
        right(90)
        forward(longueur)
        left(90)

setPos(-150, -100)
makeTurtle()
escalier(21, 16, 8)
```

# Dessine un escalier de huit marches ayant une hauteur de 16 et une longueur de 21

escalier(21, 16, 8)

## Activité 7, page 48

```python webtj[autorun]
from gturtle import *

def triangle_couleur(s, f):
    setPenColor(f)
    repeat 3:
        forward(s)
        left(360 / 3)

makeTurtle()
triangle_couleur("red", 100)
```

La tortue fait n'importe quoi. Elle ne dessine en tout cas pas un triangle rouge
de côté 100. La raison est que Maria a inversé l'ordre des deux paramètres.

## Activité 8, page 48

::: tip Conseil de pro

Pour éviter ce genre d'erreurs, il faut éviter d'attribuer aux paramètres des
noms qui n'ont pas de sens tels que `s` et `f`. Il vaut mieux utiliser des noms
très significatifs tels que `longueur_cote` et `couleur`.

Le code suivant est bien plus lisible et compréhensible:

```python
from gturtle import *

def triangle_couleur(longueur_cote, couleur):
    setPenColor(couleur)
    repeat 3:
        forward(longueur_cote)
        left(360 / 3)

makeTurtle()
triangle_couleur("red", 100)
```

:::

## Activité 9, page 50

::: danger Attention

Pour le moment, il ne faut pas effectuer cette activité. Elle doit encore
adaptée à la présentation faite sur le site. Cet exercice va probablement être
supprimé.

:::

## Activité 10, page 52

On commence par définir la commande `carre(cote)` pour dessiner un carré de côté
`cote`. Cette commande est ensuite utilisée pour réaliser la commande
`rangee(cote, nb_carres)`. On définit également une commande

```python
def va_a_droite(distance):
    right(90)
    forward(distance)
    left(90)
```

pour repositonner la tortue après chaque carré.

```python webtj[autorun, speed=10]
from gturtle import *

#dessine un carre
def carre(cote):
    repeat 4:
        forward(cote)
        right(90)

def va_a_droite(distance):
    right(90)
    forward(distance)
    left(90)

#utilise la commande carre pour dessiner plusieurs carres pour former une rangée
def rangee(cote, nb_carres):
    repeat nb_carres:
        carre(cote)
        va_a_droite(cote)

makeTurtle()
setPos(-200, 0)
#hideTurtle()

rangee(15, 24)
```

## Activité 11, page 52

Pour réaliser cet exercice, il s'agit de réutiliser la commande `rangee(cote,
nb_carres)` définie dans l'activité précédente.

::: tip Remarques

-   Pour coder de manière plus propre, vous pouvez légèrement modifier la consigne
      pour que la commande `grille` prenne encore un paramètre additionnel `cote`. Il
      n'y a pas de raison de faire une commande qui ne puisse dessiner que des carrés
      de 10 de côté. Cela rend simplement la commande plus flexible.

-   Pour repositonner la tortue après le dessin d'une rangée, on définit une
      commande `va_a_gauche(distance)` qui ne fait rien d'autre que d'utiliser la
      commande `va_a_droite(distance)` déjà programmée dans l'activité précédente.

:::

```python webtj[autorun, speed=10, hideTurtle]
from gturtle import *

def carre(cote):
    repeat 4:
        forward(cote)
        right(90)

def va_a_droite(distance):
    right(90)
    forward(distance)
    left(90)

def va_a_gauche(distance):
    va_a_droite(-distance)

def rangee(cote, nb_carres):
    repeat nb_carres:
        carre(cote)
        va_a_droite(cote)

def grille(nb_colonnes, nb_rangees, cote):
    repeat nb_colonnes:
        rangee(cote, nb_rangees)
        penUp()
        va_a_gauche(nb_rangees * cote)
        back(cote)
        penDown()

makeTurtle()
setPos(-200, 200)
#hideTurtle()

grille(5, 9, 20)
```

## Correction vidéo des activités 12 et 13 

<iframe width="100%" height="420" src="https://www.youtube.com/embed/nKK-bMaLWXw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>



## Activité 12, page 53

Le programme n'est pas très difficile à réaliser. Ce qui est très important,
c'est que la tortue se trouve dans la même position au début et à la fin du
dessin de la flèche. Cela permet de mieux utiliser cette commande pour réaliser
des dessins plus complexes par la suite.

::: tip Bonne pratique

*   Même si la donnée nomme la longueur des segments `x`, c'est plus pour faciliter
    le schéma. Lorsqu'on programme, on préférera néanmoins des noms
    significatifs et descriptifs tels que `mesure_segment`.

*   Veillez à bien laisser des espaces entre les opérateurs et les opérandes
    dans les opérations arithmétiques. On préfère donc écrire `right(180 -
    angle)` que `right(180-angle)`.


```python webtj[autorun]
from gturtle import *

def fleche(mesure_segment, angle):
    forward(mesure_segment)
    right(180 - angle)
    forward(mesure_segment)
    back(mesure_segment)
    right(2 * angle)
    forward(mesure_segment)
    back(mesure_segment)
    right(180 - angle)
    back(mesure_segment)


makeTurtle()
fleche(100, 45)
```

Bien que la commande `fleche` soit de toute évidence appelée à être réutilisée
dans l'exercice suivant et qu'il serait plus pratique que la tortue termine sa
course à la pointe de la flèche, il vaut mieux tout de même la ramener à sa
position originale pour ne pas déroger à la règle.

Le principe de conception est le suivant : lorsqu'on définit une commande, on ne
sait en principe pas à l'avance à quoi elle va servir. Le but étant de définir
une commande une fois pour la réutilisewqr un grand nombre de fois dans des
contextes très différents, il faudrait éviter de la définir en fonction d'un
usage particulier.

La fonction `fleche` pourrait par exemple servir à réaliser la figure
ci-dessous:

```python webtj[autorun]
from gturtle import *

def fleche(mesure_segment, angle):
    forward(mesure_segment)
    right(180 - angle)
    forward(mesure_segment)
    back(mesure_segment)
    right(2 * angle)
    forward(mesure_segment)
    back(mesure_segment)
    right(180 - angle)
    back(mesure_segment)


makeTurtle()
repeat 4:
    forward(50)
    fleche(100, 45)
    back(50)
    right(90)
```

Il est dans ce cas bien plus pratique que la tortue revienne à sa position de départ
plutôt que de rester à la pointe de la flèche.

:::

## Activité 13, page 53

Le plus important pour réaliser cet exercice est de réutiliser la commande de
l'exercice précédent **sans la modifier**.

```python webtj[autorun]
from gturtle import *

def fleche(mesure_segment, angle):
    forward(mesure_segment)
    right(180 - angle)
    forward(mesure_segment)
    back(mesure_segment)
    right(2 * angle)
    forward(mesure_segment)
    back(mesure_segment)
    right(180 - angle)
    back(mesure_segment)

def sapin(taille, diminution, angle):
    fleche(100, angle)
    forward(100)
    fleche(90, angle)
    forward(90)
    fleche(80, angle)
    forward(80)

makeTurtle()

setPos(0, -150)
sapin(100, 10, 36)
```

## Activité 14, page 53

Au lieu d'utiliser la technique décrite à la page 38 pour dessiner des carrés
pleins, on utiliser ici une technique plus simple qui demande moins de
bricolage. La fonction `carre_couleur(cote, couleur)` est ainsi plus naturelle,
plus facilement compréhensible et plus facilement utilisable.

```python webtj[autorun, width=130%]
from gturtle import *


def carre_couleur(cote, couleur):
    setPenColor(couleur)
    repeat cote:
        forward(cote)
        back(cote)
        penUp()
        right(90)
        forward(1)
        left(90)
        penDown()

# repositionnement pour dessiner le carré suivant
def repositionnement(cote):
    penUp()
    # on avance d'un pas de plus pour éviter
    # un chevauchement sur le dernier pas du carré
    forward(cote + 1)
    left(90)
    # on déplace la tortue sur le coin supérieur gauche du carré
    forward(cote)
    right(90)
    penDown()


# création de la pile
def pile(cote, couleur1, couleur2):
    repeat 3:
        carre_couleur(40, couleur1)
        repositionnement(cote)
        carre_couleur(40, couleur2)
        repositionnement(cote)

makeTurtle()
hideTurtle()
setPos(0, -100)
pile(40, "red", "yellow")

```

## Activité 15, page 54

La commande `va_a_droite()` doit simplement décaler la tortue d’un pas à droite,
afin de pouvoir dessiner le carré suivant sans créer de chevauchement entre les
deux carrés.

```python
def va_a_droite(longueur):
    penUp()
    right(90)
    forward(longueur)
    left(90)
    penDown()
```

## Activité 16, page 54

```python webtj[autorun, width=130%]
from gturtle import *

def ligne_epaisse(cote):
    '''dessine une double ligne'''
    forward(cote)
    right(90)
    forward(1)
    right(90)
    forward(cote)
    right(180)

def carre_couleur(cote, couleur):
    ''' dessine un carré rempli '''
    setPenColor(couleur)
    repeat cote - 1:
        ligne_epaisse(cote)

def va_a_gauche(longueur):
    '''décale la tortue à gauche de `longueur` pixels'''
    penUp()
    left(90)
    forward(longueur)
    right(90)
    penDown()

def va_a_droite(longueur):
    '''décale la tortue à droite de `longueur` pixels'''
    penUp()
    right(90)
    forward(longueur)
    left(90)
    penDown()

def rangee_carres(cote, n, couleur1, couleur2):
    ''' dessine une ligne de 2*n carrés de longeur `cote` en alternant les couleurs '''
    repeat n:
        carre_couleur(cote, couleur1)
        va_a_droite(1)
        carre_couleur(cote, couleur2)
        va_a_droite(1)
    va_a_gauche(cote * 2 * n)
    

makeTurtle()
hideTurtle()
setPos(-150, 0)
# on a besoin de 14 carrés, comme chaque appel à rangee_carres on dessine deux
# carrés, on doit pas oublier pour la valeur n de diviser le nombre de carrés
# total par deux
rangee_carres(22, 7, "blue", "green")
```

# Activité 17, page 54

La commande `rangee_carres()` est appelé avec les paramètres 

```python
rangee_carres(65, 3, "yello", "purple")
```

Cela signifie qu'au sein du corps de la commande `rangee_carres()`, le tableau
de valeur des paramètres pour l'appel de la commande `rangee_carres(65, 3,
"yello", "purple")` est donc 

|   Name | Wert |
| -----: | ---- |
| `cote` | 65   |
|    `n` | 3    |

La commande `va_a_gauche()` va donc être appelée à la ligne 14 avec l'expression
`cote * 2 * n` qui est évaluée à `390`. Le paramètre `longueur`, pour cet appel
de commande, a donc la valeur 390.

## Activité 18, page 55

Dans cet exercice, on rassemble tous les différents composants logiciels
(briques de base) développés dans les exercices 14 à 16 et les exemples 11A et
11B. La réalisation du programme pour dessiner un échiquier montre bien la
stratégie à utiliser pour développer un projet complexe à l'aide de la
conception modulaire.

Voici le code complet pour résoudre l'exercice 18.

```python webtj[autorun, width=130%]
from gturtle import *

def ligne_epaisse(cote):
    forward(cote)
    right(90)
    forward(1)
    right(90)
    forward(cote)
    right(180)

def carre_couleur(cote, couleur):
    setPenColor(couleur)
    repeat cote-1:
        ligne_epaisse(cote)

def va_a_gauche(longueur):
    penUp()
    left(90)
    forward(longueur)
    right(90)
    penDown()

def va_a_droite(longueur):
    penUp()
    right(90)
    forward(longueur)
    left(90)
    penDown()

def rangee_carres(cote, n, couleur1, couleur2):
    repeat n:
        carre_couleur(cote, couleur1)
        va_a_droite(1)
        carre_couleur(cote, couleur2)
        va_a_droite(1)
    va_a_gauche(cote * 2 * n)

def echiquier(cote, m, n, couleur1, couleur2):
    '''dessine l'échiquier de 2*m lignes'''
    repeat m:
        rangee_carres(cote, n, couleur1, couleur2)
        penUp()
        forward(cote)
        penDown()
        rangee_carres(cote, n, couleur2, couleur1)
        penUp()
        forward(cote)
        penDown()
        
makeTurtle()
hideTurtle()
setPos(-150, 0)
echiquier(20, 8, 3, "cyan", "dark green")
```

## Activité 19, page 55

Il suffit d'appeler la commande `echiquier()` comme suit:

```python
echiquier(25, 4, 6, "brown", "yellow")
```

## Exercice 1, page 57

Pour réaliser cet exercice, il faut utiliser la conception modulaire. Il y a
plusieurs stratégies différentes se faire une idée de la manière de décomposer
le problème.

::: tip Stratégie de résolution de problème

On peut utiliser une approche "top-down" dans laquelle on commence par
développer la commande `double_escalier(nombres_marches)` ou une approche
"bottom-up" où l'on commence par les plus petites briques (la commande
`marche()`). L'une comme l'autre fonctionne très bien mais il se peut que l'une
d'elle vous convienne mieux.

On peut même d'une certaine manière utiliser ces deux approches. Pour
conceptualiser le problème, on peut par exemple utiliser la méthode "top-down".
Une fois qu'on a effectué la décomposition du problème en allant du "grand" vers
le "petit", on peut utiliser l'approche inverse lors de l'implémentation de la
stratégie (lorsqu'on écrit le code).

:::

### Conceptualisation par l'approche top-down

L'approche "top-down" consiste à partir de la vision d'ensemble (le problème
dans son entier) et le décomposer petit-à-petit jusqu'à parvenir aux briques de
base.

1.  On voit que pour dessiner l'escalier dans son entier, il faut définir une
    commande `double_escalier(nombre_marches)` permettant de dessiner l'escalier
    dans son ensemble. Cette commande ressemblera à quelque chose comme

    ```python
    def double_escalier(nombre_marches):
        escalier()
        avancer()
        escalier()
    ```

2.  On voit que pour dessiner le double escalier, il faut d'abord savoir
    dessiner un escalier simple. On définira donc à cet effet une commande
    `escalier()`. On sait d'avance qu'il faut pouvoir faire varier le nombre de
    marches des escaliers. On va donc définir la commande avec un paramètre
    `nombre_marches`. Mais tant qu'on y est, pourquoi ne pas aussi avoir un
    paramètre `hauteur` pour définir la hauteur de l'escalier et `largeur` pour
    définir sa largeur? On obtient alors une commande `escalier` de la forme

    ```python
    def escalier(nombre_marches, hauteur, largeur):
        repeat nombre_marches:
            marche(hauteur / nombre_marches, largeur / nombre_marches)
    ```

3.  Pour dessiner l'escalier, il faut définir une commande `marche` de la
    manière suivante :

    ```python
    def marche(hauteur, largeur):
        forward(hauteur)
        right(90)
        forward(largeur)
        left(90)
    ```

### Approche "bottom-up" pour l'implémentation

Maintenant que l'approche top-down nous a permis de déterminer les commandes à
définir, on peut utiliser l'approche "bottom-up" pour partir de la plus petite
brique de base (la commande `escalier`) pour aller vers des briques toujours
plus grosses.

::: tip Conseil

On veillera à tester chaque commande de manière isolée après l'avoir définie.

:::

#### Définir et tester la commande `escalier(hauteur, largeur)`

On définit et on teste la commande `escalier` en vérifiant qu'elle fonctionne
pour plusieurs valeurs différentes des paramètres `hauteur` et `largeur`.

```python webtj[autorun, width=120%]
from gturtle import *

def marche(hauteur, largeur):
    forward(hauteur)
    right(90)
    forward(largeur)
    left(90)


makeTurtle()
marche(50, 20)
setPenColor("red")
marche(20, 50)
```

On voit que la commande `marche()` fonctionne correctement. On peut ensuite
définir la commande `escalier`:

```python webtj[autorun, width=120%]
from gturtle import *

def marche(hauteur, largeur):
    forward(hauteur)
    right(90)
    forward(largeur)
    left(90)

def escalier(nombre_marches, hauteur, largeur):
    repeat nombre_marches:
        marche(hauteur / nombre_marches, largeur / nombre_marches)



makeTurtle()
setPos(-200, -100)
escalier(4, 200, 300)
# pour bien tester que les dimensions sont correcte,
# on peut par exemple essayer de revenir au point de départ
setPenColor("orange")
back(200)
left(90)
forward(300)
```

Maintenant que l'on sait que la commande `escalier` fonctionne correctement à
cause du test (ligne orange), on peut dessiner l'escalier dans son entier avec
la commande `double_escalier`. Pour que le double escalier fasse bien 500 de
large et 200 de haut, il faut dessiner deux escaliers de largeur
$frac{500}{2} = 250$ et de hauteur identique $200$:

::: warning Astuce

Lorsqu'on dessine le premier escalier qui monte, la tortue commence par monter à
la verticale et dessine ainsi la hauteur d'une marche. En revanche, lorsqu'elle
dessine le deuxième escalier en descendant, elle dessine d'abord la largeur
d'une marche. Pour ne pas avoir à définir une nouvelle commande pour dessiner le
deuxième escalier en descendant, il suffit de se tourner

1.  Tourner la tortue de $90°$ à droite
2.  Dessiner l'escalier descendant en faisant comme si les largeur étaient des
    hauteur et vis-versa.

Pour dessiner le deuxième escalier, on inverse donc l'ordre des paramètres : on
passe d'abord la largeur et ensuite la hauteur:

escalier(4, 500 / 2, 200)

:::

```python webtj[autorun, width=120%, speed=4]
from gturtle import *

def marche(hauteur, largeur):
    forward(hauteur)
    right(90)
    forward(largeur)
    left(90)

def escalier(nombre_marches, hauteur, largeur):
    repeat nombre_marches:
        marche(hauteur / nombre_marches, largeur / nombre_marches)

def double_escalier(nombre_marches):
    escalier(nombre_marches, 200, 500 / 2)
    right(90)
    escalier(nombre_marches, 500 / 2, 200)

makeTurtle()
setPos(-250, -100)
double_escalier(4)
```

À ce stade, le problème est résolu. On aurait toutefois pu rendre la commande
`double_escalier` un peu plus flexible et lui donner en paramètre la hauteur et
la largeur du double escalier:

```python
def double_escalier(nombre_marches, hauteur_tot, largeur_tot):
    escalier(nombre_marches, hauteur_tot, largeur_tot / 2)
    right(90)
    escalier(nombre_marches, largeur_tot / 2, hauteur_tot)
double_escalier(4, 200, 500)
```

## Exercice 2, page 57

On peut facilement identifier un motif qui se répète dans l'illustration : la
pyramide. Il faut donc définir une commande nommée par exemple `pyramide` pour
dessiner ce motif. De plus, comme la taille des pyramides doit pouvoir être
déterminée lors de l'appel de la commande, il qu'elle prenne un paramètre `cote`
ou `longueur`.


```python webtj[autorun, width=130%, speed=30]
from gturtle import *

def pyramide(cote):
    '''
    dessine une pyramide (simplifiée) de côté c et d'ouverture 60°
    rend la tortue dans la direction de départ
    '''
    forward(cote)
    right(120)
    forward(cote)
    left(120)

def rangeeTriangles(nombre_cotes, mesure_cote):
    '''
    dessine une rangée de `nombre_cotes` pyramides de côté `mesure_cote`
    rend la tortue dans la direction de départ
    '''
    right(30)
    repeat nombre_cotes:
        pyramide(mesure_cote)
    left(30)

makeTurtle()

# Positionne la tortue au bon endroit pour centrer
# le dessin horizontalement
penUp()
left(90)
forward(31 * 20 / 2)
right(90)
penDown()

rangeeTriangles(20, 31)
```

## Exercice 3, page 57

Il suffit de se rappeler qu'un carré n'est rien d'autre qu'un 4-gone régulier, à
savoir un polygone régulier à 4 côtés.


```python webtj[autorun, width=130%]
from gturtle import *

def polygone(nombre_cotes, mesure_cote):
    '''
    dessine un polygone à n côtés de longueur c
    revient au point de départ dans la même direction
    '''
    repeat nombre_cotes:
        forward(mesure_cote)
        right(360 / nombre_cotes)

def carre(mesure_cote):
    '''
    dessine un carré de côté c sous la forme d'un polygone à 4 côtés
    '''
    polygone(4, mesure_cote)

makeTurtle()
carre(100)
```

## Projet 4, page 57

::: warning

Le projet 4 est plus conséquent que les autres exercices et permet plus de
liberté. Il est intéressant de réaliser ce genre d'exercices par groupes de deux
ou trois personnes. Il faut alors veiller à ce que chacun puisse contribuer à la
réalisation du programme.

:::

Voici un exemple de solutions. Il est bien entendu possible de réaliser des
fleurs encore plus jolies. Ce projet étant plus conséquent et libre, le code
n'est pas fourni dans ce corrigé. Le code est plutôt présenté sous forme de
vidéo qui montre comment réfléchir pour décomposer le problème


```python webtj[autorun, width=130%, speed=15]
from gturtle import *

def arc_de_cercle(fraction_cercle, longueur):
    repeat 72 * fraction_cercle:
        forward(longueur / (72 * fraction_cercle))
        right(5)
        
def disque(rayon, couleur):
    setPenColor(couleur)
    setPenWidth(5)
    repeat 36:
        forward(rayon)
        back(rayon)
        right(10)

def petale(fraction_cercle, longueur, couleur):
    setPenWidth(2)
    setPenColor(couleur)
    repeat 2:
        arc_de_cercle(fraction_cercle, longueur)
        right(180 - 360 * fraction_cercle)
        
def fleur(
    fraction_cercle,
    couleur_petales,
    longueur_petales,
    nbre_petales
):
    repeat nbre_petales:
        petale(fraction_cercle, longueur_petales, couleur_petales)
        right(360 / nbre_petales)
        
def tige(longueur, couleur, epaisseur):
    setPenWidth(epaisseur)
    setPenColor(couleur)
    back(longueur)
    feuille(couleur, longueur / 2)
    forward(longueur * 1 / 4)
    left(120)
    feuille(couleur, longueur / 2)
    right(120)
    forward(longueur * 3 / 4)
    
def feuille(couleur, longueur):
    petale(1/3, longueur, couleur)
    
def dessin():
    tige(200, "green", 4)
    fleur(1/6, "orange", 120, 13)
    disque(15, "yellow")
    
makeTurtle()
hideTurtle()
dessin()
#showTurtle()
```



## Projet 5, page 54

Le corrigé de ce projet n'est pas (encore) disponible. Laissez libre cours à
votre imagination pour la réalisation de ce projet.