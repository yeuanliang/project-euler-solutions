#! python3
# Program Euler No.4

#def palindrome(n):
p=1
palindrome=[]
for i in range(999,99,-1):
    for j in range(999,99,-1):
        p=i*j
        if str(p)==str(p)[::-1]:
            palindrome.append(p)
print(max(palindrome))
print(len(palindrome))
print(set(palindrome))
print(len(set(palindrome)))
