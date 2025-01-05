from flask import Blueprint, jsonify

transcribe_routes = Blueprint('transcribe', __name__)

@transcribe_routes.route('/', methods=['GET', 'POST'])
def transcribe():
    response = {
        'message': 'Response'
    }
    return jsonify(response)
