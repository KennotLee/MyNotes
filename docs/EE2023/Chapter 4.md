## Fourier Transform
- We have shown that the *discrete-frequency spectrum* of a *periodic signal,* $x_p(t),$ is given by its *complex exponential Fourier series coefficients, $c_k$*
- The Fourier series expansion of an aperiodic signal does not exist. In this case, we make use of another technique called *Fourier transform* 
- The *continuous-frequency spectrum* of an *aperiodic signal,* $x(t)$, is given by its *Fourier transform,* $X(f)$

Forward Fourier Transform (*t-domain to f-domain*)
$$
X(f) = \int_{-\infty}^{\infty} x(t) e^{-j 2 \pi f t} \, dt
$$
Inverse Fourier Transform (*f-domain to t-domain*)
$$x(t) = \int_{-\infty}^{\infty} X(f) e^{j 2 \pi f t} \, df$$
### Dirichlet Conditions
1. $x(t)$ has only a finite number of maxima and minima in any finite time interval
2. $x(t)$ has only a finite number of discontinuities in any finite time interval
3. $x(t)$ is absolutely integrable 
Conditions 1 and 2 are referred to as the Strong Dirichlet Conditions:
- These conditions are satisfied by all real-world signals of interest. It is not possible to create signals that violate these conditions in a lab
Condition 3 is referred to as the Weak Dirichlet Condition:
- This condition is satisfied by most **energy** signals and is violated by all **power** signals.
## Properties of Fourier Transform

Let $\begin{cases} X(f) = \Im\{x(t)\} & \text{denote the Fourier transform of } x(t)  \\ x(t) = \Im^{-1}\{X(f)\} & \text{denote the inverse Fourier tranform of } X(f)\\ x(t) \rightleftarrows X(f) & \text{denote a Fourier transofrm pair with the time-domain on the left-hand side} & \\ & \text{and frequency-domain on the right hand side}\end{cases}$

1. Linearity
	- If $x(1) \leftrightarrows X_{1}(f)$ and $x_{2}(t) \leftrightarrows X_{2}(f)$: $$\alpha x_{1}(t)+\beta x_{2} \leftrightarrows \alpha X_{1}(f)+ \beta X_2(f)$$
2. Time scaling
	- If $x(t) \leftrightarrows X(f)$: $$
		x(\beta t) \leftrightarrows \frac{1}{|\beta|}X(\frac{f}{\beta})
$$
3. Duality 
	- If $x(t) \rightleftarrows X(f)$:$$X(t) \leftrightarrows x(-f)$$
4. Time shifting
	- If $x(t) \leftrightarrows X(f)$ $$x(t-t_{0}) \leftrightarrows X(f)e^{-j2 \pi ft_{0}}$$
5. Frequency shifting (Modulation)
	- If $x(t) \leftrightarrows X(f)$: $$x(t)e^{e j2\pi f_{0}t } \leftrightarrows X(f-f_0)$$
6. Differentiation in the Time Domain
	- If $x(t) \leftrightarrows X(f)$:$$\frac{d}{dt}x(t) \leftrightarrows j2 \pi f \cdot X(f)$$
7. Integration in Time Domain
		- If $x(t) \leftrightarrows X(f)$$$\int^{t}_{\infty} x(\tau)d \tau \leftrightarrows \frac{1}{j2\pi f}X(f)+\frac{1}{2}X(0)\delta(f)$$
8. Convolution in the Time Domain 
	- or Multiplication in the Frequency Domain
	- If $x_{1} \leftrightarrows X_{1}(f)$ and $x_{2}(t) \leftrightarrows X_{2}(f)$:$$\underset{x_{1}(t)\ast x_{2}(t)}{\underbrace{\int^{\infty}_{-\infty}x_1(\alpha)x_{2}(t-\alpha)d \alpha}}  \leftrightarrows X_{1}(f) X_{2}(f)
