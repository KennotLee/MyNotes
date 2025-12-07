# Energy Density and Bandwidth

## Energy Spectral Density (ESD) *aka* Energy Spectrum

Energy spectral density describes how the total energy of a signal distributed in the frequency  domain.
In the time-domain, the total energy of a signal $x(t)$ is defined as 
$$
	E = \int^{\infty}_{-\infty} |x(t)|^2 dt \ \ \ (Jouels)
$$
The Rayleigh's energy theorem provides us with an alternate method for computing the total energy of a signal in the frequency-domain, namely
##### Rayleigh Energy Theorem
$$
E = \overset{time-domain}{\overbrace{\int^{\infty}_{-\infty} |x(t)|^2 dt}}= \overset{frequency-domain}{\overbrace{\int^{\infty}_{-\infty}\textbf{|X(f)|}^2df}}
$$
Where $X(f) = \Im\{x(t)\}$  is the spectrum of the signal 

Since the integral on the right-hand side of of the equation above is the total energy of $x(t)$, the integrand $|X(f)|^2$ can be interpreted as the energy density of the signal at frequency $f$. In light of this, the energy spectral density of a signal $x(t)$ is defined as
##### Energy Spectral Density
$$E_{x}(f) = |X(f)|^{2} \ \ \ \ \ \frac{Joules}{Hz}$$ 
### Properties of $E_x(f)$
1. $E_x(f)$ is a real function of $f$
2. $E_{x(f)}\geq 0$ $\forall f$ 
3. $E_{x(f)}$ is an even function of $f$ it $x(t)$ is real.
## Power Spectral Density (PSD) *aka* Power Spectrum

The definition of energy spectral density is applied to energy signals

For continuous-time signals that have infinite total energy, for example power signals, it makes more sense to define a power spectral density, which describes how the average power of a signal is distributed in the frequency domain.

In the time-domain, the average power of a signal $x(t)$ is defined as
$$
P = \underset{\tau \rightarrow \infty}{lim} \frac{1}{2\tau}\int^{\tau}_{-\tau}|x(t)|^{2}dt
$$
In analyzing the frequency content of a power signal, it is advantageous  to begin with a windowed version of $x(t)$
$$x_{w} (t) = x(t) rect(\frac{t}{2W})$$
noting that  $\underset{w \rightarrow \infty}{lim} x_{W} (t) = x(t)$
Now $x_{W}(T)$ is an energy signal which has a Fourier transform
$$X_{W}(f) = \int^{\infty}_{-\infty} x_{W}(t) e^{-j2\pi ft}dt$$
Applying the Rayleigh energy theorem given in the equation under the energy of $x_{W}(t)$ can be expressed as
$$\int^{\infty}_{-\infty}|x_{W}(t)|^{2}dt=\int^{\infty}_{-\infty}|X_{w}(f)|^2df$$
But $\int^{W}_{-W} |x(t)|^{2}dt= \infty^{\infty}_{\infty} |X_{W}(f)|^2df$
Dividing the equation above by 2W and then taking the limit of $W \rightarrow \infty$ leads to the Parseval Power Theorem
##### Parseval Power Theorem
$$
\underset{Average Power}{\underbrace{P = \underset{W \rightarrow \infty}{lim} \frac{1}{2W}\int^{W}_{-W}}}|x(t)|^{2 dt}= \int^{\infty}_{-\infty}\underset{W \rightarrow \infty}{lim}\frac{1}{2W} |X_{W}(f)|^{2}df
$$

Since the integral on the right-hand side of the Parseval Power Theorem is the average power of $x(t)$, the integrand  $\underset{W \rightarrow \infty}{lim}\frac{1}{2W} |X_{W}(f)|^{2}$ can be interpreted as the power density of the signal at frequency $f$. In the light of this, the power spectral density of a signal $x(t)$ is defined as 
##### Power Spectral Density (Watts/Hz)
$$P_{x}(f) = \underset{W \rightarrow \infty}{lim}\frac{1}{2W} |X_{W}(f)|^{2}$$
**Properties of $P_{x}(f)$**
- Is a real function of $f$
- $\geq 0 \ \ \forall f$
- is an even function of  $f$ if $x(t)$ is real
## PSD of Perioding Signals
Let $f_{p}, T_p$ and $c_k$ denote the fundamental frequency, period and Fourier series coefficient of a periodic signal $x_p(t)$, where $c_k$ is in general a complex number.
The continuous frequency **spectrum** of $x_{p}(t)$ has the form
$$
X_{p}(f) = \sum\limits^{\infty}_{k = -\infty} c_{k}\delta (f- kf_{\rho})
$$
![[Pasted image 20250912103908.png]]

##### Power Spectral Density of $x_{p}(t)$

