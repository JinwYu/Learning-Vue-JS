<template>
  <div>
    <div id="app">

      <app-navbar></app-navbar>

      <!-- Main content -->
      <div id="content">

        <!-- Headline section -->
        <h1>Headlines</h1>
        <div id="headline-section">
          <app-headline></app-headline>
          <app-headline></app-headline>
        </div>

        <!-- Article section -->
        <h1>Articles</h1>
        <div id="article-section">
          <b-card-group deck>
            <app-article></app-article>
            <app-article></app-article>
            <app-article></app-article>
            <app-article></app-article>
            <app-article></app-article>
            <app-article></app-article>
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
export default {
  name: 'app',
  data () {
    return {

    }
  }
};
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
}

#content{
  max-width: 1300px;
  margin: 0 auto;
  background: lightgray; /* Debug purposes*/
  padding: 10px;
  word-wrap: break-word;
}

#article-section{
  max-width: 1300px;
  margin: 0 auto;
}

#headline-section{
  max-width: 1300px;
  margin: 0 auto;
}

h1{
  padding-top: 1%;
  padding-bottom: 1%;
}





</style>
