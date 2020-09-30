# -*- encoding: utf-8 -*-
"""
License: MIT
Copyright (c) 2019 - present AppSeed.us
"""

from django.contrib import admin
from django.urls import path, include  # add this
from django.conf.urls import url
from .views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", include("authentication.urls")),  # add this
    path("", include("app.urls")),  # add this


    #sensor sections
    url(r'^ajax/sensors/speed', read_speed, name='read_speed'),
    url(r'^ajax/sensors/temp', read_temp, name='read_temp'),
    url(r'^ajax/sensors/rand', read_rand, name='read_rand'),
]
