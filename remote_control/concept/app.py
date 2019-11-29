from flask import Flask, render_template, request
from utils import send_to_esp
APP = Flask(__name__)

@APP.route("/simple", methods=['GET', 'POST'])
def box_value():
    if request.method == "POST":
        angle = request.form['angle']
        send_to_esp(angle)
        
    return render_template('test.html')

if __name__ == "__main__":
    APP.run(debug=True)