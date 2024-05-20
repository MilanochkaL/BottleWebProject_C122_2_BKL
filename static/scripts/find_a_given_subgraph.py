
import itertools 

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
            found_subgraphs.append([v + 1 for v in vertices])

    return f"Найденные подграфы: {found_subgraphs}"


