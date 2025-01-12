from flask import Blueprint, jsonify, request
from deepgram_utils import utils
from deepgram import FileSource
import ffmpeg

transcribe_routes = Blueprint('transcribe', __name__)

@transcribe_routes.route('/', methods=['GET', 'POST'])
def transcribe():
    audiofile = request.files['audio'] #get the audio file = FileSource
    buffer = audiofile.read() # read the audiofile directly from FileSource
    payload: FileSource = {
        'buffer': buffer
    }
    response = utils.get_transcript(payload)
    return jsonify(response)
