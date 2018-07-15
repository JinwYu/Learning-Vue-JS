<template>
	<div>
		<div class="container"  v-for="item in headlines" :key="item.imageUrl">
				<div class="row">

					<!-- Image to the left -->
					<div class="col-md-4">
				  		<img :src="item.imageUrl" class="card-img-bottom">
					</div>

					<!-- Card to the right -->
					<div class="col-md-8" >
						
						<div class="text-container fade-out">
						    <h4 class="card-title">{{item.Title}}</h4>
						    <p class="card-text">{{item.Text}}</p>
						</div>

						<div class="read-more">
						  	<a href="#" class="card-link">READ MORE</a> 
						</div>

					</div>					

				</div>
		</div>
	</div>
</template>


<script>
export default{
	props: {
		headlines:{
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

.container{	
	/* Using "flex" to make children of this div, the parent, have the same height as the parent. */
	display: -ms-flex;
	display: -webkit-flex; 
	display: flex; 	

	max-width: 100%;
	padding-top: 1.5%;
	padding-bottom: 1%;	
}

.row{
	background: white;

	/* Get rid of the extra glutter caused by Bootstrap and "cols". */
	margin-left: 0;
    margin-right: 0;	

	/* Add shadows to create the "card" effect */
    box-shadow: 0 px 4px 0 rgba(0,0,0,0.1);
    transition: 0.3s;
}

.read-more{
	padding-top: 10px;
	padding: 1em;
}

.text-container{
	/* Hide text overflow, fixed height to cut text that is too long */
	height: 25em;
	overflow: hidden;
	padding: 1em;
}

.card-title{
	position: relative;
	font-size: 30px;
	font-weight: bold;
	padding-top: 20px;
	padding-bottom: 20px;
	color: #2699fb;
}

.card-text{
	font-size: 15px;
	color: #2699fb;
	word-wrap: break-word;
	overflow-wrap: break-word;
}

.card-link{
	font-size: 13px;
	font-weight: bold;
	padding-bottom: 20px;
	color: #2699fb;
}

.card-img-bottom {
	color: #fff;
	height: 30rem;

	background: center no-repeat;
	background-size: cover;
}

/* Responsive layout */
@media screen and (max-width: 764px) {

	.container{
		padding-top: 5%;
		padding-bottom: 5%;	
		padding-left: 0px;
		padding-right: 0px;
	}

	.text-container{
		/* Hide text overflow, fixed height to cut text that is too long */
		height: 30em;
		overflow: hidden;
	}	

	.read-more{
		padding-top: 10px;
	}	

	/* Only fade out text when the window is narrow. */
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
		background-image: linear-gradient( rgba(255, 255, 255, 0) 80%, rgba(255, 255, 255, 1) 100% );
	}
}

	
</style>