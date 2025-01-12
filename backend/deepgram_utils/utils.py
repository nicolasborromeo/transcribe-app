import os
import json
from ffmpeg import FFmpeg

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
    summarize="v2",
    diarize=True
)

def get_transcript(payload, options=prerecorded_options):
    """
    Returns a JSON of Deepgram's transcription given an audio file.
    """
    response = deepgram.listen.rest.v("1").transcribe_file(payload, options)
    return response
# if __name__ == "__main__":
#     get_transcript()

def convert_to_mp3(file):
    """
    converts .mp4 files to .mp3 using ffmpeg
    """
    print('FILE IN CONVERT:',file)
    ffmpeg = (
        FFmpeg()
        .option("y")
        .input(file.filename)
        .output("converted.mp3")
    )
    ffmpeg.execute()
