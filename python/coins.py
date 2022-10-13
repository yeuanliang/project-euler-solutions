# python3
import time
# def coins_variety(c,m):
#     cointype=[1,2,5,10,20,50,100,200]
#     if c==0 or m==1:
#         return 1
#     else:
#         result=0
#         for j in range(0,c//cointype[m-1]+1):
#             result=result+coins_variety(c-j*cointype[m-1],m-1)
#         return result
# start_time=time.time()
# p=coins_variety(200,8)
# print(p)
# end_time=time.time()
# print("Time: ",end_time-start_time)

def coins_variety(c,m):
    cointype=[1,2,5,10,20,50,100,200]
    res={}
    if c==0 or m==1:
        return 1
    if (c,m) in res:
        return d[(c,m)]
    else:
        result=0
        for j in range(0,c//cointype[m-1]+1):
            result=result+coins_variety(c-j*cointype[m-1],m-1)
        res[(c,m)]=result
        return result
start_time=time.time()
p=coins_variety(200,8)
print(p)
end_time=time.time()
print("Time: ",end_time-start_time)

# coins=[1,2,5,10,20,50,100,200]
# amount=200
# start_time=time.time()
# ways=[[1],[1],[1],[1],[1],[1],[1],[1]]
# ways[0]=[1]*201
# c=0
# for i in range(1,len(coins)):
#     for j in range(1,amount+1):
#         if j<coins[i]:
#             c=ways[i-1][j]
#             ways[i].append(c)
#             c=0
#         else:
#             c=ways[i-1][j]+ways[i][j-coins[i]]
#             ways[i].append(c)
#             c=0
# print(ways[7][200])
# end_time=time.time()
# print("Time: ",end_time-start_time)
