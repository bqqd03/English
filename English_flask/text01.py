n, d = map(int, input().split())

Q = [list(map(int,input().split())) for i in range(n)]
K = [list(map(int,input().split())) for i in range(n)]
V = [list(map(int,input().split())) for i in range(n)]
W = list(map(int,input().split()))
a = []
for i in range(n):
    b = []
    for j in range(n):
        num = 0
        for k in range(d):
            num +=Q[i][k]*K[j][k]
        b.append(num)
    a.append(b)

for i in range(n):
    for j in range(n):
        a[i][j] =a[i][j]*W[i]

for i in range(n):
    c =[]
    for j in range(d):
        for k in range(n):
            num +=a[i][k]*K[k][j]
        c.append(num)
    print(c)