<template>
  <div
    class="grid grid-cols-9 gap-1"
    :class="classes"
    @click="() => handleClick()"
  >
    <div>{{ move.name }}</div>
    <div>{{ move.input }}</div>
    <div>{{ move.frames.start }}</div>
    <div :class="classes">
      {{ move.frames.active }}
    </div>
    <div>{{ move.frames.recovery }}</div>
    <div>{{ move.frames.hit }}</div>
    <div>{{ move.frames.block }}</div>
    <div>{{ move.frames.flawless }}</div>
    <div>{{ move.frames.cancel }}</div>
  </div>
</template>

<script>
export default {
  name: "MoveRow",
  data() {
    return {
      isValid: false,
      isInvalid: false,
    };
  },
  props: {
    activeSelection: String,
    id: String,
    move: Object,
    compareFn: Function,
  },
  computed: {
    classes() {
      return {
        "text-orange-500": this.isActive,
        "text-green-500":
          this.compareFn && !this.isActive ? this.compareFn(this.move) : false,
        // "text-red-500": isInvalid,
      };
    },
    isActive() {
      if (this.activeSelection === this.id) {
        return true;
      }
      return false;
    },
  },
  methods: {
    handleClick() {
      this.$emit("select", this.move);
    },
  },
};
</script>
