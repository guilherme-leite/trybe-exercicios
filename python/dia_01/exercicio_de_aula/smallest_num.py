def smallest_num(list):
  smallest_num = list[0]
  for num in list:
    if num < smallest_num:
      smallest_num = num
  return smallest_num


print(smallest_num([2,1,3,19,0]))
print(smallest_num([3,19,]))
print(smallest_num([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]))