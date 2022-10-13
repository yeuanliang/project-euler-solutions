#! python3

import time

def gen_p(list,n):
    if n==1:
        result=[[list[0]]]
        return result
    else:
        result=gen_p(list,n-1)
        total=len(result)
        tmp_result=[]
        i=0
        j=0
        while i<total:
            tmp=result[i].copy()
            while j<n:
                tmp.insert(j,list[n-1])
                tmp_result.append(tmp)
                tmp=result[i].copy()
                j=j+1
            i=i+1
            j=0
        result=tmp_result
    return result
s=''
i=0
p_in_str=[]
start_time=time.time()
p=gen_p(['0','1','2','3','4','5','6','7','8','9'],10)
while i<len(p):
    s=''.join(p[i])
    p_in_str.append(s)
    s=''
    i=i+1
p_in_str.sort()
print(p_in_str[999999])
end_time=time.time()
print("Time Taken = ",end_time-start_time)
