# Tsukat.TestTask
## Structure
- [Requirements](#requirements) 
- [Setup](#setup)
- [Deployment](#deployment)
- [Usage instructions](#usage-instructions)

## Requirements
####You'll must have installed: 
- Python 3.11.6+(https://www.python.org/)
-  Virtual Environments with Python3.11.6+(https://docs.python.org/3/tutorial/venv.html)
-  Docker(https://docs.docker.com/engine/install/) 
-  Docker-compose(https://docs.docker.com/compose/install/)

##Setup 
Clone repository from github
```
git clone git@github.com:MaksymDuda1/Tsukat.TestTask.git
```
##Deployment
####Build images
```
docker-compose build
```

####Run images
```
docker-compose up
```

##Usage instructions
The application will get started in (http://127.0.0.1:4200)

Swagger Documentation: (http://127.0.0.1:8000/docs)

Redoc Documentation: (http://127.0.0.1:8000/redoc)