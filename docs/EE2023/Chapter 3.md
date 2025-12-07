[Previous](Chapter%202)

# Discrete-Frequency Spectrum (Fourier Series)
## Spectrum in the context of signals
- A signal can be represented by a composition of sinusoidal components. These sinusoidal components have a different magnitude (or amplitudes), different frequencies, and different phases
- The frequency-domain representation of a signal is called the signal **spectrum**, which describes a signal's sinusoidal components as a function of frequency.
- A frequency-domain representation gives more insight into the characteristics of signals and systems compared to time-domain representation. 
- Phenomena with difficult explanation in time-domain can be explained simply with frequency-domain
- The mathematical expression of a spectrum in general is a *complex function* of frequency. The graphical representation of a spectrum thus consists of two plots: 
	- The magnitude spectrum 
	- The phase spectrum 
	- These may be combined into a single spectral plot.
## Spectrum of a Sinusoid
### Spectrum of a *complex exponential* signal
![[Pasted image 20250823120012.png]]

### Spectrum of a *cosine* signal
![[Pasted image 20250823120127.png]]
### Spectrum of a *sine* signal
![[Pasted image 20250823120216.png]]
## Complex Exponentials and Phasors
The concept of negative frequency
![[Pasted image 20250823120235.png]]

## Fourier Series 
Unlike sinusoids, the spectra of non-sinusoidal periodic signals such as square wave, sawtooth wave cannot be determined simply by inspection. The spectra of such signals are derived using Fourier series, which is an expansion of a perioding function into a sum of sinusoids.
### Complex Exponential Fourier Series
- Any bounded *periodic signal*, $x_p(t)$, with period $T_p$ can be represented by a sum of *harmonically related* complex sinusoids:
	$$x_{p(t)}= \sum\limits^{\infty}_{k = -\infty} c_{k}e^{j2\pi kt \frac{1}{T_{p}}}=\sum\limits^{\infty}_{k = -\infty} c_{k}e^{j2\pi k f_pt} $$
	where $f_{p}= \frac{1}{T_{p}} is the fundamental frequency of $x_p(t)$ and $kf_p$ is the $k^{th}$ harmonic of $f_p$
- $c_{k}$ are called *Fourier series coefficients* of $x_p(t)$, and they constitute the *discrete-frequency spectrum* of $x_p(t)$
- Given $x_p(t)$ and its period $T_p$, how do we find the Fourier series coefficient, $c_{k}$, of $x_p(t)$
- To determine $c_k$, we multiply $x_{p}(t)$ by $exp(-2j\pi kt / T_{p})$ and integrate the product over any one period 
 $$\int^{t_{0} + T_{p}}_{t_{0}} \textcolor{Green}{x_{p}(t)}e^{\frac{-j2 \pi kt }{T_{p}}}dt=\int^{t_{0} + T_{p}}_{t_{0}}e^{\frac{-j2 \pi kt }{T_{p}}} \textcolor{Green}{\sum\limits_{m}c_{m} e^{\frac{-j2 \pi kt }{T_{p}}}} dt 
 $$$$
 = \sum\limits_{m}c_{m} \int^{t_{0} + T_{p}}_{t_{0}}  e^{\frac{-j2 \pi (k - m)t }{T_{p}}}dt 
 $$  
$$= c_{m}\int^{t_{0} + T_{p}}_{t_{0}} dt \ + \  \sum\limits_{m\neq k}c_{m} e^{\frac{-j2 \pi (k - m)t }{T_{p}}}dt$$
Where right hand side of the addition = 0 hence yielding 

$$
= c_{k}T_{p}
$$
$$
c_{k} = \frac{1}{T_{p}} \int^{t_{0}+ T_{p}}_{t_{0}} x_{p}(t)e^{-j2 \pi k t \frac{}{ T_{p}}dt,}, \ \ \ \ k= 0, \pm 1, \pm 2,... 
$$
## Trigonometric Fourier Series
$$
x_{p}(t)= \sum\limits^{\infty}_{k = -\infty} c_{k}e^{\frac{-j2 \pi (k - m)t }{T_{p}}}dt
$$ $$
=\sum\limits^{-1}_{k = - \infty} c_{k}e^{\frac{-j2 \pi (k - m)t }{T_{p}}} + c_{0} + \sum\limits^{\infty}_{k = 1} c_{k}e^{\frac{-j2 \pi (k - m)t }{T_{p}}}
$$
$$= c_{0} + \sum\limits^{\infty}_{k = 1} \Bigg[ c_{-k}e^{\frac{-j2 \pi (k - m)t }{T_{p}}} +  c_{k}e^{\frac{j2 \pi (k - m)t }{T_{p}}} \Bigg]$$
......applying Euler's Formula
$$
= c_{0}+\sum\limits^{\infty}_{k = 1} \Bigg[c_{-k}cos(2 \pi k t / T_{p}) - jc_{-k}sin(2 \pi k t / T_{p}) + c_{k}cos(2 \pi k t / T_{p}) + jc_{k}sin(2 \pi k t / T_{p}) \Bigg]
$$
.......rearranging
$$=c_{0} + \Bigg[(c_{k}+ c_{-k})cos(2 \pi k t / T_{p}) + j(c_{k} - c_{-k})sin(2 \pi k t / T_{p}) \Bigg]$$
By letting $a_{k} = \frac{c_{-k} + c_{k}}{2}$ and $b_{k}=\frac{c_{-k}-c_{k}}{2j}$, we obtain the trigonometric Fourier series
$$x_{p}(t) = a_{0}+2 \sum\limits^{\infty}_{k=1} \Bigg[ a_{k} cos(2 \pi k t / T_{p}) + b_{k}sin(2 \pi k t / T_{p})\Bigg]$$

$\Huge sinc(x) = \Huge \frac{sin(x)}{x}$
