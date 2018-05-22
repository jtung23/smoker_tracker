# Generated by Django 2.0.5 on 2018-05-20 21:23

import django.contrib.postgres.fields
import django.contrib.postgres.fields.jsonb
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='SmokeSession',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sessionId', models.IntegerField()),
                ('userId', models.IntegerField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('title', models.CharField(max_length=100)),
                ('animal', models.CharField(max_length=100)),
                ('meatCut', models.CharField(max_length=100)),
                ('smoker', models.CharField(max_length=100)),
                ('ogWeight', models.IntegerField()),
                ('trimWeight', models.IntegerField()),
                ('physDesc', models.CharField(max_length=1000)),
                ('notes', models.CharField(max_length=1000)),
                ('columns', django.contrib.postgres.fields.ArrayField(base_field=django.contrib.postgres.fields.jsonb.JSONField(), size=None)),
                ('data', django.contrib.postgres.fields.ArrayField(base_field=django.contrib.postgres.fields.jsonb.JSONField(), size=None)),
            ],
        ),
    ]