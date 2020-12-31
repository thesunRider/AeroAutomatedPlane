const int ledPin =  13;
const int octoPin = 9;
void setup()
{
  Serial.begin(9600); //serial at 9600 baud
  pinMode(ledPin, INPUT);
  pinMode(octoPin, OUTPUT);
}
void loop()
{ int i;
  int kk = analogRead(A0); //1024 corresponds to 5V which is the maximum voltage controlled using a voltage divider circuit
  float real_voltage = kk * 0.004882814;
  int v[100];
  int batlife=100;//As this code is in windows and the python part is in linux an assumption is used. There batlife variable will be an output from the python code
  if (Serial.available())
  { delay(5000);
    analogWrite(octoPin, HIGH);
    for (i = 0; i<100; ++i)
    { v[i] = real_voltage;
      if (real_voltage < 3.69)
      {

        Serial.println("battery is off/n");
        Serial.println("battery is dead/n");
        delay(5000);
      }
      else if (real_voltage >= 3.69 && real_voltage < 3.71)
      {

        Serial.println("Battery is 5%/n/n");
        Serial.println("battery life is"+ batlife*0.05+"minutes/n");
        delay(5000);
      }
      else if (real_voltage >= 3.71 && real_voltage < 3.73)
      {

        Serial.println("battery is 15%/n");
        Serial.println("battery life is"+ batlife*0.15+"minutes/n");
        delay(5000);
      }
      else if (real_voltage >= 3.73 && real_voltage == 3.75 && real_voltage < 3.80)
      {

        Serial.println("battery is 50% full/n");
        Serial.println("battery life is"+ batlife*0.5+"minutes/n");
        delay(5000);
      }
      else if (real_voltage >= 3.80 && real_voltage < 3.88)
      {

        Serial.println("battery is 75 % full/n");
        Serial.println("battery life is"+ batlife*0.75+"minutes/n");
        delay(5000);
      }
      else if (real_voltage >= 3.88)
      {

        Serial.println("Battery is Full/n");
        Serial.println("battery life is"+ batlife+" minutes/n");
        delay(5000);
      }
    }
    delay(100); //sets a delay to avoid seizures when you read the serial monitor
  }
}
