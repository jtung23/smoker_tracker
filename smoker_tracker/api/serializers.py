from rest_framework import serializers
from api.models import SmokeSession

class SessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = SmokeSession
        # fields = '_all_'
        fields = ('sessionId', 'userId', 'created_at', 'title', 'animal', 'meatCut', 'smoker', 'ogWeight', 'trimWeight', 'physDesc', 'notes')