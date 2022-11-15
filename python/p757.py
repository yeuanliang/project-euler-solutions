limit = 10**14
i=1
r=set()
while True:
    n=i*(i+1)
    if 2*n>limit:
        break
    k=i
    while True:
        m=k*(k+1)
        c=m*n
        if c>limit:
            break
        r.add(c)
        k+=1
    i+=1

print(len(r))