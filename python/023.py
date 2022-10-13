# python3
# Project Euler Problem 23
import math, time
a_nums = set()

def nas():
    start = time.time()
    # find all abundant nums < 28124
    sum = 0
    global a_nums
    for i in range(1, 28124):
        if sum_of_divisors(i) > i:
            a_nums.add(i)
    # find all non-abundant nums
    for i in range(1, 28124):
        sum += check(i)
    print("Execution Time: " + str(time.time() - start))
    return sum

def check(num):
    for j in a_nums:
        if is_abundant(num - j):
            return 0
    return num

def is_abundant(num):
    return num in a_nums

def sum_of_divisors(num):
    s_divs = set()
    for i in range(1, int(math.sqrt(num)+1)):
        if num % i == 0:
            s_divs.add(i)
            s_divs.add(num / i)
    s_divs.remove(num)
    return sum(s_divs)

print(nas())


# import time
# import math
#
# def chk(t):
#     factors=[]
#     i=1
#     sum_d=0
#     while i<=int(math.sqrt(t)):
#         if t%i==0:
#             factors.append(i)
#             # sum_d=sum_d+i
#             if i*i!=t and i>1:
#                 factors.append(t//i)
#                 # sum_d=sum_d+t//i
#         i=i+1
#     sum_d=sum(factors)
#     if sum_d>t:
#         return True
#     else:
#         return False
# upper=28123
# sieve=[False]*upper
# abundant=[]
# sums=[]
# allnum=[]
# start_time=time.time()
#
# for num in range(12,upper+1):
#     if chk(num):
#         abundant.append(num)
#
# for s in range(len(abundant)):
#     for t in range(s,len(abundant)):
#         sums.append(abundant[s]+abundant[t])
#         if abundant[s]+abundant[t]<=upper:
#             sieve[abundant[s]+abundant[t]-1]=True
# result=0
# for i in range(len(sieve)):
#     if sieve[i]==False:
#         result=result+i+1
# end_time=time.time()
# print("Time Taken: ",end_time-start_time)
# print(result)
