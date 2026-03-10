year_value = int(input())
if (year_value % 4 == 0 and year_value % 100 != 0) or (year_value % 400 == 0):
    print("Yes")
else:
    print("NO")
