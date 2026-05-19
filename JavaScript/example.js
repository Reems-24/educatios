import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Set the seaborn style
sns.set_theme(style="whitegrid")

# This defines the step size h for the numerical computation.
h = 0.1

# This creates a grid x from 0 to 2*pi with intervals of h.
x = np.arange(0, 2 * np.pi, h)

# This computes the cosine function values for each point in the grid x.
y = np.cos(x)

# This calculates the forward differences of y vector divided by h
forward_diff = np.diff(y) / h

# This defines a new grid x_diff that corresponds to the forward differences.
x_diff = x[:-1]

# This calculates the exact solution for the derivative of cos(x)
exact_solution = -np.sin(x_diff)

# This code block creates a plot showing both the approximation and the exact solution
plt.figure(figsize=(12, 8))
plt.plot(x_diff, forward_diff, label='Finite difference approximation')
plt.plot(x_diff, exact_solution, label='Exact solution')
plt.legend()
plt.show()

# Finally, this computes the maximum error between the numerical derivative and the exact solution
max_error = max(abs(exact_solution - forward_diff))
print("Maximum Error is:")
print(max_error)
