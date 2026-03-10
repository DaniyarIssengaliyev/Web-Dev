item_count = int(input())
number_values = list(map(int, input().split()))
ascending_pairs = 0
for item_index in range(item_count - 1):
    if number_values[item_index] < number_values[item_index + 1]:
        ascending_pairs += 1
print(ascending_pairs)
