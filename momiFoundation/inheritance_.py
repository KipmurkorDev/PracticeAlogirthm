class Dog:

    scientific_name = "Canis lupus familiaris"

    def __init__(self, name):
        self.name = name
        self.counts = 0

    def speak(self):
        print("Woof!")

    def hear(self, words):
        if self.name in words:
            self.speak()

    def count(self):
        self.counts+= 1
        for bark in range(self.counts):
            self.speak()
class Husty(Dog):
    def speak(self):
        print("yip")
        
class poodle(Dog):
    def speak(self):
        print("ping!")
    

k=Husty("husty")
p=poodle("poodle")

print(p, k)