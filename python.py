l = [1,2,3.14,"Hello",True]
l.append("Tomorrow")
l.pop(2)
print(l)

s = set()
s.add(1)
s.add(1)
print(s)

d = {1:'A',2:'B',3:'C'}
for k,v in d.items():
    print(k,v)

def function():
    return "Hello"

print(function())

class Class1:
    def __init__(self, i):
        self.i = i

    def function1(self):
        print(self.i)

    def function2(self, j):
        print(j)

obj = Class1(1)
obj.function1()
obj.function2(4)

d = {
    "name":"Hema",
    "age":19,
    "salary":10000000
}

import json
res = json.dumps(d)
print(res)
print(type(res))

with open("pythonjson.json","r")as file:
    data=json.load(file)
print(data)
print(type(data))