PI = 3.14

def square(side):
    return side * side


def rectangle(base, height):
    return base * height


def circle(radius):
    return PI * radius ** 2

if __name__ == '__main__':
    print('Area do quadrado: ', square(10))
    print('Area do retângulo: ', rectangle(10,12))
    print('Area do circulo: ', circle(10))