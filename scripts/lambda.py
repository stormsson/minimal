import json
import nltk
from nltk.tokenize import sent_tokenize
from os.path import join

nltk.data.path.append(join("data"))

def lambda_handler(event, context):

    content = event['content']
    sentences = sent_tokenize(content)


    return {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json"
        },
        "body": json.dumps({
            "sentences": sentences
        })
    }