from flask import Flask
from flask_cors import CORS
from api.transcribe_routes import transcribe_routes

app = Flask(__name__, static_folder='../frontend/dist', static_url_path='/')

CORS(app)

app.register_blueprint(transcribe_routes, url_prefix='/api/transcribe')


@app.route('/', defaults={'path': ''}) #route for root page e.g. transcriber.com. if no path defined the path variable is assigned as an empty string ''
@app.route('/<path:path>') #catch all route storing anything after '/' into the variable path
def react_root(path):
    """
    This route will serve the index.html which is the root of our React app via a catch all route
    and, if matching path, the favicon.
    """
    if path == 'favicon.ico':
        return app.send_from_directory('public', 'favicon.ico')
    return app.send_static_file('index.html')
