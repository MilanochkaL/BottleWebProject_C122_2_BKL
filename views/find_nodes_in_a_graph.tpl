% rebase('layout.tpl', title="Поиск вершин", year=year)

<body class="background">
    <div class = "rectangle">
        <div class = "center">
            <p class="center p"><a href="#top">Наверх</a></p>
            <p class="center p"><a href="#xz">xz</a></p>
        </div>
            
            <p><a name="top"></a></p> 
                <p>Окружением вершины v называется множество всех вершин графа G,
                смежных с ней; обозначается: N(v).
                Степенью или валентностью вершины v неориентированного графа G
                называется число ребер, инцидентных данной вершине (число вершин в ее
                окружении). Обозначается: deg(v) (
                deg(v) || (u,v): u,vэV,(u,v)||E).
                Вершина v графа G называется изолированной, если ее степень равна нулю (deg(v)=0).
                Вершина v графа G называется висячей или концевой, если степень этой
                вершины равна единице (deg (v)=1).
                Вершина v графа G(p,q) называется доминирующей, если ее степень равна
                p-1 (deg (v)=p-1).
                </p>
                <p><a name="xz"></a></p> 
                <div class="text">
                    <p>Колчество вершин</p>
                    <form>
                        <select id="ver">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                        </select>
                    </form>

                    <p>Колчество ребер</p>
                    <form>
                        <select id="reb">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                        </select>
                    </form>
                </div>
                <div class="text">
                    <p>k   </p>
                    <input type="text" name="input" placeholder="Введите значение k">
                </div>
    </div>

</body>