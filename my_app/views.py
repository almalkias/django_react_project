from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Venue, Artist
from .serializers import VenueSerializer, ArtistSerializer
from django.core.exceptions import ObjectDoesNotExist
from django.db.models import Count
from collections import defaultdict


@api_view(["POST"])
def create_venue(request):
    serializer = VenueSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@api_view(["POST"])
def create_artist(request):
    serializer = ArtistSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@api_view(['GET'])
def venues(request):
    try:
        data = []
        all_areas = Venue.objects.values('state', 'city').distinct()

        for area in all_areas:
            sub_data = []
            venues = Venue.objects.filter(state=area['state'], city=area['city']).all()
            for venue in venues:
                sub_data.append({
                    'id': venue.id,
                    'name': venue.name
                })
            data.append({
                'state': area['state'],
                'city': area['city'],
                'venues_lst': sub_data
                })

        return Response(data, status=200)

    except ObjectDoesNotExist as e:
        return Response({"message": f"Could not retrieve venues. Error: {str(e)}"}, status=500)



@api_view(["GET"])
def artists(request):
    try:
        artists = Artist.objects.all()
        serializer = ArtistSerializer(artists, many=True)
        return Response(serializer.data, status=200)
    except:
        return Response({"message": "Could not retrieve artists"}, status=500)


@api_view(["GET"])
def show_details_venue(request, id_param):
    try:
        venue = Venue.objects.get(id=id_param)
        serializer = VenueSerializer(venue)
        return Response(serializer.data, status=200)
    except:
        return Response({"message": "Could not retrieve venue"}, status=500)


@api_view(["GET"])
def show_details_artist(request, id_param):
    try:
        artist = Artist.objects.get(id=id_param)
        serializer = ArtistSerializer(artist)
        return Response(serializer.data, status=200)
    except:
        return Response({"message": "Could not retrieve artist"}, status=500)


@api_view(["PUT"])
def update_venue(request, venue_id):
    try:
        venue = Venue.objects.get(pk=venue_id)
    except Venue.DoesNotExist:
        return Response({"error": "Venue not found"}, status=404)
    
    serializer = VenueSerializer(venue, data=request.data)
    
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=200)
    return Response(serializer.errors, status=400)