import unittest
from find_nodes_in_a_graph import find_max_neighborhood

class Test_nodes_isolated_matrix(unittest.TestCase):
    def test_isolated_vertices(self):
        # Тест на случай, когда все вершины изолированы
        isolated_matrix = [[0]], 
        [[0,0],[0,0]],
        [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
        [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
        [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
        for isolated_matrix in isolated_matrix:
            with self.subTest(isolated_matrix=isolated_matrix):
                result = find_max_neighborhood(isolated_matrix, 1)
                self.assertEqual(result, "Все вершины изолированы")