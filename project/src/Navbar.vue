<template>
	<div>
		<b-navbar toggleable="md" type="dark" variant="info">

		  <b-navbar-brand href="#">
		  	<img src="./assets/logo.png" alt="Logo" style="width:40px;">
		  </b-navbar-brand>

		  <!-- Collaps toggler -->
		  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

		  <b-collapse is-nav id="nav_collapse"> 	

		    <!-- Right aligned nav items -->
		    <b-navbar-nav class="ml-auto">
		    
		    <!-- The links -->
		    <b-navbar-nav>
		      <b-nav-item href="#">Link1</b-nav-item>
		      <b-nav-item href="#" disabled>Link2</b-nav-item>
		    </b-navbar-nav>
		    </b-navbar-nav>
		  </b-collapse>

		</b-navbar>
	</div>
</template>