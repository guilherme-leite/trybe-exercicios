from itertools import count
import random
from collections import Counter

lista_de_numeros = []

for num in range(10000):
    lista_de_numeros.append(random.randint(0,1000))


counter = Counter(lista_de_numeros)

print(counter)