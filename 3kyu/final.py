from functools import reduce

def last_digit(numbers):
    if not numbers:
        return 1
    
    tam = len(numbers)

    if tam == 1 or (str(numbers[0])[-1] == '0' and len(str(numbers[0])) > 1):
        return int(str(numbers[0])[-1])

    numbers[0] = int(str(numbers[0])[-1])

    numbers.reverse()

    for n in range(tam):
        number = numbers[n]

        if len(str(number)) > 1 and (number > 109 or number < 100):
            numbers[n] = int(str(number)[-2:])

    results = reduce(lambda ac, at: 
        at**int(str(ac)[-3:]) if str(ac)[-1] != '0' or len(str(ac)) == 1
        
        else at**int(str(ac).rstrip('0')[-1] + '00')
        
    , numbers)

    return int(str(results)[-1])

print(last_digit([]))                              # 1
print(last_digit([0, 0]))                          # 1
print(last_digit([0, 0, 0]))                       # 0
print(last_digit([1, 2]))                          # 1
print(last_digit([3, 4, 5]))                       # 1
print(last_digit([4, 3, 6]))                       # 4
print(last_digit([7, 6, 21]))                      # 1
print(last_digit([12, 30, 21]))                    # 6
print(last_digit([2, 2, 2, 0]))                    # 4
print(last_digit([937640, 767456, 981242]))        # 0
print(last_digit([123232, 694022, 140249]))        # 6
print(last_digit([499942, 898102, 846073]))        # 6
print(last_digit([2, 2, 101, 2]))                  # 6