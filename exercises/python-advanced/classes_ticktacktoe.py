import copy

class TickTackToe:

    winning_combinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    def __init__(
        self, board=[[None, None, None], [None, None, None], [None, None, None]]
    ):
        self.board = copy.deepcopy(board)
        self._event_listeners = {"place_mark": [], "game_over": [], "new_game": []}

    def turn(self):
        turn = 0
        for row in self.board:
            for square in row:
                if square is not None:
                    turn += 1
        return turn
    
    def active_player(self):
        return self.turn() % 2

    def game_over(self):
        return self.winner() != None

    def new_game(self):
        self.board = [[None, None, None], [None, None, None], [None, None, None]]

    def place_mark(self, row, col):
        if self.winner() is not None:
            return
        if self.board[row][col] is not None:
            # cell is already full - ignore
            return
        self.board[row][col] = self.active_player()
        for listener in self._event_listeners["place_mark"]:
            listener(row, col)
        if self.game_over():
            for listener in self._event_listeners["game_over"]:
                listener()

    def winner(self):
        for comb in self.winning_combinations:
            symbols = [self.board[comb[i] // 3][comb[i] % 3] for i in range(3)]
            if symbols[0] == symbols[1] == symbols[2] != None:
                return symbols[0]
        return None

    def add_event_listener(self, event_name, callback):
        self._event_listeners[event_name].append(callback)
