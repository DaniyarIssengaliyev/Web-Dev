item_count = int(input())
number_values = list(map(int, input().split()))
selected_values = []
for item_index in range(item_count):
    if item_index % 2 == 0:
        selected_values.append(number_values[item_index])

print(selected_values)
