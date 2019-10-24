<template>
  <div class="home row">
    <div class="col-12">
      <b-button-group class="mx-auto mb-3 d-block text-center">
        <b-button @click="GetMoviesByCategory('top_rated')">Top rated movies</b-button>
        <b-button @click="GetMoviesByCategory()">Popular movies</b-button>
        <b-button @click="GetMoviesByCategory('upcoming')">Upcoming movies</b-button>
      </b-button-group>

      <div v-if="!loading">
        <h1 class="text-center mb-3">
          {{category}} movies!
        </h1>

        <input type="text" class="form-control mb-3" v-model="filter" placeholder="Type here if you want to search a movie by title ...">

        <ul class="movie-container">
          <li class="movie-element" v-for="(movie, index) in FilteredMovies" :key="index">
            <router-link :to="`/details/${movie.id}`">
              <movie-component :movie="movie"></movie-component>
            </router-link>
          </li>
        </ul>
      </div>

      <div v-else></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { createComponent, reactive, toRefs, computed } from '@vue/composition-api'
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
      movies: [] as Movie[],
      category: 'Popular' as string,
      loading: false as boolean,
      filter: '' as string
    })

    const FilteredMovies = computed(() => {
      return state.movies.filter((movie) => {
        if (movie.title !== undefined) {
          return movie.title.toLowerCase().includes(state.filter.toLowerCase())
        }
      })
    })

    const GetMoviesByCategory = async (category: string = 'popular'): Promise<void> => {
      state.loading = true
      state.movies = await movieService.GetMovies(category)
      state.filter = ''

      if (category === 'popular') state.category = 'Popular'
      if (category === 'top_rated') state.category = 'Top rated'
      if (category === 'upcoming') state.category = 'Upcoming'
      state.loading = false
    }

    GetMoviesByCategory()
    return { ...toRefs(state), GetMoviesByCategory, FilteredMovies }
  }
})
</script>

<style lang="scss" scoped>
.movie-container {
  padding:  0;
  list-style: none;
}
</style>
