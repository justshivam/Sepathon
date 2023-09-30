from flask import Flask

app = Flask(__name__)

@app.route("/api/v1")
def hello_world():
    return "Hello From Backend"


if __name__ == '__main__':
    app.run(debug=True)