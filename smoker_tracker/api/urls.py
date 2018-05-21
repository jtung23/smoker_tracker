from django.urls import path
from . import views

urlpatterns = [
    path('api/smokesession', views.SessionListCreate.as_view()),
]