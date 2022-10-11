input = input('Digite uma sequencia de números para soma ')
split_input = input.split(' ')
sum = 0
for ele in split_input:
  if ele.isdigit():
    sum += int(ele)
  else:
    print('Erro')
print(sum)

print(split_input)