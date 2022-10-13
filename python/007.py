#! python3
# Program Euler No.7
import time
s_time=time.time()
def seive(n):
    x=[1]*n
    x[0]=0
    for i in range(2,int(n/2)+1):
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

p=primes(110000)
e_time=time.time()
print("Total Primes Under 110000: ",len(p))
print("The 10001st Prime is ",p[10000] )
print("Time Taken = ",e_time-s_time)
