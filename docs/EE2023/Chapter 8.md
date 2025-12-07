# Bode Diagrams

A Bode plot is an approximate visualization of the frequency response, $\tilde{H} (j\omega)$, of a system. It consists of straight line segments that are constructed based on the asymptotic properties of $\tilde{H}(j\omega)$.

A Bode plot is a combination of two plots:
- The **Magnitude Plot** is a plot of $|\tilde{H}(j\omega)|_{dB} = 20log_{10}|\tilde{H}(j\omega)| dB$
- The **Phase Plot** is a plot of $\angle \tilde{H} (j\omega)$ in degrees
Bode plots visualize the only positive frequency side of the frequency response. This suffices for real systems since $|\tilde{H} |$ and $\angle \tilde{H} (j\omega)$ are even and odd functions of $\omega$ respectively

## Construction of Bode Plots

The construction of straight-line Bode plots fora system begins with the system transfer function. To systematize the construction process, it is essential to express the system transfer function in a suitable form for each of the following cases:
- System without Integrator and differentiator
- Systems with Differentiators
- Systems with Integrators
##### System Transfer Function
$$\tilde{H} (s) = K\frac{(\frac{s}{z_{1}} + 1)(\frac{s}{z_{2}} + 1)...(\frac{s}{z_{M}} + 1)}{(\frac{s}{p_{1}} + 1)(\frac{s}{p_{2}} + 1)...{(\frac{s}{p_{N}} + 1)}}$$
$$K = \frac{b_0}{a_-}$$
By equating $\lim\limits_{s\rightarrow 0} \tilde{H}(s)$ 



#### N<sup>th</sup>-order System with neither a differentiator nor integrator
Rewrite the System Transfer as:
$$
\tilde{H}(s) = \overset{dc Gain}{\overbrace{K_{dc}}} \cdot \frac{(s/Z_{1} + 1) (s/Z_{2} + 1)...(s/Z_{M} + 1)}{(s/p_{1} + 1)(s/p_{2} + 1)...(s/p_{N} + 1)}
$$
Where $z_{m} \neq 0 \qquad \forall m \in [1, M]$ 
and
$p_{n} \neq 0 \qquad \forall n \in [1, N]$

Where $K_{dc}= \tilde{H}(0)$ is the dc gain of the system

#### N<sup>th</sup>-order System with a differentiator
Rewrite the System Transfer as:
$$
\tilde{H}(s) = \overset{differentiator}{\overbrace{K_{d}s}} \cdot \frac{(s/Z_{1} + 1) (s/Z_{2} + 1)...(s/Z_{M-1} + 1)}{(s/p_{1} + 1)(s/p_{2} + 1)...(s/p_{N} + 1)}
$$
Where $z_{m} \neq 0 \qquad \forall m \in [1, M-1]$ 
and
$p_{n} \neq 0 \qquad \forall n \in [1, N]$

Where $K_{d}$ is the gain of the cascaded differentiator. In this case, the dc gain of the system is $\tilde{H}(0) = 0$

#### N<sup>th</sup>-order System with an integrator
Rewrite the System Transfer as:
$$
\tilde{H}(s) = \overset{integrator}{\overbrace{\frac{K_{i}}{s}}} \cdot \frac{(s/Z_{1} + 1) (s/Z_{2} + 1)...(s/Z_{M} + 1)}{(s/p_{1} + 1)(s/p_{2} + 1)...(s/p_{N-1} + 1)}
$$
Where $z_{m} \neq 0 \qquad \forall m \in [1, M]$ 
and
$p_{n} \neq 0 \qquad \forall n \in [1, N-2]$

Where $K_{d}$ is the gain of the cascaded differentiator. In this case, the dc gain of the system is $\tilde{H}(0) = \infty$

Straight-line Bode plots for the following basic systems
- $\tilde{H}(s)$