from bottle import route, run, template, static_file

@route('/static/<filename:path>')
def send_static(filename):
    return static_file(filename, root='static/')

@route('/')
def index():
    return template('index')

@route('/find_nodes_in_a_graph')
def find_nodes_in_a_graph():
    with open('static/data.txt', 'r') as file:
        data = file.read()
    return template('find_nodes_in_a_graph', data=data)

run(host='localhost', port=8080)