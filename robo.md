# robot arm
## description 
simplified moving arm with three degrees of freedom 
- rotation around x
- y-axis
- arm close/open
![img](https://microbotlabs.com/images/armuno-blackyellow-1-x440.jpg?crc=3780506381)

## mechanical desigen 
[sugestion](https://microbotlabs.com/robot-kits.html)
## component 
- atmega xx
- asp8266
- x servo motors

## base scinario
- asp8266 connect connect to host to check angles for servo motors
- these values send to atmega 
- atmega control the servos 