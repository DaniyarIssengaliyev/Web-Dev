range_start = int(input())
range_end = int(input())
required_remainder = int(input())
divisor_value = int(input())

for current_value in range(range_start, range_end + 1):
    if current_value % divisor_value == required_remainder:
        print(current_value, end=" ")
