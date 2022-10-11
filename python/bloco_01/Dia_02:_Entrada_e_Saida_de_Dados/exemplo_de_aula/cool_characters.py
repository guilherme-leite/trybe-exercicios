characters_file = open('teste.txt', mode = 'w')

characters_file.write('Teste\n')

print('yo\n', file=characters_file)

more_characters = ['gui\n', 'mauro\n', 'nick\n']

characters_file.writelines(more_characters)

characters_file.close()

open_file = open('teste.txt', mode = 'r')

print(open_file)

content = open_file.read()

print(content)

open_file.close()