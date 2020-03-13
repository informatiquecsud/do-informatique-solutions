# VuePress plugin to write bonus content for the "CS Simply" educational series

## Installation

To get up and running with writing content in Markdown for the book, some
requirements have to be met.

### Requirements

Install the following packages if not already present on your developement
machine :

- NodeJS 12+
- Yarn
  ```bash
  $ npm install -g yarn
  ```

### Installation steps

Once you have all the dependencies installed, do the following :

1.  Fork the repository in GitLab
1.  Clone the repo on your developement machine

    ```bash
    $ git clone git@gitlab.inf.ethz.ch:cdonner/gymnasial-buch-zusatz-material-vuepress.git bonus-material
    ```

1.  cd into the directory

    ```bash
    $ cd bonus-material
    ```

1.  Install the npm dependencies (please use yarn and not npm)
    ```bash
    $ yarn install
    ```

# Write content and render the output using VuePress

The content is written in an extended version of Markdown. Some of these
extensions come from Vuepress itself (like the ability to use VueJS Web
Components right in the Markdown) and other come from the
`vuepress-plugin-cs-simply` plugin developped at the ABZ lab at ETHZ.

## Run VuePress in developement mode

To edit the content, edit the Markdown (`.md`) files in the `src` directory
using the Markdown syntax.

```
.
├── exam-questions
├── index.md
├── projects-worksheets
├── solutions
│   ├── chapter-01
│   ├── chapter-01.md
│   ├── chapter-02
│   ├── chapter-03
│   │   ├── Untitled-1.png
│   │   ├── Untitled.png
│   ├── chapter-03.md
│   └── index.md
└── supplementary-material.md

7 directories, 17 files

```

For example, to add solutions for chapter 1, edit the
`src/solutions/chapter-01.md` file in your favourite code editor (VSCode
recommended as it has very good support and extensions for writing Markdown).
The directory `chapter-03` is for example intended to hold all the assets
like images necessary for the `chapter-03.md` file.

To view the final output (static HTML site à la JAMStack), use the following
command :

```bash
$ yarn dev
```

Sometimes, it might be usefull to discard the cache if some elements don't
update correctly

```bash
$ yarn dev-no-cache
```

To build the final output (content to be distributed on a standard Web Server or
gitpages / Netlify / ...) use the command

```bash
$ yarn build
```

or

```bash
$ yarn build-no-cache
```

## Features of the `vuepress-plugin-cs-simply` plugin

The `vuepress-plugin-cs-simply` plugin offers the following features :

1.  Integration of WebTigerJython
1.  Write special content only for teachers
1.  Special fences for writing content to be remembered (Neue Konzepte und
    Befehle). These contents can then be found and searched very efficiently
1.  Special block syntax for exercises and solutions
1.  Quizz building
1.  And more to come ...

### Use the WebTigerJython integration

For the time being, the WebTigerJython environment is integrated within an HTML
`<iframe>` element. This is not very efficient and may be improved in the
future.

To display a code snippet in the WebTigerJython IDE, you simply use a custom
syntax on a very standard python code block.

    ```python webtj
    from gturtle import *
    makeTurtle()
    forward(100)
    ```

This will automatically load the WebTigerJython environment in the final
rendering.

The code block also accepts some nice parameters

    ```python webtj[autorun, speed=20, height=400px]
    from gturtle import *
    makeTurtle()
    forward(100)
    ```

The syntax is as follows :

    ```python webtj[option1=value1, option2=value2, booleanOption1, booleanOption2, ...]
    ## python code here
    ```

For boolean values like `hideTurtle` or `autorun`, you don't have to write
`hideTurtle=true` although this is possible. Is suffices for the option to be
present in the option list to be `true`. The order of the options is not important.

#### Parameters documentation

- `autorun: Boolean` : can be `true` or `false`. If present, the value is
  automatically `true` and `false` otherwise. But the syntax `autorun=true` or
  `autorun=false` is also possible.
- `hideTurtle: Boolean` : hides the turtle. This is implemented by replacing

        makeTurtle()

  by

        makeTurtle() ; hideTurtle()

  in the source code in the
  WebTigerJython editor.

- `width: String` : This option follows CSS syntax and indicates the width of
  the iframe in the final HTML output. Examples of valid values are
  `width=500px` or `width=120%`.
- `height: String` : This option follows CSS syntax and indicates the height of
  the iframe in the final HTML output. Examples of valid values are
  `height=500px` or `height=120%`.
- `speed: Number` : This indicates the speed of the turtle. For some lengthy
  drawings, this can be very usefull. For example, the value `speed=20` will
  replace the

        makeTurtle()


  call by

        makeTurtle() ; speed(20)
