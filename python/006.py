#! python3
# Program Euler No.6

sumsquare=0
sum=0
for i in range(1,101):
    sumsquare=sumsquare+i*i
    sum=sum+i
print(sum*sum-sumsquare)
