from flask import Flask, request, jsonify
from textblob import TextBlob

app = Flask(__name__)

@app.route('/')
def home():
    return 'Hello, World!'

@app.route('/tokenize', methods=['POST'])
def tokenize():
    data = request.json
    content = TextBlob(data.get('content', ''))

    sentences = [str(sent) for sent in content.sentences]

    return jsonify(sentences=sentences)


if __name__ == '__main__':
    app.run(debug=True)
