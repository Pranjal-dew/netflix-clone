from django.http import HttpResponse,JsonResponse
from django.shortcuts import render

from rest_framework.renderers import JSONRenderer

from .models import Student
from .serializers import StudentSerializer


# Create your views here.

# Model Object - Single Student Data 
def student_detail_def(request):
    stu = Student.objects.get(id=1)
    print(stu)
    serializer = StudentSerializer(stu) #serialing
    print(serializer)
    print(serializer.data)
    json_data = JSONRenderer().render(serializer.data)
    print(json_data)
    #return HTTPResponse(json_data,content_type='application/json')
    return HttpResponse(json_data,content_type='application/json')

    """
    Student object (1)
    StudentSerializer(<Student: Student object (1)>):
    name = CharField(max_length=100)
    roll = CharField(max_length=20)
    city = CharField(max_length=64)
    {'name': 'raja', 'roll': '10', 'city': 'raipur'}
    b'{"name":"raja","roll":"10","city":"raipur"}'
    """
    
def student_detail(request,pk):
    stu = Student.objects.get(id=pk)
    serializer = StudentSerializer(stu)
    #json_data = JSONRenderer().render(serializer.data)
    #return HttpResponse(json_data,content_type='application/json')
    return JsonResponse(serializer.data)

def student_list(request):
    stu = Student.objects.all()
    serializer = StudentSerializer(stu,many=True)
    return JsonResponse(serializer.data,safe=False)
