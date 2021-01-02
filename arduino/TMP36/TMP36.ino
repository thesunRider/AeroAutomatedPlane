int sensePin = A0;  //This is the Arduino Pin that will read the sensor output
int sensorInput;    //The variable we will use to store the sensor input
double temp;        //The variable we will use to store temperature in degrees. 
 
void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600); //Start the Serial Port at 9600 baud (default)
 
}
void loop() {
  // put your main code here, to run repeatedly: 
  sensorInput = analogRead(sensePin);    //read the analog sensor and store it
  temp = map(sensorInput, 0, 1024, -40, 125);         //Convert to degrees 
 
  Serial.print("Current Temperature: ");
  Serial.println(temp);
  delay(500);
}
