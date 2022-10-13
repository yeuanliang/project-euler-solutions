# python3
# coding:utf-8
import time
def next_p(array):
    n=len(array)
    last=n-1
    i=last
    while i>0 and array[i]<array[i-1]:
        i=i-1
    if i==0:
        return False
    k=i
    j=last
    while j>=i:
        if array[j]>array[i-1] and array[j]<array[k]:
            k=j
        j=j-1
    array[k],array[i-1]=array[i-1],array[k]
    array[i:]=array[i:][::-1]
    return True

def permunation(n):
    array_b=[]
    array_a=list(range(n))
    array_b.append(array_a[:])
    flag=next_p(array_a)
    array_b.append(array_a[:])
    while flag:
        flag=next_p(array_a)
        array_b.append(array_a[:])
    array_b.pop(-1)
    return array_b

s_time=time.time()
AA=permunation(4)
e_time=time.time()
# print(AA[999999])
print(AA)
print(len(AA))
print("Time: ",e_time-s_time)
