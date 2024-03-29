'''
Robert's building has requested new PVC windows. The manufacturer produces 4 different types. Robert's not an expert in programming but can draw ASCII, so he decided to use "." and "#" to draw the variants in the following way:

....    ####    ....    ####
....    #..#    .##.    ####
....    #..#    .##.    ####
....    ####    ....    ####

  A       B       C       D

This is where you come in - please help Robert draw a certain combination of windows from the letters he used to mark windows.


Example Input:
ABAB
AC

Expected result:
....####....####
....#..#....#..#
....#..#....#..#
....####....####
........
.....##.
.....##.
........
'''
windows = {
"A": [
"....",
"....",
"....",
"....",
],
"B": [
"####",
"#..#",
"#..#",
"####"]
}

def pvc(input):
    for kurac in range(len(windows["A"])):
        for letter in input:
            print(windows[letter][kurac], end = "")
        print("")

        
pvc("ABABA")

'''
....####....####....
....#..#....#..#....
....#..#....#..#....
....####....####....
'''