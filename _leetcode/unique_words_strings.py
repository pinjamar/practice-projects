# Dobiješ dva stringa, moraš vratit array di su unikatne riječi koje su zajednicke oba stringa

def solve(first, second):

    arej = []
    prva = first.lower().replace(".", "").split(" ")
    druga = second.lower().replace(".", "").split(" ")

    for a in prva:
        if a in druga:
            arej.append(a)
    for a in druga:
        if a in prva and a not in arej:
            arej.append(a)

    return arej


print(solve("Lorem ipsum dolor sit amet. Cum libero quia id quod eaque ex illo voluptate. Ex quis molestiae eum officiis maiores qui eligendi nihil ab accusamus possimus ex voluptates consequuntur 33 quisquam dolorem sit voluptatibus consequatur.",
      "Nam porro error qui mollitia deserunt et ipsam odio. Est aspernatur excepturi est repudiandae consequuntur ut vitae ipsum. Ab perspiciatis temporibus ab exercitationem voluptas et cupiditate perferendis id quaerat maxime sed aspernatur rerum qui odio error sit consequatur galisum."))

# def solve(first, second):

#     dickt1 = set()
#     dickt2 = set()

#     result = []
#     prva = first.lower().replace(".", "").split(" ")
#     druga = second.lower().replace(".","").split(" ")

#     for a in prva:
#         dickt1.add(a)
#     for b in druga:
#         dickt2.add(b)

#     return dickt1.intersection(dickt2)


# def solve(string_array):
#     seti = []
#     for text in string_array:
#         x = text.lower().replace(".", "").split(" ")
#         seti.append(set(x))

#     result_set = seti[0]
#     for s in seti:
#         result_set = result_set.intersection(s)

#     return list(result_set)


# array = [
#     "Lorem ipsum dolor sit amet. Cum libero quia id quod eaque ex illo voluptate. Ex quis molestiae eum cum officiis maiores qui eligendi nihil ab accusamus possimus ex voluptates consequuntur 33 quisquam dolorem sit voluptatibus consequatur.",
#     "Nam porro error qui mollitia deserunt et ipsam odio. Est aspernatur excepturi est repudiandae consequuntur ut cum vitae ipsum. Ab perspiciatis temporibus ab exercitationem voluptas et cupiditate perferendis id quaerat maxime sed aspernatur rerum qui odio error sit consequatur galisum",
#     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco cum laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]

# print(solve(array))
