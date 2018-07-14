<template>
	<div>

		<div class="container">
			<div <div v-for="item in headlines" :key="item.imageUrl">

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
		background: center no-repeat; /* url(https://picsum.photos/300/300/?image=41) */
		background-size: cover;
	}

	.container{
		max-width: 100%;
  		margin: 0 auto;
		padding-top: 1%;
		padding-bottom: 1%;
		padding-left: 0px;
		padding-right: 0px;

		/* Shadow 
		-moz-box-shadow:1px 1px 1px #BEBEBE;
		-webkit-box-shadow:1px 1px 1px #BEBEBE;
		box-shadow:1px 1px 1px #BEBEBE;
		filter:progid:DXImageTransform.Microsoft.Blur(PixelRadius='1');
		-msfilter:progid:DXImageTransform.Microsoft.Blur(PixelRadius='1');
		left:767;
		top:370;
		*/
	}

	.fade-out {
	  position: relative;
	  max-height: 350px;
	}
	.fade-out:after {
	  content: '';
	  position: absolute;
	  top: 0;
	  bottom: 0;
	  left: 0;
	  right: 0;
	  background-image: linear-gradient( rgba(255, 255, 255, 0) 1%, rgba(255, 255, 255, 1) 60% );
	}
	
</style>