import os
import logging
from deepgram.utils import verboselogs
from deepgram import (DeepgramClient, PrerecordedOptions, FileSource)
from dotenv import load_dotenv

load_dotenv()

DG_API_KEY = os.getenv("DG_API_KEY")

AUDIO_URL = {
    "url": "path to audiofile input=file"
}

def main():
    try:
        deepgram = DeepgramClient(DG_API_KEY)

    except Exception as e:
        print(f"Exception: {e}")
