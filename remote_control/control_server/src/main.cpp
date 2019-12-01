// TODO remove all serial messages
#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266WebServer.h>
#include <ESP8266mDNS.h>
#include <sstream> 


#ifndef STASSID
#define STASSID "your-ssid"
#define STAPSK  "your-password"
#endif

const char* ssid = STASSID;
const char* password = STAPSK;

ESP8266WebServer server(80);

const int led = 13;


void handlePost() {
  if (server.method() != HTTP_POST) {
    digitalWrite(led, 1);
    server.send(405, "text/plain", "Method Not Allowed");
    digitalWrite(led, 0);
  } else {

    digitalWrite(led, 1);
    // for (uint8_t i = 1; i < server.args(); i++) {
    //   message += server.argName(i) + ": " + server.arg(i) + "\n";
    // }
    // Serial.print(message);

    Serial.print(server.arg(1));
    server.send(200, "text/plain","ok");
    digitalWrite(led, 0);
  }
}

void pass_angle(){
	digitalWrite(led, 1);
	server.send(200, "text/plain", "hello from esp8266!");
    
}

void handleRoot() {
  digitalWrite(led, 1);
  server.send(200, "text/plain", "hello from esp8266!");
  digitalWrite(led, 0);
}

void handleNotFound() {
  digitalWrite(led, 1);
  String message = "File Not Found\n\n";
  
  message += "URI: ";
  message += server.uri();
  message += "\nMethod: ";
  message += (server.method() == HTTP_GET) ? "GET" : "POST";
  message += "\nArguments: ";
  message += server.args();
  message += "\n";
  for (uint8_t i = 0; i < server.args(); i++) {
    message += " " + server.argName(i) + ": " + server.arg(i) + "\n";
  }
  server.send(404, "text/plain", message);
  digitalWrite(led, 0);
}



void setup(void) {
  pinMode(led, OUTPUT);
  digitalWrite(led, 0);

  Serial.begin(115200);

  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);

  Serial.println("");

  // Wait for connection
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
  }

  MDNS.begin("esp8266");

  server.on("/", handleRoot);  //say hi
  server.onNotFound(handleNotFound);
  server.on("/angle",handlePost);
  server.begin();
}




void loop(void) {
  server.handleClient();
  MDNS.update();
}