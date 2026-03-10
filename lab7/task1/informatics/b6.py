def repeated_power(base_value: int, exponent_value: int):
    result_value = base_value
    for _ in range(exponent_value - 1):
        result_value *= base_value
    return result_value


print(repeated_power(11, 2))
