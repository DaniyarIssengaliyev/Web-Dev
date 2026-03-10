import math

remaining_count = int(input())
current_number = 1
while remaining_count > 0:
    if current_number // math.sqrt(current_number) == math.sqrt(current_number):
        print(current_number, end=" ")
    current_number += 1
    remaining_count -= 1
