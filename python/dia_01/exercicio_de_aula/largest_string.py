def largest_string(list):
    biggest_name = list[0]
    for name in list:
        if len(name) > len(biggest_name):
          biggest_name = name
    return biggest_name

print(largest_string(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana", "guilherme"]))