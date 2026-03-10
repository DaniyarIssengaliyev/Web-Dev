target_value = int(input())
divisor_candidate = 2
while target_value > divisor_candidate:
    if target_value % divisor_candidate == 0:
        print(divisor_candidate)
        break
    divisor_candidate += 1
