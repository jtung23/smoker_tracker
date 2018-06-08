from django.test import TestCase
from ..models import SmokeSession
# Create your tests here.

class SmokeSessionTest(TestCase):
    """ Test module for SmokeSession model """

    def setUp(self):
        SmokeSession.objects.create(
            sessionId=1,
            userId=1,
            title="hello",
            smoker="WSM"
        )
        SmokeSession.objects.create(
            sessionId=2,
            userId=1,
            title="bye",
            smoker="MSW"
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
