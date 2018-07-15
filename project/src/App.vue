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
                  <app-headlines v-bind:headlines="headlines"></app-headlines>
                </div>

                <!-- Article section -->
                <h1>Articles</h1>
                <div id="article-section">
                    <app-articles v-bind:articles="articles"></app-articles>
                </div>       

            </div>

            <!-- Footer -->
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
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #ebf1f5;
}

#content{
  max-width: 80%;
  margin: 0 auto;
  /*background: white; /* Debug purposes*/
  background: #ebf1f5;
  padding: 30px;
  word-wrap: break-word;
}

h1{
  color: #2699fb;
  font-size: 40px;
  padding-top: 1%;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 0;
}

#headline-section{
  padding-bottom: 6em;
}

/* Responsive layout */
@media screen and (max-width: 1080px) {
    #content{
      max-width: 100%;

      /* Remove padding when in mobile mode */
      padding: 0px;
    }
}
</style>
