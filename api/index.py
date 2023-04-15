from flask import Flask, request, jsonify
import nltk
from nltk.tokenize import sent_tokenize
from os.path import join

# must be relative to project root
nltk.data.path.append(join("data"))

app = Flask(__name__)

@app.route('/')
def home():
    return 'Hello, World!'

@app.route('/tokenize', methods=['POST'])
def tokenize():
    data = request.json
    content = data.get('content', '')

    sentences = sent_tokenize(content)
    return jsonify(sentences=sentences)


if __name__ == '__main__':
    app.run(debug=True)
