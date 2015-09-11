from flask import Blueprint
blueprint = Blueprint('example', __name__, template_folder='templates')

import Tinder.modules.example.routes
