#! python3

# Problem 44

pentagon=[]
for x in range(1,10001):
    p=x*(3*x-1)//2
    pentagon.append(p)
# result=[]
# s=0
# d=0
# for i in range(10000):
#     for j in range(i+1,10000):
#         d=pentagon[j]-pentagon[i]
#         if d in pentagon[j-i:i]:
#             s=pentagon[i]+pentagon[j]
#             if s in pentagon[j:i+j]:
#                 result.append([i,j,d])
print(pentagon)
# Problem 48
# powers=0
# s=''
# for i in range(1,1001):
#     powers=powers+i**i
# s=str(powers)[-10:]
# print(s)
#problem 34
# curious_number=[]
# factorial=[1]
# produce=1
# i=1
# while i<10:
#     for j in range(1,i+1):
#         produce=produce*j
#     factorial.append(produce)
#     i=i+1
#     produce=1
# def is_cruious_number(n):
#     s=str(n)
#     sum=0
#     for string in s:
#         sum=sum+factorial[int(string)]
#     if n==sum:
#         return True
#     else:
#         return False
# for num in range(3,9*factorial[9]):
#     if is_cruious_number(num):
#         curious_number.append(num)
# print(curious_number)
# print(sum(curious_number))

#problem 31
# total=200
# coin_value=[1,2,5,10,20,50,100,200]
# coin_quantity=[total,total//2,total//5,total//10,total//20,total//50,total//100,total//200]
# def coins_variety(c,m):
#     cointype=[1,2,5,10,20,50,100,200]
#     if c==0:
#         return 1
#     elif m==1:
#         return 1
#     else:
#         result=coins_variety(c,m-1)
#         for j in range(1,c//cointype[m-1]+1):
#             result=result+coins_variety(c-j*cointype[m-1],m-1)
#         return result
# # p=coins_variety(200,8)
# print(coins_variety(100,3))
# print(p)
# i=0
# for a in range(total+1):
#     for b in range(total//2+1):
#         for c in range(total//5+1):
#             for d in range(total//10+1):
#                 for e in range(total//20+1):
#                     for f in range (total//50+1):
#                         for g in range(total//100+1):
#             #                 for h in range(total//200):
#                             if a+2*b+5*c+10*d+20*e+50*f+100*g==200:
#                                 i=i+1
# print(i+1)

# problem 33
# abc=[]
# dm=[]
# nm=[]
# produce_nm=1
# produce_dm=1
# for a in range(1,10):
#     for b in range(1,10):
#         for c in range(1,10):
#             if (10*b+c)*a==(10*a+b)*c and a!=b and b!=c:
#                 abc.append([a,b,c])
#                 dm.append(c)
#                 nm.append(a)
# for item in nm:t
#     if item in dm:
#         nm.remove(item)
#         dm.remove(item)
# print(dm)
# print(nm)
# print(abc)
# for a in nm:
#     produce_nm=produce_nm*a
# for c in dm:
#     produce_dm=produce_dm*c
# if produce_dm%produce_nm==0:
#     print(produce_dm/produce_nm)

# problem 29
# total=[]
# for a in range(2,101):
#     for b in range(2,101):
#         num=a**b
#         total.append(num)
# print(len(set(total)))

#problem 30
# number_sum={}
# for i in range(10):
#     number_sum[i]=i**5
# digit_fifth=[]
# sum_dig=0
# s=''
# for i in range(2,6*number_sum[9]):
#     s=str(i)
#     for t in s:
#         sum_dig=sum_dig+number_sum[int(t)]
#     if i==sum_dig:
#         digit_fifth.append(i)
#         sum_dig=0
#     sum_dig=0
# print(sum(digit_fifth))


# problem 32
# s=''
# produce=[]
# temp=[]
# p=1
# p2=1
# for i in range(10,100):
#     for j in range(100,1000):
#             p=i*j
#             s=str(p)+str(i)+str(j)
#             if ('0' in s)==False and len(str(p))==4 and len(set(s))==9:
#                 temp.append([p,i,j])
#                 produce.append(p)
# for m in range(2,10):
#     for n in range(1000,10000):
#             p2=m*n
#             s=str(p2)+str(m)+str(n)
#             if ('0' in s)==False and len(str(p2))==4 and len(set(s))==9:
#                 temp.append([p2,m,n])
#                 produce.append(p2)
# print(sum(set(produce)))
# print(set(produce))
# print(temp)


