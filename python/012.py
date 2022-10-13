#! python3
# Program Euler No.12

import time
import math

s_time=time.time()

# 算出所有因子，保存到一个list中
# def gen_factors(t):
#     factors=[]
#     i=1
#     while i<=int(math.sqrt(t)):
#         if t%i==0:
#             factors.append(i)
#             if i*i!=t:
#                 factors.append(t/i)
#         i=i+1
#     return len(factors)

# 计算只计算因子个数
def factors_num(t):
    f_num=0
    i=1
    while i<=int(math.sqrt(t)):
        if t%i==0:
            f_num=f_num+2
            if i*i==t:
                f_num=f_num+1
        i=i+1
    return f_num

n=1
# factorsnumber=[]
count=1
while n>=1:
    tri_num=(n*(n+1))/2
    if n%2==0:
        count=factors_num(n/2)*factors_num((n+1))
    else:
        count=factors_num(n)*factors_num((n+1)/2)
    # total=gen_factors(tri_num)
    if count<1000:
        n=n+1
        # factorsnumber.append(count)
    else:
        break
# print(factorsnumber)
print(count)
print(n)
print(tri_num)
e_time=time.time()
print("Time Taken = ",e_time-s_time)
