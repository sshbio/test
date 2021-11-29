<template>
  <div class="hello">hi</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class AutoComplete extends Vue {
  msg!: string;
}
</script>