def find_max_neighborhood(adjacency_matrix, k):

    #Ќаходит вершины с наибольшим окружением в первых k ¤русах.
    #¬ычисл¤ет последовательно степени матрицы смежности и матрицы ограниченных достижимостей.
    def matrix_multiply(a, b):
        #¬ычисл¤ет произведение двух матриц.
        result = [[0 for _ in range(len(b[0]))] for _ in range(len(a))]
        for i in range(len(a)):
            for j in range(len(b[0])):
                for l in range(len(b)):
                    result[i][j] += a[i][l] * b[l][j]
        return result

    def matrix_power(matrix, k):
        #¬ычисл¤ет k-ю степень матрицы смежности.
        result = matrix.copy()
        for _ in range(k - 1):
            result = matrix_multiply(result, matrix)
        return result

    def compute_reachability_matrix(matrix):
        #¬ычисл¤ет матрицу ограниченных достижимостей.
        reachability = matrix.copy()
        for i in range(len(matrix)):
            for j in range(len(matrix)):
                if i != j and reachability[i][j] == 0:
                    reachability[i][j] = float('inf')
        return reachability

    # ¬ычисление k-й степени матрицы смежности
    powered_matrix = matrix_power(adjacency_matrix, k)

    # ¬ычисление матрицы ограниченных достижимостей k-го шага
    reachability_matrix = compute_reachability_matrix(powered_matrix)

    # ѕоиск вершин с наибольшим окружением
    max_neighborhood_size = 0
    max_neighborhood_vertices = []

    for i in range(len(adjacency_matrix)):
        neighborhood_size = sum(powered_matrix[i])
        if neighborhood_size > max_neighborhood_size:
            max_neighborhood_size = neighborhood_size
            max_neighborhood_vertices = [i + 1]
        elif neighborhood_size == max_neighborhood_size:
            max_neighborhood_vertices.append(i + 1)

    # ‘орматирование вывода матрицы
    matrix_output = "\n".join([" ".join(map(str, row)) for row in reachability_matrix])
    vertices_output = ", ".join(map(str, max_neighborhood_vertices))

    return f"ћатрица ограниченных достижимостей k-го шага:\n"+{matrix_output}+"\n\nЌаибольшее окружение имеют вершины: "+{vertices_output}