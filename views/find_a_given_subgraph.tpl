% rebase('layout.tpl', title='Нахождение подграфа', year=year)

<body class="background_subgraph">
	<div class="theory_subgraph_div">
      <h1>Поиск заданного подграфа в данном графе</h1>
      <h3><a href="#calc">Перейти к калькулятору</a></h3>
      <h3>Что такое подграфы</h3>

      <div class="definition_sub">
          <p><b>Подграф </b> — это часть графа, в которой мы берем некоторые его вершины и ребра. Другими словами, граф H является подграфом графа G, если вершины и ребра H являются подмножеством вершин и ребер G.</p>
      </div>

      <div class="img_theory_sub">
      <div>
          <p>Справа показан граф. Части исходного графа, которые не являются частью подграфа, показаны серым цветом и пунктирными линиями, хотя обычно их просто опускают:</p>
          </div>
              <div class="img_theory_sub_img"> 
                  <div>
                      <img src="static\images\subgraphs1.png" class="img_style_sub" >
                      <p>Обратите внимание, что если ребро входит в подграф, то обе его конечные точки должны входить в него. Не имеет смысла иметь ребро без конечной точки.</p>
                  </div>
              </div>
      </div>

      <h3>Понятие изоморфизма</h3>      
      <div class="definition_sub">
        <p>Два графа являются изоморфными тогда и только тогда, когда их вершины можно пронумеровать так, чтобы по составленному соответствию между номерами вершин одного и другого графа выполнялось правило: если две вершины соединены ребром в одном графе, то вершины во втором графе с соответствующими номерами тоже должны иметь общее ребро. Это соответствие принято называть<b> изоморфной подстановкой.</b></p>
      </div>      

      <h3>Задача поиска изоморфного подграфа:</h3>
      <div class="theory_sub">
          <p>
            <ul>
                <li>Задача <b>поиска изоморфного подграфа </b> — это вычислительная задача, 
                    в которой входом являются два графа G и H и нужно определить, не содержит ли G подграф, 
                    изоморфный графу H. Задача поиска изоморфного подграфа является обобщением как задачи о максимальной клике, 
                    так и задачи о проверке, не содержит ли граф гамильтонов цикл, а потому является NP-полной. Однако задачи 
                    поиска изоморфного подграфа с некоторыми видами подграфов могут быть решены за полиномиальное время.</li>
                <li>Иногда также используется название <b>сопоставление подграфа </b>для той же задачи. Это название делает упор на поиске
                    таких подграфов, а не просто на разрешимости.</li>
            </ul>
          </p>
      </div>

      <h3>Поиск паттернов​</h3>
      <div class="img_theory_sub1">
        <p>
            Пусть у нас определено два графа: большой и малый. 
            Нам требуется найти все такие подграфы большого графа, что они будут изоморфны малому. 
            Большой граф будем называть дата-графом, малый - паттерном.</p>
              <div class="img_theory_sub_img">
                  <div>
                      <img src="static\images\subgraphs3.png" class="img_style_sub" >
                      <p>На рисунке ниже изображён паттерн ABC, справа - дата-граф 0123456. В дата-графе паттерну изоморфны три подграфа.</p>
                  </div>
              </div>
      </div>
      

      <h3>Заключение:</h3>
      <div class="theorema_sub">
      <p>В одном графе может быть несколько одинаковых подграфов. 
            При вводе исходных данных названия (метки) вершин графа обычно не учитываются. 
            Графы рассматриваются с точки зрения их структуры, то есть способа соединения вершин ребрами, 
            а не конкретных меток вершин. </p>
      <p>Два графа считаются изоморфными (одинаковыми), если существует биекция между их вершинами,
        сохраняющая смежность вершин. </p>
        </div>

      <div class="theory_sub">
          <p>
            <ol>
                <li>Таким образом, при <b>поиске заданного подграфа в исходном графе</b>, программа будет искать все 
                    возможные комбинации вершин исходного графа, структура которых изоморфна структуре заданного подграфа, 
                    независимо от меток этих вершин. Например, если задан подграф, представляющий полный граф из 5 вершин, 
                    то программа найдет все такие подграфы в исходном графе, где любые 5 вершин полностью соединены между 
                    собой, вне зависимости от того, какие именно вершины это будут.</li>
                <li>Поэтому при вводе матриц смежности исходного графа и заданного подграфа, обычно не требуется 
                    указывать метки вершин, достаточно задать структуру графа через матрицу смежности, <b>где 1 означает наличие
                    ребра между соответствующими вершинами, а 0 - его отсутствие</b>.</li>
            </ol>
          </p>
      </div>
      
	</div>    


