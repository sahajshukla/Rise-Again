import nltk
#nltk.download()
from nltk.sentiment import SentimentIntensityAnalyzer
from nltk.stem import WordNetLemmatizer
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
import numpy as np
stop_words = set(stopwords.words('english'))
import re
analyser = SentimentIntensityAnalyzer()
class DFGenerator:
    def __init__(self, list):
        self.list = list
        self.feelscore=[]
        self.expressions = []
        self.exp_score = []
        self.fin_score = []
    def datagenerator(self):
        self.feelings = []
        self.essay = []
        for i in range(len(self.list)):
            self.feelings.append(self.list[i]['feelings'])
            self.essay.append(self.list[i]['essay'])
        return(self.feelings, self.essay)
    def naturalprocessor(self):
        for i in self.feelings:
            if i == "Happy":
                self.feelscore.append(5)
            elif i == "Neutral":
                self.feelscore.append(3)
            elif self.feelings == "Sad":
                sself.feelscore.append(-2)
            elif self.feelings == "Angry":
                self.feelscore.append(-3)
            elif self.feelings == "Depressed":
                self.feelscore.append(-5)
            elif self.feelings == "Helpless":
                self.feelscore.append(-3)
            else:
                self.feelscore.append(0)
            feelscore = self.feelscore
        for i in self.essay:
            intensity = 0
            i = i.lower()
            i = re.sub("[^A-Za-z]"," ",i)
            i = word_tokenize(i)
            i_filtered = [j for j in i if not j in stop_words]
            sentence = ' '.join([str(elem) for elem in i_filtered])
            dict = analyser.polarity_scores(sentence)
            max_key = max(dict, key=dict.get)
            max_val = max(dict.values())
            print(max_val)
            if max_key == "pos":
                intensity = 5
            elif max_key == "neg":
                intensity = -5
            elif max_key == "neu":
                intensity = -0
            elif max_key == "compound":
                intensity = 0
            score = intensity*max_val
            self.exp_score.append(score)
        self.fin_score = (np.add(self.exp_score, self.feelscore))/2
        return self.fin_score
