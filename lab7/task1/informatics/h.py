number_value = int(input())
for divisor_candidate in range(1, number_value + 1):
    if number_value % divisor_candidate == 0:
        print(divisor_candidate, end=" ")
