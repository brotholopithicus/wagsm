#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const axios = require('axios');

const url = 'https://api.themoviedb.org/3/discover/movie?api_key=d40153d3e4795486cd6f84905101bff3&language=en-US&sort_by=vote_average.desc&certification_country=US&include_adult=false&include_video=false&vote_count.gte=100&certification=R&with_genres=27';


let page = 0;

function getResults() {
  return Promise.all([...Array(10).keys()].map(async k => {
    page++;
    const res = await axios.get(url, { params: { page } });
    return res.data.results;
  }))
}

getResults().then(res => {
  const data = res.reduce((acc, curr) => {
    return acc.concat(...curr);
  }, []);
  fs.writeFile(path.resolve(__dirname, 'data1.js'), JSON.stringify(data), (err) => {
    if (err) throw err;
    console.log('done');
  });
});
