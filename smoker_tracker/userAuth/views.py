# from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.contrib.auth.models import User
from rest_framework import permissions, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer, UserSerializerWithToken
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
@api_view(['GET'])
def current_user(request):
    print('current_user runs')
    """
    Determine the current user by their token, and return their data
    """
    
    serializer = UserSerializer(request.user)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes((permissions.AllowAny,))
def user_list(request):
    print('USERLIST runs')
    """
    Create a new user. It's called 'UserList' because normally we'd have a get
    method here too, for retrieving a list of all User objects.
    """
    serializer = UserSerializerWithToken(data=request.data)
    print(serializer)
    if serializer.is_valid():
        print('is valid')
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    print('not valid')
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
