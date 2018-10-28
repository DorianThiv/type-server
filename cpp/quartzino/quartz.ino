/** 
 * Securino object for integration
 */

#include "LoRaClient.h"
#include "DHT.h"

#define PIN_SENSOR 5

#define TAB_SIZE_SENSOR 4

DHT dht(5, DHT11);

LoRaClient * s_lora;

uint8_t tabdht[TAB_SIZE_SENSOR];

void processDht()
{
  float temp = dht.readHumidity();
  float humi = dht.readTemperature();
  if (isnan(humi) || isnan(temp)) {
    Serial.println("Failed to read from DHT sensor!");
    Serial.print("temp : ");
    Serial.println(temp);
    Serial.print("humi : ");
    Serial.println(humi);
    return;
  }
  uint8_t tabdt[TAB_SIZE_SENSOR] = {65, 66, 84, temp};
  uint8_t tabdh[TAB_SIZE_SENSOR] = {65, 66, 72, humi};
  s_lora->send(tabdt, TAB_SIZE_SENSOR);
  s_lora->send(tabdh, TAB_SIZE_SENSOR);
}

void setup() {
  Serial.begin(9600);
  s_lora = new LoRaClient();
}

void loop() {

  processDht();
  delay(5000);

}

