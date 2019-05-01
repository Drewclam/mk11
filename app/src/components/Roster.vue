<template>
  <div class="flex">
    <div :key="fighter.id" v-for="fighter in fighters">
      <router-link :to="'/fighter/' + fighter.id" class="flex flex-column pa3">
        <img class="h5 w-auto" :src="fighter.image_url">
        <span class="pt2">{{ fighter.name }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Roster",
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
