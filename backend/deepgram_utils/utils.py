import os
import json

from deepgram import (DeepgramClient, PrerecordedOptions, FileSource)
from dotenv import load_dotenv

load_dotenv()

DG_API_KEY = os.getenv("DG_API_KEY")

if not DG_API_KEY:
    raise ValueError("Please set your DG_API_KEY")

deepgram = DeepgramClient(DG_API_KEY) #listen, read, speak


prerecorded_options = PrerecordedOptions(
    model="nova-2",
    smart_format=True, #makes paragprahs and punctuate both True by default
    sentiment=True,
    intents=True,
    summarize="v2"
)

def get_transcript(payload, options=prerecorded_options):
    """
    Returns a JSON of Deepgram's transcription given an audio file.
    """
    response = deepgram.listen.rest.v("1").transcribe_file(payload, options)
    return json.loads(response) #parse the json string into a dictionary

# if __name__ == "__main__":
#     get_transcript()
