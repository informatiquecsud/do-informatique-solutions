module.exports = (md, opts) => {
  const WEBTJ_CODE_BLOCK = "webtj_code_block";
  const RE_WEBTJ_CODE = /python\s+webtj/;
  opts = opts || {};
  // replace all the nodes corresponding to webtj code fences by a
  // WEBTJ_CODE_BLOCK token

  md.core.ruler.push(WEBTJ_CODE_BLOCK, state => {
    state.tokens
      .filter(
        ({ type, tag, info }) =>
          type === "fence" && tag === "code" && info.match(RE_WEBTJ_CODE)
      )
      .forEach(t => (t.type = WEBTJ_CODE_BLOCK));
    //console.log(state.tokens);
  });

  // add new rule to render the WEBTJ_CODE_BLOCK Token
  md.renderer.rules[WEBTJ_CODE_BLOCK] = (tokens, idx, options) => {
    // TODO: There should be a single source of truth for this, optimally
    // the props attribute of the Vue component defined in the
    // corresponding .vue SFC should be extracted be webpack and imported
    // in the vuepress plugin config file.
    // TODO: in the mean time, this should be put in a WebTJ.props.js file
    // also imported into the SFC WebTJ.vue script section
    const props = {
      autorun: {
        type: Boolean,
        required: false,
        default: false
      },
      speed: {
        type: Number,
        default: -1,
        required: false,
        default: false
      },
      hideTurtle: {
        type: Boolean,
        required: false
      },
      width: {
        type: String,
        default: "100%",
        required: true
      },
      height: {
        type: String,
        default: "auto",
        required: true
      }
    };
    const token = tokens[idx];
    const code = token.content;
    let webtjArgsArray = [];
    let optionsString, args;

    const matches = /^python\s+webtj\s*(\[\s*(.+,{0,1})*\]){0,1}\s*$/gm.exec(
      token.info
    );

    //console.log("matches for info", token.info, " : ", matches);
    if (matches.length < 2) {
      args = {};
      optionsString = "";
    } else {
      // we have options to read
      optionsString = matches[2];
      //console.log("optionsString", optionsString);
    }

    webtjArgsArray = optionsString.split(",").map(arg => arg.trim());
    // console.log("options array", webtjArgsArray);
    // console.log(token);

    args = webtjArgsArray
      .map(arg => {
        const argArray = arg.split("=").map(e => e.trim());
        return argArray.length > 1
          ? [argArray[0], argArray[1]]
          : [argArray[0], undefined];
      })
      .map(([arg, value]) => {
        if (props[arg] === undefined) {
          throw Error(
            `Bad option '${arg}' for ${token.type} block on line ${token.map[0]}`
          );
        }

        // arg is valid
        const argDefinition = props[arg];
        if (argDefinition.type === Boolean) {
          if (value === undefined || value === "true") {
            value = true;
          } else if (value === "false") {
            value = false;
          } else {
            throw Error(
              `Bad value '${value}' for Boolean arg ${arg} for ${token.type} block on line ${token.map[0]}`
            );
          }
        }

        if (argDefinition.required) {
          if (!value) {
            throw Error(
              `Value required but not provided for argument '${arg}' for ${token.type} block on line ${token.map[0]}`
            );
          }
        } else {
          value = argDefinition.type(value) || argDefinition.default;
        }

        const argObject = {};
        argObject[arg] = value;

        return argObject;
      })
      .reduce((acc, obj) => ({ ...acc, ...obj }), {});

    // check for required arguments
    Object.entries(props)
      .filter(([argName, arg]) => arg.required === true)
      .forEach(([argName, arg]) => {
        if (args[argName] === undefined) {
          if (arg.default === undefined) {
            throw Error(
              `Required argument '${argName}' not found for ${token.type} block on line ${token.map[0]} '`
            );
          } else {
            args[argName] = arg.default;
          }
        }
      });
    //console.log(args);
    if (args.height === "auto") {
      const nbCodeLines = code.split("\n").length;
      const height = nbCodeLines * 20 + 100;
      args.height = `${height > 450 ? height : 450}px`;
      // console.log("settings height to", args.height);
    }

    return `
          <ClientOnly><WebTJ
              initialCode="${code.replace(/"/g, "&quot;")}"
              width="${args.width}"
              height="${args.height}"
              v-bind:speed="${args.speed}"
              v-bind:autorun="${args.autorun}"
              v-bind:hideTurtle="${args.hideTurtle}"
          /></ClientOnly>
            `;
  };
};
