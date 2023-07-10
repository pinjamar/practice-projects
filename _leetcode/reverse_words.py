# /**
# Given a primitive character array (char[]) containing letters and spaces, write a function that will reverse the order of the words formed. 
# For example, provided ['H', 'i', ' ', 'W', 'o', 'r', 'l', 'd'] your function should produce ['W', 'o', 'r', 'l', 'd', ' ', 'H', 'i']. 
# You can have any number of spaces between the words, or leading or trailing in the array.


# short-hand examples:
# [Hi World] -> [World Hi]
# [one  two three ] -> [ three two  one]
# [   ] -> [   ]
# */

def reverse_words(char):
    
    new_array = "".join(char).split(" ")

    left = 0
    right = len(new_array) - 1
    
    while left < right:
        [new_array[left], new_array[right]] = [new_array[right], new_array[left]]
        left+=1 
        right-=1
        
    print(new_array)
    
    
reverse_words(['H', 'i', ' ', 'W', 'o', 'r', 'l', 'd'])