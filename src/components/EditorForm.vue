<template>
  <EditorParts></EditorParts>
</template>

<script>
import EditorParts from "@/components/editor/EditorParts";
import axios from "axios";

export default {
  name: "EditorForm",
  components: {
    EditorParts,
  },
  methods: {
    methods: {
      execProgram() {
        axios
          .post("http://api.paiza.io/runners/create", {
            source_code: "print('hello')",
            language: "python3",
            input: "",
            longpoll: "",
            longpoll_timeout: "",
            api_key: "guest",
          })
          .then((res) => {
            console.log(res);
          })
          .catch((e) => {
            alert(e);
          });
      },
    },
  },
};
</script>
