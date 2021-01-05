# word list source: http://app.aspell.net/create

import os.path


def is_spellable(word, letters):
    for word_letter in word:
        if word.count(word_letter) > letters.count(word_letter):
            return False
    return True


class ScrabbleSolver:
    def __init__(self):
        wordlist_path = os.path.join(os.path.dirname(__file__), "word_list.txt")
        self.wordlist = []
        with open(wordlist_path) as wordlist_file:
            started = False
            for line in wordlist_file:
                if started:
                    word = line.rstrip()
                    self.wordlist.append(word)
                elif line == "---\n":
                    started = True

    def solve(self, letters):
        solutions = []
        for word in self.wordlist:
            if is_spellable(word.lower(), letters):
                solutions.append(word)
        solutions = sorted(solutions, key=lambda word: -len(word))
        return solutions


s = ScrabbleSolver()
print(s.solve("ailqtuyz"))
