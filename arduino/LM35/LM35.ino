int val;
int tempPin = A0;

void setup()
{
  Serial.begin(9600);
}
void loop()
{
  val = analogRead(tempPin);
  float cel = map(val, 0, 1024, -55, 150) ;
  float farh = (cel*9)/5 + 32;
  Serial.print("TEMPRATURE = ");
  Serial.print(cel);
  Serial.print("*C");
  Serial.println();
  delay(1000);
/* uncomment this to get temperature in farenhite
Serial.print("TEMPRATURE = ");
Serial.print(farh);
Serial.print("*F");
Serial.println();
*/
}
