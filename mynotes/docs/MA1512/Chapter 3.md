# The Harmonic Oscillator 
## Non homogeneous Linear differential equations
Consider the non-homogeneous second-order differential equation $y\prime\prime + py\prime + qy = f(X)$ where $f(x) \neq 0$
The general solution to this differential equation is given by 
$y(x) = y_{h}(x)+y_p(x)$
Where $y_h(x)$ is the general solution to the complementary homogeneous equation $y\prime\prime + py\prime +qy=0$ and $y_p(x)$ is any particular solution. When $f(x)$ involves simple functions, we can attempt to 'guess' $y_p(x)$ by the method of undetermined coefficients
- If f(x) is a polynomial of degree $n$, we let  $y_p$ be an arbitrary $n$th degree polynomial with undetermined coefficient
- If f(x) contains an exponential $e^kx$, then we try $y_{p}=Ae^{kx}$, where $A \in \mathbb{R}$ is  an undetermined coefficient
- if f(x) contains either $cos(kx) = \Re(e^{ikx})$ or $sin(kx) = \Im(e^{ikx})$, we can instead solve for the real and imaginary solutions, respectively, of tghe complex equation $y\prime\prime + my\prime+n\prime=e^{ikx}$ by trying $y_{p}=Ae^{ikx}$, where $A \in \mathbb{C}$ is an undetermined coefficient.
If any term of the trial solution is already a solution of the complementary equation, multiply the trail solution by $x$ 
Given a solution $y_{n}(x) = c_{1}y_{1}(x) + c_{2}y_{2}(x)$
$y_{p}(x) = u(x)y_{1}(x)+v(x)y_{2}(x)$
where the functions of $u(x)$ and $v(x)$ are given by
$u(x)=-\int \frac{y_{2}f}{y_{1}y_{2}\prime - y_{1}\prime y_{2}}dx$
$v(x)=\int \frac{y_{1}f}{y_{1}y_{2}\prime - y_{1}\prime y_{2}}dx$
# Simple Harmonic Motion
A particle is said to be in simple if it acceleration is directly proportional to its displacement
$\ddot{x} = -\omega^{2}x$
The constant $\omega$ denotes the angular frequency of the oscillation.
Consider a damped oscillator in which a resisting force proportional to velocity acts against an oscillating object.

Consider a damped oscillator in which a resisting force is proportional to velocity acts against an oscillating object.
$\ddot{x}=-\omega^{2}x- 2 \gamma \dot{x}$
$\ddot{x} + \omega^{2}x + 2 \gamma \dot{x} = 0$
$\lambda = \frac{-2\beta \pm \sqrt{4 \gamma - 4\omega^{2}}{2}}= -\gamma \pm \sqrt{\gamma^{2}-\omega^2}$
The nature of the object's motion now depends on the value of the discriminant $\Delta = \gamma^2-omega^2$
The nature of the object's motion now depends on the value of the discriminant $\Delta = \gamma^2-\omega^2$
- If $\omega^{2} < \gamma^{2}$, we have real roots $\lambda_1,\lambda_{2}\in\mathbb{R}$
	- $x(t) = c_{1}e^{\lambda_{1}t} + c_{2}e^{\lambda_{2}t}$ 
	- Which describes the motion of an overdamped oscillator
- If $\omega^{2} = \gamma^{2}$, we have a repeated real root $\lambda\in\mathbb{R}$:
	- $x(t) = c_{1}e^{\lambda t} + c_{2}te^{\lambda t}$ 
	- This describes a critically damped oscillator
- If $\omega^{2} > \gamma^{2}$, we have a complex conjugate roots $\lambda = \alpha \pm i\beta \in \mathbb{C}$
	- $x(t)=c_{1}e^{\lambda t}cos(\beta t) + c_{2}e^{\lambda t}sin(\beta t)$
	- This describes the motion of an underdamped oscillator

