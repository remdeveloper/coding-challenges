uniquechar = []

for i, character in enumerate(asdf):
    if character in uniquechar:
        return False
    if character not in uniquechar:
        uniquechar.append(character)
    if len(uniquechar) == len(asdf)
        return True