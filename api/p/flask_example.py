from flask import Flask

app = Flask(__name__)

#@app.route('/')
@app.route('/p/')
def home():
    return 'FLASK -  /p/ route'

#@app.route('/about')
@app.route('/p/about')
def about():
    return 'FLASK - /p/about route'