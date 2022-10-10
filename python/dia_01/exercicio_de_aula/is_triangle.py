def is_triangle(side1,side2,side3):
  is_triangle = (
    side1 + side2 > side3 and
    side2 + side3 > side1 and
    side1 + side3 > side2
  )

  if not is_triangle:
    return 'Não é um triângulo'
  elif side1 == side2 == side3:
    return 'Triângulo Equiláterio'
  elif side1 == side2 or side1 == side3 or side3 == side2:
    return 'Triângulo Isóceles'
  else:
    return 'Triângulo Escaleno'

print(is_triangle(130,60,60))
print(is_triangle(60,60,60))
print(is_triangle(60,70,60))
print(is_triangle(60,70,90))