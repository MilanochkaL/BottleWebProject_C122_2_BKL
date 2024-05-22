

import itertools 
import datetime
from distutils.file_util import write_file
import json

def is_isomorphic(g1, g2):
    n1 = len(g1)
    n2 = len(g2)

    if n1 < n2:
        return False

    def degree(graph, vertex):
        return sum(graph[vertex])

    def sort_vertices(graph):
        return sorted(range(len(graph)), key=lambda v: (degree(graph, v), graph[v]))

    vertices1 = sort_vertices(g1)
    vertices2 = sort_vertices(g2)

    def extend_mapping(mapping, v1, v2):
        new_mapping = mapping.copy()
        new_mapping[v1] = v2
        return new_mapping

    def is_isomorphic_rec(mapping):
        if len(mapping) == n1:
            return True

        v1 = next((v for v in range(n1) if v not in mapping), None)
        if v1 is None:
            return True

        for v2 in range(n2):
            if v2 not in mapping.values():
                new_mapping = extend_mapping(mapping, v1, v2)
                if all(g1[v1][w1] == g2[v2][new_mapping[w1]] for w1 in mapping):
                    if is_isomorphic_rec(new_mapping):
                        return True

        return False

    return is_isomorphic_rec({})


def find_subgraphs(graph, subgraph):
    n = len(graph)
    m = len(subgraph)
    found_subgraphs = []

    for vertices in itertools.combinations(range(n), m):
        sub_graph = [[graph[i][j] for j in vertices] for i in vertices]

        if is_isomorphic(sub_graph, subgraph):
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
    result_data = {
        "Execution Time": datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
        "Original Graph": graph,
        "Subgraph": subgraph,
        "Found Subgraphs": found_subgraphs
    }

    try:
        file_path = r'C:\Users\Aleksandra\OneDrive\Документы\3к\практика\BottleWebProject_C122_2_BKL\Rezult_subgraphs.json'
        with open(file_path, 'r', encoding='utf-8') as f:
            results = json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        results = {}

    if "all_results" not in results:
        results["all_results"] = []

    results["all_results"].append(result_data)

    with open(file_path, 'w', encoding='utf-8') as file:
        json.dump(results, file, ensure_ascii=False, indent=4)

