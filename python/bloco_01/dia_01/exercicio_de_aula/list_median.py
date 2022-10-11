def median(list):
    counter = 0
    for num in list:
        counter += num
    return counter/ len(list)


print(median([1,2,3,4]))