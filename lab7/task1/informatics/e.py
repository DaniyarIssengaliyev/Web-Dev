velocity_value = int(input())
time_value = int(input())
position_value = (velocity_value * time_value) % 109
print(position_value)
