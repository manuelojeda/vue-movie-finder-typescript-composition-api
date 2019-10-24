<template>
  <div>
    <img
      :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`"
      :alt="movie.title"
      class="Movie--poster_image"
    >
    <h5>
      {{movie.title}}
    </h5>
    <p>
      {{movie.release_date}}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { createComponent, reactive, toRefs } from '@vue/composition-api'
export default createComponent({
  name: 'MovieComponent',
  props: {
    movie: {
      type: Object
    }
  },
  setup (props) {
  }
})
</script>