<p><a name="calc"></a></p>
<div class="graphs_sub">

<div class="graphs_div_sub" >


  <div style="display: flex; align-items: center;">
      <h3 style="margin-bottom: 20px; display: inline-block;">Размерность матрицы исходного графа:</h3> 
      <input type="number" id="inputCount1" name="matrix-size" min="1" style="margin: 10px; width: 100px; height: 40px; display: inline-block;" required>
  </div>  
  
  <div class="graphs_div" >
      <form id="myForm">
          <div id="inputContainer_first" style=" margin-bottom: 10px;"></div>
      </form>
  </div>

  <button onclick="addInputs1('inputContainer_first', 'inputCount1', '#90b0b6')"  style="margin-bottom: 10px; margin-right: 5px"  class="anim_button" id="add_fields1">Построить матрицу</button>
  <button onclick="createGraph1('inputContainer_first', 'mygraph1')" class="anim_button" id="showGraph1" style="display: none; margin-bottom: 10px;">Построить граф</button>
  <button onclick="generateMatrix('inputCount1', 'inputContainer_first')" class="anim_button" id="genBtn1" style="display: none; margin-right: 5px; margin-bottom: 10px;">Сгенерировать</button>
  <button onclick="readFile('inputContainer_first', 'inputCount1', '#90b0b6')" class="anim_button">Загрузить из файла</button>

  <div id="mygraph1" ></div>
   
</div>
<div class="graphs_div_sub" >

      <div style="display: flex; align-items: center;">
          <h3 style="margin-bottom: 20px; display: inline-block;">Размерность матрицы подграфа:</h3> 
          <input type="number" id="inputCount2" name="matrix-size" min="1" style="margin: 10px; width: 100px; height: 40px; display: inline-block;" required>
      </div>   
      
      <div class="graphs_div" >
          <form id="myForm">
              <div id="inputContainer_second" ></div>
          </form>
      </div>
      <button onclick="addInputs1('inputContainer_second', 'inputCount2', '#90b0b6')" style="margin-bottom: 10px; margin-right: 5px;" class="anim_button" id="add_fields2">Построить матрицу</button>
      <button onclick="createGraph1('inputContainer_second', 'mygraph2')" class="anim_button" id="showGraph2" style="display: none; margin-bottom: 10px;" >Построить граф</button>
      <button onclick="generateMatrix('inputCount2', 'inputContainer_second')" class="anim_button" id="genBtn2" style="display: none; margin-right: 5px; margin-bottom: 10px;">Сгенерировать</button>
      <button onclick="readFile('inputContainer_second', 'inputCount2', '#90b0b6')" class="anim_button">Загрузить из файла</button>
      <div style="display: flex; margin-left: 90px">
      <button onclick="solve_isomorphic_subgraphs_js()" class="anim_button" id="solveButton" style="display: none; margin-top: 10px; font-weight: bold;">Решить</button>
      </div>
        <div id="mygraph2"></div>

</div>
</div>

<div style="display: flex; justify-content: center;">
    <div id="result_sub_div" style="display: none; width: 80%; background-color: #FFFF; border-radius: 20px; margin: 40px 0; padding: 40px; font-size: 20px; justify-content: center; align-items: center; text-align: center; ">
        <p><a name="result"></a></p>
        <div id="result_sub"></div>
    </div>
</div>



</body>
