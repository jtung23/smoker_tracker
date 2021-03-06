from django.urls import path
from . import views

urlpatterns = [
    path('api/session/<int:pk>/', views.get_delete_update_session, name="get_delete_update_session" ),
    path('api/sessions/', views.get_post_session, name="get_post_session" ),
    path('api/sessions/q/<title>/', views.get_search_session, name="get_search_session" ),
    path('api/users/<int:id>/', views.get_delete_update_user, name="get_delete_update_user" )
]