% rebase('layout.tpl', title='Главная', year=year)

<body>
	<div class="name_site">
		<h1 class="heading_site" >Элементы теории графов. Неориентированные графы.</h2>
		<h1 class="heading_site" > Эйлеровы графы</h1>
	</div>
	<div class="jump_buttons_div">
		<div class="jump_button">
			<div class="text_method">
				<h3 class="name_method">Элементы теории графов</h3>
				<p class="description_method">
					<div>
						<p>Нахождение подграфа в заданном графе  - это процесс выделения части исходного графа, которая также является графом</p>						
					</div>
				</p>
			</div>	
			<p><a href="subgraph"><img src="static\images\arrow.png" width="100px" height="100%"></a></p>
        </div>
		<div class="jump_button">
			<div class="text_method">
				<h3 class="name_method">Неориентированные графы</h3>
				<p class="description_method">Поиск в графе вершин, имеющих наибольшее окружение, заключается в выявлении вершин, 
											  которые имеют максимальное количество соседних вершин</p>
			</div>	
			<p><a href="find_nodes"><img src="static\images\arrow.png" width="100px" height="100%"></a></p>
        </div>
		<div class="jump_button">
			<div class="text_method">
				<h3 class="name_method">Эйлеровы графы</h3>
				<p class="description_method">Поиск эйлерова цикла в эйлеровом графе заключается в нахождении замкнутого маршрута,
											  который проходит через каждое ребро графа ровно один раз.</p>
			</div>			
			<p class="arrow_buttton"><a href="Euler_cycle"><img src="static\images\arrow.png" width="100px" height="100%"></a></p>
		</div>
	</div>
	<div class="welcome_msg_block">
		<div class="block"></div>
		<div class="welcome_msg_button_and_text">
			<div class="welcome_msg">
				<h1 >Добро пожаловать на сайт</h1>
				<h3>посвященный теории графов и связанным с ней практическим инструментам!</h3>
				<p>Здесь вы найдете полезные сведения и интерактивные калькуляторы для решения таких задач, как:</p>
				<ul>
					 <li>Поиск эйлерова графа в эйлеровом цикле</li>
					 <li>Нахождение подграфа в графе</li>
					 <li>Определение вершин, имеющих наименьшее окружение</li>
				</ul>
				<p>Разработано командой энтузиастов теории графов. Узнать больше об авторах можно, нажав на кнопку ниже</p>			
			</div>		
			<p class="arrow_buttton"><a href="contact"><img src="static\images\arrow.png" width="100px" height="100%"></a></p>
		</div>
		<div class="block2"></div>
	</div>
</body>