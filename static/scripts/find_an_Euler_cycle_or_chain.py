
def find_eulerian_path_or_cycle(adjacency_matrix):
    # Функция для проверки, является ли следующее ребро допустимым
    def is_valid_next_edge(u, v):
        if adjacency_matrix[u][v] == 0:
            return False
        count = sum(adjacency_matrix[u])
        if count == 1:  # Если только одно ребро у вершины
            return True

        visited = [False] * n
        count1 = dfs_count(u, visited)

        # Удаляем ребро из матрицы и проверяем новый подсчет
        adjacency_matrix[u][v] -= 1
        adjacency_matrix[v][u] -= 1

        visited = [False] * n
        count2 = dfs_count(u, visited)

        # Восстанавливаем матрицу
        adjacency_matrix[u][v] += 1
        adjacency_matrix[v][u] += 1

        return count1 <= count2

    # Функция обхода в глубину для подсчета вершин
    def dfs_count(v, visited):
        visited[v] = True
        count = 1
        for i in range(n):
            if adjacency_matrix[v][i] and not visited[i]:
                count += dfs_count(i, visited)
        return count

    # Находим стартовую вершину для поиска пути
    def find_start_node():
        for i in range(n):
            if sum(adjacency_matrix[i]) % 2 != 0:
                return i
        return 0

    # Рекурсивная функция для поиска эйлерова пути
    def get_euler_util(u):
        res = f'{str(u + 1)} '
        for v in range(n):
            if is_valid_next_edge(u, v):
                res += ' -> '
                adjacency_matrix[u][v] -= 1
                adjacency_matrix[v][u] -= 1
                res += get_euler_util(v)
        return res

    n = len(adjacency_matrix)
    odd_degree_nodes = [i for i in range(n) if sum(adjacency_matrix[i]) % 2 != 0]

    # Проверяем наличие эйлерова пути или цикла
    if len(odd_degree_nodes) not in [0, 2]:
        return "Граф не имеет эйлерова пути или цикла"

    start_node = find_start_node()
    path = get_euler_util(start_node)

    return 'Эйлеров ' + ('цикл: ' if path[0] == path[-2] else 'путь: ') + path

