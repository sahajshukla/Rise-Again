from flask_sqlalchemy import SQLAlchemy
import psycopg2
from flask import Flask
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg2://sahajshukla:riseagain@localhost/postgres'
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    feelings = db.Column(db.String(20))
    essay = db.Column(db.String(500))
    def __init__(self, user_feels):
            p = 0
            self.feelings = user_feels['feelings']
            self.essay = user_feels['essay']
            print("cursor query executed")
