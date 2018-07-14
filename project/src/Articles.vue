<template>
	<div>
		<div <div v-for="item in articles" :key="item.imageUrl">	

			<b-card 
			:title="item.Title"
	        :img-src="item.imageUrl"
	        img-alt="Card image"
	        img-top>

		        <p class="card-text">
		            {{item.Text}}
		        </p>

		        <a href="#" class="card-link">READ MORE</a>

	    	</b-card>

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
	.card{
		width: 100%;

		/* Shadow 
		padding: 1%;
		-moz-box-shadow:1px 1px 1px #BEBEBE;
		-webkit-box-shadow:1px 1px 1px #BEBEBE;
		box-shadow:1px 1px 1px #BEBEBE;
		filter:progid:DXImageTransform.Microsoft.Blur(PixelRadius='1');
		-msfilter:progid:DXImageTransform.Microsoft.Blur(PixelRadius='1');
		left:767;
		top:370;
		*/
	}
</style>