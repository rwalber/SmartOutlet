#include <SoftwareSerial.h>

SoftwareSerial COMM(0, 1); // RX, TX
char FLAG;
const int OUTLET_1 = 8;
const int OUTLET_2 = 9;

const int BLUE = 5;
const int RED = 6;
const int GREEN = 7;

const int VCC = 13;

const int BUTTON_1 = 2;
const int BUTTON_2 = 3;

// const int LED_1 = 5;
// const int LED_2 = 4;

bool STATE_BUTTON_1 = 0;
bool STATE_BUTTON_2 = 0;

void setup() {
  COMM.begin(9600);
//  Relay
  pinMode(OUTLET_1, OUTPUT);
  pinMode(OUTLET_2, OUTPUT);
//  LEDs
  pinMode(BLUE, OUTPUT);
  pinMode(GREEN, OUTPUT);
  pinMode(RED, OUTPUT);
  pinMode(VCC, OUTPUT);
//  PUSH Button
  pinMode(BUTTON_1, INPUT_PULLUP);
  pinMode(BUTTON_2, INPUT_PULLUP);
}

void loop() {
  digitalWrite(VCC, HIGH);
analogWrite(RED, 200);
  analogWrite(GREEN, 225);
  analogWrite(BLUE, 255);
  if(digitalRead(BUTTON_1) == LOW) {
      STATE_BUTTON_1 = !STATE_BUTTON_1;
//      digitalWrite(LED_1, STATE_BUTTON_1);
      digitalWrite(OUTLET_1, STATE_BUTTON_1);
      if(STATE_BUTTON_1 == 1) {
        COMM.print("On");
      } else {
        COMM.print("Off");
      }
      while(digitalRead(BUTTON_1) == LOW);
      delay(100);
  }

  if(digitalRead(BUTTON_2) == LOW) {
      STATE_BUTTON_2 = !STATE_BUTTON_2;
//      digitalWrite(LED_2, STATE_BUTTON_2);
      digitalWrite(OUTLET_2, STATE_BUTTON_2);
      if(STATE_BUTTON_2 == 1) {
        COMM.print("On");
      } else {
        COMM.print("Off");
      }
      while(digitalRead(BUTTON_2) == LOW);
      delay(100);
  }
  
  if(COMM.available() > 0) {
    
    FLAG = COMM.read();
    if(FLAG == 't'){
      STATE_BUTTON_1 = !STATE_BUTTON_1;
//      digitalWrite(LED_1, STATE_BUTTON_1);
      digitalWrite(OUTLET_1, STATE_BUTTON_1);
      while(digitalRead(BUTTON_1) == LOW);
      delay(100);
    } else if (FLAG == 'h'){
      STATE_BUTTON_2 = !STATE_BUTTON_2;
//      digitalWrite(LED_2, STATE_BUTTON_2);
      digitalWrite(OUTLET_2, STATE_BUTTON_2);
      while(digitalRead(BUTTON_2) == LOW);
      delay(100);
    }
  }
}
