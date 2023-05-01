#include <SPI.h>
#include <MFRC522.h>   
 
#define RST_PIN   9
#define SS_PIN    10

MFRC522 rc522(SS_PIN, RST_PIN);

int i=0;

void setup(){
  Serial.begin(9600);
  SPI.begin();
  rc522.PCD_Init();            
}

void loop(){

 if ( !rc522.PICC_IsNewCardPresent() || !rc522.PICC_ReadCardSerial() ) { 
    //카드 또는 ID 가 읽히지 않으면 return을 통해 다시 시작하게 됩니다.
    
    return;
  }

  if(rc522.uid.uidByte[0]==241 && rc522.uid.uidByte[1]==53 && rc522.uid.uidByte[2]==192
    && rc522.uid.uidByte[3]==190) {  // 여기에 CARD UID 를 자신의 카드에 맞는 값으로 변경해주세요
    
    Serial.println("<< OK !!! >>  Registered card...(학번)(이름)");
    
    delay(500);
  }
  else{
    Serial.println("<< WARNING !!! >>  This card is not registered");
    delay(500);
  }

  delay(100);
}
