from django.shortcuts import render
from api.models import SmokeSession
from api.serializers import SessionSerializer
from rest_framework import generics

# Create your views here.
class SessionListCreate(generics.ListCreateAPIView):
    queryset = SmokeSession.objects.all()
    serializer_class = SessionSerializer