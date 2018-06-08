import json
from rest_framework import status
from django.test import TestCase, Client
from django.urls import reverse
from ..models import SmokeSession
from ..serializers import SessionSerializer

# initializes the apiclient app
client = Client()

class GetAllSessionsTest(TestCase):

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
            smoker="WSM"
        )
        SmokeSession.objects.create(
            sessionId=1,
            userId=2,
            title="yes",
            smoker="WSM"
        )
        SmokeSession.objects.create(
            sessionId=1,
            userId=2,
            title="no",
            smoker="WSM"
        )

    def test_get_all_sessions(self):
        response = client.get(reverse('get_post_session'))
        sessions = SmokeSession.objects.all()
        serializer = SessionSerializer(sessions, many=True)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

class GetSingleSessionTest(TestCase):

    def setUp(self):
        self.hello = SmokeSession.objects.create(
            sessionId=1,
            userId=1,
            title="hello",
            smoker="WSM"
        )
        self.bye = SmokeSession.objects.create(
            sessionId=2,
            userId=1,
            title="bye",
            smoker="WSM"
        )
        self.yes = SmokeSession.objects.create(
            sessionId=1,
            userId=2,
            title="yes",
            smoker="WSM"
        )
        self.no = SmokeSession.objects.create(
            sessionId=1,
            userId=2,
            title="no",
            smoker="WSM"
        )

        
    def test_get_valid_single_session(self):
        response = client.get(
            reverse('get_delete_update_session',
                kwargs={'pk': self.bye.pk}))
        session = SmokeSession.objects.get(pk=self.bye.pk)
        serializer = SessionSerializer(session)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        
    def test_get_invalid_single_session(self):
        response = client.get(
            reverse('get_delete_update_session', kwargs={'pk': 30}))
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

class CreateNewSessionTest(TestCase):
    # test module for inserting a new session

    def setUp(self):
        self.valid_payload = {
            'sessionId': 1,
            'userId': 2,
            'title': "no",
            'smoker': "WSM"
        }

        self.invalid_payload = {
            'sessionId': 1,
            'userId': 2,
            'title': '',
            'smoker': "WSM"
        }

    def test_create_valid_session(self):
        response = client.post(
            reverse('get_post_session'),
            data=json.dumps(self.valid_payload),
            content_type='application/json'
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
    
    def test_create_invalid_session(self):
        response = client.post(
            reverse('get_post_session'),
            data = json.dumps(self.invalid_payload),
            content_type = 'application/json'
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)