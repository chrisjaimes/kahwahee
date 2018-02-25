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
					<f7-nav-center sliding>Que Tea Cup</f7-nav-center>
				</f7-navbar>
				<!-- Pages -->
				<f7-pages>
					<f7-page>
						<f7-block-title>Welcome</f7-block-title>
						<f7-list>
							<f7-list-item swipeout title="Order 1" @swipeout:deleted="onSwipeoutDeleted">
								<f7-swipeout-actions>
									<f7-swipeout-button delete overswipe>Delete</f7-swipeout-button>
								</f7-swipeout-actions>
							</f7-list-item>
							<f7-list-item swipeout title="Order 2" @swipeout:deleted="onSwipeoutDeleted">
								<f7-swipeout-actions>
									<f7-swipeout-button delete overswipe>Delete</f7-swipeout-button>
								</f7-swipeout-actions>
							</f7-list-item>
							<f7-list-item swipeout title="Order 3" @swipeout:deleted="onSwipeoutDeleted">
								<f7-swipeout-actions>
									<f7-swipeout-button delete>Delete</f7-swipeout-button>
								</f7-swipeout-actions>
							</f7-list-item>
						</f7-list>
					</f7-page>
				</f7-pages>
			</f7-view>
		</f7-views>
	</div>
</template>

<script>
	export default {}
</script>