# problem 17
# d={'one':3,'two':3,'three':5,'four':4,'five':4,'six':3,'seven':5,'eight':5,'nine':4,'ten':3,'eleven':6,'twelve':6,'thirteen':8,'fourteen':8,'fifteen':7,'sixteen':7,'seventeen':9,'eighteen':8,'nineteen':8,'twenty':6,'thirty':6,'forty':5,'fifty':5,'sixty':5,'seventy':7,'eighty':6,'ninety':6,'hundred':7,'thousand':8}
# letters_one_nine=d['one']+d['two']+d['three']+d['four']+d['five']+d['six']+d['seven']+d['eight']+d['nine']
# letters_ten_nineteen=d['ten']+d['eleven']+d['twelve']+d['thirteen']+d['fourteen']+d['fifteen']+d['sixteen']+d['seventeen']+d['eighteen']+d['nineteen']
# letters_99=9*letters_one_nine+letters_ten_nineteen+10*d['twenty']+10*d['thirty']+10*d['forty']+10*d['fifty']+10*d['sixty']+10*d['seventy']+10*d['eighty']+10*d['ninety']
# total=10*letters_99+900*d['hundred']+99*9*3+100*letters_one_nine+d['one']+d['thousand']
# print(total)
#
# problem 20
# import time
# def digit_sum(n):
#     temp=str(n)
#     sum=0
#     for s in temp:
#         sum=sum+int(s)
#     return sum
# def factorial(n):
#     result=1
#     for num in range(1,n+1):
#         result=result*num
#     return result
# s_time=time.time()
# f=factorial(100)
# result=digit_sum(f)
# e_time=time.time()
# print("Time Taken = ",e_time-s_time)
# print(result)
# problem 25
# fib={1:1,2:1}
# def Fibonacci(n):
#     if n in fib:
#         return fib[n]
#     else:
#         fn=Fibonacci(n-1)+Fibonacci(n-2)
#         fib[n]=fn
#         return fn
# i=1
# while len(str(Fibonacci(i)))<1000:
#     i=i+1
# print(i)
# print(len(str(Fibonacci(i))))
# print(i-1)
# print(len(str(Fibonacci(i-1))))

# problem 16
# produce=2**1000
# s=str(produce)
# sum=0
# for i in range(len(s)):
#     sum=sum+int(s[i])
# print(sum)

# problem 28
# sum1=0
# sum2=0
# for i in range(3,1002,2):
#     sum1=sum1+i*i
# for j in range(2,1001,2):
#     sum2=sum2+j
# result=1+4*sum1-6*sum2
# print(result)

# problem 21
# import math
# def gen_factors(t):
#     factors=[]
#     i=1
#     while i<=int(math.sqrt(t)):
#         if t%i==0:
#             factors.append(i)
#             if i*i!=t and i>1:
#                 factors.append(t//i)
#         i=i+1
#     return factors
# divisors={}
# amicable=[]
# sum_f=0
# sum_a=0
# for num in range(1,10001):
#     temp=gen_factors(num)
#     sum_f=sum(temp)
#     divisors[num]=sum_f
#     temp=[]
# for num in range(2,10001):
#     t=divisors[num]
#     if t in divisors and t!=num:
#         if divisors[t]==num:
#             amicable.append(num)
# sum_a=sum(amicable)
# print(sum_a)
# print(amicable)

#problem 23
# import time
# import math
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
# # sieve=[False]*upper
# abundant=[]
# sums=[]
# allnum=[]
# start_time=time.time()
# for num in range(12,upper+1):
#     if chk(num):
#         abundant.append(num)
# for s in range(len(abundant)):
#     for t in range(s,len(abundant)):
#         sums.append(abundant[s]+abundant[t])
#         # if abundant[s]+abundant[t]<=upper:
#             # sieve[abundant[s]+abundant[t]-1]=True
# for k in range(1,28123):
#     allnum.append(k)
# # result=0
# filters=list(set(allnum)-set(sums))
# result=sum(filters)
# # for i in range(len(sieve)):
# #     if sieve[i]==False:
# #         result=result+i+1
# end_time=time.time()
# print("Time Taken: ",end_time-start_time)
# print(result)

# n=28128
# for a in abundant:
#     b=28128-a
#     if b in abundant_num:
#         print("True")
#     else:
#         print("False")
    # abundant_sum.append(n)
    # n=n-2
# while n>28000:
#     for a in abundant:
#         b=n-a
#         if b in abundant_num:
#             abundant_sum.append(n)
#             n=n-2
#         else:
#             break

# for num in range(2,10001):
#     t=divisors[num]
#     if t in divisors and t!=num:
#         if divisors[t]==num:
#             amicable.append(num)
# sum_a=sum(amicable)
# print(sum_a)
# print(abundant_sum)
# print(len(abundant))
