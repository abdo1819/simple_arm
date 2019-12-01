'''middle server'''
from flask import Flask, render_template, request
from utils import send_to_esp
from flask_cors import CORS,cross_origin
APP = Flask(__name__)
CORS(APP)
@cross_origin()
@APP.route("/simple", methods=['GET', 'POST'])
def box_value():
    ''' read vaule from user and send it to control-server'''
    #if request.method == "POST":
        #angle = request.form[request.form["source"]]
        #angle = request.form["angle"]
        #send_to_esp(angle)
    print(request.data())
    return render_template('test.html')


if __name__ == "__main__":
    APP.run(debug=True)
