<template>
  <div style="height: 500px" id="editor">
    <div ref="ace" class="ace"></div>
  </div>
</template>

<script>
import ace from "ace-builds";
import "ace-builds/webpack-resolver";

import "ace-builds/src-noconflict/mode-javascript";

import "ace-builds/src-noconflict/theme-github";

export default {
  name: "EditorParts",
  data() {
    return {
      editor: this.$store.state.editor,
    };
  },
  mounted() {
    this.editor = ace.edit(this.$refs.ace);
    this.editor.setOptions({
      enableBasicAutocompletion: true,
      enableSnippets: true,
      enableLiveAutocompletion: true,
    });
    this.editor.session.setMode("ace/mode/javascript");
    this.editor.setTheme("ace/theme/monokai");
    this.$store.commit("bindEditor", this.editor);
    console.log(this.editor);
  },
  computed: {
    bindEditor: {
      get() {
        return this.$store.state.editor;
      },
      set(value) {
        this.$store.commit("bindEditor", value);
      },
    },
  },
};
</script>

<style scoped>
.ace {
  z-index: 10;
  position: relative !important;
  border: 1px solid lightgray;
  margin: auto;
  height: 100%;
  width: 100%;
}
</style>
