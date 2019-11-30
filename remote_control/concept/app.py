'''middle server'''
from flask import Flask, render_template, request
from utils import send_to_esp
APP = Flask(__name__)

@APP.route("/simple", methods=['GET', 'POST'])
def box_value():
    ''' read vaule from user and send it to control-server'''
    if request.method == "POST":
        angle = request.form[request.form["source"]]
        send_to_esp(angle)

    return render_template('test.html')


if __name__ == "__main__":
    APP.run(debug=True)
