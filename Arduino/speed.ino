#include <TinyGPS++.h>
#include <SoftwareSerial.h>
int RX = 2, TX = 3;
TinyGPSPlus gps;
SoftwareSerial gpssoft(RX, TX);
void setup()
{
  Serial.begin(9600);
  gpssoft.begin(9600);
}
SoftwareSerial ss(2, 3);
void loop()
{
  while (ss.available() > 0)
   if (gps.encode(gpssoft.read())){
     if (gps.location.isUpdated())
  {
    Serial.println(gps.speed.mps());
  }
   }
  delay(500);
}  
