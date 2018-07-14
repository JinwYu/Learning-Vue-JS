<template>
	<div>
		<b-navbar toggleable="md" class="navbar bg-company-red" type="dark">

		<!-- Logo -->
        <b-navbar-brand href="#">
	  		<img src="./assets/logo.png" alt="Logo" style="width:40px;">
	  	</b-navbar-brand>

       	<!-- Collapse toggler -->
	  	<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

		  <b-collapse is-nav id="nav_collapse"> 	

		    <!-- Right aligned nav items -->
		    <b-navbar-nav class="ml-auto">		    
			    <!-- The links -->
			    <b-navbar-nav>
			    	<li class="nav-item">
	                	<a href="#" class="nav-link">Users</a>
	                </li>
	                <li class="nav-item">
	                    <a href="#" class="nav-link">Products</a>
	                </li>
			      <b-nav-item href="#">NEWS</b-nav-item>
			      <b-nav-item href="#">AUTHORS</b-nav-item>
			      <b-nav-item href="#">EXPLORE</b-nav-item>
			      <b-nav-item href="#">ABOUT</b-nav-item>
			      <b-nav-item href="#">CONTACT</b-nav-item>
			    </b-navbar-nav>
		    </b-navbar-nav>

		  </b-collapse>

		</b-navbar>
	</div>
</template>

<style>
	.nav-item{
		font-size: 15px;
	}

	/* Navbar background color */
	.bg-company-red {
    	background-color: #2699FB;
	}

</style>