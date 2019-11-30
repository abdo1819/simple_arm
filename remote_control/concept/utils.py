''' help functions for middle server '''
import json
import requests

def send_to_esp(angles):
    '''
    send to esp the angles
        # v1: make a post request to esp update value
        # v2: open a web socket and send angle using it

    parramets:
    list angles : angles for motors

    return:
        respose from control server
    '''

    if not isinstance(angles, list):
        # assert error
        angles = [angles]

    motors_dic = list_to_dic(angles)

    url = connection_proper()['url']

    res = requests.post(url, json=motors_dic)
    print(res, motors_dic)


def list_to_dic(angles):
    ''' convert list of angles to meaningfull usable json dict'''
    motors_vals = {}
    for i, angle in enumerate(angles):
        motors_vals['motor'+str(i)] = angle
    motors_dic = {'motors': motors_vals}

    return motors_dic


def connection_proper():
    '''convert json file to python dictionary
        containing properties for running app'''
    with open('connection.json', 'r') as json_file:
        connection = json.load(json_file)
    return connection
