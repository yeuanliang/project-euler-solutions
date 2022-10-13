# python3
# Project Euler Problem 26
import time
def reciprocal(d):
    remender=[]
    quotient=[]
    temp_r=1
    while True:
        r=10*temp_r%d
        q=10*temp_r//d
        if r==0:
            return 0
        elif r in remender:
            return len(remender)
        else:
            remender.append(r)
            quotient.append(q)
            temp_r=r

digits={}
start_time=time.time()
for i in range(2,1000):
    digits[reciprocal(i)]=i
print("longest recurring cycle: ",max(digits))
print("d= ",digits[max(digits)])
end_time=time.time()
print("Time: ",end_time-start_time)
# print(reciprocal(983))
