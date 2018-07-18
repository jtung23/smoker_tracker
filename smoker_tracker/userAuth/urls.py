from django.urls import path
from .views import current_user, user_list
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('current_user/', current_user),
    path('users/', user_list)
]