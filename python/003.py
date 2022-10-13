#! python3
# Program Euler No.3

def primefactor(n):
    factor=[]
    i=2
    while i*i<=n:
        if n%i==0:
            n=n/i
            factor.append(i)
        else:
            i=i+1
    factor.append(int(n))
    return factor

print("请输入一个正整数：")
n=int(input())
s='*'.join(map(str,primefactor(n)))
maxfactor=max(primefactor(n))
print("\n%d=%s" % (n,s))
print("The largest prime factor of %d is %d" % (n,maxfactor))
