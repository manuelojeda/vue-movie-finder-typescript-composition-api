<template>
  <div class="row MovieDetails">
    <div class="col-12">
      <div class="float-left">
        <router-link to="/" class="btn btn-secondary">
          Return
        </router-link>
      </div>
    </div>

    <div class="col-12 my-3">
      <div class="MovieDetails--img-container">
        <img
          :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`"
          :alt="movie.title"
          class="MovieDetails--img-poster"
        >
      </div>

      <div>
        <h1 class="mb-0">
          {{movie.title}}
        </h1>
        <h5 class="mb-3">
          {{movie.release_date}}
        </h5>

        <p>
          {{movie.overview}}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent, reactive, toRefs } from '@vue/composition-api'
import { Movie } from '../interfaces/Movie'
import { MovieService } from '../services/MovieServices'
export default createComponent({
  name: 'MovieDetail',
  setup (props, context) {
    const movieService = new MovieService()
    const id = context.root.$route.params.id

    const state = reactive({
      movie: {} as Movie
    })

    const initialize = async () => {
      state.movie = await movieService.GetMovieDetail(id)
    }

    initialize()
    return { ...toRefs(state) }
  }
})
</script>

<style scoped>

</style>
