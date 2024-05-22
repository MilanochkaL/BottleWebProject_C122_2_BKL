import unittest
from find_nodes_in_a_graph import find_max_neighborhood

class Test_test_nodes_value_k(unittest.TestCase):
    def setUp(self):
        # Инициализаци¤ тестовых данных
        self.adjacency_matrix = [
            [0, 1, 0],
            [1, 0, 1],
            [0, 1, 0]
        ]

    def test_k_empty(self):
        #Тест для проверки, что k не пустое
        test_cases = ["", 0]

        for k in test_cases:
            with self.subTest(k=k):
                result = find_max_neighborhood(self.adjacency_matrix, k)
                self.assertEqual(result, "Поле для ввода 'k' не должно быть пустым")

    def test_non_integer_k(self):
        # Тест на случай, когда k не ¤вл¤етс¤ целым числом
        test_cases = ["0.3", "0.1", "2.2","0.001","1.23"]
        for k in test_cases:
            with self.subTest(k=k):
                result = find_max_neighborhood(self.adjacency_matrix, k)
                self.assertEqual(result, "'k' должно быть целым числом")

    def test_negative_k(self):
        # Тест на случай, когда k отрицательное
        test_cases = ["-1", "-2.3", "-0.1","-4","-1.2"]
        for k in test_cases:
            with self.subTest(k=k):
                result = find_max_neighborhood(self.adjacency_matrix, k)
                self.assertEqual(result, "Значение 'k' должно быть положительным целым числом")

    def test_k_greater_than_matrix_size(self):
        # Тест на случай, когда k больше размера матрицы
        test_cases = ["4", "5", "6","7","8"]
        for k in test_cases:
            with self.subTest(k=k):
                result = find_max_neighborhood(self.adjacency_matrix, k)
                self.assertEqual(result, "Значение 'k' не должно превышать размерность матрицы")
