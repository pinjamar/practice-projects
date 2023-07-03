# return list of words from "sentence" having 2 or more vowels. NO DUPLICATE WORDS

# pt2. plz categorize the words using the alphabet
vowel = [
    "a",
    "e",
    "o",
    "i",
    "u",
]


def words_having_2_or_more_vowels(sentence):
    words = sentence.lower().split(" ")
    deduplicated_words = []
    for e in words:
        if e not in deduplicated_words:
            deduplicated_words.append(e)

    result_array = []

    for word in deduplicated_words:
        vowel_array = []
        for letter in word:
            if letter in vowel:
                vowel_array.append(letter)
                if len(vowel_array) >= 2:
                    result_array.append(word)
                    break

    result_map = dict()

    # mape, i crud s njima, prepoznat kad ih treba koristit i kombinirat sa drugim tipovima podataka kao šta je ARRAY :)
    for result in result_array:
        key = result[0]
        if key not in result_map:
            result_map[key] = []
        result_map[key].append(result)

    return result_map


sentence = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."


print(words_having_2_or_more_vowels(sentence))
