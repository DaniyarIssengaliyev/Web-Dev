def smallest_of_four(first_value, second_value, third_value, fourth_value):
    if first_value < second_value and first_value < third_value and first_value < fourth_value:
        return first_value
    if second_value < first_value and second_value < third_value and second_value < fourth_value:
        return second_value
    if third_value < first_value and third_value < second_value and third_value < fourth_value:
        return third_value
    if fourth_value < first_value and fourth_value < third_value and fourth_value < second_value:
        return fourth_value


print(smallest_of_four(1, 2, 3, 4))
