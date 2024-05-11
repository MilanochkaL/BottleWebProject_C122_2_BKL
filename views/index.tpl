% rebase('layout.tpl', title='Home Page', year=year)
<style>
	.name_site {
		background-image: url("/static/images/fon.jpg");
		width: 100%;
		text-align: center;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		height: 680px; 
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
		width: 25%;
		height: 270px;
		background-color: #C2E1DB;
		justify-content: space-between;
	}
	.jump_button:nth-child(2) {
		background-color: #CDDAD1;
	}
	.text_method{
		height: 70%;
	}
	.name_method{
		height: 30%;
		margin: 15px;
		margin-bottom: 20px;
		font-weight: bold;
	}
	.description_method{
		font-size: 15px;
		margin-left: 15px;
		margin-right: 15px;
	}
	.block{
		background-color: #CDDAD1;
		border-radius: 0 30px 30px 0;
		padding: 5px;
		height: 390px;
		width: 3%;
		margin-right: auto;	
	}
	.block2{
		background-color: #C2E1DB;
		border-radius: 30px 0 0 30px;
		padding: 5px;	
		margin-left: auto;
		padding: 5px;
		height: 390px;
		width: 3%;
	}
	.welcome_msg{
		display: flex;		
		justify-content: center;
		align-items: center;
		width: 100%;
		margin-top: 40px;
	}
</style>
<body>
	<div class="name_site">
		<h1 class="heading_site" >Элементы теории графов. Неориентированные графы.</h2>
		<h1 class="heading_site" > Эйлеровы графы</h1>
	</div>
	<div class="jump_buttons_div">
		<div class="jump_button">
			<div class="text_method">
				<h3 class="name_method">Элементы теории графов</h3>
				<p class="description_method">Нахождение подграфа в заданном графе</p>
			</div>	
			<p><a href="subgraph"><img src="static\images\arrow.png" width="100px" height="100%"></a></p>
        </div>
		<div class="jump_button">
			<div class="text_method">
				<h3 class="name_method">Неориентированные графы</h3>
				<p class="description_method">Поиск в графе вершин, имеющих наибольшее окружение</p>
			</div>	
			<p><a href="find_nodes"><img src="static\images\arrow.png" width="100px" height="100%"></a></p>
        </div>
		<div class="jump_button">
			<div class="text_method">
				<h3 class="name_method">Эйлеровы графы</h3>
				<p class="description_method">Поиск Эйлерова цикла в Эйлеровом графе</p>
			</div>			
			<p class="arrow_buttton"><a href="Euler_cycle"><img src="static\images\arrow.png" width="100px" height="100%"></a></p>
		</div>
	</div>
	<div class="welcome_msg">
		<div class="block"></div>
		<h1 >Приветственное сообщение</h1>
		<div class="block2"></div>
	</div>
</body>