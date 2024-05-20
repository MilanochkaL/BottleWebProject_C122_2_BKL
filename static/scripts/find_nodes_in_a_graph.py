def find_max_neighborhood(adjacency_matrix, k):
    #������� ������� � ���������� ���������� � ������ k ������.
    #��������� ��������������� ������� ������� ��������� � ������� ������������ �������������.
    def matrix_multiply(a, b):
        #��������� ������������ ���� ������.
        result = [[0 for _ in range(len(b[0]))] for _ in range(len(a))]
        for i in range(len(a)):
            for j in range(len(b[0])):
                for l in range(len(b)):
                    result[i][j] += a[i][l] * b[l][j]
        return result

    def matrix_power(matrix, k):
        #��������� k-� ������� ������� ���������.
        result = matrix.copy()
        for _ in range(k - 1):
            result = matrix_multiply(result, matrix)
        return result

    def compute_reachability_matrix(matrix):
        #��������� ������� ������������ �������������.
        reachability = matrix.copy()
        for i in range(len(matrix)):
            for j in range(len(matrix)):
                if i != j and reachability[i][j] == 0:
                    reachability[i][j] = float('inf')
        return reachability

    # ���������� k-� ������� ������� ���������
    powered_matrix = matrix_power(adjacency_matrix, k)

    # ���������� ������� ������������ ������������� k-�� ����
    reachability_matrix = compute_reachability_matrix(powered_matrix)

    # ����� ������ � ���������� ����������
    max_neighborhood_size = 0
    max_neighborhood_vertices = []

    for i in range(len(adjacency_matrix)):
        neighborhood_size = sum(powered_matrix[i])
        if neighborhood_size > max_neighborhood_size:
            max_neighborhood_size = neighborhood_size
            max_neighborhood_vertices = [i + 1]
        elif neighborhood_size == max_neighborhood_size:
            max_neighborhood_vertices.append(i + 1)

    return max_neighborhood_vertices, reachability_matrix