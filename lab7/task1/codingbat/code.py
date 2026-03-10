def edge_has_six(values):
    return values[0] == 6 or values[-1] == 6


def matching_edges(values):
    return len(values) >= 1 and values[0] == values[-1]


def even_count(values):
    return sum(1 for item in values if item % 2 == 0)


def sum_without_thirteen(values):
    collected_total = 0
    skip_next_item = False
    for item in values:
        if item == 13:
            skip_next_item = True
            continue
        if skip_next_item:
            skip_next_item = False
            continue
        collected_total += item
    return collected_total


def party_result(cigar_amount, weekend_flag):
    return cigar_amount >= 40 if weekend_flag else 40 <= cigar_amount <= 60


def speeding_ticket(speed_value, birthday_flag):
    grace_limit = 5 if birthday_flag else 0
    if speed_value <= 60 + grace_limit:
        return 0
    if speed_value <= 80 + grace_limit:
        return 1
    return 2


def greet_person(person_name):
    return f"Hello {person_name}!"


def build_abba(left_text, right_text):
    return left_text + right_text + right_text + left_text


def repeat_text(text_value, repeat_count):
    return text_value * repeat_count


def repeat_prefix(text_value, repeat_count):
    return text_value[:3] * repeat_count


def can_sleep(weekday_flag, vacation_flag):
    return not weekday_flag or vacation_flag


def smiling_trouble(first_smile, second_smile):
    return first_smile == second_smile
