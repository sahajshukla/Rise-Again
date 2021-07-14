from flask import Flask, redirect, url_for, request, jsonify
import json
from flask_cors import CORS
import dns
from postgres import db
from flask_sqlalchemy import SQLAlchemy
from scoregenerator import DFGenerator
import psycopg2
import pymongo
from pymongo import MongoClient
from postgres import User

client = MongoClient('mongodb+srv://sahajshukla:sahaj1234@cluster0.dvdzy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
db = client.get_database('feelings_api')
records = db.rise_again
user_email= []
app = Flask(__name__)
CORS(app)
app.app_context().push()
@app.route('/feelings', methods= ['POST'])
def feelings():
      note = request.get_json(silent=True)
      item = {'feelings':note.get('feelings'), 'essay':note.get('essay'), 'user': note.get('user')}
      records.insert_one(item)
      return "success"

@app.route('/score', methods= ['GET'])
def score():
    #print(user_email)
    latest = user_email[-1]
    print(latest['email'])
    list1 = list(records.find({'user': latest['email']}))
    generator_obj = DFGenerator(list1)
    list_new, list_new1 = generator_obj.datagenerator()
    data_score = generator_obj.naturalprocessor()
    data_score = data_score.tolist()
    #print(data_score)
    json_str = json.dumps(data_score)
    #print(dictionary)
    return jsonify(data_score)

@app.route('/user', methods = ['POST'])
def user():
    email = request.get_json('email')
    user_email.append(email)
    return 'success'
if __name__ == '__main__':
   app.run(debug = True,port=5000)
