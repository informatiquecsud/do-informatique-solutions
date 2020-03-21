# Solutions du chapitre 4

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

```python webtj[autorun]

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

```python webtj[autorun]

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

```python webtj[autorun]
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

```python webtj[autorun, speed=4]
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

#Dessine un escalier de huit marches ayant une hauteur de 16 et une longueur de 21
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
$\frac{500}{2} = 250$ et de hauteur identique $200$:

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
