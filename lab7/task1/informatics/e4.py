number_value = int(input())
step_count = 0
current_power = 1
while number_value >= current_power:
    current_power *= 2
    step_count += 1
print(step_count)
