import sys

item_count = int(input())
number_values = list(map(int, input().split()))
for item_index in range(item_count - 1):
    if (number_values[item_index] > 0 and number_values[item_index + 1] > 0) or (
        number_values[item_index] < 0 and number_values[item_index + 1] < 0
    ):
        print("YES")
        sys.exit(0)

print("NO")
