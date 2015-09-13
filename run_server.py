# Note: this file is only used for testing locally. The production environment
# uses wsgi to start up, and bypasses this file. So we are free to have debug
# settings enabled.
from Tinder import app, config

port = getattr(config, 'PORT', 80)
app.run(debug=True, host='0.0.0.0', port=port)
