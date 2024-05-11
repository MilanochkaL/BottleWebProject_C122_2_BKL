% rebase('layout.tpl', title='Home Page', year=year)
<style>
	.name_site {
		background-image: url("/static/images/fon.jpg");
		width: 100%;
		text-align: center;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		height: 640px; 
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-width: 100vh;		
	}
	.heading_site{
		 width: 100%;
		 font-weight: bold;
	}
	.jump_buttons_div{
		padding-left: 40px;
		padding-right: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.jump_button{
		border-radius: 30px;
		padding: 5px;
		margin: 20px;
		text-align: center;
		width: 320px;
		height: 270px;
		background-color: #C2E1DB;
	}
	.jump_button:nth-child(2) {
		background-color: #FFC7B6;
	}
	

</style>
<body>
	<div class="name_site">
		<h1 class="heading_site" >Элементы теории графов. Неориентированные графы.</h2>
		<h1 class="heading_site" > Эйлеровы графы</h1>
	</div>
	<div class="jump_buttons_div">
		<div class="jump_button">
			<h3>Элементы теории графов</h3>
			<p>Нахождение подграфа в заданном графе</p>
			<p><a href="subgraph"><img src="static\images\arrow.png" width="100px" height="100%"></a></p>
        </div>
		<div class="jump_button">
			<h3>Неориентированные графы</h3>
			<p>Поиск в графе вершин, имеющих наибольшее окружение</p>
			<p><a href="find_nodes"><img src="static\images\arrow.png" width="100px" height="100%"></a></p>
        </div>
		<div class="jump_button">
			<h3>Неориентированные графы</h3>
			<p>Поиск в графе вершин, имеющих наибольшее окружение</p>
			<p><a href="Euler_cycle"><img src="static\images\arrow.png" width="100px" height="100%"></a></p>
        </div>
	</div>
</body>