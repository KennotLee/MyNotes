# Linear Time-Invariant (LTI) System

The fundamental results in LTI system theory is that any LTI system can be characterized entirely in the time domain by a function called the system **impulse response**, or in the frequency domain by a function called the system frequency response , or the $s$-domain by a function called the system transfer function.

## Impulse response

The impulse response, $h(t)$, of a continuous-time LTI system is defined as the response (or output) of the system when the input is a unit impulse, $\delta(t)$, as shown below

Unit impulse $~ \delta(t) \rightarrow LTI \ System \ T \rightarrow h(t) ~ Impulse \ Response$
where
$h(t) = T[\delta(t)]$

The input is an arbitrary signal $x(t)$. From the replication property of $\delta(t)$ , $x(t)$ can be expressed as 
$$x(t) = x(t) \ast \delta(t) = \int^{\infty}_{-\infty}x(\tau)\delta(t - \tau)d\tau$$
Substituting the above into $y(t) = T[x(t)]$

$$y(t) = T\Bigg[\int^{\infty}_{-\infty}x(\tau)\delta(t - \tau)d\tau \Bigg]$$
due to linearity of $T$
$$=\int^{\infty}_{-\infty}x(\tau)T[\delta(t - \tau)]d\tau$$
Since the system is also time-invariant, then by applying the above equations
$$h(t - \tau) = T[\delta(t-\tau)]$$
Substitution yields 
$$y(t) = \int^{\infty}_{-\infty}x(\tau)h(t- \tau) d\tau = x(t)\ast h(t)$$
$x(t)$ -> LTI System impulse response: $h(t)$ -> $y(t) = x(t) \ast h(t)$

which allows that the output, $y(t)$, of a LTI system is given by the convolution of its input $x(t)$ and its impulse response $h(t)$

## Step response

Suppose the input to the system is a unit step function, $u(t)$. Based on the result above, the corresponding output will be equal $u(t) \ast h(t)$ as shown below. Because  $u(t) \ast h(t)$ is the response of the system to a unit step input excitation, we call $u(t) \ast h(t)$ the step response, $o(t)$ of the system.

$$u(t) \rightarrow \text{LTI system Impulse Response: } h(t) \rightarrow o(t)$$
$$o(t) = u(t) \ast h(t) = \int^{\infty}_{-\infty}h(\tau)u(t - \tau)d\tau = \underset{\text{Step Response}}{\underbrace{\int^{t}_{-\infty}h(\tau)d\tau}}$$

This result can also be derived by integrating the input of the system shown in the equation above. Because the system is linear, this will cause the system output to be integrated as shown below.

$$u(t) = \underset{\text{Unit Step}}{\underbrace{\int^{t}_{-\infty}\delta(\tau)\ \  d\tau}}\rightarrow \text{LTI system Impulse Response: } h(t) \rightarrow \underset{\text{Step Response}}{\underbrace{o(t) = \int^{t}_{-\infty}h(\tau)\ \ d\tau}}$$
The step response is widely used to help predict system behavior and aid in analysis, design, and testing of control system

## Frequency Response
The frequency response $H(f)$ of a LTI system is defined as the Fourier transform of the system impulse response $h(t)$, namely
$$H(f) = \mathcal{I} \{h(t)\} = \int^{\infty}_{-\infty}h(t)e^{-j 2\pi ft} \ dt$$

The relationship between input and output of a LTI system in the frequency domain is derived by taking the Fourier transform and applying the fact that convolution in the $t$-domain is equivalent to multiplication in the $f$-domain. This results in,
$$Y(f) = X(f) \cdot H(f)$$
$$\underset{\text{input spectrum}}{X(f)} \rightarrow \text{LTI System, }  H(f)\rightarrow Y(f) = X(f) \times \overset{\text{Frequency response}}{\overbrace{H(f)}}$$

Where $X(f) = \mathcal{I}\{x(t)\}$ and $Y(f) = \mathcal{I}\{y(t)\}$ are the Fourier transforms of system input and output respectively. Since $H(f)$ is in general a complex function of $f$, we may express it in exponential form as 
$$H(f) = |H(f)| e^{j\angle H(f)}$$
Where $|H(f)|$ is, called the magnitude response and $\angle H(f)$ the phase response of the system.

