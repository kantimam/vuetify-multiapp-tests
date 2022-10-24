<template>
  <v-app>
    <v-main>
      <div style="height: 10px">
        VUE APP 2 Spacer
      </div>
      <HelloWorld />
      <div>
        <v-range-slider hint="Im a hint" max="50" min="-50"></v-range-slider>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
