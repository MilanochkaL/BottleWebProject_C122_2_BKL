

import itertools # Для генерации всех возможных комбинаций вершин
import datetime # Для получения текущего времени выполнения
from distutils.file_util import write_file
import json # Для работы с JSON-файлами

def is_isomorphic(g1, g2):
    n1 = len(g1)  # Количество вершин в первом графе
    n2 = len(g2)  # Количество вершин во втором графе

    if n1 < n2:   # Если первый граф меньше второго, они не могут быть изоморфными
        return False

    def degree(graph, vertex):
        return sum(graph[vertex])  # Возвращает сумму элементов в строке матрицы смежности

    def sort_vertices(graph):
        return sorted(range(len(graph)), key=lambda v: (degree(graph, v), graph[v])) # Сортирует вершины графа по степени и номеру вершины

    vertices1 = sort_vertices(g1)  # Сортируем вершины первого графа
    vertices2 = sort_vertices(g2)  # Сортируем вершины второго графа

    # Расширяет отображение вершин первого графа на вершины второго графа
    # mapping (dict): Текущее отображение вершин.
    # v1 (int): Номер вершины первого графа.
    # v2 (int): Номер вершины второго графа.
    def extend_mapping(mapping, v1, v2):
        new_mapping = mapping.copy()  # Создаем копию текущего отображения
        new_mapping[v1] = v2         # Добавляем новое отображение
        return new_mapping

    def is_isomorphic_rec(mapping):
        if len(mapping) == n1:  # Если все вершины отображены, графы изоморфны
            return True

        v1 = next((v for v in range(n1) if v not in mapping), None)
        if v1 is None:  # Если все вершины отображены, графы изоморфны
            return True

        for v2 in range(n2):
            if v2 not in mapping.values(): # Если вершина второго графа еще не отображена
                new_mapping = extend_mapping(mapping, v1, v2)
                if all(g1[v1][w1] == g2[v2][new_mapping[w1]] for w1 in mapping):
                    if is_isomorphic_rec(new_mapping):
                        return True

        return False

    return is_isomorphic_rec({}) # Начинаем рекурсивную проверку с пустого отображения


def find_subgraphs(graph, subgraph):
    n = len(graph)
    m = len(subgraph)
    found_subgraphs = []

    for vertices in itertools.combinations(range(n), m):
        # Создаем подграф, состоящий из выбранных вершин
        sub_graph = [[graph[i][j] for j in vertices] for i in vertices]

        if is_isomorphic(sub_graph, subgraph):
            # Если подграф изоморфен заданному, добавляем номера вершин с 1
            found_vertices = [v + 1 for v in vertices]
            found_subgraphs.append(found_vertices)

    if found_subgraphs:
        output = "Найденные подграфы:"
        for idx, vertices in enumerate(found_subgraphs, 1):
            output += f"\nПодграф {idx}: {vertices}"
    else:
        output = "Подграфы не найдены."

    # Запись результатов в файл JSON
    write_file_subgraphs(graph, subgraph, found_subgraphs)

    return output

def write_file_subgraphs(graph, subgraph, found_subgraphs):
    # Создаем словарь с результатами
    result_data = {
        "Execution Time": datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
        "Original Graph": graph,
        "Subgraph": subgraph,
        "Found Subgraphs": found_subgraphs
    }

    try:
        # Пытаемся прочитать существующие результаты из файла
        file_path = r'C:\Users\Aleksandra\OneDrive\Документы\3к\практика\BottleWebProject_C122_2_BKL\Rezult_subgraphs.json'
        with open(file_path, 'r', encoding='utf-8') as f:
            results = json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        # Если файл не найден или не удалось прочитать данные, создаем новый словарь
        results = {}

    # Если в существующих результатах нет ключа "all_results", создаем его
    if "all_results" not in results:
        results["all_results"] = []
        
    # Добавляем новые результаты в список
    results["all_results"].append(result_data)

    with open(file_path, 'w', encoding='utf-8') as file:
        json.dump(results, file, ensure_ascii=False, indent=4)

