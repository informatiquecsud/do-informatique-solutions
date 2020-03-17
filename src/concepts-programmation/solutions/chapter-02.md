# Musterlösungen zum Kapitel 1

## Test WebTigerJython

This is a test of embedding TigerJython into markdown / VuePress

```python webtj[height=350px, autorun]
from gturtle import *

makeTurtle()


def square(size):
    repeat 4:
        forward(size)
        right(90)

square(100)
```

## Aufgabe 2

```python webtj[autorun, height=350px]
from gturtle import *

makeTurtle()


def triangle(size):
    repeat 3:
        forward(size)
        right(360 / 3)

triangle(100)
```

## Aufgabe 3

```python webtj[autorun, height=350px]
from gturtle import *

makeTurtle()


def polygon(n, size):
    repeat n:
        forward(size)
        right(360 / n)

polygon(10, 40)
```