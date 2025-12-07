# Time-domain Operations & the Dirac Impulse
## Time Scaling
Time scaling of a signal $x(t) is achieved by replacing the time variable $t$ by $\alpha t$, where $\alpha$ is a real-value time-scaling factor
- $0 < \alpha < 1$ expansion of $x(t)$ along the time axis
- $\alpha > 1$ contraction
- $\alpha = -1$ time reversal of $x(t)$
## Time Shifting
Time-shifting of a signal $x(t)$ is achieved by replacing the time variable $t$ by $(t - \beta)$, where $\beta$ is a real-value time-shifting factor

$\beta > 0:$ delaying $x(t)$ by $\beta$ unit of time
$\beta < 0:$ Advancing $x(t)$ by $\beta$ unit of time
## Convolution
The convolution of two other signals, $x(t)$ and $y(t)$, is efnied by 
$$\int_{-\infty}^{\infty} x(\alpha) y(t - \alpha) d\alpha = x(t)  \ast y(t)$$

Convolution is:
- Commutative: $x(t) \ast y(t) =  y(t) \ast x(t)$  
- Associative: $[w(t) \ast x(t)] \ast y(t) = w(t) \ast [y(t) \ast x(t)]$
- Distributive: $w(t) \ast [x(t) \ast y(t)] = w(t) \ast x(t) + w(t) \ast y(t)$ 

## Dirac-$\delta$ 
The dirac-$\delta$ function, also known as unit impulse is defined by:
$$
\int^{\infty}_{-\infty}u(\alpha)u(t - \alpha)d\alpha = \begin{cases}
\text{1} & \text{t < 0}  \\
\text{0} & \text{t $\geq$ 1}
\end{cases}
$$ and 
$$
\int^\epsilon_{-\epsilon}  \delta(t)d(t) = 1; \forall_{\epsilon} = 0

$$

properties of $\delta(t)$
1. Symmetry: $\delta(t) = \delta(-t)$
2. Sampling: $x(t)\delta(t-\lambda) = x(\lambda)\delta(t-\lambda)$
3. Sifting $\int^{\infty}_{-\infty}x(t)\delta(t-\lambda)dt = x(\lambda)\int^{\infty}_{-\infty}dt = x(\lambda)$
4. Replication: $x(t) \ast \delta (t-\lambda) = \int^{\infty}_{-\infty}x(\zeta)\delta(t-\zeta-\lambda)d\zeta =\int^{\infty}_{-\infty}x(\zeta)\delta(\zeta-(t-\lambda))d\zeta = x(t-\lambda)$
	1. Applying symmetry property and applying sifting property
## The Dirac-$\delta$ Comb Function
$$
\sum\limits^{\infty}_{n = -\infty}\delta(t-nT) = ...... + \delta(t + 2T) + \delta(t + T) + \delta(t) + \delta(t - T) + \delta(t - 2T) + ......
$$ ![[Pasted image 20250822225540.png]]