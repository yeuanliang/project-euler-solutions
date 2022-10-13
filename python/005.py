#! python3
# Program Euler No.5
#求最少公倍数

import time
start_time=time.time()

def seive(n):
    x=[1]*n
    x[0]=0
    for i in range(2,n//2+1):
        j=2*i
        while j<=n:
            x[j-1]=0
            j=j+i
    return x

def primes(n):
    primes=[]
    x=seive(n)
    for num in range(1,n+1):
        if x[num-1]==1:
            primes.append(num)
    return primes

def factors(n):
    temp=primes(n)
    ex=[]
    for f in temp:
        k=2
        while n/(f**k)>=1:
            ex.append(f)
            k=k+1
    factors=temp+ex
    return factors

result=1
f=factors(20)
for i in f:
    result=result*i
print(result)

end_time=time.time()
print("Time Taken = ",end_time-start_time)