## Transfer Function 
The transfer function $\tilde{H}(s)$ of a LTI system is defined as the Laplace transform of the system impulse response $h(t)$, namely
$$\tilde{H}(s) = \mathcal{L}\{h(t)\} = \int^{\infty}_{0}h(t) e^{-st} \ dt $$
where $s=\sigma + j\omega$ is a complex variable.

The relationship between the input and output of a LTI system in the $s$-domain is derived by taking the Laplace transform and applying the fact that convolution in the $t$-domain is equivalent to multiplication in $s$-domain. This results in,
$$\tilde{Y}(s) = \tilde{X}(s) \cdot \tilde{H}(s)$$
![[Pasted image 20251119163456.png]]

where $\tilde{X}(s) = \mathcal{L}\{x(t)\}$ and $\tilde{Y}(s) = \mathcal{y(t)}$ are the Laplace transforms of the system input and output respectively.

## Relationship between Transfer Function and Frequency Response

Substituting $s=j\omega$ into the transfer function, we get
$$\tilde{H}(s)\textbar_{s= j\omega} = \tilde{H}(j\omega) = \int^{\infty}_{0} h(t) e^{-j \omega t} \ dt$$
By substituting $\omega = 2 \pi f$ in above we get
$$\tilde{H}(j\omega)\textbar_{\omega = 2\pi f} = \int^{\infty}_{0} h(t) e^{-j 2\pi t} \ dt$$
For casual LTI systems where the impulse response $h(t) = 0$ we observe that:
$$H(f) = \tilde{H}(j \omega)\textbar_{\omega = 2 \pi f}$$
Since $f$ is measured in Hz, it follows $\omega = 2 \pi f$ will assume the meaning of angular frequency in rad/s. 

$H(j\omega)$ can be expressed in expressed in exponential form as
$$\tilde{H}(j\omega) = |\tilde{H}|(j\omega)e^{j \angle \tilde{H}(j\omega)}$$
where $\tilde{H}(j\omega)$ is called the magnitude response and $\angle \tilde{H}(j\omega)$ the phase response of the system

## Sinusoidal Response at Steady State
Frequency response is an intrinsic property of LTI systems as it characterizes how sinusoidal signals are altered in going through the system. To see this, let the system input at steady-state be
$$x(t) = Ae^{j(2\pi f_{0}+ \psi)}$$
Which is a complex sinusoid with amplitude $A$, frequency of $f_{0}$ (Hz) and phase $\psi$ (rad). The spectrum of $x(t)$ is given by
$$X(f) = \mathcal{I}\{Ae^{(2\pi f_{0}+ \psi)}\} = Ae^{j\psi}\delta (f - f_{0})$$
Let $Y(f)$ be the spectrum of the system output $y(t)$, and $H(f)$ be the frequency response of the Laplace transform. We have,

  
$$Y(f) = X(f)\cdot H(f) = A e^{j\psi} \delta(f - f_0)\cdot H(f)  
= A e^{j\psi} \delta(f - f_0)\cdot H(f_0) $$ 


Applying the sampling property of the Dirac–($\delta$) function:

$$
\begin{aligned}  
Y(f)  
= A e^{j\psi} \delta(f - f_0)\cdot H(f_0)
= A \left| H(f_0) \right| e^{j\left( \psi + \angle H(f_0) \right)} \delta(f - f_0)  
\qquad\qquad (7.17)  
\end{aligned}  
$$



## Taking the inverse Fourier transform of (7.17)

$$  
\begin{aligned}  
y(t)  
= \mathscr{F}^{-1}{Y(f)}
= A \left| H(f_0) \right| e^{j(\psi + \angle H(f_0))} e^{j 2\pi f_0 t} \  
= A \left| H(f_0) \right| e^{j\left( 2\pi f_0 t + \psi + \angle H(f_0) \right)}  
\qquad\qquad (7.18)  
\end{aligned}  
$$


- When a complex sinusoid of frequency (f_0) is input to an LTI system with frequency response (H(f)),
- Its amplitude is scaled by $\left| H(f_0) \right|$
- And its phase is shifted by $angle H(f_0))$.
This same approach extends to real sinusoids using Euler’s formula.

