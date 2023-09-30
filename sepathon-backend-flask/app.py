from flask import Flask, request
from website_footprint import calculateWebsiteFootprint

app = Flask(__name__)
BASE_URL = "/api/v1"

@app.route(BASE_URL)
def hello_world():
    return "Hello From Backend"

@app.route(BASE_URL + '/networkTraffic')
def networkTraffic():
    url = request.args.get('url')
    data_used = 0
    if url is not None:
        data_used = calculateWebsiteFootprint(url)
    return {
        'tranfers': data_used
    }


if __name__ == '__main__':
    app.run(debug=True)