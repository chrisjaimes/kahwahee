<template>
	<!-- App -->
	<div id="app">
		
		<!-- Statusbar -->
		<f7-statusbar></f7-statusbar>
		
		<!-- Main Views -->
		<f7-views>
			<f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
				<!-- Navbar -->
				<f7-navbar>
					<f7-nav-center sliding>Queue Tea Cup</f7-nav-center>
				</f7-navbar>
				<div class="page" data-name="home">
					<div class="page-content page">
						<f7-list>
							<div class="list media-list">
								<ul>
									<li class="swipeout" id="order">
										<div class = "swipeout-content">
											<div class="item-content">
												<div class="item-inner" id="order">
													<div class="item-title-row">
														<div class="item-title">Kiwi Pop</div>
													</div>
													<div class="item-subtitle order-specifications">
														<ul>
															<li>Dericious popsicle for you and me</li>
															<li>Potato</li>
														</ul>
													</div>
												</div>
												
											</div>
										</div>
										<div class="swipeout-actions-right">
											<a href="#" class="swipeout-delete swipeout-overswipe">Delete</a>
										</div>
										
									</li>
									<li class="swipeout" id="order">
										<div class = "swipeout-content">
											<div class="item-content">
												<div class="item-inner" id="order">
													<div class="item-title-row">
														<div class="item-title">Kiwi Pop</div>
													</div>
													<div class="item-subtitle order-specifications">
														<ul>
															<li>kahwahee

															</li>
															<li>Potato</li>
														</ul>
													</div>
												</div>
												
											</div>
										</div>
										<div class="swipeout-actions-right">
											<a href="#" class="swipeout-delete swipeout-overswipe">Delete</a>
										</div>
										
									</li>
								</ul>
							</div>
						</f7-list>
					</div>
				</div>
			</f7-view>
		</f7-views>
	</div>
</template>

<script>
	export default {}
</script>

<style scoped>
.order {
	/* padding-left: 0.2em; */
	/* border: 1em white; */
	border: white;
	border-style: solid;
}

.item-subtitle {
    font-size: 15px;
    position: absolute;
    overflow: hidden;
    white-space: nowrap;
    max-width: 100%;
    text-overflow: ellipsis;
}

.order-specifications {
	padding-left: 25%;
	padding-right: 35%;
	text-align:left;
}

.page {
	padding: 0px;
}

#order {
	height: 10em;
}

.back {
	background-color: purple;
}

#coconut {
	background-color: blue;
}

#brew {
	background-color: chocolate;
}

#strawberry {
	 background-color: red;
}
</style>
