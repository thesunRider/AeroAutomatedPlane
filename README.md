# AeroAutomatedPlane
AeroAutomatedPlane is an aeroplane project by Club AeroUnwired, NITC. The aim of the project is to automate an RC aircraft and to make the sensor measurements in the plane readily available for a user to access via the internet. The user will also be able to control important aircraft functions via a device with internet connection and web browser which includes the likes of mobiles, pc etc. All the essential details of airplane sensors will be displayed in real-time on the website. In the absence of an [Arduino](https://en.wikipedia.org/wiki/Arduino), the user should be able to test the software, for which a file has been included. The project is in collaboration by all authors using a GitHub group.

## Included
* All source files (important files included are `emulate.sh`, `manage.py`, `urls.py`, `index.html`, `scripts.html`, `views.py`, other python files for each chart).
* This `Readme.md` file.

## Architecture
This project uses `html` and `css` to implement the front end of the website. `JavaScript` is used to link it and dynamically transfer data to and from the backend to the website. `Ajax` is used to ensure speedy transmission of data between the front and back end. The back end is programmed using `python` with `django framework`. `Python` is used to connect with the sensors on the plane; Arduino is directly connected to the sensors, and acts as an intermediary between them and [Raspberry Pi](https://en.wikipedia.org/wiki/Raspberry_Pi) (and is attached to Raspberry Pi via COM port), the data from which is finally got in the website.

## Languages/Softwares
* [`Python 3`](https://en.wikipedia.org/wiki/History_of_Python#Version_3)

* [`HTML`](https://en.wikipedia.org/wiki/HTML)

* [`CSS`](https://en.wikipedia.org/wiki/CSS)

* [`SCSS`](https://en.wikipedia.org/wiki/Sass_(stylesheet_language))

* [`JavaScript`](https://en.wikipedia.org/wiki/JavaScript)

* [`Django framework`](https://en.wikipedia.org/wiki/Django_(web_framework))

* [`Ajax`](https://en.wikipedia.org/wiki/Ajax_(programming))

* [`Shell Script`](https://en.wikipedia.org/wiki/Shell_script)

* A `Linux` distro to run the server

## Deployment

For simulation/emulation of a COM device, the user:
  1) May open the command terminal (`Alt + Ctrl + t`).
  2) Change directory to `AeroAutomatedPlane` (`cd AeroAutomatedPlane`).
  3) Run `emulate.sh` (`./emulate.sh`).
  4) Ensure that the port of output in `views.py` matches the same (of the format `/dev/pts/<int>`) when **Step 3** is implemented.
  5) Open another terminal and change directories to `serial_emulator` (`cd AeroAutomatedPlane/serial_emulator`).
  6) Run `writer.py` using the format `python3 writer.py -d <device path> -r <rangestart:rangend> -t <time-delay between request>`. Note that the device path is the same as the one indicating the input port after **Step 3** is followed, and that `rangestart`, `rangend` and `time-delay between request` are of type `int` (i.e., are integers).\ 

The user has to follow the following steps to deploy the website:
  1) Open the command terminal (may be opened using `Alt + Ctrl + t`)
  2) Change directory to `dashboard` (`cd AeroAutomatedPlane/dashboard`)
  3) Enter `python3 manage.py runserver`, on doing which a web-link should appear on the screen.
  4) Open the web link got from **Step 3** in browser.
  5) Login/Register.

When deploying the website for the first time, before **Step 3**, the user has to enter the following commands in the same order as follows:
  1) `python3 manage.py make migrations`
  2) `python3 manage.py migrate`
  3) `python3 manage.py runserver`

## Progress
We have now written and documented code to start the server using `manage.py` file. Simulate an arduino using `emulate.sh` file. The website can be accessed using any web browser. Linux OS is recommended to start the server and the website. The website can be accessed from any operating system. `Linux` is preferred due to its ability to manage servers well. The website is provided with a secure login system. A username and strong password is essential for a user to interact and access the website. Special care has been put in making the website aesthetic as well as lightweight. The temperature, speed, altitude and other sensor readings and battery status, signal strength, ping, 3d flight visualization have been implemented.

## Limitations
1) An internet connection with good speed is essential to start the server.

2) Linux OS is *mandatory* to start the server.

3) If server machine is used to access the website, there will be a lot of computational demand. A *minimum* of 8gb ram is therefore recommended.

## To do
1. An actual micro controller (like arduino or Raspberry Pi) is not used now as it is not available. It is simulated using `python` and `emulate.sh`.

2. Implementation of addtional sensor data and respective charts/graphs in the website

3. Addition of gyroscope sensor

4. Implementation of GPS

## Authors
[Surya](https://github.com/thesunRider)\
Govind\
Govind J Krishnan\
Michal Anthony\
[Abhinand](https://github.com/lekdev-7)\
[Adithya Sankar](https://github.com/adithyasankar47) \
[Benito Ullas](https://github.com/benito-ullas)\
[Sai Vivek](https://github.com/saiviv39)\
[Vardha Anees](https://github.com/vardhahanees)
