import unittest
from find_nodes_in_a_graph import find_max_neighborhood

class Test_nodes_valid_input_matrix(unittest.TestCase):
    def setUp(self):
        self.adjacency_matrices = [
            [[0, 1, 0], [1, 0, 1], [0, 1, 0]],
            [[0, 0, 1, 0], [0, 0, 0, 1], [1, 0, 0, 0], [0, 1, 0, 0]],
            [[0, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 1, 0, 1, 0], [0, 0, 1, 0, 1], [0, 0, 0, 1, 0]],
            [[0, 0, 0, 1], [0, 0, 0, 0], [0, 0, 0, 1], [1, 0, 1, 0]],
            [[0, 1, 0, 0, 0, 1], [1, 0, 0, 0, 1, 0], [0, 0, 0, 1, 0, 0], [0, 0, 1, 0, 0, 1], [0, 1, 0, 0, 0, 1], [1, 0, 0, 1, 1, 0]]
        ]

        self.expected_outputs = [
            "Матрица ограниченных достижимостей k-го шага:\n1 0 1\n0 1 0\n1 0 1\n\nНаибольшее окружение имеют вершины: 1, 3",
            "Матрица ограниченных достижимостей k-го шага:\n1 0 1 0\n0 1 0 1\n1 0 1 0\n0 1 0 0\n\nНаибольшее окружение имеют вершины: 1, 2",
            "Матрица ограниченных достижимостей k-го шага:\n1 0 1 0 0\n0 1 0 1 0\n1 0 1 0 1\n0 1 0 0 0\n0 0 1 0 0\n\nНаибольшее окружение имеют вершины: 2, 4",
            "Матрица ограниченных достижимостей k-го шага:\n1 0 0 1\n0 1 0 0\n0 0 0 1\n1 0 1 0\n\nНаибольшее окружение имеют вершины: 1, 4",
            "Матрица ограниченных достижимостей k-го шага:\n1 0 1 0 0 1\n0 1 0 0 1 0\n1 0 0 1 0 1\n0 0 1 0 0 1\n0 1 0 0 0 1\n1 0 1 1 1 0\n\nНаибольшее окружение имеют вершины: 3, 6"
        ]

    def test_valid_input(self):
        # Тест на корректный ввод

        for adjacency_matrix, expected_output in zip(self.adjacency_matrices, self.expected_outputs):
            with self.subTest(adjacency_matrix=adjacency_matrix):
                result = find_max_neighborhood(adjacency_matrix, 2)
                self.assertEqual(result, expected_output)

    