# run via:

# python -m unittest discover -p "*_test.py"

from unittest import TestCase
import unittest

from python_advanced.classes_ticktacktoe import TickTackToe

board_empty = [[None] * 3] * 3

board_x_row_1 = [[0, 0, 0], [1, 1, None], [None, None, None]]

board_o_diag_2 = [[0, 0, 1], [None, 1, 0], [1, None, None]]

board_x_in_corner = [[0, None, None], [None, None, None], [None, None, None]]

board_x_and_o = [[0, 1, None], [None, None, None], [None, None, None]]

class BoardCreation(TestCase):
    def test_empty_board(self):
        game = TickTackToe()
        self.assertEqual(game.board, board_empty)


class InputBoardNotModified(TestCase):
    def test_input_board_not_modified(self):
        input_board = board_empty
        game = TickTackToe(input_board)
        game.place_mark(0, 0)
        self.assertEqual(input_board, [[None] * 3] * 3)


class ActivePlayer(TestCase):
    def test_empty(self):
        game = TickTackToe()
        self.assertEqual(game.active_player(), 0)

    def test_x_in_corner(self):
        game = TickTackToe(board_x_in_corner)
        self.assertEqual(game.active_player(), 1)

    def test_x_row_1(self):
        game = TickTackToe(board_x_row_1)
        self.assertEqual(game.active_player(), 1)


class HasWon(TestCase):
    def test_winner_empty(self):
        game = TickTackToe()
        self.assertEqual(game.winner(), None)

    def test_winner_x_row_1(self):
        game = TickTackToe(board_x_row_1)
        self.assertEqual(game.winner(), 0)

    def test_winner_o_diag_2(self):
        game = TickTackToe(board_o_diag_2)
        self.assertEqual(game.winner(), 1)


class PlaceMark(TestCase):
    def test_place_x_on_empty(self):
        game = TickTackToe()
        game.place_mark(0, 0)
        self.assertEqual(game.board, board_x_in_corner)

    def test_place_o_fail(self):
        game = TickTackToe(board_x_in_corner)
        game.place_mark(0, 0)
        self.assertEqual(game.board, board_x_in_corner)

    def test_place_o_success(self):
        game = TickTackToe(board_x_in_corner)
        game.place_mark(0, 1)
        self.assertEqual(game.board, board_x_and_o)
