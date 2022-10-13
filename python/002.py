#! python3
# Program Euler No.2

# a=1
# b=2
# f=[1,2]
# sum=2
# while b<4000000:
#     old_a=a
#     a=b
#     b=old_a+b
#     f.append(b)
#     if b%2==0:
#         sum=sum+b
# print("sum =",sum)
# print(f)

def Fibonacci(n):
    if n==1:
        return 1
    if n==2:
        return 2
    else:
        return Fibonacci(n-1)+Fibonacci(n-2)
i=1
sum=0
limit=4000000
while Fibonacci(i)<limit:
    if Fibonacci(i)%2==0:
        sum=sum+Fibonacci(i)
    i=i+1
print(sum)
