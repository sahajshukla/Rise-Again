import nltk
nltk.download()

class DFGenerator:
    def __init__(self, list):
        self.list = list
    def generator(self):
        self.feelings = []
        self.essay = []
        for i in self.list:
            self.feelings.append(i[1])
            self.essay.append(i[2])
        return(self.feelings, self.essay)
    def naturalprocessor(self):
        pass
