# Aero Automated Plane
 An ambitious *SAE  micro class* project of _CLUB AEROUNWIRED_,NITC.
## Description
  __SAE__ is an yearly aircraft designing challenge conducted for students.
   Club Aerounwired is making an in-house _autonomous system_ for monitoring a micro class aircraft using _aurdino_ and _raspberry pi_. The system will stream all relevant data (parameters),such as __*speed, altitude*__ etc. from the aircraft to a remote pc/laptop through  which we can monitor the flight.
 ![Ige](https://lh3.googleusercontent.com/6e1ZdC2kljCTLz05aP4KMhqkIpNTJFo986-LOlFaILXTRZDjVRuao4v0XJ2CbZ1mysWm9hCsvwYDwpkwhYsgDw2Am0bVzHpcnB_bsljVydCvVuZTOpotZD90xF_wrrJmqMoWb0A1_9j_LS9WNzTEjVhKbaSy_bjX82KOH39PeN_aRT_kW2RWbNZ-Ns8rPJYh0yU1GkYq5-rL0BrGvaf0Oq91j_32kFTFWSfpU-KKcDjnWA0IX1o16yGJs12Zx1PD2X_ZB4HQOGkSjFdI9uHbW7RV9IvNLG9hWTcSsChWqliDzcjslW04XxWLFLJTRWffALS0P3ljnY170EGnuJg_jzrYXRCYc4j28no8X5YevWLdU74FA1sgR6jE5P_oUmMd_TDFhE9RqZmtXBTiCNwR_gE75K7N14HwxyJo_P5IYqA-3tkBF1U-gt9cxtASYA_y-J1eiMP7ZX_4YwzwQvLuRQj7PB_nx2jjf-3IXo6G-AmA37Wf0SZ5UK6rGB7-zWgWj5-R8XyhJl3q77-16DLIxgtHS3qCaySVIpFpy0h1-OztjQ-gXJ7zA9FADLRXBvSmwqfi5dg0AKNMfGkabQPJKp-IaqpklLs8M3_sT5QKWu20zF1xkE8Iv5cNhO0yLMu815uH-pgfTLxl5OjhcOD1KZG2GF_osnf8SibkHgJw1OikUzRhww49QeNr0X_5xw=w1282-h667-no?authuser=0)
 
 The server application is manly written in JavaScript. and Python (Django) in the server side. Other languages used HTML,CSS, SCSS
 ## Features 
 * __Altitude Chart__
 * **Speed Chart**
 * **Temperature Graph**
 * **Directions info**  

Electrical information s:
* **Battery Status**
* **Internet strength**
* **Radio signal strength** 
##  How it works
Data flow
 ```mermaid
 graph LR
  Aurdino--> Python-backend;
  Python-backend--> Javascript;
  Javascript--> Html
```
## How to launch
Open dashboard in AeroAutomatedPlane in Terminal give command
>python3 manage.py runserver


## Todos 
- Add new charts if needed
- Roll, yaw and pitch information 
## Author
- Surya
- Adithya
- Abhinand
- Benito
- Sai vivek
- Vardhah