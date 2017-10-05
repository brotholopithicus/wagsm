<template>
<div class="TrailerView">
  <div @click="() => $router.back()" class="backButton"><img src="../assets/x.svg" /></div>
  <iframe :src="trailer"></iframe>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'TrailerView',
  props: ['movie'],
  data() {
    return {
      trailer: ''
    }
  },
  created() {
    this.getTrailer();
  },
  methods: {
    async getTrailer() {
      try {
        const queryData = encodeURI(`${this.movie.title} ${this.movie.release_date.slice(0, 4)} trailer`);
        const movieUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyD7Wrjt8oZGBxRGo2WF_2eTULgDMCyphrg&q=${queryData}&maxResults=1&order=relevance`;
        const res = await axios.get(movieUrl);
        this.trailer = `https://www.youtube.com/embed/${res.data.items[0].id.videoId}?iv_load_policy=3&autoplay=0`;
      } catch (err) {
        console.log(err.message);
      }
    }
  }
}
</script>

<style scoped>
.TrailerView {
  background-color: rgba(0, 0, 0, 0.9);
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.backButton {
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0;
  margin: 0;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: none;
  user-select: none;
  outline: none;
  transition: 0.4s;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.backButton img {
  width: 30%;
  max-width: 100%;
  height: auto;
}

.backButton:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

button.backButton:hover {
  color: rgba(255, 255, 255, 0.8);
  background-color: rgba(255, 255, 255, 0.6);
}

iframe {
  width: 80vw;
  height: calc(80vw * 9 / 16);
  background-color: #000;
  border: none;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.7);
}
</style>
