from rest_framework import serializers
from .models import SmokeSession
from django.contrib.auth.models import User

class SessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = SmokeSession
        fields = '__all__'
        # fields = ('sessionId', 'userId', 'created_at', 'title', 'animal', 'meatCut', 'smoker', 'ogWeight', 'trimWeight', 'physDesc', 'notes')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'