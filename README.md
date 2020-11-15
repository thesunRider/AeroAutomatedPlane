## AeroAutomatedPlane
Automated plane project by AeroUnwired NITC Club  The aim of the project is to automate an RC aircraft. Making the sensor measurements in the plane readily availbale for a user to access via the internet. The user will also be able to control important aircraft functions via a device with internet connection and web browser which includes the likes of mobiles,pc etc. All the essential details of airplane sensors will be displayed in real-time on the website.As we dont have an arduino with us now we are simulating it using emulate.sh file. The project is collaborated by all authors using a GitHub group.

## Included
All source files(important files included are emulate.sh, manage.py, urls.py, index.html, scripts.html, views.py, other python files for each chart)
This README file

## Architecture
This project uses html and css to implement the front end of the website. Javascript is used to link it and dynamically transfer data to and from the backend to the website. Ajax is used to ensure speedy transmission of data between the front and back end. The back end is done using python with django framework. Sensors are connected to arduino. The data from the sensors is sent from arduino to raspberry pi on board the palne via com port. This data is accessed using python code and sent to the website.


## Requirements
Python3

HTML

CSS

JavaScript 

Django framework

Ajax

A linux distro to run the server



## Progress
We have now written and documented code to start the server using manage.py file. Simulate an arduino using emulate.sh file. The website can be accessed using any web browser.Linux OS is recommended to start the server and the website.The website can be accessed from any operating system. Linux is preferred due to its ability to manage servers well. The website is provided with a secure login system. A username and strong password is essential for a user to interact and access the website. Special care has been put in making the website aesthetic and still lightweight.The temperature, speed, altitude, sensor readings and battery status, signal strength, ping, 3d flight visualization have been implemented.The addition of other sensor readings and extra functionality will be added soon.

## Limitations
>An internet connection with good speed is essential to start the server.

>Linux OS is mandatory to start the server.

>If we use server machine to access the website then there will be a lot of computational demand.A minimum of 8gb ram is therefore recommended.

## To do
>An actual micro controller(like arduino) is not used now as it is not available. It is simulated using python and emulate.sh file.

>Adittional sensor data and respective charts/graphs have to be implemented in the website.

>Gyroscope sensor must be added.

>The use of gps system needs to be implemented.

## Authors
Surya
Govind\
Govind J Krishnan\
Michael Antony\
Abhinand\
Adithya Sankar\
Benito Ullas\
Sai Vivek\
Vardha Anees