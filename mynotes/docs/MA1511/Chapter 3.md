	
# Chapter 3
**Previous:** [Chapter 2](./Chapter%202.md)

# Curves and Motion in Space
![[Pasted image 20240908232403.png]]
A particle moving in 3D space. It's position at $t$ can be described by 3 parametric equations
$x = f(t)$, $y=g(t)$, and $z=h(t)$
### Position: $\textbf{r} = \pmatrix{f(t) \\ g(t) \\ h(t)}$
### Velocity: $\textbf{r} \prime (t) = \frac{d}{dt} \textbf{r}(t) = \pmatrix{f \prime(t)\\ g \prime(t) \\ h \prime (t)}$
### Acceleration: $\textbf{r} \prime \prime (t) = \frac{d^2}{dt^2} \textbf{r}(t) = \pmatrix{f \prime \prime(t)\\ g \prime \prime(t) \\ h \prime \prime (t)}$

# Tangent Lines

A vector equation of the tangent line to a curve $\textbf{r} = \pmatrix{f(t) \\ g(t) \\ h(t)}$ at the point where $t = t_0$ is 
$\textbf{r} = \pmatrix{f(t_0) \\ g(t_0) \\ h(t_{0)}} +s\pmatrix{f \prime(t_0)\\ g \prime(t_0) \\ h \prime (t_{0)}}, s \in \textbf{R}$

# Line segments
![[Pasted image 20240908233416.png]]
The line segment joining two distinct point $\textit{A}(x_{1}, y_{1}, z_{1})$ and $\textit{B}(x_2,y_2,z_{2})$ has parametric representations:
$\textbf{r}(t) = (1-t)\pmatrix{x_1\\y_1\\z_{1}}+ t\pmatrix{x_{2}\\ y_{2} \\ z_{2}} = \pmatrix{(1-t)x_{1}+ tx_{2}\\ (1-t)y_{1}+ y_{2}\\(1-t)z_{1}+ tz _2}$


# Circles (In a 2D space)
$\textbf{r}(t) = \pmatrix{\textit{r}cost \\\textit{r}sint}, 0 \leq t \leq 2\pi$
# Definite Integrals 

![[Pasted image 20240909100709.png]]
Let $\textbf{r} = \pmatrix{f(t) \\ g(t) \\ h(t)} = (f(t))i + g(t)j + h(t)k$
$\int\textbf{r}(t)dt = (\int f(t)dt)i + (\int g(t)dt)j + (\int h(t)dt)k$ 

# Definite integrals

$\int_{a}^{b}\textbf{r}(t)dt = (\int_{a}^{b} f(t)dt)i + (\int_{a}^{b} g(t)dt)j + (\int_{a}^{b} h(t)dt)k \space dt$ 

The Smooth curve is defined by the function 
$\textbf{r} = \pmatrix{f(t) \\ g(t) \\ h(t)}, a \leq t \leq b$
Length L can be obtained with:
$L = \int_{a}^{b} \sqrt{(f \prime (t))^{2}+(g \prime (t))^{2}+ (h \prime (t))^{2}}\space dt$
# Line integrals 
![[Pasted image 20240909000424.png]]
height = $f(x(t), y(t))$
surface: $z = f(x, y)$
curve $C$: $x=x(t), y=y(t)$

The line integral of $C$ is given by
## 2D
$\int_{C}f(x,y) \space ds = \int^{b}_{a}f(x(t),y(t)) \cdot \sqrt{(x\prime (t))^{2}+ y\prime(t)^{2}} \space dt$

## 3D
$\int^{b}_{a}f(x(t),y(t),z(t)) \cdot \sqrt{(x\prime (t))^{2}+ (y\prime(t))^{2} + (z\prime(t))^2} \space dt$
# Orientation of curves

Positive orientation corresponds to increasing values of $t$
Negative orientation corresponds to  decreasing values of $t$

# Parametric surfaces
$\textbf{r}(u,v)=x(u,v)i + y(u,v)j + z(u,v)k$
![[Pasted image 20240909001150.png]]
for each $u,v$ in D $\textbf{r}(u,v)$ represents a point in space. The points constitute a surface.

Let $P$ be the point on the parametric surface
$\textbf{r}(u,v)=x(u,v)i + y(u,v)j + z(u,v)k, (u,v) \in D$
with position vector $\textbf{r}(u_0,v_{0})= x_{0}i+ y_{0}j + z_{0}k$ and let $\textbf{n} = (\textbf{r}_{u} \times \textbf{r}_v)(u_{0},v_{0})$ be the vector $\textbf{r}_{u} \times \textbf{r}_v$ evaluated at $(u_{0},v_{0})$

A vector equation of the tangent plane at $P$ to the surface is given by
$\textbf{r} \cdot \textbf{n} = \pmatrix{x_{0}\\ y_{0}\\ z_{0}} \cdot \textbf{n}$
where $\textbf{r}  = \pmatrix{x \\ y \\ z}$ is the position vector of any point on the tangent plane.

**Next:** [Chapter 4](./Chapter%204.md)