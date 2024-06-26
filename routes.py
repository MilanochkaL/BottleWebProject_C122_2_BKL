"""
Routes and views for the bottle application.
"""

from bottle import route, view
from datetime import datetime

@route('/')
@route('/home')
@view('index')
def home():
    """Renders the home page."""
    return dict(
        year=datetime.now().year
    )

@route('/contact')
@view('about')
def contact():
    """Renders the contact page."""
    return dict(
        title='Contact',
        message='Your contact page.',
        year=datetime.now().year
    )

@route('/subgraph')
@view('find_a_given_subgraph')
def about():
    """Renders the about page."""
    return dict(
        title='Subgraph',
        message='Your application description page.',
        year=datetime.now().year
    )

@route('/Euler_cycle')
@view('find_an_Euler_cycle_or_chain')
def about():
    """Renders the about page."""
    return dict(
        title='Subgraph',
        message='Your application description page.',
        year=datetime.now().year
    )

@route('/find_nodes')
@view('find_nodes_in_a_graph')
def about():
    """Renders the about page."""
    return dict(
        title='Subgraph',
        message='Your application description page.',
        year=datetime.now().year
    )
