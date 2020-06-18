# Codage des images

## Table des matières

[[toc]]

## Questions de compréhension

### Question 1

Puisque les couleurs sont codées sur 12 bits, la palette de couleurs contient au
maximum $2^{12} = 4096$ couleurs différentes.

### Question 2

Les images vectorielles présentent les avantages suivants sur les images
matricielles :

*   Elles prennent souvent moins de place à stocker

*   Elles peuvent être agrandies sans perte de qualité

*   Elles sont plus flexibles que les images matricielles et sont de ce fait
    souvent utilisées pour les logos d'entreprise ou les icônes des sites Web.

### Question 3

Pour représenter $16 \times 10^6$ couleurs, il faut utiliser 24 bits. En effet,
$2^{24} = 16777216$.

### Question 4

La réponse se trouve déjà sur le site.

### Question 5

La réponse se trouve déjà sur le site.

## Exercice 1

On peut utiliser le programme Python suivant pour déterminer la valeur décimale
des nombres binaires. On utilise pour cela la fonction `int(chaine_binaire,
base)` qui prend en paramètre une chaîne binaire sous la forme `0bxxxxxx` où les
`x` sont des `0` ou des `1`.

```python webtj[autorun]
r = int('0b01111001', 2)
g = int('0b11010101', 2)
b = int('0b01100010', 2)

print r, g, b
```

::: tip Note 

De manière générale, la fonction `int(texte, base)` convertit la chaîne de
caractères exprimée dans la base `base` en un nombre décimal. Il est donc également possible pour convertir un nombre hexadécimal en nombre décimal. Il suffit pour cela de régler le paramètre `base` sur 16 et de saisir la chaine de caractères avec le préfixe `0x` qui désigne les nombres écrits en hexadécimal. 

Pour convertir le nombre exadécimal $\mathrm{3D5}_{16}$ en décimal, il suffit
donc de faire

```python
print int('0x3d5', 16)
```

Le résultat est `981`.
:::

La couleur est donc donnée par les composantes RGB (121, 213, 98). La couleur en
question contient surtout du vert avec un peu de rouge et de bleu. C'est donc
plutôt du vert. Puisque la quantité de rouge et de bleu sont très faibles, la couleur résultante sera une sorte de vert.

Il y a deux solutions pour déterminer la couleur résultant de trois composantes
données.

1.  Utiliser un outil en ligne qui fait le travail comme
    https://www.rapidtables.com/web/color/RGB_Color.html

2.  Écrire un programme qui dessine dans le couleur en question. Il est possible
    de régler précisément la couleur du crayon dans un programme tortue en fournissant les composantes RGB au lieu de fournir le nom de la couleur:

    ```python webtj[autorun]
    from gturtle import *

    def carre_plein(size):
        repeat size:
            forward(size)
            back(size)
            right(90)
            fd(1)
            left(90)
        

    makeTurtle()

    r = int('0b01111001', 2)
    g = int('0b11010101', 2)
    b = int('0b01100010', 2)

    print "Les composantes RGB sont", r, g, b

    color = makeColor(r, g, b)
    setPenColor(color)

    hideTurtle()
    setPos(-100, -100)

    carre_plein(200)
    
    ```

    Ce programme dessine un carré dans la couleur définie par les bits. On
    utilise la fonction `makeColor(r, g, b)` qui fabrique une nouvelle couleur à
    partir des composantes RGB au lieu d'utiliser le nom d'une couleur prédéfinie dans `setPenColor()`.

On pourrait même faire une version encore plus élégante de ce programme en
définissant une commande `affiche_couleur` qui prend en paramètre les chaînes
binaires et fait le dessin.

```python webtj[autorun]
from gturtle import *

def carre_plein(size):
    repeat size:
        forward(size)
        back(size)
        right(90)
        fd(1)
        left(90)

def affiche_couleur(r, g, b):
    r = int('0b' + r, 2)
    g = int('0b' + g, 2)
    b = int('0b' + b, 2)

    print "Les composantes RGB sont", r, g, b

    color = makeColor(r, g, b)
    setPenColor(color)

    hideTurtle()
    setPos(-100, -100)

    carre_plein(200)



makeTurtle()
affiche_couleur('01111001', '11010101', '01100010')
```

## Exercice 3

::: tip Conversion du binaire en hexadécimal

On se rappelle qu'il est très facile de convertir un nombre binaire en
hexadécimal. Il suffit de regrouper les chiffres binaires par paquets de 4 et de
coder chaque paquet de 4 en chiffre exadécimal. La composante rouge (01111001)
va donc donner 

$$
0111\ 1001 = 79
$$

car $0111_2 = 7_{16}$ et $1001_2 = 9_{16}$. Il suffit de faire de même pour chacune des composantes couleur.

:::

La réponse est donc

```
01111001 11010101 01100010
0111 1001 1101 0101 0110 0010
7    9    D    5    6    2
```

Le nombre hexadécimal correspondant sera donc `0x79d562`. Là encore, on peut
écrire un programme qui fait la conversion pour nous. 

```python webtj[autorun]
r = hex(int('01111001', 2))
g = hex(int('11010101', 2))
b = hex(int('01100010', 2))

print r, g, b
```

Il ne faut pas tenir compte du préfixe `0x` qui est juste là pour signifier qu'il s'agit d'un nombre écrit en hexadécimal.

## Exercice 3

On peut effectuer la conversion à la main. Pour cela, on regroupe les chiffres
hexadécimaux par paquets de 2 `FF 66 C4`. On convertit ensuite chaque composante individuellement

*   $FF_{16} = 15 \cdot 16^1 + 15 = 255$
*   $66_{16} = 6 \cdot 16^1 + 6 = 102$
*   $C4_{16} = 12 \cdot 16^1 + 4 = 196$

On peut également demander à Python de faire la conversion pour nous:

```python webtj[autorun]
r = int('0xff', 16)
g = int('0x66', 16)
b = int('0xc4', 16)
print r, g, b
```

Pour estimer la couleur codée, il faut voir que c'est surtout du rouge et du
bleu. La couleur va donc être une sorte de magenta qui vire un peu au vert.

