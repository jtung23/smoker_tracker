from django.urls import path
from . import views

urlpatterns = [
    path('api/sessions/<int:pk>/', views.get_delete_update_session, name="get_delete_update_session" ),
    path('api/sessions/', views.get_post_session, name="get_post_session" )

    # url(
    #     r'^api/v1/sessions/(?P<pk>[0-9]+)$',
    #     views.get_delete_update_session,
    #     name='get_delete_update_session'
    # ),
    # url(
    #     r'^api/v1/sessions/$',
    #     views.get_post_session,
    #     name='get_post_session'
    # )
]
# urlpatterns = [
#     path('api/smokesession', views.SessionListCreate.as_view()),
# ]