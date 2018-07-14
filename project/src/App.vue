<template>
  <div>
    <div id="app">

      <!-- Navbar -->
      <app-navbar></app-navbar>

      <!-- Main content -->
      <div id="content">

        <!-- Headline section -->
        <h1>Headlines</h1>
        <div id="headline-section">
          <app-headline v-bind:headlines="headlines"></app-headline>
        </div>

        <!-- Article section -->
        <h1>Articles</h1>
        <div id="article-section">
          <b-card-group deck>
            <app-articles v-bind:articles="articles"></app-articles>
          </b-card-group>
        </div>       

      </div>

      <!-- Footer -->
      <div id="footer"

      </div>

      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>

// Importing the news data from the local json file.
// The data is "static" i.e. no reactive and does not change.
import NEWS_DATA from './data/news_data.json'

export default{

    data(){
      return{
        articles: NEWS_DATA.articles,
        headlines: NEWS_DATA.headlines
      }
    }
    

};



/*

<div v-for="photo in photos">
        <my-photo-component :image_source="photo.src"></my-photo-component>
    </div>


    <div>
            <div v-for="item in $options.myJson.headlines" :key="item.Title">
              {{item.Title}}
            </div>
        </div>

*/


</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  background: #ebf1f5;
}

#content{
  max-width: 1320px;
  margin: 0 auto;
  background: lightgray; /* Debug purposes*/
  padding: 30px;
  word-wrap: break-word;
}

#article-section{
  max-width: 100%;
  margin: 0 auto;
}

#headline-section{
  max-width: 100%;
  margin: 0 auto;
}

.card-group{
  max-width: 100%;
  margin: 0 auto;
  padding-top: 1%;
  padding-bottom: 1%;
}

h1{
  color: #2699fb;
  font-size: 40px;
  padding-top: 1%;
  padding-bottom: 1%;
}

app-article{
  width: 1000px;
}





</style>
