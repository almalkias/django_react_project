from django.urls import path
from . import views

urlpatterns = [
    path('venues/create/', views.create_venue, name='create_venue'),
    path('artists/create/', views.create_artist, name='create_artist'),
    path('venues/', views.venues, name='venues'),
    path('artists/', views.artists, name='artists'),
    path('venues/<int:id_param>/', views.show_details_venue, name='show_details_venue'),
    path('artists/<int:id_param>/', views.show_details_artist, name='show_details_artist'),

    path('venues/<int:venue_id>/edit/', views.update_venue, name='update_venue'),
    # path('artists/<int:artist_id>/edit/', views.update_artist, name='update_artist'),
]
