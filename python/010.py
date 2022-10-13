#! python3
# Program Euler No.10
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

p=primes(1000000)
total=len(p)
sumprimes=[]
sum=0
k=2
while k<=total:
    for m in range(1,k+1):
        sum=sum+p[m-1]
    if sum in p:
            sumprimes.append([sum,k])
    k=k+2
    sum=0
print(sumprimes)
# sum=0
# for e in p:
#     sum=sum+e
e_time=time.time()
# print(sum)
print("Time Taken = ",e_time-s_time)