## Steady-state Sinusoidal Response of an LTI System in the f-domain
### In the f-domain
##### Complex sinusoid input
$$
x(t) = A e^{j(2\pi f_0 t + \psi)}
\longrightarrow H(f) \longrightarrow
y(t) = A|H(f_0)| e^{j(2\pi f_0 t + \psi + \angle H(f_0))}
$$

#### Cosine input
$$
x(t) = A \cos(2\pi f_0 t + \psi)
\longrightarrow H(f) \longrightarrow
y(t) = A|H(f_0)| \cos(2\pi f_0 t + \psi + \angle H(f_0))
$$

#### Sine input
$$
x(t) = A \sin(2\pi f_0 t + \psi)
\longrightarrow H(f) \longrightarrow
y(t) = A|H(f_0)| \sin(2\pi f_0 t + \psi + \angle H(f_0))
$$

## Steady-state Sinusoidal Response of an LTI System in the ω-domain

### In the ω-domain

#### Complex sinusoid input
$$
x(t) = A e^{j(\omega_0 t + \psi)}
\longrightarrow \tilde{H}(j\omega) \longrightarrow
y(t) = A|\tilde{H}(j\omega_0)| e^{j(\omega_0 t + \psi + \angle \tilde{H}(j\omega_0))}
$$

#### Cosine input
$$
x(t) = A \cos(\omega_0 t + \psi)
\longrightarrow \tilde{H}(j\omega) \longrightarrow
y(t) = A|\tilde{H}(j\omega_0)| \cos(\omega_0 t + \psi + \angle \tilde{H}(j\omega_0))
$$

#### Sine input
$$
x(t) = A \sin(\omega_0 t + \psi)
\longrightarrow \tilde{H}(j\omega) \longrightarrow
y(t) = A|\tilde{H}(j\omega_0)| \sin(\omega_0 t + \psi + \angle \tilde{H}(j\omega_0))
$$

## LTI Systems described by Differential Equations
An important class of continuous-time linear time-invariant (LTI) systems consists of systems represented by linear constant-coefficient differential equations that have the general form

$$\sum\limits^{N}_{n=0}a_{n}\frac{d^{n}y(t)}{dt^{n}} = \sum\limits^{M}_{m=0}b_{m}\frac{d^{m}x(t)}{dt^{m}}$$
where $x(t)$ is the input $y(t)$ is the output, and $a_n$, $b_m$ are real constants. We call this an $N$-order system in accordance with the order of the highest derivative of $y(t)$, assuming $a_{N}\neq0$.

Continuous-time LTI systems satisfying the above condition are very common and happen very often in reality.

## Transfer Function

Applying Laplace transform to both sides of the above equations, **with all initial conditions set to zero** , we get
$$
\sum\limits^{N}_{n=0}a_{n}\tilde{Y}(s)s^{n} = \sum\limits^M_{m=0}b_{m}\tilde{X}(s)s^{m}
$$
where $s^{m}\tilde{X}(s)$ and $s^{n}\tilde{Y}(s)$ are the Laplace transforms of $\frac{d^{m}x(t)}{dt^{m}}$ and $\frac{d^{n}y(t)}{dt^{n}}$, respectively.

## System Stability

Following are the different notions of system stability defined based on the locations of the system poles and the corresponding behaviors of the system impulse response $h(t)$ in the limit $t \rightarrow \infty$

### BIBO Stable 
- All system poles lying on the left-half of the $s$-plane
- $h(t)$ will converge to 0 as $t$ tends to infinity

### Marginally stable
- One or more system poles lying on the imaginary axis of the $s$-plane with no system pole lying on the right half $s$-plan. System poles lying on the imaginary axis must be distinct (non repeated).
- $h(t)$ will not "blow up" and become unbounded, but neither will it converge to zero as $t$ tends to infinity
### Unstable
- One or more system poles lying on the right-half $s$-plane
- $h(t)$ will "blow up" and become unbounded as $t$ tends to infinity 
### Unstable (Case 2):
- One or more repeated system poles lying on the imaginary axis
- $h(t)$ will "blow up" and become unbounded as $t$ tends to infinity


## Zeros
- Zeros do not play any role in the stability of the system
- The zeros only affect the transient response which decays to zero as $t \rightarrow \infty$
