from django.contrib.auth.models import User
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status, permissions
from .models import SmokeSession
from .serializers import SessionSerializer, UserSerializer

# Create your views here.

# gets/updates/deletes by primary key 
@api_view(['GET','PUT','DELETE'])
@permission_classes((permissions.AllowAny,))
def get_delete_update_session(request, pk):
    print('get dleete update session runs')
    try:
        session = SmokeSession.objects.get(pk=pk)
        print("SESSION: ", session)
    except SmokeSession.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method=="GET":
        serializer = SessionSerializer(session)
        return Response(serializer.data)
    elif request.method=="DELETE":
        session.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    elif request.method=="PUT":
        serializer = SessionSerializer(session, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# for searching by title
@api_view(['GET'])
@permission_classes((permissions.AllowAny,))
def get_search_session(request, title):
    try:
        session = SmokeSession.objects.get(title=title)
    except SmokeSession.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = SessionSerializer(session)
    return Response(serializer.data)


# gets all and posts a session
@api_view(['GET', 'POST'])
@permission_classes((permissions.AllowAny,))
def get_post_session(request):
    # get all sessions
    if request.method == 'GET':
        sessions = SmokeSession.objects.all()
        serializer = SessionSerializer(sessions, many=True)
        return Response(serializer.data)
    # insert a new record for a sessions
    elif request.method == 'POST':
        data = {
            'userId': request.data.get('userId'),
            'created_at': request.data.get('created_at'),
            'title': request.data.get('title'),
            'animal': request.data.get('animal'),
            'meatCut': request.data.get('meatCut'),
            'smoker': request.data.get('smoker'),
            'ogWeight': request.data.get('ogWeight'),
            'physDesc': request.data.get('physDesc'),
            'notes': request.data.get('notes'),
            'columns': request.data.get('columns'),
            'data': request.data.get('data')
        }
        serializer = SessionSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# USERS
# ?!!?!?!?!!?!?!?!?!?!?!
# getting updating and deleting user by id
@api_view(['GET','PUT','DELETE'])
@permission_classes((permissions.AllowAny,))
def get_delete_update_user(request, id):
    try:
        user = User.objects.get(id=id)
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method=="GET":
        serializer = UserSerializer(user)
        return Response(serializer.data)
    # elif request.method=="DELETE":
    #     session.delete()
    #     return Response(status=status.HTTP_204_NO_CONTENT)
    # elif request.method=="PUT":
    #     serializer = SessionSerializer(session, data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_204_NO_CONTENT)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
