entry_count = int(input())
zero_count = 0
for _ in range(entry_count):
    current_value = int(input())
    if current_value == 0:
        zero_count += 1
print(zero_count)
