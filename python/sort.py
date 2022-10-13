# python3
# coding:utf-8
import time
base=[0,1,2,3,4,5,6,7,8,9]
# base=[0,1,2,3]
length=len(base)
group=['9876543210']
temp=['0']
f=1
start_time=time.time()
for i in range(1,length+1):
    f=f*i
# 生成N进制数
def gen_num(k):
    num=[]
    t=2
    while t<length+1:
        q=k//t
        r=k%t
        num.append(r)
        t=t+1
        k=q
    return num
for i in range(1,f):
    result=gen_num(i)
    # 由N进制数生成新的序列
    for j in range(1,length):
        temp.insert(result[j-1],str(base[j]))
    group.append(''.join(temp))
    temp=['0']
group.sort()
end_time=time.time()
print(group[0])
print(group[-1])
# print(len(group))
print(group[999999])
print("time: ",end_time-start_time)
