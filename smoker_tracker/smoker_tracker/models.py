from django.db import models
from django.contrib.postgres.fields import JSONField, ArrayField
from django.contrib.postgres.indexes import GinIndex

class SmokeSession(models.Model):
    sessionId = Models.IntegerField()
    userId = models.IntegerField()
    date = models.CharField(max_length=50)
    title = models.CharField(max_length=100)
    animal = models.CharField(max_length=100)
    meatCut = models.CharField(max_length=100)
    smoker = models.CharField(max_length=100)
    ogWeight = models.IntegerField()
    trimWeight = models.IntegerField()
    physDesc = models.CharField(max_length=1000)
    notes = models.CharField(max_length=1000)
    columns = ArrayField(JSONField())
    data = ArrayField(JSONField())
    # class Meta:
    #     indexes = [GinIndex(fields=[sv])]