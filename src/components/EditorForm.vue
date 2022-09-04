<template>
  <div>
    <EditorParts></EditorParts>
    <ButtonParts></ButtonParts>
  </div>
</template>

<script>
import EditorParts from "@/components/editor/EditorParts";
import ButtonParts from "@/components/editor/ButtonParts";

export default {
  name: "EditorForm",
  components: {
    EditorParts,
    ButtonParts,
  },
};
</script>
