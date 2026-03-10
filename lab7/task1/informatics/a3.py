range_start = int(input())
range_end = int(input())

for current_value in range(range_start, range_end + 1):
    if current_value % 2 == 0:
        print(current_value, end=" ", sep=" ")
