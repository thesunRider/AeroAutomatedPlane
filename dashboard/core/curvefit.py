import matplotlib.pyplot as plt
from scipy.optimize import curve_fit
import numpy as np
import serial
#Fitting function
def func(x, a, b, c, d, e):
    return a*np.exp(b*x)+c*np.exp(d*x)+e
    #return a*np.exp(b*x)+c*np.exp(d*x)+e
 
#Experimental x and y data points 
l=[]
v=[]
adata=serial.Serial('com12',9600)  
for i in range (1,1000):
{	
 val=adata.readline().decode('ascii')
 l.append(val)
 if(l[i]!=l[i+1]||l[i]!=0) 
   x.append(i*5)
}
xData = np.array(x)
yData = np.array(l)
 
#Plot experimental data points
plt.plot(xData, yData, 'bo', label='experimental-data')
 
# Initial guess for the parameters      no need, just for sample graph  
initialGuess = [1.0,1.0]    
 
#Perform the curve-fit
popt, pcov = curve_fit(func, xData, yData, initialGuess)
print(popt)
 
#x values for the fitted function      no need, just for sample graph
xFit = np.arange(0.0, 5.0, 0.01)
 
#Plot the fitted function
plt.plot(xFit, func(xFit, *popt), 'r', label='fit params: a=%5.3f, b=%5.3f c=%5.3f, d=%5.3f, e=%5.3f,' % tuple(popt))
 
plt.xlabel('x')
plt.ylabel('y')
plt.legend()
plt.show()
length=len(l)
ax=l(length-1)
ans=a*np.exp(b*x)+c*np.exp(d*x)+e
adata.write('ans'.encode('utf=8'))