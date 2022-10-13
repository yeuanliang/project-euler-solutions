# python3
# coding:utf-8

triangle=[]
square=[]
pentagonal=[]
hexagonal=[]
heptagonal=[]
octagonal=[]
n=1
while n*(n+1)/2<10000:
	# if n*(n+1)/2>1000 and str(n*(n+1)/2)[2]!='0':
	if n*(n+1)/2>1000:
		triangle.append(str(n*(n+1)/2))
	n=n+1
n=1
while n*n<10000:
	# if n*n>1000 and str(n*n)[2]!='0':
	if n*n>1000:
		square.append(str(n*n))
	n=n+1
n=1
while n*(3*n-1)/2<10000:
	# if n*(3*n-1)/2>1000 and str(n*(3*n-1)/2)[2]!='0':
	if n*(3*n-1)/2>1000:
		pentagonal.append(str(n*(3*n-1)/2))
	n=n+1
n=1
while n*(2*n-1)<10000:
	# if n*(2*n-1)>1000 and str(n*(2*n-1))[2]!='0':
	if n*(2*n-1)>1000:
		hexagonal.append(str(n*(2*n-1)))
	n=n+1
n=1
while n*(5*n-3)/2<10000:
	# if n*(5*n-3)/2>1000 and str(n*(5*n-3)/2)[2]!='0':
	if n*(5*n-3)/2>1000:
		heptagonal.append(str(n*(5*n-3)/2))
	n=n+1
n=1
while n*(3*n-2)<10000:
	# if n*(3*n-2)>1000 and str(n*(3*n-2))[2]!='0':
	if n*(3*n-2)>1000:
		octagonal.append(str(n*(3*n-2)))
	n=n+1

tmp3_1=[]
tmp3_2=[]
for tmp in triangle:
	tmp3_1.append(tmp[:2])
	tmp3_2.append(tmp[-2:])
tmp4_1=[]
tmp4_2=[]
for tmp in square:
	tmp4_1.append(tmp[:2])
	tmp4_2.append(tmp[-2:])
tmp5_1=[]
tmp5_2=[]
for tmp in pentagonal:
	tmp5_1.append(tmp[:2])
	tmp5_2.append(tmp[-2:])
tmp6_1=[]
tmp6_2=[]
for tmp in hexagonal:
	tmp6_1.append(tmp[:2])
	tmp6_2.append(tmp[-2:])
tmp7_1=[]
tmp7_2=[]
for tmp in heptagonal:
	tmp7_1.append(tmp[:2])
	tmp7_2.append(tmp[-2:])
tmp8_1=[]
tmp8_2=[]
for tmp in octagonal:
	tmp8_1.append(tmp[:2])
	tmp8_2.append(tmp[-2:])

tmp8=[]
for tmp in octagonal:
	if (tmp[:2] in tmp7_2)==True and (tmp[-2:] in tmp3_1)==True:
		tmp8.append(tmp)
tmp7=[]
for tmp in heptagonal:
	if (tmp[:2] in tmp6_2)==True and (tmp[-2:] in tmp8_1)==True:
		tmp7.append(tmp)
tmp6=[]
for tmp in hexagonal:
	if (tmp[:2] in tmp5_2)==True and (tmp[-2:] in tmp7_1)==True:
		tmp6.append(tmp)
tmp5=[]
for tmp in pentagonal:
	if (tmp[:2] in tmp4_2)==True and (tmp[-2:] in tmp6_1)==True:
		tmp5.append(tmp)
tmp4=[]
for tmp in square:
	if (tmp[:2] in tmp3_2)==True and (tmp[-2:] in tmp5_1)==True:
		tmp4.append(tmp)
tmp3=[]
for tmp in triangle:
	if (tmp[:2] in tmp8_2)==True and (tmp[-2:] in tmp4_1)==True:
		tmp3.append(tmp)

print(triangle)
print(square)
print(pentagonal)
print(hexagonal)
print(heptagonal)
print(octagonal)
print('------------')
print(tmp3)
print(tmp4)
print(tmp5)
print(tmp6)
print(tmp7)
print(tmp8)
# print(tmp8_1)
# print(tmp8_2)
