import sys

target_value = int(input())
current_power = 1
while target_value >= current_power:
    if current_power == target_value:
        print("YES")
        sys.exit(0)
    current_power = current_power * 2
print("NO")
