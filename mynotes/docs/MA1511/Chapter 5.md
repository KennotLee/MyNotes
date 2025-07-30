[[Chapter 4]]
# Sequences
1. $\lim\limits_{n\rightarrow \infty} a^{\frac{1}{n}}= 1$
2. $\lim\limits_{n\rightarrow \infty} n^{\frac{1}{n}}= 1$
3. $\lim\limits_{n\rightarrow \infty} r^n= 0$ for $-1 < r <1$
4. $\lim\limits_{n\rightarrow \infty} \left(1 + \frac{a}{n} \right)^{\frac{1}{n}}= e^{a}$
$\sum^{\infty}_{k=1}ar^{k-1}$ converges if $-1 < r <1$
$\sum^{\infty}_{k=1} ar^{k-1}=\frac{a}{1-r}$ for $-1<r<1$
$\sum^{\infty}_{k=1} ar^{k-1}=\frac{1}{kp}$ The series is convergent if $p>1$ and is divergent if $p\leq 1$
# Ratio Test
Given a power series
$\sum\limits^{\infty}_{k=1}c_k(x-a)^{k}$
let $a_{k}=c_k(x-a)^k$

let $L=\lim\limits_{k \rightarrow \infty} |\frac{a_{k}+1}{a_k}|$
if $L < 1$ the power series converges

# Root Test
Let $L = \lim\limits_{k \rightarrow \infty}|a_k^\frac{1}{k}|$
if $L < 1$ (including $L=0$), the power series converges
if $L > 1$ (including $L=\infty$), the power series diverges

# Taylor series
$\sum\limits^{\infty}_{k=0}\frac{f^{(k)}(a)}{k!}(x-a)^{k} =\sum\limits^{\infty}_{k=0}\frac{e^a}{k!}(x-a)^k$
# Maclaurin series
$\sum\limits^{\infty}_{k=0}\frac{f^{(k)}(0)}{k!}(x)^{k}$
# Taylor polynomial
Given a function $f$, its polynomial centered at $a$, denoted by $P_n$, is the sum of the first $(n+1)$ terms of its Taylor series $\sum\limits^{\infty}_{k=0}\frac{f^{(k)}(a)}{k!}(x-a)^{k}$
that is $P_{n}=\sum\limits^{n}_{k=0}\frac{f^{(k)}(a)}{k!}(x-a)^{k}$