<template>
  <div>
    <iframe
      class="webtj-iframe"
      ref="editorIFrame"
      :src="src"
      frameborder="0"
      :width="width"
      :height="height"
    ></iframe>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  props: {
    initialCode: {
      type: String,
      required: false
    },
    width: {
      type: String,
      require: false,
      default: "180%"
    },
    height: {
      type: String,
      require: true
    },
    autorun: {
      type: Boolean,
      required: false
    },
    speed: {
      type: Number,
      required: false,
      default: 5
    },
    hideTurtle: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      iframeGlobalSpace: null,
      $: null,
      test: "test data",
      editor: undefined,
      code: this.initialCode,
      src:
        window.location.hostname === "localhost"
          ? "/webtj/"
          : "https://webtigerjython.ethz.ch/"
    };
  },
  mounted: function() {
    this.iframe = this.$refs.editorIFrame;

    // grab a handle on the ace editor of WebTJ and on the jQuery ($) function
    const interval = setInterval(() => {
      this.iframeGlobalSpace = this.iframe.contentWindow;
      if (!this.iframeGlobalSpace) {
        return;
      }
      this.ace = this.iframeGlobalSpace.ace;
      this.$ = this.iframeGlobalSpace.$;
      this.Sk = this.iframeGlobalSpace.Sk;

      // wait for the ace editor and jquery to be fully loaded ...
      if (this.iframeGlobalSpace && this.iframe && this.$ && this.Sk) {
        setTimeout(() => {
          // load the code into the editor
          const editorDiv = this.$("#editor")[0];
          this.editor = this.ace.edit(editorDiv);
          this.code = this.initialCode;
          // // TODO: this is not safe => the default value of the speed can be changed

          const code = this.preprocessCode(this.code);
          this.editor.setValue(code);
        }, 500);

        //const $ = this.$;
        //const $menuBar = $(this.iframe.contentDocument).find("ul");
        //const $btnRun = $menuBar.find("li:eq(2)");

        clearInterval(interval);

        if (this.autorun) {
          setTimeout(() => {
            this.iframeGlobalSpace.runProgram();
          }, 1000);
        }
      }
    }, 200);
  },

  beforeUpdate: function() {},
  watch: {
    initialCode: function(newCode, oldCode) {
      console.log("initialCode prop changed", newCode);
      this.code = newCode;
      console.log("editor updated");
      this.editor.setValue(this.preprocessCode(this.code));
      if (this.autorun) {
        this.iframeGlobalSpace.runProgram();
      }
    }
  },
  methods: {
    preprocessCode: function(code) {
      return this.hideTurtle
        ? code.replace(/makeTurtle\(\)/g, `makeTurtle(); hideTurtle()`)
        : this.speed !== 5
        ? code.replace(/makeTurtle\(\)/g, `makeTurtle(); speed(${this.speed})`)
        : code;
    }
  }
};
</script>

<style scoped>
.webtj-iframe {
  position: relative;
  left: -15%;
  width: 130%;
}
</style>