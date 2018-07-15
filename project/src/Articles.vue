<template>
	<div class="container">

		<div class="innerbox" v-for="item in articles" :key="item.imageUrl">
			
			<div class="innertext">
				  <img :src="item.imageUrl" alt="Avatar">

				  <div class="text-container fade-out">
				    <h4><b>{{item.Title}}</b></h4> 
				    <p>{{item.Text}}</p> 
				  </div>

				  <div class="read-more">
				  	<a href="#" class="card-link">READ MORE</a> 
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

p {
	color: #2699fb;
	font-size: 12px;
}

h4{
	color: #2699fb;
	font-weight: bold;
	font-size: 20px;
}

a{
	font-weight: bold;
	font-size: 12px;
}

.read-more{
	padding: 2.5em;
}

.text-container{
	/* Hide text overflow, fixed height to cut text that is too long */
	height: 15em;
	overflow: hidden;
	padding: 2.5em;
}

.container { 
	/*background: red; */
  	max-width: 100%;

	padding-top: 1%;
	padding-bottom: 1%;
	padding-left: 0px;
	padding-right: 0px;
}

.container .innerbox { 
	width:33.33%; 
	display:inline-block; 
}

.container .innerbox .innertext { 
	background: white;

	/* Add shadows to create the "card" effect */
    box-shadow: 0 3px 4px 0 rgba(0,0,0,0.1);
    transition: 0.3s;

	box-sizing: border-box; 

	/* Add space between articles */
	margin: 1.5em;
}

/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media screen and (max-width: 1080px) {
    .container .innerbox {
        width:50%; 
  		display:inline-block; 
    }

    .read-more{
		padding-top: 10px;
	}
}

/* iPhone Screen Size */
@media screen and (max-width: 640px) {

	.container .innerbox {
        width:100%
    }

    .read-more{
		padding-top: 1px;
	}

	.container .innerbox .innertext { 
		/* Add space between articles */
		padding: 1em; 
		margin-top: 15px;
		margin-bottom: 15px;
		margin-left: 0px;
		margin-right: 0px;
	}

    /* Fade out when small screen */
    .fade-out {
	  position: relative;

	}
	.fade-out:after {
	  content: '';
	  position: absolute;
	  top: 0;
	  bottom: 0;
	  left: 0;
	  right: 0;
	  background-image: linear-gradient( rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 1) 85% );
	}
}



</style>