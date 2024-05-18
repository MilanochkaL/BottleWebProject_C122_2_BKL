% rebase('layout.tpl', title='Эйлеров цикла', year=year)

<script>

function addGraph() {
    let container = document.getElementById('graph_div');
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    let div = document.createElement('div');
    div.id = "mynetwork";
    div.className = "mynetwork";
    container.appendChild(div);

    let inputContainer = document.getElementById('inputContainer2');
    let matrixRows = inputContainer.children;
    let nodes = [];
    let edges = [];

    // Create nodes
    for (let i = 0; i < matrixRows.length; i++) {
        nodes.push({ id: i + 1, label: `Node ${i + 1}` });
    }

    // Create edges
    for (let i = 0; i < matrixRows.length; i++) {
        let rowInputs = matrixRows[i].children;
        for (let j = i; j < rowInputs.length; j += 2) {
            let inputValue = rowInputs[j].value;
            if (inputValue === '1') {
                edges.push({ from: i + 1, to: j / 2 + 1 });
            }
        }
    }

    // Network options
    var options = {};

    // Create network data and display the graph
    var networkContainer = document.getElementById('mynetwork');
    var data = {
        nodes: nodes,
        edges: edges
    };
    var network = new vis.Network(networkContainer, data, options);
}
function readFile() {
const fileInput = document.createElement('input');
fileInput.type = 'file';
fileInput.accept = '.txt';

fileInput.addEventListener('change', function() {
    const file = this.files[0];
    const reader = new FileReader();
    
    reader.onload = function(event) {
        const content = event.target.result;
        const rows = content.trim().split('\n');
        
        // Получаем размер матрицы по длине первой строки файла
        const size = rows[0].trim().replace(/\s/g, '').length;
        
        const matrix = [];
        let error = false;
        
        rows.forEach((row, i) => {
            if (i >= size) return;
            
            const elements = row.trim().replace(/\s/g, '').split('');
            
            if (elements.length !== size) {
                error = true;
            }
            
            const sanitizedRow = elements.map(el => el === '1' ? 1 : el === '0' ? 0 : null);
            
            if (sanitizedRow.includes(null)) {
                error = true;
            }
            
            matrix.push(sanitizedRow);
        });

        if (error || matrix.length !== size) {
            alert('Ошибка: Матрица должна быть квадратной и содержать только 0 и 1!');
            return;
        }

        const sizeInput = document.getElementById('inputCount');
        sizeInput.value = size;     
        addInputs();
        matrix.forEach((row, i) => {
        row.forEach((value, j) => {
            var input = document.getElementById(`dynamicInput${i}${j}`);
            input.value = value;
            var input = document.getElementById(`dynamicInput${j}${i}`);
            input.value = value;
        });
    });
    };
    
    reader.readAsText(file);
});
fileInput.click();
}


</script>

