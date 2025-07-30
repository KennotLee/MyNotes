[[Chapter 1]] [[Chapter 3]]
Let $f$ be a continuous function on the rectangular domain  $\{(x,y): a \leq x \leq b , c \leq y \leq d\}$
# Integration
### $\int_{a}^{b} \int_{c}^{d} f(x,y) dydx = \int_{d}^{c} \int_{a}^{b}f(x,y)dxdy$

Let f be defined on the rectangular domain $\{(x,y): a \leq x \leq b , c \leq y \leq d\}$
### $\int_{a}^{b} \int_{c}^{d} f(x,y) dydx = (\int_{d}^{c} a(x)dx)(\int_{d}^{c}b(y)dy)$

# Type I Domain 

![[Pasted image 20240904205714.png]]

A region D is said to be a type I region if it is bounded below two curves, say $y = g(x)$ and $y=h(x)$, over an interval of the form $a\leq x\leq b$, where on curve lies entirely above the other.
### $\int \int_{D}f(x,y)dA = \int_{a}^{b}\int^{h(x)}_{g(x)}f(x,y) dydx$

# Type II Domain
![[Pasted image 20240904205748.png]]
### $\int \int_{D}f(x,y)dA = \int_{c}^{d}\int^{h(y)}_{g(y)}f(x,y) dxdy$

A region D is said to be a type II region if it is bounded between two curves, say $x=g(y)$ and $x=h(y)$, over an interval of the form  $a\leq x\leq b$ where one curve lies entirely to the right of the other.

#### If the domain is both Type I and Type II order can be swapped

# Polar coordinates conversion
$x = r cos \theta$
$y=rcos \theta$
$r^{2}=x^{2} + y^2$
![[Pasted image 20240904211843.png]]
Let f be a cont. function defined on the polar rect.
$D \{(r,\theta): g(\theta) \leq r \leq h(\theta)$ and $\alpha \leq \theta \leq \beta\}$, where $0 \leq \beta - \alpha \leq 2\pi$\
### $\int \int_{D}f(x,y) = \int_\alpha^\beta\int_{g(\theta)}^{h(\theta)}r drd\theta$


In case $g(\theta) = 0$
### $\int \int_{D}f(x,y) = \int_\alpha^\beta\int^{h(\theta)}_{0}r drd\theta$




