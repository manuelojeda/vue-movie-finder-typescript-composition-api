<template>
  <div class="home row">
    <div class="col-12">
      <h1 class="text-center mb-3">
        Popular movies now!
      </h1>
      <ul class="movie-container">
        <li class="movie-element" v-for="(movie, index) in movies" :key="index">
          <router-link :to="`/details/${movie.id}`">
            <movie-component :movie="movie"></movie-component>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { createComponent, reactive, toRefs } from '@vue/composition-api'
import MovieComponent from '../components/Movie.vue'
import { Movie } from '../interfaces/Movie'
import { MovieService } from '../services/MovieServices'

export default createComponent({
  name: 'Home',
  components: {
    MovieComponent
  },
  setup () {
    const movieService = new MovieService()
    const state = reactive({
      movies: [] as Movie[]
    })

    const initialize = async (): Promise<void> => {
      state.movies = await movieService.GetMovies()
    }
    initialize()
    return { ...toRefs(state) }
  }
})
</script>

<style lang="scss" scoped>
.movie-container {
  padding:  0;
  list-style: none;
}
</style>
