<template>
  <v-btn color="primary" @click="execProgram">実行</v-btn>
</template>

<script>
import axios from "axios";

export default {
  name: "ButtonParts",
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
