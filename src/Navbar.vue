<template>
	<div>
		<b-navbar toggleable="md" class="navbar bg-company-red" type="dark">

			<div class="container">

				<!-- Logo -->
				<ul class="nav nav-justified">
			      	<li>
			      		<img src="./assets/ateleslogo.png" alt="Logo">
			      	</li>    

			       	<!-- Collapse toggler padding-left:13em; -->
			       	<div id="hamburger">
				  		<b-navbar-toggle target="nav_collapse" ></b-navbar-toggle>
				  	</div>

					<b-collapse is-nav id="nav_collapse"> 
					    <!-- Right aligned nav items -->
					    <b-navbar-nav class="ml-auto">		
					    <ul class="nav navbar-nav navbar-right">
				            <li><a href="#">NEWS</a></li>
				            <li><a href="#">AUTHORS</a></li>
				            <li><a href="#">EXPLORE</a></li>
				            <li><a href="#">ABOUT</a></li>
				            <li><a href="#">CONTACT</a></li>
				        </ul>     
			
					    </b-navbar-nav>
					</b-collapse>
				</ul>

			  </div>

		</b-navbar>
	</div>
</template>

<style scoped>

img{
	/* Ugly way to move the logo so that it is aligned vertically with the content. */
	padding-left: 1em;
}

.container{
	max-width: 79%;
}

/* Change text color in the navbar. */
.nav.navbar-nav.navbar-right li a {
    color: white;
    font-size: 15px;
}

/* Navbar background color override. */
.bg-company-red {
	background-color: #2699FB;
}

/* Responsive layout */
@media screen and (max-width: 1080px) {
	.container{
		max-width: 100%;
	}

	img{
		padding-left: 0em;
	}
}

/* Max width is set to 764px because the built in toggle for the bootstrapVue navbar appears at that number */
@media screen and (max-width: 764px) {

	#hamburger{
	border: 2px solid white;
	position:absolute;
	right: 2em;
	top: 1.2em;
	padding: 0;
	margin: 0;
	}
}

</style>

<!--<style scoped src="./assets/navbar.css"></style> -->