def soma(a,b):
  return a + b


def test_soma_positivos():
	assert soma(3,4) == 7

def test_soma_negativos():
	assert soma(-3,-4) == -7