from django.db import models
from django.contrib.postgres.fields import JSONField, ArrayField
from django.contrib.postgres.indexes import GinIndex

# Create your models here.

class SmokeSession(models.Model):
    sessionId = models.IntegerField()
    userId = models.IntegerField()
    # time provided by frontend
    created_at = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    animal = models.CharField(max_length=100)
    meatCut = models.CharField(max_length=100)
    smoker = models.CharField(max_length=100)
    ogWeight = models.IntegerField()
    trimWeight = models.IntegerField()
    physDesc = models.CharField(max_length=1000)
    notes = models.CharField(max_length=1000)
    last_modified = models.DateTimeField(auto_now_add=True)
    # columns = ArrayField(
    # )
    # class Meta:
    #     indexes = [GinIndex(fields=[sv])]

    def get_session(self):
        return self.title