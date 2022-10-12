recuStudents = []
with open("file.txt") as gradesFile:
    for line in gradesFile:
        student_grade = line
        student_grade = student_grade.split(' ')
        student_grade[1] = int(student_grade[1])
        if student_grade[1] < 6:
            recuStudents.append(student_grade[0] + '\n')

print(recuStudents)

with open('recuStudents.txt', mode = 'w') as rec:
    rec.writelines(recuStudents)