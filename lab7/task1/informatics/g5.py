item_count = int(input())
number_values = list(map(int, input().split()))

for item_index in range(len(number_values) - 1, -1, -1):
    print(number_values[item_index], end=" ")
