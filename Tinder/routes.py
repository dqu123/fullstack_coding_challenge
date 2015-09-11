import flask
import json

from Tinder import app

@app.route('/')
def home():
  """Returns the home page."""
  return flask.render_template('tinder.html')

@app.route('/data')
def get_data():
    """Returns json card data."""
    string = open('Tinder/static/data/data.json').read()
    return flask.jsonify(json.loads(string))
