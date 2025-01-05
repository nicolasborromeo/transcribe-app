from flask import Flask, jsonify
from flask_cors import CORS
# from flask_wtf.csrf import generate_csrf


from api.transcribe_routes import transcribe_routes

app = Flask(__name__, static_folder='../frontend/dist', static_url_path='/')
CORS(app)

app.register_blueprint(transcribe_routes, url_prefix='/api/transcribe')

# @app.after_request
# def inject_csrf_token(response):
#     response.set_cookie(
#         'csrf_token',
#         generate_csrf(),
#         secure=True if os.environ.get('FLASK_ENV') == 'production' else False,
#         samesite='Strict' if os.environ.get(
#             'FLASK_ENV') == 'production' else None,
#         httponly=True)
#     return response

# @app.route("/api/csrf/restore", methods=["GET"])
# def restore_csrf():
#     if os.environ.get("FLASK_ENV") != "production":
#         csrf_token = generate_csrf()  # Generate a new CSRF Token
#         response = make_response(jsonify({"XSRF-Token": csrf_token}))
#         #Set the CSRF Token as a cookie
#         response.set_cookie(
#             "XSRF-TOKEN",
#             csrf_token,
#             samesite="Strict" if os.environ.get("FLASK_ENV") == "production" else None
#         )
#         return response


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    """
    This route will direct to the public directory in our
    react builds in the production environment for favicon
    or index.html requests
    """
    if path == 'favicon.ico':
        return app.send_from_directory('public', 'favicon.ico')
    return app.send_static_file('index.html')


