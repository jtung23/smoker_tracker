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
            notes = 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
        )
        SmokeSession.objects.create(
            sessionId=2,
            userId=1,
            created_at = '2018-06-09T10:21:22.635155',
            title = 'hello',
            animal = 'cow',
            meatCut = 'brisket',
            smoker = 'WSM',
            ogWeight = 12.5,
            trimWeight = 10.3,
            physDesc = 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
            notes = 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
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
    