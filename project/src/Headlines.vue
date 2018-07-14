<template>
	<div>
		<div class="container" v-for="item in headlines" :key="item.imageUrl">

		    <div class="card">
				<div class="row">

					<!-- Image to the left -->
					<div class="col-md-4">
				  		<img :src="item.imageUrl" class="card-img-bottom">
					</div>

					<!-- Card to the right -->
					<div class="col-md-6">
						<div class="card-block">
						    <h4 class="card-title">{{item.Title}}</h4>

						    <p class="card-text fade-out">{{item.Text}}</p>
						    
						    <a href="#" class="card-link">READ MORE</a>
						</div>
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
	.card{
		/* Add shadows to create the "card" effect */
	    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
	    transition: 0.3s;
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
		position: absolute;
  		bottom: 0;
  		padding-bottom: 20px;
  		color: #2699fb;
	}

	.card-img-bottom {
		color: #fff;
		height: 30rem;
		padding: 0px;
		background: center no-repeat;
		background-size: cover;
	}

	.container{
		max-width: 100%;
  		margin: 0 auto;
		padding-top: 1%;
		padding-bottom: 1%;
		padding-left: 0px;
		padding-right: 0px;
	}

	.fade-out {
	  position: relative;
	  max-height: 1200px;
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



@media (max-width: 1200) {



}
	
</style>