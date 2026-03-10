number_value = int(input())
divisor_count = 0
for divisor_candidate in range(1, number_value + 1):
    if number_value % divisor_candidate == 0:
        divisor_count += 1
print(divisor_count)
