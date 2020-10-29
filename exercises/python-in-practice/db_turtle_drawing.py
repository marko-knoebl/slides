# code adapted from https://zodb.readthedocs.io/en/latest/installing.html

import turtle
import transaction
from ZODB import DB, FileStorage

storage = FileStorage.FileStorage('drawing.fs')
db = DB(storage)
connection = db.open()
drawing = connection.root()

def switchupdown(x=0, y=0):
    if turtle.pen()["pendown"]:
        turtle.up()
    else:
        turtle.down()

def redraw(turtle_buffer):
    ops = [turtle_buffer.pop() for i in range(turtle_buffer.nr_of_items())]
    ops.reverse()
    for op in ops:
        if op[0] == 'go':
            turtle.up()
            turtle.goto(op[1])
            if op[3][0]:
                turtle.down()
            turtle.goto(op[2])

def clear():
    turtle.clearscreen()
    init()

def quit():
    drawing['turtle_buffer'] = turtle.getturtle().undobuffer
    transaction.commit()
    turtle.bye()

def init():
    turtle.onscreenclick(turtle.goto,1)
    turtle.onscreenclick(switchupdown,3)
    turtle.onkey(quit, 'q')
    turtle.onkey(clear, 'c')
    turtle.listen()

if __name__ == "__main__":
    if 'turtle_buffer' in drawing:
        redraw(drawing['turtle_buffer'])
    init()
    turtle.mainloop()