$$
9. Multiplication in the Time Domain 
	- or Convolution in the Frequency Domain
	- If $x_{1} \rightleftarrows X_{1}(f)$ and $x_{2} \leftrightarrows X_{2}(f)$: $$x_1(t)x_{2}(t) \leftrightarrows \underset{X_{1}(f) \ast X_{2}(f)}{\underbrace{\int^{\infty}_{-\infty} X_{1}(\alpha) X_{2}(f - \alpha)d \alpha}}$$
## Spectral Properties of a Real Signal
### $x(t)$ is real:

If $\Huge\Bigg[ \underset{x(t)\text{ is real}}{x^{\ast} = x(t)} \Bigg]$:
	$$
	\Huge\Big[ \ \overset{\underbrace{\Huge{X^{\ast}(f)  = X(-f)  }}}{\overset{X(f) \text{ is Confugate Symmetric}}{\overset{\boldsymbol{\downarrow}}{\overbracket{\underset{\text{Even (Symmetry)}}{\underbrace{|X(f| = X(-f)}} \text{ and } \underset{\text{Odd (Anti-symmetry)}}{\underbrace{\angle X(f) = -\angle X(f)}}}}}} \ \big]
$$
### $x(t)$ is real AND even

If $\Big[\ \underset{x(t) \text{ is real}}{\underbrace{x^{\ast}(t) = x(t)}} \text{ and } \underset{x(t) \text{ is even}}{\underbrace{x(-t) = x(t)}}\  \Big]$:
$$\Big[\ \underset{X(f) \text{ is real}}{\underbrace{X^{\ast}(f) = X(f)}} \text{ and } \underset{X(f) \text{ is even}}{\underbrace{X(-f) = X(f)}}\  \Big]$$

### $x(t)$ is real And odd

If $\Big[\ \underset{x(t) \text{ is real}}{\underbrace{x^{\ast}(t) = x(t)}} \text{ and } \underset{x(t) \text{ is odd}}{\underbrace{x(-t) = -x(t)}}\  \Big]$:
$$\Big[\ \underset{X(f) \text{ is imaginary}}{\underbrace{X^{\ast}(f) = X(f)}} \text{ and } \underset{X(f) \text{ is odd}}{\underbrace{X(-f) = -X(f)}}\  \Big]$$
### Results for Fourier series coefficients of periodic signals
- **$x_{p}$ is real:** $$
\Bigg(\ \underset{\Huge{c_{k} \text{ is Conjugate  Symmetric}}}{\underbrace{c^{\ast}_{k} = -c_{k}}} \ \ \Bigg|\ \underset{\Huge{\text{Even Symmetry}}}{\underbrace{|c_{k}| = |c_{-k}|}} \ \Bigg| \ \underset{\Huge{\text{Odd Symmetry}}}{\underbrace{\angle c_{k} = \angle c_{-k}}} \Bigg)
$$
- **$x_p(t)$ is real And even** $$
\Bigg( \ \underset{\huge{c_{k} \text{is real and even}}}{\underbrace{\overset{Real}{\overbrace{c^{\ast}_{k} = c_{k}}}\ \ \text{  and  } \ \ \overset{Even}{\overbrace{c_{k}= c_{-k}}}}} \ \bigg)$$
- **$x_{p}(t)$ is real and odd** $$
\Bigg( \ \underset{\huge{c_{k} \text{is imaginary and odd}}}{\underbrace{\overset{Imaginary}{\overbrace{c^{\ast}_{k} = -c_{k}}}\ \ \text{  and  } \ \ \overset{Odd}{\overbrace{c_{k}= -c_{-k}}}}} \ \bigg)$$
### Remarks
- Either the *positive frequency* or the *negative frequency* portion of a spectrum would suffice to specify a real signal completely in the frequency domain because one can be derived from the other through the conjugate symmetry property of the spectrum. **Spectrum analyzers** usually display only the positive frequency portion of a spectrum
