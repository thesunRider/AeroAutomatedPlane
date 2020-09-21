from django.contrib.auth.decorators import login_required
from django.shortcuts import render, get_object_or_404, redirect
from django.template import loader
from django.http import HttpResponse
from django import template
from django.http import JsonResponse

import random
import math

def read_speed(request):
	return JsonResponse({'status_code':200,'value':math.ceil(random.random()*100)})