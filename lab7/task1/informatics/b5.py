item_count = int(input())
number_values = list(map(int, input().split()))

for current_value in number_values:
    if current_value % 2 == 0:
        print(current_value, end=" ")
