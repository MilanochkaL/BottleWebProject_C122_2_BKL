import datetime
from distutils.file_util import write_file
import json
import codecs


def find_max_neighborhood(adjacency_matrix, k):  # Определяем функцию find_max_neighborhood с параметрами adjacency_matrix и k
    if not k:
        return "Поле для ввода 'k' не должно быть пустым"
    try:
        k = int(k)
    except ValueError:
        return "'k' должно быть целым числом"

    if k <= 0:
        return "Значение 'k' должно быть положительным целым числом"

    if k > len(adjacency_matrix):
        return "Значение 'k' не должно превышать размерность матрицы"

    if all(all(element == 0 for element in row) for row in adjacency_matrix):
        return "Все вершины изолированы"

    def matrix_multiply(a, b):  # Функция для умножения матриц
        result = [[0 for _ in range(len(b[0]))] for _ in range(len(a))]  # Инициализируем результат нулями
        for i in range(len(a)):
            for j in range(len(b[0])):
                for l in range(len(b)):
                    result[i][j] += a[i][l] * b[l][j]  # Умножаем и складываем элементы
        return result

    def matrix_power(matrix, k):  # Функция для вычисления степени матрицы
        result = matrix.copy()  # Создаем копию входной матрицы
        for _ in range(k - 1):
            result = matrix_multiply(result, matrix)  # Умножаем матрицы k-1 раз
        return result

    def compute_reachability_matrix(matrix, k):  # Функция для вычисления матрицы ограниченных достижимостей
        n = len(matrix)
        reachability = [[0 if i != j and matrix[i][j] == 0 else 1 for j in range(n)] for i in range(n)]  # Инициализация матрицы достижимостей
        for _ in range(2, k + 1):
            reachability = matrix_multiply(reachability, matrix)  # Вычисление достижимости
            for i in range(n):
                for j in range(n):
                    if reachability[i][j] > 0:  # Если есть путь, то устанавливаем 1
                        reachability[i][j] = 1
        return reachability

    def write_file_nodes(result):
        result_data = {"Execution Time": datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S'), "Original Matrix": adjacency_matrix, "Result": result}
        try:
            # Открываем файл для чтения и декодируем JSON
            with codecs.open('C:\\Users\\Надежда\\Desktop\\УП_02.02\\BottleWebProject_C122_2_BKL\\Rezult_nodes.json', 'r', encoding='utf-8') as f: 
                results = json.load(f)
        except (FileNotFoundError, json.JSONDecodeError):
            results = {}  # Обработка исключений при чтении файла

        if "all_results" not in results:
            results["all_results"] = []  # Создаем список результатов, если его нет

        matrix_exists = False  # Устанавливаем флаг matrix_exists в False
        for stored_result in results["all_results"]:  # Проходимся по сохраненным результатам
            if stored_result["Original Matrix"] == adjacency_matrix:  # Проверяем, совпадает ли текущая матрица с оригинальной
                stored_result["Execution Time"] = result_data["Execution Time"]  # Обновляем время выполнения в сохраненных результатах
                matrix_exists = True  # Устанавливаем флаг matrix_exists в True
                break  # Выходим из цикла

        if not matrix_exists:
            results["all_results"].append(result_data)  # Добавляем результат в список
         # Открываем файл для записи
        with codecs.open('C:\\Users\\Надежда\\Desktop\\УП_02.02\\BottleWebProject_C122_2_BKL\\Rezult_nodes.json', 'w', encoding='utf-8') as file: 
            json.dump(results, file, ensure_ascii=False, indent=4)  # Записываем результаты в файл

    powered_matrix = matrix_power(adjacency_matrix, k)  # Вычисляем k-ю степень матрицы смежности

    reachability_matrix = compute_reachability_matrix(powered_matrix, k)  # Вычисляем матрицу ограниченных достижимостей

    max_neighborhood_size = 0 #Инициализация переменной max_neighborhood_size со значением 0, которая будет содержать размер максимального окружения.
    max_neighborhood_vertices = [] #Создание пустого списка max_neighborhood_vertices, который будет содержать вершины с максимальным окружением.

    for i in range(len(adjacency_matrix)):
        neighborhood_size = sum(reachability_matrix[i])  # Считаем количество вершин, достижимых через k шагов
        if neighborhood_size > max_neighborhood_size:
            max_neighborhood_size = neighborhood_size
            max_neighborhood_vertices = [i + 1]
        elif neighborhood_size == max_neighborhood_size:
            max_neighborhood_vertices.append(i + 1)

    matrix_output = "\n".join([" ".join(map(str, row)) for row in reachability_matrix])  # Форматируем вывод матрицы
    vertices_output = ", ".join(map(str, max_neighborhood_vertices))  # Форматируем вывод вершин

    write_file_nodes(f"Матрица ограниченных достижимостей k-го шага:\n{matrix_output} Наибольшее окружение имеют вершины: {vertices_output}") #Запись в файл ответа
     
    return f"Матрица ограниченных достижимостей k-го шага:\n{matrix_output}\n\nНаибольшее окружение имеют вершины: {vertices_output}"  # Возвращаем результат