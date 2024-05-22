import unittest
from find_an_Euler_cycle_or_chain import find_eulerian_path_or_cycle

class TestEulerianPathCycle(unittest.TestCase):
    
    # Проверка наличия эйлерового пути в графе
    def test_eulerian_path(self):
        adjacency_matrix1 = [[0, 1, 0], [1, 0, 1], [0, 1, 0]]
        self.assertEqual(find_eulerian_path_or_cycle(adjacency_matrix1), 'Эйлеров путь: 1  -> 2  -> 3 ')
        
    def test_eulerian_path_single_cycle(self):
        adjacency_matrix3 = [[0, 1, 1, 0], [1, 0, 1, 1], [1, 1, 0, 1], [0, 1, 1, 0]]
        self.assertEqual(find_eulerian_path_or_cycle(adjacency_matrix3), 'Эйлеров путь: 2  -> 1  -> 3  -> 2  -> 4  -> 3 ')

    def test_eulerian_path_double_cycle(self):
        adjacency_matrix4 = [[0, 1, 1, 0, 0], [1, 0, 1, 1, 0], [1, 1, 0, 1, 1], [0, 1, 1, 0, 1], [0, 0, 1, 1, 0]]
        self.assertEqual(find_eulerian_path_or_cycle(adjacency_matrix4), 'Эйлеров путь: 2  -> 1  -> 3  -> 2  -> 4  -> 3  -> 5  -> 4 ')

    def test_eulerian_path_linear_path(self):
        adjacency_matrix5 = [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]
        self.assertEqual(find_eulerian_path_or_cycle(adjacency_matrix5), 'Эйлеров путь: 1  -> 2  -> 3  -> 4 ')

    def test_eulerian_path_complex_path(self):
        adjacency_matrix6 = [[0, 1, 1, 0, 0], [1, 0, 1, 0, 1], [1, 1, 0, 1, 1], [0, 0, 1, 0, 1], [0, 1, 1, 1, 0]]
        self.assertEqual(find_eulerian_path_or_cycle(adjacency_matrix6), 'Эйлеров путь: 2  -> 1  -> 3  -> 2  -> 5  -> 3  -> 4  -> 5 ')

    
    # Проверка наличия эйлерового цикла в графе
    def test_eulerian_cycle(self):
        adjacency_matrix2 = [[0, 1, 1], [1, 0, 1], [1, 1, 0]]
        self.assertEqual(find_eulerian_path_or_cycle(adjacency_matrix2), 'Эйлеров цикл: 1  -> 2  -> 3  -> 1 ')
    
    # Проверка наличия эйлерового цикла с дубликатами рёбер
    def test_eulerian_cycle_with_duplicates(self):
        adjacency_matrix3 = [[0, 1, 1], [1, 0, 1], [1, 1, 0]]
        self.assertEqual(find_eulerian_path_or_cycle(adjacency_matrix3), 'Эйлеров цикл: 1  -> 2  -> 3  -> 1 ')
     
    # Проверка графа с одной вершиной
    def test_single_node(self):
        adjacency_matrix4 = [[0]]
        self.assertEqual(find_eulerian_path_or_cycle(adjacency_matrix4), 'Эйлеров цикл: 1 ')
        
    def test_eulerian_cycle_of_size_4(self):
        adjacency_matrix5 = [[0, 1, 1, 0], [1, 0, 0, 1], [1, 0, 0, 1], [0, 1, 1, 0]]
        self.assertEqual(find_eulerian_path_or_cycle(adjacency_matrix5), 'Эйлеров цикл: 1  -> 2  -> 4  -> 3  -> 1 ')

    def test_eulerian_cycle_of_size_5(self):
        adjacency_matrix6 = [[0, 1, 1, 0, 0], [1, 0, 1, 0, 0], [1, 1, 0, 1, 1], [0, 0, 1, 0, 1], [0, 0, 1, 1, 0]]
        self.assertEqual(find_eulerian_path_or_cycle(adjacency_matrix6), 'Эйлеров цикл: 1  -> 2  -> 3  -> 4  -> 5  -> 3  -> 1 ')

    
    # Проверка невалидного графа без эйлерового пути или цикла
    def test_invalid_graph(self):
        adjacency_matrix5 = [[0, 0, 0], [1, 0, 1], [0, 0, 0]]
        self.assertEqual(find_eulerian_path_or_cycle(adjacency_matrix5), 'Граф не имеет эйлерова пути или цикла')

    # Проверка графа с ненулевыми значениями на диагонали
    def test_diagonal_zeroes(self):
        adjacency_matrix6 = [[0, 1, 1], [1, 0, 0], [0, 0, 0]]
        self.assertEqual(find_eulerian_path_or_cycle(adjacency_matrix6), 'Граф не имеет эйлерова пути или цикла')
            
    # Проверка графа без рёбер
    def test_no_edges(self):
        adjacency_matrix7 = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
        self.assertEqual(find_eulerian_path_or_cycle(adjacency_matrix7), 'Граф не имеет эйлерова пути или цикла')

    # Проверка графа с отдельными компонентами связности
    def test_disconnected_graph(self):
        adjacency_matrix8 = [[0, 1, 0], [1, 0, 0], [0, 0, 0]]
        self.assertEqual(find_eulerian_path_or_cycle(adjacency_matrix8), 'Граф не имеет эйлерова пути или цикла')
     
    def test_graph_with_isolated_vertex_no_eulerian_path_or_cycle(self):
       adjacency_matrix9 = [[0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 0], [1, 1, 0, 0]]
       self.assertEqual(find_eulerian_path_or_cycle(adjacency_matrix9), 'Граф не имеет эйлерова пути или цикла')


if __name__ == '__main__':
    unittest.main()

