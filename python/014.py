#! python3
# Program Euler No.14

# 获取整个链及开始数字
# chain_length=0
# temp_length=0
# starting_number=0
#
# def collatz(n):
#     chain=[n]
#     temp_num=n
#     while temp_num!=1:
#         if temp_num%2==0:
#             temp_num=int(temp_num/2)
#             chain.append(temp_num)
#         else:
#             temp_num=3*temp_num+1
#             chain.append(temp_num)
#     return chain
#
#
# for i in range(1,1000001):
#     temp_length=len(collatz(i))
#     if temp_length>chain_length:
#         chain_length=temp_length
#         starting_number=i
#
# print(chain_length)
# print(starting_number)
# print(collatz(starting_number))

# 仅攻取开始数字及链长度
# import time
# def collatz(n):
#     chain_num=1
#     if n==1:
#         chain_num=4;
#     while n>1:
#         if n%2==0:
#             n=n//2
#         else:
#             n=3*n+1
#         chain_num=chain_num+1
#     return chain_num
#
# chain_length=0
# s_time=time.time()
# for i in range(1,1000001):
#     temp_length=collatz(i)
#     if temp_length>chain_length:
#         chain_length=temp_length
#         starting_number=i
# e_time=time.time()
# print("Time Taken = ",e_time-s_time)
# print(chain_length)
# print(starting_number)

import time
collatz_map={1:1}

def recursive_collatz(n):
    if n in collatz_map:
        return collatz_map[n]
    if n % 2 == 0:
        x = 1 + recursive_collatz(n//2)
    else:
        x = 1 + recursive_collatz(3*n+1)
    collatz_map[n] = x
    return x

largest_so_far = 1
highest = 0
s_time=time.time()
for i in range(1,1000000):
    temp = recursive_collatz(i)
    if temp > largest_so_far:
        highest = i
        largest_so_far = temp
e_time=time.time()
print("Time Taken = ",e_time-s_time)
print(highest)
print(largest_so_far)
print(collatz_map)
