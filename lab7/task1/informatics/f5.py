item_count = int(input())
number_values = list(map(int, input().split()))

if len(number_values) < 3:
    print(0)
peak_toggle = 1
peak_count = 0
for item_index in range(1, len(number_values) - 1):
    if peak_toggle == 1:
        if number_values[item_index - 1] < number_values[item_index] and number_values[item_index + 1] < number_values[item_index]:
            peak_count += 1
        peak_toggle = 0
    else:
        peak_toggle = 1

print(peak_count)
