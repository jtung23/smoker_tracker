# BBQ Tracker

As an avid BBQer I realized I needed a way other than google sheets or excel to track all my smoke sessions. I frequently found myself caught up in the maintenance during a session to remember to record.
This app allows the user to track their BBQ sessions and share their sessions with everyone else. Allowing anyone to get into the hobby/industry, emulate a session, and deliver delicious meat.

## MVP
- [x] save BBQ sessions
- [ ] Authentication/users
- [ ] Profile to view all sessions
- [ ] Search
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

2. Installing dependancies
```python
# /smoker_tracker/smoker_tracker
pip install -r requirements.txt
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
  
