
[[Chapter 2]]
# Level curves
$f(x,y) = k$
# Tangent planes and Normal Lines
(insert image here)
Vector equation of a plane
$\textbf{r} \cdot \pmatrix{f_x(a, b)\\f_y(a,b)\\-1} = \pmatrix{a \\ b \\ f(a,b)} \cdot \pmatrix{f_x(a, b)\\f_y(a,b)\\-1}$
OR
$z = f_x(a,b) \cdot (x-a) + f_y(a,b) \cdot (y-b) + f(a,b)$

In line form  $\textbf{r} =\pmatrix{a \\ b\\ f(a,b)} + \pmatrix{f_x(a,b) \\ f_y(a, b)\\ -1}t$ 

# Directional Derivative 
$D_u f(a, b) = \textbf{u} _1 f_x(a, b) + \textbf{u} _2 f_y(a, b) = \pmatrix{f_x(a, b) \\ f_y(a, b)} \cdot \pmatrix{\textbf{u}_1 \\ \textbf{u}_2}$ 

# Extrema 
In some open subset of D containing (a, b) for all (x, y):

| Extrema       | Condition 1               |
| ------------- | ------------------------- |
| Local Maximum | $f_x(a , b) \geq f(x, y)$ |
| Local Minimum | $f_y(a, b) \geq f(x, y)$  |
#### If f has a local maximum / minimum at a point (a, b) of its domain, then
###  $f_x(a, b) = 0$ and $f_y(a,b) = 0$

$f(x, y)$ has a critical point at $(a, b)$ if $f_x (a, b) = 0$ and $f_y (a, b) = 0$

## Derivative Test
### $D = f_{xx}(a, b) \cdot f_{yy}(a,b) - (f_{xy}(a,b))^2$

$f$ has a local maximum at $(a, b)$ if $D>0$ and $f_{xx} (a,b) < 0$
$f$ has a local minimum at $(a, b)$ if $D > 0$ and $f_{xx} (a,b) > 0$

$f$ is neither a local maximum nor minimum at $a,b$ if $D<0$

Test is inconclusive if $D=0$

# Lagrange multiplier

The maximum / minimum value of $f(x,y)$  subject to the constraint $g(x,y) = 0$ occurs at the point $(x,y)$ that satisfies the following equation.
### $f_{x} = \lambda g_{x}$	
### $f_{x}=\lambda g_{y}$
## $g(x,y) = 0$