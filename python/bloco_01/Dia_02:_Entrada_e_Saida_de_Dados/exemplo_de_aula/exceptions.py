# while True:
#   try: 
#     x = int(input('please enter a number:'))
#     break
#   except ValueError:
#     print('oops! that was no valid number.')

try:
  file = open('teste.txt', mode = 'r')
except OSError:
  print('arquivo inexistente')
else:
  content = file.read()
  print(content)
  print('arquivo manipulado e fechado')
  file.close()
finally:
  print('tentativa de ler o arquivo')