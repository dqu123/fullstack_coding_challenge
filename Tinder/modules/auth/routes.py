import flask

from Tinder import constants
from Tinder.modules.auth import blueprint

@blueprint.route('/login')
def login():
    """Display login page."""
    return flask.render_template('login.html')

@blueprint.route('/login/submit', methods=['POST'])
def login_submit():
    """Handle authentication."""
    # TODO: Add login logic.
    flask.flash('Incorrect username or password. Please try again!')
    return flask.redirect(flask.url_for('auth.login'))
