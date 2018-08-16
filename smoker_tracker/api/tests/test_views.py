import json
from rest_framework import status
from django.test import TestCase, Client
from django.urls import reverse
from ..models import SmokeSession
from django.contrib.auth.models import User
from ..serializers import SessionSerializer, UserSerializer

# initializes the apiclient app
client = Client()

class GetAllSessionsTest(TestCase):
    # gets ALL sessions
    
    # creates initial session objects for test
    def setUp(self):
        SmokeSession.objects.create(
            sessionId=1,
            userId=1,
            title="hello",
            smoker="WSM",
            created_at="timestamp",
            last_modified="datetimefield",
            columns=[
                {
                    "column1": "col1",
                    "col2": "col2"
                },
                {
                    "column1": "col3",
                    "col2": "col4"
                }
            ],
            data=[
                {
                    "column1": "col1",
                    "col2": "col2"
                },
                {
                    "column1": "col1",
                    "col2": "col2"
                }
            ]
        )
        SmokeSession.objects.create(
            sessionId=2,
            userId=1,
            title="bye",
            smoker="WSM",
            created_at="timestamp",
            last_modified="datetimefield",
            columns=[
                {
                    "column1": "col1",
                    "col2": "col2"
                },
                {
                    "column1": "col3",
                    "col2": "col4"
                }
            ],
            data=[
                {
                    "column1": "col1",
                    "col2": "col2"
                },
                {
                    "column1": "col1",
                    "col2": "col2"
                }
            ]
        )
        SmokeSession.objects.create(
            sessionId=1,
            userId=2,
            title="yes",
            smoker="WSM",
            created_at="timestamp",
            last_modified="datetimefield",
            columns=[
                {
                    "column1": "col1",
                    "col2": "col2"
                },
                {
                    "column1": "col3",
                    "col2": "col4"
                }
            ],
            data=[
                {
                    "column1": "col1",
                    "col2": "col2"
                },
                {
                    "column1": "col1",
                    "col2": "col2"
                }
            ]
        )
        SmokeSession.objects.create(
            sessionId=1,
            userId=2,
            title="no",
            smoker="WSM",
            created_at="timestamp",
            last_modified="datetimefield",
            columns=[
                {
                    "column1": "col1",
                    "col2": "col2"
                },
                {
                    "column1": "col3",
                    "col2": "col4"
                }
            ],
            data=[
                {
                    "column1": "col1",
                    "col2": "col2"
                },
                {
                    "column1": "col1",
                    "col2": "col2"
                }
            ]
        )
    def test_get_all_sessions(self):
        # tests by grabbing url link using reverse() then the respnose is returned
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
            smoker="WSM",
            created_at="timestamp",
            last_modified="datetimefield",
            columns=[
                {
                    "column1": "col1",
                    "col2": "col2"
                },
                {
                    "column1": "col3",
                    "col2": "col4"
                }
            ],
            data=[
                {
                    "column1": "col1",
                    "col2": "col2"
                },
                {
                    "column1": "col1",
                    "col2": "col2"
                }
            ]
        )
        self.bye = SmokeSession.objects.create(
            sessionId=2,
            userId=1,
            title="bye",
            smoker="WSM",
            created_at="timestamp",
            last_modified="datetimefield",
            columns=[
                {
                    "column1": "col1",
                    "col2": "col2"
                },
                {
                    "column1": "col3",
                    "col2": "col4"
                }
            ],
            data=[
                {
                    "column1": "col1",
                    "col2": "col2"
                },
                {
                    "column1": "col1",
                    "col2": "col2"
                }
            ]
        )
        self.yes = SmokeSession.objects.create(
            sessionId=1,
            userId=2,
            title="yes",
            smoker="WSM",
            created_at="timestamp",
            last_modified="datetimefield",
            columns=[
                {
                    "column1": "col1",
                    "col2": "col2"
                },
                {
                    "column1": "col3",
                    "col2": "col4"
                }
            ],
            data=[
                {
                    "column1": "col1",
                    "col2": "col2"
                },
                {
                    "column1": "col1",
                    "col2": "col2"
                }
            ]
        )
        self.no = SmokeSession.objects.create(
            sessionId=1,
            userId=2,
            title="no",
            smoker="WSM",
            created_at="timestamp",
            last_modified="datetimefield",
            columns=[
                {
                    "column1": "col1",
                    "col2": "col2"
                },
                {
                    "column1": "col3",
                    "col2": "col4"
                }
            ],
            data=[
                {
                    "column1": "col1",
                    "col2": "col2"
                },
                {
                    "column1": "col1",
                    "col2": "col2"
                }
            ]
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
    # test module for inserting a new sssion

    def setUp(self):
        self.valid_payload = {
            'sessionId': 1,
            'userId': 2,
            'title': 'no',
            'smoker': 'WSM',
            'created_at': 'timestamp',
            'ogWeight': "14",
            'meatCut': "brisket",
            'animal': "cow",
            'columns': [
                {
                    'key': 'col1',
                    'name': 'col2',
                    'width': 80
                },
                {
                    'key': 'col2',
                    'name': 'col3',
                    'editable': 'true'
                }
            ],
            'data': [
                {
                    'grillTemp': '300',
                    'id': '1',
                    'internalTemp': "400",
                    'time': "13:00"
                },
                {
                    'grillTemp': '600',
                    'id': '2',
                    'internalTemp': "500",
                    'time': "14:00"
                }
            ],
            'notes': "NOTES",
            'physDesc': "DESCRIPTION"
        }

        self.invalid_payload = {
            'sessionId': 1,
            'userId': 2,
            'title': '',
            'smoker': 'WSM'
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


class UpdateSingleSessionTest(TestCase):
    # tests module for deleting a single session

    def setUp(self):
        # creates initial session objects from model
        self.hello = SmokeSession.objects.create(
            sessionId=1,
            userId=1,
            title="hello",
            smoker="WSM",
            created_at="timestamp",
            last_modified="datetimefield",
            columns=[
                {
                    "column1": "col1",
                    "col2": "col2"
                },
                {
                    "column1": "col3",
                    "col2": "col4"
                }
            ],
            data=[
                {
                    "column1": "col1",
                    "col2": "col2"
                },
                {
                    "column1": "col1",
                    "col2": "col2"
                }
            ]
        )
        self.bye = SmokeSession.objects.create(
            sessionId=2,
            userId=1,
            title="bye",
            smoker="WSM",
            created_at="timestamp",
            last_modified="datetimefield",
            columns=[
                {
                    "column1": "col1",
                    "col2": "col2"
                },
                {
                    "column1": "col3",
                    "col2": "col4"
                }
            ],
            data=[
                {
                    "column1": "col1",
                    "col2": "col2"
                },
                {
                    "column1": "col1",
                    "col2": "col2"
                }
            ]
        )
        # test objects for valid and invalid updated info
        self.valid_payload = {
            'sessionId': 2,
            'userId': 1,
            'title': "not hello",
            'smoker': "WSM",
            'created_at': 'timestamp',
            'last_modified': 'datetimefield',
            'columns': [
                {
                    'column1': 'col1',
                    'col2': 'col2'
                },
                {
                    'column1': 'col3',
                    'col2': 'col4'
                }
            ],
            'data': [
                {
                    'column1': 'col1',
                    'col2': 'col2'
                },
                {
                    'column1': 'col1',
                    'col2': 'col2'
                }
            ]
        }
        self.invalid_payload = {
            'sessionId': 2,
            'userId': 1,
            'title': "",
            'smoker': "WSM"
        }

    def test_valid_update_session(self):
        response = client.put(
            reverse('get_delete_update_session', kwargs={'pk':self.hello.pk}),
            data=json.dumps(self.valid_payload),
            content_type='application/json'
        )
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

    def test_invalid_update_session(self):
        response = client.put(
            reverse('get_delete_update_session', kwargs={'pk': self.hello.pk}),
            data=json.dumps(self.invalid_payload),
            content_type='application/json'
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)


class DeleteSingleSessionTest(TestCase):
    # test module for updating a single session

    def setUp(self):
        self.hello = SmokeSession.objects.create(
            sessionId=1,
            userId=1,
            title="hello",
            smoker="WSM",
            created_at="timestamp",
            last_modified="datetimefield",
            columns=[
                {
                    "column1": "col1",
                    "col2": "col2"
                },
                {
                    "column1": "col3",
                    "col2": "col4"
                }
            ],
            data=[
                {
                    "column1": "col1",
                    "col2": "col2"
                },
                {
                    "column1": "col1",
                    "col2": "col2"
                }
            ]  
        )
        self.bye = SmokeSession.objects.create(
            sessionId=2,
            userId=2,
            title="bye",
            smoker="WSM",
            created_at="timestamp",
            last_modified="datetimefield",
            columns=[
                {
                    "column1": "col1",
                    "col2": "col2"
                },
                {
                    "column1": "col3",
                    "col2": "col4"
                }
            ],
            data=[
                {
                    "column1": "col1",
                    "col2": "col2"
                },
                {
                    "column1": "col1",
                    "col2": "col2"
                }
            ]
        )

    def test_valid_delete_session(self):
        response = client.delete(
            reverse('get_delete_update_session', kwargs={'pk': self.hello.pk}))
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
          
    def test_invalid_delete_session(self):
        response = client.delete(
            reverse('get_delete_update_session', kwargs={'pk': 30}))
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

class GetSingleUserTest(TestCase):

    def setUp(self):
        self.hello = User.objects.create(
            id=1,
            password="pbkdf2",
            last_login="2018-07-18 19:19:54.541403+00",
            is_superuser="f",
            username="timestamp",
            first_name="datetimefield",
            email="dateguy@date.com",
            is_staff="t",
            is_active="t",
            date_joined="2018-06-13 23:21:43.874432+00"
        )
        
    def test_get_valid_single_session(self):
        response = client.get(
            reverse('get_delete_update_user',
                kwargs={'id': self.hello.id}))
        session = User.objects.get(id=self.hello.id)
        serializer = UserSerializer(session)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        
    def test_get_invalid_single_session(self):
        response = client.get(
            reverse('get_delete_update_user', kwargs={'id': 2}))
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
