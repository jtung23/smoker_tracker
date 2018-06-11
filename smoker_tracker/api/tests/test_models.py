from django.test import TestCase
from ..models import SmokeSession
# Create your tests here.

class SmokeSessionTest(TestCase):
    """ Test module for SmokeSession model """

    def setUp(self):
        SmokeSession.objects.create(
            sessionId=1,
            userId=1,
            created_at = '2018-06-09T10:21:22.635155',
            title = 'hello',
            animal = 'cow',
            meatCut = 'brisket',
            smoker = 'WSM',
            ogWeight = 12.5,
            trimWeight = 10.3,
            physDesc = 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
            notes = 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
	        columns = [
                {
                "dataField": "time",
                "text": "Time"
                },
                {
                "dataField": "int_temp",
                "text": "Internal Temp"
                },
                {
                "dataField": "grill_temp",
                "text": "Grill Temp"
                },
                {
                "dataField": "vent1",
                "text": "Vent 1"
                },
                {
                "dataField": "vent2",
                "text": "Vent 2"
                },
                {
                "dataField": "vent3",
                "text": "Vent 3"
                }
            ],
            data = [
                {
                "time": "00:00",
                "int_temp": "500",
                "grill_temp": "200",
                "vent1": "50",
                "vent2": "30",
                "vent3": "10",
                "index": 0
                },
                {
                "time": "02:10",
                "int_temp": "400",
                "grill_temp": "300",
                "vent1": "60",
                "vent2": "10",
                "vent3": "20",
                "index": 1
                }
            ]
        )
        SmokeSession.objects.create(
            sessionId=2,
            userId=1,
            created_at = '2018-06-09T10:21:22.635155',
            title = 'bye',
            animal = 'cow',
            meatCut = 'brisket',
            smoker = 'WSM',
            ogWeight = 12.5,
            trimWeight = 10.3,
            physDesc = 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
            notes = 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
	        columns = [
                {
                "dataField": "time",
                "text": "Time"
                },
                {
                "dataField": "int_temp",
                "text": "Internal Temp"
                },
                {
                "dataField": "grill_temp",
                "text": "Grill Temp"
                },
                {
                "dataField": "vent1",
                "text": "Vent 1"
                },
                {
                "dataField": "vent2",
                "text": "Vent 2"
                },
                {
                "dataField": "vent3",
                "text": "Vent 3"
                }
            ],
            data = [
                {
                "time": "00:00",
                "int_temp": "500",
                "grill_temp": "200",
                "vent1": "50",
                "vent2": "30",
                "vent3": "10",
                "index": 0
                },
                {
                "time": "02:10",
                "int_temp": "400",
                "grill_temp": "300",
                "vent1": "60",
                "vent2": "10",
                "vent3": "20",
                "index": 1
                }
            ]
        )

    def test_smoke_session(self):
        hello = SmokeSession.objects.get(title='hello')
        bye = SmokeSession.objects.get(title='bye')

        self.assertEqual(
            hello.get_session(), "hello"
        )
        self.assertEqual(
            bye.get_session(), "bye"
        )
    