<template>
  <div>
    Fighter Name: {{ fighter.name }}
    <div class="grid grid-cols-9 gap-1">
      <div>move name</div>
      <div>inputs</div>
      <div>Start frames</div>
      <div>Active Frames</div>
      <div>Recovery Frames</div>
      <div>Hit frames</div>
      <div>Block frames</div>
      <div>Flawless block frames</div>
      <div>Cancel frames</div>
    </div>
    <MoveRow
      v-for="(move, index) in fighter.moves"
      :move="move"
      :compareFn="compareFn"
      :key="index + fighter.name"
      :id="index + fighter.name"
      :activeSelection="activeSelection"
      @select="(move) => onSelect(move, index + fighter.name)"
    />
  </div>
</template>

<script>
import MoveRow from "./MoveRow";
export default {
  name: "FighterGrid",
  components: { MoveRow },
  props: {
    fighter: Object,
  },
  data() {
    return {
      compareFn: null,
      activeSelection: "",
    };
  },
  methods: {
    onSelect(selectedMove, id) {
      if (this.activeSelection === id) {
        this.activeSelection = "";
        this.compareFn = () => false;
      } else {
        this.activeSelection = id;
        this.compareFn = (move) => {
          if (Math.sign(selectedMove.frames.block) === -1) {
            // attacker might be punishable
            if (move.frames.start < Math.abs(selectedMove.frames.block)) {
              // defender starts attacking before attacker out of stun
              // account for input buffering?
              return true;
            }
          } else {
            // attacker cannot be punished
            return false;
          }
        };
      }
    },
  },
};
</script>
