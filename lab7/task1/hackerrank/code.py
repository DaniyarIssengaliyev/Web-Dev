print("Hello, World!")

first_number = int(input())
second_number = int(input())
print(first_number + second_number)
print(first_number - second_number)
print(first_number * second_number)

dividend_value = int(input())
divisor_value = int(input())
print(dividend_value // divisor_value)
print(dividend_value / divisor_value)

limit_value = int(input())
for current_index in range(limit_value):
    print(current_index ** 2)

sequence_limit = int(input())
print("".join(str(number_value) for number_value in range(1, sequence_limit + 1)))

x_limit = int(input())
y_limit = int(input())
z_limit = int(input())
excluded_sum = int(input())
print(
    [
        [x_value, y_value, z_value]
        for x_value in range(x_limit + 1)
        for y_value in range(y_limit + 1)
        for z_value in range(z_limit + 1)
        if x_value + y_value + z_value != excluded_sum
    ]
)

score_count = int(input())
score_values = list(map(int, input().split()))
print(sorted(set(score_values))[-2])

student_entries = []
for _ in range(int(input())):
    student_name = input()
    student_score = float(input())
    student_entries.append([student_name, student_score])

target_score = sorted(set(score for _, score in student_entries))[1]
print("\n".join(sorted(name for name, score in student_entries if score == target_score)))

student_count = int(input())
score_table = {}
for _ in range(student_count):
    student_name, *score_parts = input().split()
    score_table[student_name] = list(map(float, score_parts))

lookup_name = input()
print(f"{sum(score_table[lookup_name]) / len(score_table[lookup_name]):.2f}")

command_count = int(input())
number_list = []

for _ in range(command_count):
    command_name, *command_args = input().split()
    if command_name == "insert":
        number_list.insert(int(command_args[0]), int(command_args[1]))
    elif command_name == "print":
        print(number_list)
    elif command_name == "remove":
        number_list.remove(int(command_args[0]))
    elif command_name == "append":
        number_list.append(int(command_args[0]))
    elif command_name == "sort":
        number_list.sort()
    elif command_name == "pop":
        number_list.pop()
    elif command_name == "reverse":
        number_list.reverse()
