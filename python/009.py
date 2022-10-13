#! python3
# Program Euler No.9

import time
s_time=time.time()
result=1
for a in range(1,333):
    for b in range(a,int((1000-a)/2)):
    # for b in range(a,1000-2*a):
        # for c in range((1000-2*b),(1001-2*a)):
            c=1000-a-b
            if a*b+1000*c==500000:
            # if a*a+b*b==c*c:
                print(a,b,c)
                result=a*b*c
                print("Produce: ",result)
e_time=time.time()
print("Time Taken = ",e_time-s_time)
