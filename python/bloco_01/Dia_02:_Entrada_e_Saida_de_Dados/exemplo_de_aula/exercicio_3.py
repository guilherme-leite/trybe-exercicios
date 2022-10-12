students_grades = open('notas.txt', mode = 'w')

grades = ['Marcos 10\n','Felipe 4\n' ,'José 6\n' ,'Ana 10\n','Maria 9\n' ,'Miguel 5\n']

students_grades.writelines(grades)

students_grades.close()

open_file = open('notas.txt', mode = 'r')

grades = open_file.read()

removing_lb = grades.split('\n')

grades_list = []

for ele in removing_lb:
  if ele != '':
    grades_list.append(ele.split(' '))

lower_grades = []

for grades in grades_list:
    if int(grades[1]) < 6:
        lower_grades.append(grades[0])

print(lower_grades)