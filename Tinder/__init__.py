import flask
import sqlalchemy
import os
import pdb

from Tinder import constants
from Tinder.modules import example, auth

app = flask.Flask(__name__)
app.debug = False

# Get app config, if we're not testing on travis.
if 'TRAVIS' not in os.environ:
  app.config.from_object('Tinder.config')

# Maximum file upload size, in bytes.
app.config['MAX_CONTENT_LENGTH'] = constants.MAX_CONTENT_LENGTH

# Load blueprint modules
app.register_blueprint(auth.blueprint)

# After initialization, import the routes.
from Tinder import routes
