number_values = list(map(int, input().split()))

positive_count = 0
for current_value in number_values:
    if current_value > 0:
        positive_count += 1
print(positive_count)
