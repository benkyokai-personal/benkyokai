<template>
  <div ref="ace" class="ace"></div>
</template>

<script>
import ace from "ace-builds";
import "ace-builds/webpack-resolver";

// 使いたい言語モードのインポート
import "ace-builds/src-noconflict/mode-javascript";

// 使いたいテーマのインポート
import "ace-builds/src-noconflict/theme-github";

export default {
  name: "EditorParts",
  data() {
    return {
      editor: Object,
    };
  },
  mounted() {
    this.editor = ace.edit(this.$refs.ace);
    this.editor.session.setMode("ace/mode/javascript");
    this.editor.setTheme("ace/theme/monokai");
  },
};
</script>

<style scoped>
.ace {
  z-index: 10;
  position: relative !important;
  border: 1px solid lightgray;
  margin: auto;
  height: 50%;
  width: 100%;
}
</style>
