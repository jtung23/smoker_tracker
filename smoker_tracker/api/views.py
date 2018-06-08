from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status, permissions
from .models import SmokeSession
from .serializers import SessionSerializer


# Create your views here.

@api_view(['GET','POST','PUT'])
@permission_classes((permissions.AllowAny,))
def get_delete_update_session(request, pk):
    try:
        session = SmokeSession.objects.get(pk=pk)
    except SmokeSession.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method=="GET":
        return Response({})
    elif request.method=="POST":
        return Response({})
    elif request.method=="PUT":
        return Response({})

@api_view(['GET', 'POST'])
@permission_classes((permissions.AllowAny,))
def get_post_session(request):
    # get all puppies
    if request.method == 'GET':
        sessions = SmokeSession.objects.all()
        serializer = SessionSerializer(sessions, many=True)
        return Response(serializer.data)
    # insert a new record for a puppy
    elif request.method == 'POST':
        return Response({})



# class SessionListCreate(generics.ListCreateAPIView):
#     queryset = SmokeSession.objects.all()
#     serializer_class = SessionSerializer