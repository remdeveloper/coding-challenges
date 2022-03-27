# implement an algorithm determine if a string has all unique characters, no additional data structures
# if all unique, true

# loop through the string
# if the character is in the list
# means it's not unique
# stop loop, output false
# if character is not in the list
# add it to the list
# if length of the new list == length of asdf, output true, it is unique



def is_unique(teststring):
    uniquechar = []
    for i, character in enumerate(teststring):   
        if character in uniquechar:
            return False
        if character not in uniquechar:
            uniquechar.append(character)
        if len(uniquechar) == len(teststring):
            return True

print(is_unique("jeny"))

def is_unique2(sample):
    if len(set(sample)) == len(sample):
        return True
    return False

print(is_unique2("jenny"))