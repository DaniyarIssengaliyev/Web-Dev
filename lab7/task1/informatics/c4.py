limit_value = int(input())
current_power = 1
while limit_value > current_power:
    print(current_power, end=" ")
    current_power = current_power * 2
