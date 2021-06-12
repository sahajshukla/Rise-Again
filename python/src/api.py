from flask import Flask, redirect, url_for, request, jsonify
import json
from flask_cors import CORS
from postgres import db
from flask_sqlalchemy import SQLAlchemy
from scoregenerator import DFGenerator
import psycopg2
from postgres import User

db.create_all()
app = Flask(__name__)
CORS(app)
app.app_context().push()
@app.route('/feelings', methods= ['POST'])
def feelings():
      note = request.get_json(silent=True)
      item = {'feelings':note.get('feelings'), 'essay':note.get('essay')}
      print(item)
      user = User(item)
      db.session.add(user)
      db.session.commit()
      return "success"
@app.route('/score', methods= ['GET'])
def score():
     connection = psycopg2.connect(user="sahajshukla",
                                  password="riseagain",
                                  host="127.0.0.1",
                                  port="5432",
                                  database="postgres")
     cursor = connection.cursor()
     postgreSQL_select_Query = "SELECT * FROM public.\"user\""
     cursor.execute(postgreSQL_select_Query)
     results = cursor.fetchall()
     generator_obj = DFGenerator(results)
     list_new, list_new1 = generator_obj.datagenerator()
     data_score = generator_obj.naturalprocessor()
     
     data_score = data_score.tolist()
     print(data_score)
     json_str = json.dumps(data_score)
     #print(dictionary)
     return jsonify(data_score)

if __name__ == '__main__':
   app.run(debug = True,port=5000)
