from flask import Flask, request
from website_footprint import calculateWebsiteFootprint
from flask_cors import CORS, cross_origin
import json

app = Flask(__name__)
BASE_URL = "/api/v1"
cors = CORS(app)

@app.route(BASE_URL)
@cross_origin()
def hello_world():
    return "Hello From Backend"

@app.route(BASE_URL + '/networkTraffic', methods=['POST'])
@cross_origin()
def networkTraffic():
    print('Test')
    data = json.loads(request.data.decode('utf-8'))
    url = data.get('url')
    data_used = 0
    if url is not None:
        data_used = calculateWebsiteFootprint(url)
    print(data_used)
    return {
        'transfers': data_used
    }


if __name__ == '__main__':
    app.run(debug=True)