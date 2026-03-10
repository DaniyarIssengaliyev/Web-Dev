from models import Animal, Dog, Cat

animal1 = Animal("Buddy", 3, "Brown")
dog1 = Dog("Rex", 5, "Black", "Labrador")
cat1 = Cat("Mimi", 2, "White", 9)

animals = [animal1, dog1, cat1]

for animal in animals:
    print(animal)
    print(animal.eat())
    print(animal.speak())
    print("-" * 30)

print(dog1.fetch())
print(cat1.climb())