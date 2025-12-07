# Before we begin 
This is the second part of this module where it goes through systems instead of signals

# Systems - Classification and s-Domain Analysis
## Systems
A system is a mathematical model of a physical process that relates the input (or excitation) signal to the output (or response) signal.

With an input x(t) and an ouytput $y(t)$, the system may be viewed as a transformation (or mapping) if $x(t)$ into $y(t)$, mathematically expressed as
$$y(t) = T[x(t)]$$

Depicted by
```
y(t) = system(x(t))
or
x(t) -> system(T) -> y(t)
```

where $T$ is the operator representing some well-defined transformation rules.

Systems may be classified into different categories according to their basic properties and the nature of their input and output signals

## Classification of Systems
### System with Memory and without Memory
A system is said to be memoryless (or static) if its output at a given time is dependent on only the input at that time. Otherwise, the system is said to have memory (or to be dynamic).

### Causal and Noncausal Systems
A system is said to be causal (or non-anticipative) if it output, $y(t)$, at the present time depends on only present and/or past values of its input, $x(t)$

It is not possible for a causal system to produce an output before an input is applied to it.

A system is noncausal (or anticipative) if its output, $y(t)$, at the present time depends on future values of its input, $x(t)$

## Stable and Unstable systems

A system is bounded-input/bounded-output (BIBO) stable if for every bounded input $x(t)$ where
$$|x(t)| \leq K; \forall t$$
the system produce a bounded output $y(t)$ where
$$|y(t)| \leq L; \forall t$$
in which K and L are finite positive constants

## Linear and Nonlinear System
A system is a linear system is one that satisfies the two conditions:
- Additivity: $T[x_{1}(t) + x_{2}(t)]= T[x_{1}(t)] + T[x_{2}(t)] = y_{1}(t) + y_{2}(t)$ 
- Homogeneity: $T[\alpha x(t)] = \alpha T[x(t)] = \alpha y(t)$

Another important property of linear system is that a zero input yields a zero output.

#### Non linear systems
Any other systems that does not satisfy the above conditions are non-linear systems
### Time-invariant and Time-varying Systems

A system is time-invariant if a time shift (delay or advance) in the input signal, $x(t)$, causes the same time shift in the output signal, $y(t)$. Hence, time-invariant system has the property of 
$$
T[x(t - \tau) = y(t - \tau)]
$$
For any real value of $\tau$ 

A time-varying system is one that does not satisfy the above equation

## Laplace Transform Analysis of Systems

Not all signals and not many systems can be described by mathematics. However, it is possible to approximate their behavior based on physical or natural laws of physics. Even when it is possible to formulate a mathematical model to describe a signal or system, it is not always possible to formulate a mathematical model to describe a signal or system, it is not always the case that they can be solve easily.

This course focuses on continuous-time, causal linear time-invariant (LTI) systems with memory, which we simply call **LTI systems**

LTI systems can be be described elegantly by mathematics. Their behaviors can be generalized easily and these lead to some nice properties that can be deduced for such systems, in many instances without having to solve their mathematical equations explicitly.

A useful analysis tool for LTI systems is the Laplace transform. The Laplace transform $\mathcal{L}$ of a time-domain function $f(t)$ us defined by:
$$\tilde{F}(s) = \mathcal{L}\{f(t)\} = \int^{\infty}_{0} f(t)e^{-st}dt$$
where $s$ is a complex variable. The inverse Laplace transform $\mathcal{L}^{-1}$ of $\tilde{F}(s)$ is given by the line integral
$$f(t) = \mathcal{L}^{-1}\{\tilde{F}(s)\} = \frac{1}{2 \pi j} \int^{\gamma + j\infty}_{\gamma - j\infty}\tilde{F}(s)e^{st}ds$$
where the integration is done along the line $Re[s] = \gamma$ which lies in the region of convergence of $\tilde{F}(s)$.

The analysis of LTI systems described by a time-domain differential equation using Laplace transform often leads to s-domain expression of the form $\tilde{F}(s) = \frac{\tilde{C}(s)}{\tilde{D}(s)}$ are polynomials of $s$. In this case we do not need to solve the above to find the inverse Laplace transform of $\tilde{F} (s)$. Instead, we expand $\tilde{F}(s)$ into a sum of partial fractions where the inverse Laplace transform of each of the partial fractions can be obtained directly from a standard Laplace Transform table.
