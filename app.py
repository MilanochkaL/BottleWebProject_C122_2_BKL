"""
This script runs the application using a development server.
"""

import bottle
from bottle import Bottle, run, static_file, request, response, jinja2_template as template
import json
import os
import sys
import routes
from static.scripts import find_an_Euler_cycle_or_chain as fe
from static.scripts import find_a_given_subgraph as fs

if '--debug' in sys.argv[1:] or 'SERVER_DEBUG' in os.environ:
    bottle.debug(True)

def wsgi_app():
    return bottle.default_app()

if __name__ == '__main__':
    PROJECT_ROOT = os.path.abspath(os.path.dirname(__file__))
    STATIC_ROOT = os.path.join(PROJECT_ROOT, 'static').replace('\\', '/')
    HOST = os.environ.get('SERVER_HOST', 'localhost')
    try:
        PORT = int(os.environ.get('SERVER_PORT', '5555'))
    except ValueError:
        PORT = 8080
    
    @bottle.post('/Euler_cycle')
    def euler_cycle():
        adjacency_matrix = request.json.get('matrix')
        return fe.find_eulerian_path_or_cycle(adjacency_matrix)
    
    @bottle.post('/solve_isomorphic_subgraphs')
    def subgraphs():
        matrix1 = request.json.get('matrix1')
        matrix2 = request.json.get('matrix2')

        # Выполните поиск изоморфных подграфов и верните результат
        return fs.find_subgraphs(matrix1, matrix2)

    @bottle.route('/static/<filepath:path>')
    def server_static(filepath):
        return bottle.static_file(filepath, root=STATIC_ROOT)
    
    

    bottle.run(server='wsgiref', host=HOST, port=PORT)
