# Given an array of integers find the one that repeats odd number of times

def find_odd_repeating(integers):

    # sorted_ints = sorted(list(integers))
    # print(integers)
    # print(sorted_ints)

    sorted_ints = list(integers)
    sorted_ints.sort()
    print(sorted_ints)

    for x in range(0, len(sorted_ints)):
        counter = 0
        for y in range(0, len(sorted_ints)):
            if sorted_ints[x] == sorted_ints[y]:
                counter += 1
        if counter % 2 == 1:
            print(sorted_ints[x])
            break


find_odd_repeating([7, 2, 5, 2, 5, 4, 4])

# ALTERNATIVE

# def find_odd_repeating(integers):
#     sorted_ints = sorted(integers)

#     for test in sorted_ints:
#         counter = 0
#         for current in sorted_ints:
#             if test == current:
#                 counter += 1
#         if counter % 2 == 1:
#             print(test)
#             break
