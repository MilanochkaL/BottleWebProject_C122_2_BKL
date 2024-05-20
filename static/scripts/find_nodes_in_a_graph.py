def find_max_neighborhood(adjacency_matrix, k):
    
    def matrix_multiply(a, b):
        # Вычисляет произведение двух матриц.
        result = [[0 for _ in range(len(b[0]))] for _ in range(len(a))]
        for i in range(len(a)):
            for j in range(len(b[0])):
                for l in range(len(b)):
                    result[i][j] += a[i][l] * b[l][j]
        return result

    def matrix_power(matrix, k):
        # Вычисляет k-ю степень матрицы смежности.
        result = matrix.copy()
        for _ in range(k - 1):
            result = matrix_multiply(result, matrix)
        return result

    def compute_reachability_matrix(matrix, k):
        n = len(matrix)
    
        reachability = [[0 if i != j and matrix[i][j] == 0 else 1 for j in range(n)] for i in range(n)]
    
        for _ in range(2, k + 1):
            reachability = matrix_multiply(reachability, matrix)
      
            for i in range(n):
                for j in range(n):
                    if reachability[i][j] > 0:
                        reachability[i][j] = 1

        return reachability

    # Вычисление k-й степени матрицы смежности
    powered_matrix = matrix_power(adjacency_matrix, k)

    # Вычисление матрицы ограниченных достижимостей k-го шага
    reachability_matrix = compute_reachability_matrix(powered_matrix, k)

    # Поиск вершин с наибольшим окружением
    max_neighborhood_size = 0
    max_neighborhood_vertices = []

    for i in range(len(adjacency_matrix)):
        neighborhood_size = sum(powered_matrix[i])
        if neighborhood_size > max_neighborhood_size:
            max_neighborhood_size = neighborhood_size
            max_neighborhood_vertices = [i + 1]
        elif neighborhood_size == max_neighborhood_size:
            max_neighborhood_vertices.append(i + 1)

    # Форматирование вывода матрицы
    matrix_output = "\n".join([" ".join(map(str, row)) for row in reachability_matrix])
    vertices_output = ", ".join(map(str, max_neighborhood_vertices))
    if not isinstance(k, int) or k <= 0:
            return "k должно быть положительным целым числом"
     

    return f"Матрица ограниченных достижимостей k-го шага:\n{matrix_output}\n\nНаибольшее окружение имеют вершины: {vertices_output}"