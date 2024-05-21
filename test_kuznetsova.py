import unittest
import datetime
from find_nodes_in_a_graph import find_max_neighborhood

class TestFindMaxNeighborhood(unittest.TestCase):
    def setUp(self):
        # Инициализация тестовых данных
        self.adjacency_matrix = [
            [0, 1, 0],
            [1, 0, 1],
            [0, 1, 0]
        ]

    def test_empty_k(self):
        # Тест на случай, когда k пустое
        result = find_max_neighborhood(self.adjacency_matrix, "")
        self.assertEqual(result, "Поле для ввода 'k' не должно быть пустым")

    def test_k_equal_0(self):
        # Тест на случай, когда k равно 0
        result = find_max_neighborhood(self.adjacency_matrix, 0)
        self.assertEqual(result, "Поле для ввода 'k' не должно быть пустым")

    def test_non_integer_k(self):
        # Тест на случай, когда k не является целым числом
        result = find_max_neighborhood(self.adjacency_matrix, "0.3")
        self.assertEqual(result, "'k' должно быть целым числом")

    def test_negative_k(self):
        # Тест на случай, когда k отрицательное
        result = find_max_neighborhood(self.adjacency_matrix, -5)
        self.assertEqual(result, "Значение 'k' должно быть положительным целым числом")

    def test_k_greater_than_matrix_size(self):
        # Тест на случай, когда k больше размера матрицы
        result = find_max_neighborhood(self.adjacency_matrix, 4)
        self.assertEqual(result, "Значение 'k' не должно превышать размерность матрицы")

    def test_isolated_vertices(self):
        # Тест на случай, когда все вершины изолированы
        isolated_matrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
        result = find_max_neighborhood(isolated_matrix, 2)
        self.assertEqual(result, "Все вершины изолированы")

    def test_isolated_vertices2(self):
        # Тест на случай, когда все вершины изолированы
        isolated_matrix2 = [[0]]
        result = find_max_neighborhood(isolated_matrix2, 1)
        self.assertEqual(result, "Все вершины изолированы")

    def test_valid_input(self):
        # Тест на корректный ввод
        result = find_max_neighborhood(self.adjacency_matrix, 2)
        expected_output = "Матрица ограниченных достижимостей k-го шага:\n1 0 1\n0 1 0\n1 0 1\n\nНаибольшее окружение имеют вершины: 1, 3"
        self.assertEqual(result, expected_output)

    