$$
P_{x}(f) = \sum\limits^{\infty}_{k=-\infty}|c_{k}|^{2}\delta(f - kf_{p})
$$
##### Average Power of $x_{p}(t)$
$$P=\int^{\infty}_{-\infty}P_{x}(f)df=\sum\limits^{\infty}_{k=-\infty}|c_{k}|^{2}$$
## Bandwidth
![[Pasted image 20250912110058.png]]
The bandwidth of a signal $x(t)$ is a measure of the signal's band occupancy in the frequency domain.

### Low Pass 
A signal $x(t)$ is a bandlimited lowpass signal if the magnitude spectrum is concentrated around 0 Hz and satisfies 
$$|X(f)| = 0; |f| > B $$
where B is $B$ is defined as the bandwidth of the signal.

![[Pasted image 20251116161638.png]]

**\*** When $x(t)$ is real, $|X(f)|$ is symmetric about $f = 0$

### Bandpass signal

A signal $x(t)$ is said to be a bandpass signal if its magnitude spectrum is concentrated around a non-zero center frequency, $f_c$, and satisfies.
$$|X(f)| = 0; ||f| - f_{c|}> B/2$$
where $B$ is defined as the bandwidth of the signal.
![[Pasted image 20251116165459.png]]

When $x(t)$ is real, $|X(f)|$ is symmetric about $f = 0$. We have assumed that the spectral image located at $f=f_c$ is symmetric about $f = f_c$, andthe spectral image located at $f = -f_c$ is symmetric about $f = -f_c$. 

For real signals, bandwidth is derived based on the positive frequency part of the signal spectrum.

## Signals with Unrestricted Band
The concept of infinite bandwidth represents difficulties in signal processing. For instant, consider the propagation of a signal with unrestricted band through system 

If $B_s$ is finite, the signal spectrum will be truncated and this may lead to an acceptable level of signal distortion. In order to avoid signal distortion, $B_s$ must be greater or equal to the signal bandwidth.

If $B_s$ approaches infinity to accommodate the signal bandwidth, the system noise will approach infinity. In this case, the system noise will completely mask out the signal.

In signal processing, it is often useful to define a bandwidth measure to include only the "important part" of the signal spectrum. This bandwidth measure can then be used to specify the bandwidth of the signals. The choice of bandwidth measure is dependent on what we consider as the "important part" of the signal spectrum.

## 3dB Bandwidth
#### Low pass signal $x(t)$
The 3 dB bandwidth of a lowpass signal $x(t)$ is defined as the frequency where $|X(f)| = |X(0)|/\sqrt{2}$ 
fist occurs when $f$ is increased from 0 Hz: ![[Pasted image 20251116173159.png]]
$f_B$ is called teh $3dB$ bandwidth because $20 log_{10}(|X(f_{B}X(0)|) = 20log_{10}(\frac{1}{\sqrt{2}})\simeq -3.01dB$ 

#### Bandpass signal $x(t)$
Likewise, the $3dB$ bandwidth of a bandpass signal $x(t)$ with center frequency $f_c$ is defined as illustrated below:
![[Pasted image 20251116174640.png]]

### 1st-null Bandwidth 
#### Lowpass signal $x(t)$
The 1st-null bandwidth of a lowpass signal $x(t)$ is defined as the frequency at which $|X(f)| = 0$ first occurs when $f$ is increased from 0 Hz:
![[Pasted image 20251116180330.png]]

#### Bandpass signal $x(t)$
The 1st-null bandwidth of a bandpass signal $x(t)$ with center frequency $f_c$:
![[Pasted image 20251116180522.png]]
### M% Energy Containment Bandwidth
The $M\%$ energy containment bandwidth, $B$, of a real energy signal is the smallest bandwidth that contains at least $M\%$ of the total energy $E \int^{\infty}_{-\infty} E_{x}(f)df$.
Lowpass signal $x(t)$
![[Pasted image 20251116181020.png]]
![[Pasted image 20251116181025.png]]

The M% power containment bandwidth, B, of a real power signal is defined as the smallest bandwidth that contains at least M% of the average signal power. Fora  periodic signal, the average power is given by
$$P = \int^{\infty}_{-\infty}P_{x}(f)df = \sum\limits^{\infty}_{k=-\infty}|c_k|^2$$

where $f_{p} (Hz)$ is the fundamental frequency and $c_{k}$'s are the Fourier series coefficients
![[Pasted image 20251116181257.png]]

The M% power containment bandwidth, B, is given by $$B=Kf_{p}$$
 where K is the smallest positive integer that satisfies
 $$\sum\limits^{K}_{k = -K}|c_{k}|^{2}\geq \frac{M}{100} \times P$$
 