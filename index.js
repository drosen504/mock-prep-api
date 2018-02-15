/* This app doesn't follow a11y best practices, and the JS file is incomplete. Complete the getDataFromApi, displaySearchData, and watchSubmit functions. When you're done, this app should allow a user to search for an artist and song title (both should be required), and display the song lyrics. You should make requests to this API: https://lyricsovh.docs.apiary.io/# . Also make any necessary adjustments to make this app accessible. */

'use strict';
/* global $ */

const baseUrl = 'https://api.lyrics.ovh/v1/';

function getDataFromApi(artist, title, callback) {
  let searchString = `${artist}/${title}`;
  console.log(searchString);
  $.getJSON(baseUrl, searchString, callback);
}
  
function displaySearchData(data) {
  console.log('Time to display the results!');
}
  
function watchSubmit() {
  $('.js-search-form').submit(event => {
    event.preventDefault();
    let artistSearch = $('.js-query-artist').val();
    let songSearch = $('.js-query-title').val();
    console.log(`Artist is ${artistSearch} and Song is ${songSearch}`);
    getDataFromApi(artistSearch, songSearch, displaySearchData);
  });
}
  
$(watchSubmit);