#! python3
# Program Euler No.1
sum=0
list=[]
for n in range(1,1000):
    if n%3==0 or n%5==0:
        list.append(n)
        sum=sum+n
print("sum =",sum)
print("The Numbers Are:",list)