<body class="backgroun_find_an_Euler">
	<div class="theory_Euler_div">
      <h1>Поиск Эйлерова цикла (или цепи) в Эйлеровом графе</h1>
      <h3><a href="#calc">Перейти к калькулятору</a></h3>
      <div class="opred">
      <h3>Основные определения</h3>
      <p><b>Эйлеровым путем (англ. Eulerian path)</b> в графе называется путь, который проходит по каждому ребру, причем ровно один раз.</p>
      <p><b>Эйлеров обход (англ. Eulerian circuit)</b> — обход графа, посещающий эйлеров путь.</p>
      <p><b>Эйлеров цикл (англ. Eulerian cycle)</b> — замкнутый эйлеров путь.</p>
      <p><b>Граф называется эйлеровым (англ. Eulerian graph),</b> если он содержит эйлеров цикл. Граф называется полуэйлеровым, если он содержит эйлеров путь, но не содержит эйлеров цикл.</p>
      </div>
      <h3>Критерий эйлеровости</h3>      
      <div class="theorema">
      <label>Теорема:</label>
      <p>Для того, чтобы граф G=(V,E) был эйлеровым необходимо чтобы:
      <ol>
         <li>Все вершины имели четную степень.</li>
         <li>Все компоненты связности, кроме, может быть, одной, не содержали ребер.</li>
       </ol>
      </p>
      </div>      
      <label>Доказательство:</label>
      <div class="theory_and_img_2">
      <p >
      <ol>
         <li style="font-size: 17px;">Допустим в графе существует вершина с нечетной степенью. Рассмотрим эйлеров обход графа. 
         Заметим, что при попадании в вершину и при выходе из нее мы уменьшаем ее степень на два (помечаем уже пройденые ребра), 
         если эта вершина не является стартовой(она же конечная для цикла). Для стартовой(конечной) вершины мы уменьшаем ее степень на один в начале обхода эйлерова цикла, и на один при завершении. Следовательно вершин
         с нечетной степенью быть не может. Наше предположение неверно.</li>
         <li style="font-size: 17px;">Если в графе существует более одной компоненты связности с ребрами, то очевидно,
         что нельзя пройти по их ребрам одним путем.</li>
       </ol>
      </p>
          <div class="theory_and_img_el"> 
              <div>
                  <img src="static\images\find_an_Euler_cycle_or_chain_1.png" width="150px" height="150px" >
                  <p>Эйлерова пути нет. Количество вершин нечетной степени больше двух.</p>
              </div>
              <div style="margin-left: 10px;">
                  <img src="static\images\find_an_Euler_cycle_or_chain_2.png" width="200px" height="150px" >
                  <p>Две компоненты связности, одна имеет ребра.</p>
               </div>
          </div>
      </div>
      <div  class="theorema">
      <label>Теорема:</label>
      <p>В графе G=(V,E) существует эйлеров цикл тогда и только тогда, когда:
      <ol>
         <li>Все вершины имеют четную степень.</li>
         <li>Все компоненты связности, кроме, может быть, одной, не содержат ребер.</li>
       </ol>
      </p>
      </div>
      <label>Доказательство:</label>
      <p>Необходимость мы доказали ранее. Докажем достаточность, используя индукцию по числу вершин n.</P>
      <p>База индукции: n=0 цикл существует.</p>
      <p>Предположим что граф имеющий менее n вершин содержит эйлеров цикл.</p>
      <p>Рассмотрим связный граф G=(V,E) с n>0 вершинами, степени которых четны.</p>
      <p>Пусть v1 и v2 — вершины графа. Поскольку граф связный, то существует путь из v1 в v2. 
      Степень v2 — чётная, значит существует неиспользованное ребро, по которому можно продолжить
      путь из v2. Так как граф конечный, то путь, в конце концов, должен вернуться в v1, следовательно мы 
      получим замкнутый путь (цикл). Назовем этот цикл C1. Будем продолжать строить C1 через v1 таким же образом, 
      до тех пор, пока мы в очередной раз не сможем выйти из вершины v1, то есть C1 будет покрывать все ребра, инцидентные v1.
      Если C1 является эйлеровым циклом для G, тогда доказательство закончено. Если нет, то пусть G′ — подграф графа G, полученный удалением всех
      рёбер, принадлежащих C1. Поскольку C1 содержит чётное число рёбер, инцидентных каждой вершине, то каждая вершина подграфа G′ имеет
      чётную степень. А так как C1 покрывает все ребра, инцидентные v1, 
      то граф G′ будет состоять из нескольких компонент связности. </p>
      <p>Рассмотрим какую-либо компоненту связности G′. Поскольку рассматриваемая компонента связности G′ имеет менее,
      чем n вершин, а у каждой вершины графа G′ чётная степень, то у каждой компоненты связности G′ существует эйлеров цикл. Пусть для рассматриваемой 
      компоненты связноти это цикл C2. У C1 и C2 имеется общая вершина a, так как G cвязен. Теперь можно обойти эйлеров цикл, начиная его в вершине a,
      обойти C1 , вернуться в a, затем пройти C2 и вернуться в a. Если новый эйлеров цикл не является эйлеровым циклом для G, 
      продолжаем использовать этот процесс, расширяя наш эйлеров цикл,
      пока, в конце концов, не получим эйлеров цикл для G.</p>
      <div class="theorema">
      <label>Теорема (следствие):</label>
      <p>В графе G=(V,E) существует эйлеров путь тогда и только тогда, когда:
      <ol>
         <li>Количество вершин с нечетной степенью меньше или равно двум.</li>
         <li>Все компоненты связности кроме, может быть одной, не содержат ребер.</li>
       </ol>
      </p>
      </div>
      <label>Доказательство:</label>
      <p>Добавим ребро, соединяющее вершины с нечетной степенью. Теперь можно найти 
      эйлеров цикл, после чего удалить добавленное ребро. Очевидно найденный
      цикл станет путем. </p>
      <h3>Ориентированный граф</h3>
      <div class="theorema">
      <label>Теорема:</label>
      <p>В ориентированном графе G=(V,E) существует эйлеров цикл тогда и только тогда, когда
      <ol>
         <li>Входная степень любой вершины равна ее выходной степени. </li>
         <li>Все компоненты слабой связности кроме, может быть одной, не содержат ребер.</li>
       </ol>
      </p>
      </div>
      <label>Доказательство:</label>
      <p>Доказательство аналогично случаю неориентированного графа. </p>
      <div class="theorema">
      <label>Теорема (cледствие):</label>
      <p>В ориентированном графе G=(V,E) существует эйлеров путь если: 
      <ol>
         <li>Входная степень любой вершины равна ее выходной степени, кроме двух вершин графа, 
         для одной из которых deg+−deg−=1, а для другой deg+−deg−=−1. </li>
         <li>Все компоненты слабой связности кроме, может быть одной, не содержат ребер.</li>
       </ol>
      </p>
      </div>
      <label>Доказательство:</label>
      <p>Соединим ориентированным ребром вершину с большей входящей степенью с вершиной с 
      большей исходящей степенью. Теперь можно найти эйлеров цикл, 
      после чего удалить добавленное ребро. Очевидно найденный цикл станет путем. </p>
      </div>
      <div class="theory_Euler_div">
      <p><a name="calc"></a></p>
      <div style="display: flex;">
        <h3 style="margin-bottom: 20px">Размерность матрицы:</h3> 
        <input type="number" id="inputCount" name="matrix-size" min="1" style="margin: 15px; height=5px; width: 100px" required>
      </div>      
      <div style="display: flex;">
            <div id="inputContainer2" style="margin-left: 20px; margin-bottom: auto; margin-top: auto;"></div>
            <div id="graph_div"></div>
      </div>
      <div id="matrix-container"></div>
      <button onclick="addInputs()" margin="20px" class="anim_button">Добавить поля</button>
      <button onclick="addGraph()"margin="20px" class="anim_button">Решить</button>
      <button onclick="readFile()"margin="20px" class="anim_button">Загрузить из файла</button>
	</div>    
</body>
