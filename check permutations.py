# given 2 strings, write a method to decide if one is a permutation of another one
# permutation is mixed order
# abc vs bac


# sort both strings string.sort()
# if equal, return true it is a permutation
# else return false
import unittest

def check_permutations(string1, string2):
    sortedstring1 =  sorted(string1)
    sortedstring2 =  sorted(string2)
    if sortedstring1 == sortedstring2:
        return True
    return False

class Test(unittest.TestCase):
    test_cases = (
        ("dog", "god", True),
        ("abcd", "bacd", True),
        ("3563476", "7334566", True),
        ("wef34f", "wffe34", True),
        ("dogx", "godz", False),
        ("abcd", "d2cba", False),
        ("2354", "1234", False),
        ("dcw4f", "dcw5f", False),
        ("DOG", "dog", False),
        ("dog ", "dog", False),
        ("aaab", "bbba", False),
    )
    def test_cp(self):
        for str1, str2, expected in self.test_cases:
            assert check_permutations(str1, str2) == expected
            print("function passed for " + str1 + "and " + str2 + "is " + str(expected))    

if __name__ == "__main__":
    unittest.main()