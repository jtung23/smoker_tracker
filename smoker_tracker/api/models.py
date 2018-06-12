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
    animal = models.CharField(max_length=100, null=True)
    meatCut = models.CharField(max_length=100, null=True)
    smoker = models.CharField(max_length=100)
    ogWeight = models.DecimalField(max_digits=8, decimal_places=4, null=True)
    trimWeight = models.DecimalField(max_digits=8, decimal_places=4, null=True)
    physDesc = models.CharField(max_length=1000, null=True)
    notes = models.CharField(max_length=1000, null=True)
    last_modified = models.DateTimeField(auto_now_add=True)
    columns = JSONField(
        null=True,blank=True
    )
    data = JSONField(
        null=True,blank=True
    )
    # )
    # class Meta:
    #     indexes = [GinIndex(fields=[sv])]

    def get_session(self):
        return self.title