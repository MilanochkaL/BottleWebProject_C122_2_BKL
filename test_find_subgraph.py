import unittest
from unittest.mock import patch
from io import StringIO
import json

from find_a_given_subgraph import is_isomorphic
from find_a_given_subgraph import find_subgraphs
from find_a_given_subgraph import write_file_subgraphs

class TestIsIsomorphic(unittest.TestCase):             

    # Тест на правильную работу функции нахождения всех подграфов
    def test_find_subgraphs_success(self):
        with patch('sys.stdout', new=StringIO()):
            result = find_subgraphs([[0, 1, 0, 1], [1, 0, 1, 0], [0, 1, 0, 1], [1, 0, 1, 0]],
                                    [[0, 1, 0],[1, 0, 1],[0, 1, 0]])
        self.assertIn("Найденные подграфы:", result)
        self.assertIn("[1, 2, 3]", result)
        self.assertIn("[1, 2, 4]", result)
        self.assertIn("[1, 3, 4]", result)
        self.assertIn("[2, 3, 4]", result)

    # Тест на правильную работу функции нахождения всех подграфов при отсутствии подграфов
    def test_find_subgraphs_not_found(self):
        with patch('sys.stdout', new=StringIO()):
            result = find_subgraphs([[0, 1, 0, 1], [1, 0, 1, 0], [0, 1, 0, 1], [1, 0, 1, 0]], 
                                    [[0, 1, 1], [1, 0, 1], [1, 1, 0]])
        self.assertIn("Подграфы не найдены.", result)
        

    # Тест на правильную работу функции записи результатов в файл
    def test_write_file_subgraphs(self):
        
        g1 = [[0, 1, 0, 1], [1, 0, 1, 0], [0, 1, 0, 1], [1, 0, 1, 0]]
        g2 = [[0, 1, 0],[1, 0, 1],[0, 1, 0]]

        with patch('builtins.open', unittest.mock.mock_open()) as mock_file:
            write_file_subgraphs(g1, g2, find_subgraphs(g1, g2))
            mock_file.assert_called_with(r'C:\Users\Aleksandra\OneDrive\Документы\3к\практика\BottleWebProject_C122_2_BKL\Rezult_subgraphs.json', 'w', encoding='utf-8')
            mock_file().write.assert_called()
            
            
    # Тест на правильную работу функции проверки изоморфности графов при идентичных графах
    def test_is_isomorphic_identical_graphs(self):
        g1 = [[0, 1, 1], [1, 0, 1], [1, 1, 0]]
        g2 = [[0, 1, 1], [1, 0, 1], [1, 1, 0]]
        
        self.assertTrue(is_isomorphic(g1, g2))

    # Тест на правильную работу функции проверки изоморфности графов при разных графах
    def test_is_isomorphic_different_graphs_sizes(self):
        test_cases = [
            ([[0, 1, 0], [1, 0, 1], [0, 1, 0]], [[0, 1, 0], [1, 0, 0], [0, 1, 0]]), 
            ([[0, 1], [1, 0]], [[0, 1, 1], [1, 0, 0], [1, 0, 0]]), 
            ([[0, 1, 1], [1, 0, 0], [1, 0, 0]], [[0, 1, 0], [1, 0, 1], [0, 1, 0]]), 
            ([[0, 1, 1, 0], [1, 0, 0, 1], [1, 0, 0, 1], [0, 1, 1, 0]], [[0, 0, 1], [0, 0, 1], [1, 1, 0]]), 
            ([[0]], [[0, 1], [1, 0]])  
        ]

        for i, (graph1, graph2) in enumerate(test_cases):
            with self.subTest(test_case=i):
                self.assertFalse(is_isomorphic(graph1, graph2))



if __name__ == '__main__':
    unittest.main()