<template>
	<div class="row">

		<div class="column" v-for="item in articles" :key="item.imageUrl">
			
			<div class="card">
				  <img :src="item.imageUrl" alt="Avatar">
				  <div class="container">
				    <h4><b>{{item.Title}}</b></h4> 
				    <p>{{item.Text}}</p> 
				  </div>
			</div>
	    	
		</div>	

	</div>
</template>


<script>
export default{
	props: {
		articles:{
			type: Array // Controls if the component has received an Array.
		}
	},
    data(){
      return{

      }
    }
    

};	
</script>


<style scoped>
* {
    box-sizing: border-box;
}

img{
	width: 100%;
}

/* Create three equal columns that floats next to each other */
.column {
	/* Using "flex" to make children of this div, the parent, have the same height as the parent. */
	display: -ms-flex;
	display: -webkit-flex; 
	display: flex; 

	/* 3 articles on a row. */
    float: left;
    width: 33.33%;
    padding: 0; /*15px;*/

    /* Fakes space between the divs for the cards with borders */
	float:left;
	border-right: 2em solid white;
	border-bottom: 2em solid white;
	border-left: 2em solid white;

	box-sizing:border-box;
	-moz-box-sizing:border-box; /* Firefox */
	-webkit-box-sizing:border-box; /* Safari */
}

/* Uses "flex" */
.column > div { flex:1; }

/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
    .column {
        width: 100%;
    }
}

.card{

	/* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
}

</style>