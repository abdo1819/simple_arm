## this server is for testing only will be replaced
## by c sever in esp

from flask import Flask, request
from utils import connection_proper

APP = Flask(__name__)

@APP.route("/", methods=['POST'])
def update_motor():
    motor_angle = request.get_json()
    print(motor_angle)
    return  "ok"


if __name__ == "__main__":
    PORT = connection_proper()['control-port']
    APP.run(debug=True,port=PORT)
