import random

random_number = random.randint(1,10)

guess = ''

while guess != random_number:
    guess = int(input('Teste sua sorte, digite um número de 1 a 10!'))
    print(guess)

print('Agora sim!')