#! python3
# Program Euler No.14

import time

def route_num(cube_size):
    L = [1] * cube_size
    for i in range(cube_size):
        for j in range(i):
            L[j] = L[j]+L[j-1]
        L[i] = 2 * L[i - 1]
    return L[cube_size - 1]

start = time.time()
n = route_num(20)
elapsed = (time.time() - start)
print("%d found in %s seconds" % (n,elapsed))

memo = {(0, 1) : 1, (1, 0) : 1}
def get_pathways(x, y):
    if (x, y) in memo : return memo[(x, y)]
    pathways = 0
    if 0 in (x, y):
        pathways = 1
    else:
        pathways = get_pathways(x-1, y) + get_pathways(x, y-1)
    memo[(x, y)] = pathways
    return pathways
t=get_pathways(20,20)
print(t)
