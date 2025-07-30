	[[Chapter 3]] [[Chapter 5]]
# Vector Fields
Let $D$ be the region in the 2D space $R^2$. A vector field on $D$ is a vector $\textbf{F}$ of the form:
$F(x,y) = P(x,y)\textbf{i} + Q(x,y)\textbf{j}$
# Vector Fields in 3D
A field vector on $D$ is a vector $\textbf{F}$ of the form:
$F(x,y,z) = P(x,y,z)\textbf{i} + Q(x,y,z)\textbf{j} + R(x,y,z) \textbf{k}$

Another example of a vector field is the **gradient field (or gradient vector)** denoted by $\nabla f = \frac{\partial f}{\partial x} \textbf{i}  + \frac{\partial f}{\partial y} \textbf{j}$
Respectively: 	$\nabla f = \frac{\partial f}{\partial x} \textbf{i}  + \frac{\partial f}{\partial y} \textbf{j} + \frac{\partial f}{\partial z} \textbf{k}$
# Line integrals of Vector fields
Given a curve $C: r(t), a\leq r \leq b$ and a vector field $\textbf{F}$ representing a force, both in the same space, we would like to calculate the total work done by $\textbf{F}$ a particle along the curve $C$ from the point $t=a$ (**initial point**) to the point $t=b$ (**terminal point**).
![[Pasted image 20240917182454.png]]
work done, called *the line integral of $F$ along $C$* and denoted by:
$\int_{C}\textbf{F}\cdot d\textbf{r} = \int_{a}^{b} \textbf{F}(r(t)) \cdot \textbf{r}\prime(t) dt = \int_{a}^{b}P(x(t),y(t)) \cdot x \prime (t) +Q(x(t), y(t)) y \prime (t)dt$

$\int_{C}\textbf{F}\cdot d\textbf{r} = \int_{a}^{b} \textbf{F}(r(t)) \cdot \textbf{r}\prime(t) dt = \int_{a}^{b}P(x(t),y(t),z(t)) \cdot x \prime (t) +Q(x(t), y(t),z(t)) \cdot y \prime (t) + R(x(t), y(t), z(t)) \cdot z \prime (t)dt$
# Conservative fields
A vector field $\textbf{F}$ is said to be conservative, if there is a scalar function $f$ such that $\textbf{F} = \nabla f$
where $\nabla f = \frac{\partial f}{\partial x} \textbf{i} + \frac{\partial f}{\partial y} \textbf{j}$
$\nabla f = \frac{\partial f}{\partial x} \textbf{i} + \frac{\partial f}{\partial y} \textbf{j} +\frac{\partial f}{\partial z} \textbf{k}$
# Line Integrals of Conservative fields

##### Note:
The line integral of **F** along a smooth curve $C: \textbf{r}(t), a \leq t \leq b$ joining the point $\textbf{r}(a)$ to the point $\textbf{r}(b)$, the work done by **F** in moving a particle along $C$ from $t=a$ to $t=b$
In other words
$\int_{c}\textbf{F} \cdot d\textbf{r}=\left(\int^{b}_{a}\textbf{F}(r(t)) \cdot \textbf{r} \prime (t) dt\right)=f(\textbf{r}(b)) - f(\textbf{r}(a))$
When calculating the line integral of a conservative field over any curve, ***no integration is required***. 
That means when the curve is closed,
$f(\textbf{r}(b)) = f(\textbf{r}(a))$
$f(\textbf{r}(b)) - f(\textbf{r}(a)) = 0$



When a curve $C$ is closed it is customary to write$\int_{c}\textbf{F} \cdot d\textbf{r}$ as $\oint_{c}\textbf{F} \cdot d\textbf{r}$

# Test for conservative fields
$\textbf{F} (x,y, z)$ is conservative ***if and only if*** 
$P_{x}= Q_y$ and $Q_{z}= R_{y}$ and $P_{z} =R_{x}$ 

# Green's Theorem in 2D
$\int_{c}\textbf{F}\cdot d\textbf{r}$ can be written as $\int_{a}^{b}P(x(t),y(t)) \cdot x \prime (t) +Q(x(t), y(t)) y \prime (t)dt$ 
It is customary to write
$\int_{a}^{b}P(x(t),y(t)) \cdot x \prime (t) dt = \int_{c} P dx$
$\int_{a}^{b}Q(x(t),y(t)) \cdot y \prime (t) dt = \int_{c} Q dy$
$\int_{c} P \space dx + Q \space dy$
![[Pasted image 20240918152645.png]]
A  simple closed curve is one that does not cross itself. The positive orientation of a simple closed curve refers to a single counterclockwise traversal of the curve.

If $D$ is the region enclosed by a simple, closed and positively oriented curve $C$, then $\oint_{c}\textbf{F} \cdot d\textbf{r} =\oint_{c} P \space dx + Q \space dy = \iint_{D}(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y})$ dA
When $C$ is negatively oriented the sign will be negative.

When closed curve $C$ is made up of two or more curves 
$\oint_{c} P \space dx + Q \space dy = \oint_{c_1} P \space dx + Q \space dy + \oint_{c_2} P \space dx + Q \space dy \space ... \space \oint_{c_n} P \space dx + Q \space dy$

# Curl and Divergence 
## The Curve Vector
The curl vector of $\textbf{F}$ denoted by curl $\textbf{F}$ is a vector defined by
$(\frac{\partial Q}{\partial z} - \frac{\partial R}{\partial y})\textbf{i} + (\frac{\partial P}{\partial z} - \frac{\partial R}{\partial x})\textbf{j} + (\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y})\textbf{k}$

It can also be calculated by the cross product of the operator and the vector field:
$\nabla \times \textbf{F} = \pmatrix{\frac{\partial }{\partial x} \\ \frac{\partial}{\partial y} \\ \frac{\partial}{\partial z}} \times \pmatrix{P\\ Q \\ R}=\pmatrix{\frac{\partial Q}{\partial z} - \frac{\partial R}{\partial y} \\ \frac{\partial P}{\partial z} - \frac{\partial R}{\partial x} \\ \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}}$
$\nabla = \frac{\partial }{\partial x}\textbf{i} + \frac{\partial}{\partial y} \textbf{j} + \frac{\partial}{\partial z}\textbf{k}$
## The Divergence
The **divergence** of $\textbf{F}$, denoted by div $\textbf{F}$, is a scalar defined by
 $div \space \textbf{F} = \frac{\partial P}{\partial x}\textbf{i} + \frac{\partial Q}{\partial y} \textbf{j} + \frac{\partial R}{\partial z}\textbf{k}$ 
 We can also write divergence of $\textbf{F}$ as
 $div \space \textbf{F} = \nabla \cdot \textbf{F}$ 