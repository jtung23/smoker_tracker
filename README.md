# BBQ Tracker

As an avid BBQer I realized I needed a way other than google sheets or excel to track all my smoke sessions. I frequently found myself caught up in the caring of the meat during a session to remember to record. So I created this app to keep track of my bbq and more specifically, brisket sessions. 
In the future I will be incorporating a Raspberry Pi w/ WiFi, thermocouple, and setting up an API to automatically record the temperature from the smoker

## MVP
- [x] save BBQ sessions
- [x] Authentication/users
- [x] Profile to view all sessions
- [ ] Search
- [ ] Validation for new sessions
## Getting Started

*Has not been deployed*

* Starting development server
```python
# smoker_tracker/smoker_tracker/
python manage.py runserver
```
* Starting front-end
```javascript
// /smoker_tracker/smoker_tracker/frontend/src/
yarn start
```

### Prerequisites

* A Smoker ex. [18" Weber Smokey Mountain](https://www.amazon.com/Weber-721001-Mountain-18-Inch-Charcoal/dp/B001I8ZTJ0)

To contribute:
* Understanding of Python, Django, and/or React

### Installing

1. Fork or Clone

3. Start your virtual environment

*Using virtualenv*
*I use the following command because of a virtualenv bug where I have to specify python3 when creating the env*

`virtualenv -p python3 envname`

2. Installing dependancies
```python
# /smoker_tracker/smoker_tracker
pip install -r requirements.txt
```

4. Database Settings
In `smoker_tracker/settings.py` modify the database settings to match your Postgres database.
```python
DATABASES = {
    'default': {
      'ENGINE' : 'django.db.backends.postgresql_psycopg2',
      'NAME' : 'smoker_db',
      'USER': 'smoker_admin',
      'PASSWORD': 'smoker_password',
      'HOST': 'localhost',
      'PORT': ''
    }
}
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

```python
# smoker_tracker/smoker_tracker/
python manage.py test
```

*on `smoker_tracker/smoker_Tracker/frontend/`


### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [React.js](https://reactjs.org/docs/hello-world.html) - The web framework used
* [Django](https://docs.djangoproject.com/en/2.0/) - Backend Python Framework
* [Django REST Framework](http://www.django-rest-framework.org/) - Used to create API calls between front and back end.
* [PostgreSQL](https://www.postgresql.org/docs/) - Database

## Contributing
* Fork/Clone and contact me if you'd like to add features to the project

## Authors

* **Jonathan Tung** - *Initial work* - [Jtung23](https://github.com/jtung23)

## License

Unlicensed

## Dev Notes

### To go back and do:

1. validation for all fields or check for fields for completing info form.

2. fuel source in form field

3. newsmoke setup and input saves even if person leaves, refreshes, closes window

4. When making new col, validator if same time, then reject

5. newSmokeInfo Timepicker child div.timePicker needs to have width 100%. Have to style in child element, potentially use radium.
  
