# road map for project

# v.1:
- [x] ~~post a vlue from multible buttons `{0 45 90 135 180}`~~
- [x] ~~posting a value from slider by button __no javascript__ page will relod~~
- [x] ~~handle post request of updating value from end-user~~
- [x] ~~send value via post request to control server~~

# v1.2:
- [ ] posting a value from slider by button keeping last posted

# v1.5:
- [ ] open web socket with end client monitoring the value
- [ ] open wepsocket controler and middle server send value


## end user
- [ ] post a vlue from multible buttons `{0 90 180}` 

- [x] posting a value from slider by button __no javascript__ page will relod
- [ ] posting a value from slider by button keeping last posted
- [ ] post the value whenever slider is updated

- [ ] control multible motors

- [ ] update a animation represent the state of servo
- [ ] update the value by interactive andimation

- [ ] use camera in arm to choose object to pickup

## middle-serve
### with end-user
- [x] handle post request of updating value
- [ ] open web socket with end client monitoring the value
- [ ] use multiple values for many motors

- [ ] send feed back about current value

### with control-server
- [ ] send value via post request 
- [ ] open wepsocket send value with it
- [ ] send multiple values

- [ ] get feedback about current value

## control-server
- [ ] handle get request from serve
- [ ] open web socket with middle server
