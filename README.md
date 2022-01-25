# caps

CAPS System - Code Academy Parcel Service. Uses event driven application principles to simulate a real-world delivery service.

![UML](UML.png)

## Installation

run: `git clone git@github.com:SpencerTower/caps.git`

`cd` into `caps`

## Features

- Vendor:
  - Emits 'pickup' event with order payload
  - Listens for 'delivered' event:
    - Console.logs thank you message to customer
  
- Driver:
  - Listens for 'pickup' event:
    - Logs pickup message
    - Emits 'in-transit' event with order payload
    - Logs confirmation message
    - Emits 'delivered' event with order payload

- Logger:
  - Listens to all events
  - Logs all events

- GlobalEvent:
  - Exports global event pool