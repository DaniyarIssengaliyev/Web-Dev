import math

range_start = int(input())
range_end = int(input())

for current_value in range(range_start, range_end + 1):
    if current_value // math.sqrt(current_value) == math.sqrt(current_value):
        print(current_value, end=" ")
