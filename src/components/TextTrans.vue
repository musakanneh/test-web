<template>
  <div id="app">
    <vue-text-transition :show="showTitle" name="test" tag="h2" :interval="10">Hello world!</vue-text-transition>
    <button @click="showTitle =! showTitle">{{ showTitle ? 'hide' : 'show'}} title</button>
    <vue-text-transition
      :show="showText"
      name="test"
      tag="p"
      :interval="10"
      :custom-class="[{ selector: ':nth-child(odd)', class: 'test_odd' }]"
    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae dui et odio egestas eleifend sed sed nisi. Ut elementum feugiat est, sed finibus nulla pellentesque sit amet. Vestibulum pulvinar mi et pellentesque ullamcorper. Cras laoreet gravida ante, ut luctus odio fermentum non.</vue-text-transition>
    <button @click="showText =! showText">{{ showText ? 'hide' : 'show'}} text</button>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      showTitle: false,
      showText: false
    };
  }
};
</script>

<style>
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

span {
  display: inline-block;
}

.v--vtt-test,
.v--vtt-test_odd {
  will-change: transform, opacity;
  transition: opacity 0.3s ease-in-out, transform 1s ease-in-out;
}

.v--vtt-test_visible,
.v--vtt-test_odd_visible {
  opacity: 1;
  transform: translateY(0);
}

.v--vtt-test_hidden {
  opacity: 0;
  transform: translateY(20px);
}

.v--vtt-test_odd_hidden {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
