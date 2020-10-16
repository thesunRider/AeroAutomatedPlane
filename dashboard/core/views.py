from django.contrib.auth.decorators import login_required
from django.shortcuts import render, get_object_or_404, redirect
from django.template import loader
from django.http import HttpResponse
from django import template
from django.http import JsonResponse

import random
import math
import serial


ser = serial.Serial('/dev/pts/14', 192000, timeout=1)

def read_speed(request):
	x=ser.readline()
	ret = int(x.decode('utf-8').rstrip('\r\n'))
	print("speed:",ret)
	return JsonResponse({'status_code':200,'value':ret})


def read_temp(request):	
	x=ser.readline()
	ret = int(x.decode('utf-8').rstrip('\r\n'))
	print("temp:",ret)
	return JsonResponse({'status_code':200,'tempr':ret})


def read_rand(request):
	x=ser.readline()
	ret = int(x.decode('utf-8').rstrip('\r\n'))
	print("rand:",ret)
	return JsonResponse({'status_code':200,'value':ret})
