% rebase('layout.tpl', title="Поиск вершин", year=year)
<body class="background">
    <div class = "rectangle">
        <h1 class="center">Поиск в графе вершин, имеющих наибольшее окружение</h1>
            <h3><a href="#calc">Перейти к калькулятору</a></h3>
            <div class="definitions">
                <h3>Основные определения</h3>
                <p><b>Графом G(V,E)</b> называется совокупность двух множеств – непустого множества V (вершин) и множества E 
                (ребер) – двухэлементных подмножеств множества V. G(V, E) = E ⊆ {{u, v}| u, v∈V & u≠v},  V ≠ Ø</p>
                
                <p><b>Окружением вершины v называется</b> называется множество всех вершин графа G,
                смежных с ней; обозначается: N(v).</p>

                <p><b>Степенью или валентностью вершины v неориентированного графа G</b> называется число ребер, инцидентных данной вершине 
                (число вершин в ее
                окружении). Обозначается: deg(v) (
                deg(v) || (u,v): u,v∈V,(u,v)||E).</p>


                <p><b>Вершина v графа G называется изолированной,</b> если ее степень равна нулю (deg(v)=0).</p>

                <p><b>Вершина v графа G называется висячей или концевой,</b> если степень этой
                вершины равна единице (deg (v)=1).</p>
                <p><b>Вершина v графа G(p,q) называется доминирующей,</b>если ее степень равна
                p-1 (deg (v)=p-1).</p>
            </div>

            <div class="theory">
                <h3>Расстояние между вершинами и ярусы</h3>
                <p><b>Длиной маршрута</b> называется количество ребер в нем (с повторениями). 
                Если маршрут М=v0, e1, v1, e2, v2, …, ek, vk, то длина М равна k (обозначается |M|=k ).</p>
                
                <p><b>Расстоянием между вершинами u и v(обозначается d(u,v)) </b> называется длина кратчайшей цепи,
                а сама кратчайшая цепь называется геодезической. Если не существует цепи, то d(u,v)=+∞</p>

                <p>Множество вершин, находящихся на одинаковом расстоянии n от вершины v (обозначается D (v,n) ), называется ярусом: </p>
                <p>D(v,n)={u∈V|d(v,u)=n}</p>


                <p>Ясно, что всякий связный граф однозначно разбивается на ярусы относительно данной вершины.</p>
            </div>

            <div class="theory">
              <h3>Достижимость и связность в графах</h3>
              <label>Определение достижимости вершин</label>
                <p>Если существует путь, идущий от вершины xi к вершине xj, то говорят, что вершина xj достижима для вершины xi. 
                    <p>Пусть задан неориентированный граф G=〈X,Г〉 и его матрица смежности A. 
                    Достижимое множество вершин R(xi) для вершины xi - есть множество вершин, 
                    которые достижимы для вершины xi. Но, по определению, 
                    любая достижимая для xi вершина соединена с ней хотя бы одним путем длины ноль (при i = j), 
                    один, два, …, или k ≤ n. Тогда достижимое множество для xi можно представить в виде:</p>
                    <p>R(xi)={xi}⋃Г(xi)⋃Г²(xi)⋃…⋃Г^k(xi),</p>
                </p>
                <p>где k имеет такое наименьшее значение, после которого R(xi) уже не изменяется, т.е. не наращивается.</p>
                <p><b>Ограниченно достижимое множество обозначают через</b> Rk(xi). 
                Это множество вершин, достижимых путем максимальной длины k (и менее).
                Иными словами, Rk(xi) –это матрица числа вершин, находящихся в первых k ярусах, 
                относительно каждой из них. Тогда полностью достижимое множество R(xi)=Rk(xi), если Rk(xi)=Rk+1(xi).</p>
             </div>
             <div class ="theory2">
                     <label>Определим матрицу достижимостей R=[rij] следующим образом:</label>
                     <img src="static\images\reachability_formula.png" width="420px" height="90px">
                     <p>При этом i-е строки матрицы достижимостей есть вектора, соответствующие множествам R(xi) в упорядоченном перечислении их элементов.</p>
                     <p>Задав определенное значение k, найдем в Rk(xi) максимальную из сумм элементов строк и получим номер (или номера) вершины, 
                         имеющей в первых k ярусах наибольшее количество вершин.</p>
              </div>

            <div class="theory">
                <label>Матрица смежности</label>
                <p>Представление графа с помощью квадратной булевой матрицы</p>
                <p>М: array [l..p, 1..p] of 0..1, отражающей смежность вершин, называется матрицей смежности, где</p>
                <img src="static\images\adjacency_matrix_formula.png" width="450px" height="100px">
                <p>Для матрицы смежности n(p,q) = О(р²).</p>
            </div>
            <div class ="theory2">
                <label>Пример:</label>
                <img src="static\images\adjacency_matrix.png" width="450px" height="120px">
                <p>Матрица смежности неориентированного графа симметрична относительно главной диагонали, 
                поэтому доста¬точно хранить только верхнюю (или нижнюю) треугольную матрицу.</p>
            </div>
    </div>

    <div class = "rectangle">
            <p><a name="calc"></a></p>
            <label class="size_text">Калькулятор:</label>
                
            <div class="text">
                  <p>k = </p>
                  <input class="input" type="text" name="input">
            </div>

        <div style="display: flex;">
            <h3 class = "text">Размерность матрицы:</h3> 
            <input type="number" id="inputCount" name="matrix-size" min="1" class="input2" required>
          </div>      
          <form id="myForm">
                <div id="inputContainer2" class="form">
                </div>
          </form>
          <button class ="btn" onclick="addInputs()" >Добавить поля</button>
        
        <div>
            <p><a class="btn">Решить</a></p>
        </div>
    </div>
            
    

</body>