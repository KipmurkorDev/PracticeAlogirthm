

class Car:
    def __init__(self, color, brand):
        self.color=color
        self.brand=brand
        
    def method(self):
        pass


class Lorry(Car):
    def __init__(self, color, brand, name):
        super().__init__(color, brand)
        self.name=name
        
    def Logger(self):
        print("Logg the care name", self.name)
        
        

p=Lorry("white", "Toyota", "Kanta")
p.Logger()