import flask
import json

from Tinder import app

@app.route('/')
def home():
  """Returns the home page."""
  string = open('Tinder/static/data/data.json').read()
  json_data = json.loads(string)
  return flask.render_template('tinder.html', json_data=json_data)

@app.route('/data')
def get_data():
    """Returns json card data."""
    string = open('Tinder/static/data/data.json').read()
    return flask.jsonify(json.loads(string))
