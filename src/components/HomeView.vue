<template>
<div class="HomeView" :style="{ backgroundImage: `url(${imagePath}/w1280/${movie.backdrop_path})`}">
  <div class="movie-container">
    <div class="poster">
      <img :src="imagePath + '/w185/' + movie.poster_path" />
    </div>
    <div class="details">
      <h1 class="heading"><strong>{{movie.title}}</strong>&nbsp;<span>({{movie.release_date.slice(0, 4)}})</span></h1>
      <h5>{{getGenres(movie.genre_ids)}}</h5>
      <p>{{movie.overview}}</p>
      <router-link :to="{ name: 'trailer', params: { movie }}"><button class="trailerButton">Trailer</button></router-link>
    </div>
  </div>
  <div class="nav-container">
    <button @click="firstMovie">First</button>
    <button @click="prevMovie">←</button>
    <button @click="nextMovie">→</button>
    <button @click="lastMovie">Last</button>
  </div>
</div>
</template>

<script>
const API_KEY = 'd40153d3e4795486cd6f84905101bff3';
import axios from 'axios';
import { movies, genres } from '../data/index';
const imagePath = 'https://image.tmdb.org/t/p/';

export default {
  name: 'HomeView',
  data() {
    return {
      imagePath: 'https://image.tmdb.org/t/p/',
      movies,
      index: 0
    }
  },
  created() {
    const lastIndex = parseInt(localStorage.getItem('index'));
    this.index = lastIndex ? lastIndex : 0;
    this.saveIndex();
  },
  watch: {
    index() {
      this.saveIndex();
    }
  },
  computed: {
    movie() {
      return this.movies[this.index]
    }
  },
  methods: {
    saveIndex() {
      localStorage.setItem('index', this.index);
    },
    getGenres(genreIds) {
      return genreIds.map(id => genres.find(g => g.id === id).name).join(', ');
    },
    nextMovie() {
      this.index = this.index < this.movies.length - 1 ? this.index + 1 : this.index;
    },
    prevMovie() {
      this.index = this.index > 0 ? this.index - 1 : 0;
    },
    firstMovie() {
      this.index = 0;
    },
    lastMovie() {
      this.index = this.movies.length - 1;
    }
  }
}
</script>

<style scoped>
.HomeView {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.movie-container {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-flow: row;
  color: #fff;
}

.heading {
  font-family: 'Patua One';
}

.heading strong {
  /*text-shadow: 0 0 1px rgba(255, 255, 255, 1);*/
}

.heading span {
  font-size: 65%;
}

.poster img {
  width: 300px;
  height: 450px;
  box-shadow: 0 0 4px 1px #fff;
}

.details {
  height: 450px;
}

.details {
  margin: 0 2rem;
  padding: 1rem 2rem;
}

.details p {
  text-align: justify;
}

button.trailerButton {
  border: none;
  padding: 0.35rem 0.65rem;
  border-radius: 0.25rem;
}

.nav-container {
  width: 100vw;
  height: 3rem;
  display: flex;
  flex-flow: row;
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.85);
}

.nav-container button {
  flex: 1;
  user-select: none;
  outline: none;
  border: none;
  border-top: 3px solid transparent;
  border-radius: 0;
  background-color: rgba(255, 0, 0, 1);
  color: #fff;
  transition: 0.2s;
}

.nav-container button:hover {
  border-top-color: #fff;
}

.nav-container button:active {
  border-top-color: #ff0000;
}

.nav-container button:first-child,
.nav-container button:last-child {
  flex: 0 0 10%;
}
</style>
