import datetime
from distutils.file_util import write_file
import json

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
    
    def write_file_euler(result):
        result_data = {
        "Execution Time": datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
        "Original Matrix": adjacency_matrix_2,
        "Result": result
    }
        try:
            with open('D:\grath2\Rezult_euler.json', 'r', encoding='utf-8') as f:
                results = json.load(f)
        except (FileNotFoundError, json.JSONDecodeError):
            results = {}

        if "all_results" not in results:
            results["all_results"] = []

        # Check if the matrix already exists in the stored results
        matrix_exists = False
        for stored_result in results["all_results"]:
            if stored_result["Original Matrix"] == adjacency_matrix_2:
                stored_result["Execution Time"] = result_data["Execution Time"]
                matrix_exists = True
                break

        if not matrix_exists:
            results["all_results"].append(result_data)

        with open('D:\grath2\Rezult_euler.json', 'w', encoding='utf-8') as file:
            json.dump(results, file, ensure_ascii=False, indent=4)

    adjacency_matrix_2 = adjacency_matrix

    n = len(adjacency_matrix)
    adjacency_matrix_2 = [row[:] for row in adjacency_matrix]  # Make a deep copy of the matrix

    odd_degree_nodes = [i for i in range(n) if sum(adjacency_matrix[i]) % 2 != 0]

    if len(odd_degree_nodes) not in [0, 2] or len(odd_degree_nodes) == n:
        write_file_euler("Граф не имеет эйлерова пути или цикла")
        return "Граф не имеет эйлерова пути или цикла"

    component_count = 0
    visited = [False] * n
    for i in range(n):
        if not visited[i]:
            dfs_count(i, visited)
            component_count += 1

    if component_count > 1:
        write_file_euler("Граф не имеет эйлерова пути или цикла")
        return "Граф не имеет эйлерова пути или цикла"

    start_node = find_start_node()
    path = get_euler_util(start_node)
    write_file_euler('Эйлеров ' + ('цикл: ' if path[0] == path[-2] else 'путь: ') + path)

    return 'Эйлеров ' + ('цикл: ' if path[0] == path[-2] else 'путь: ') + path
