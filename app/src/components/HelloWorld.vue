<template>
  <div>
    <div class="flex" v-bind:key="fighter.id" v-for="fighter in fighters">
      <img v-bind:src="fighter.image_url">
      <span>{{ fighter.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data: function() {
    return {
      fighters: null
    };
  },
  created: function() {
    fetch("http://localhost:3000/fighters")
      .then(res => res.json())
      .then(json => (this.fighters = json));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
