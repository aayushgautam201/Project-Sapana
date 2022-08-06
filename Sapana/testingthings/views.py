from rest_framework import viewsets
from rest_framework import permissions
from .models import Blogcategory,Blogs,OldBooks,NewBooks,NewBookscategory
from .serializers import blog_category_serializer,blog_serializer,Oldbook_serializer,Newbook_category_serializer,Newbook_serializer

class blog_category_viewset(viewsets.ModelViewSet):
    queryset=Blogcategory.objects.all();
    serializer_class=blog_category_serializer;
    permission_classes=[permissions.IsAuthenticatedOrReadOnly];
class blog_viewset(viewsets.ModelViewSet):
    queryset=Blogs.objects.all();
    serializer_class=blog_serializer;
    permission_classes=[permissions.IsAuthenticatedOrReadOnly];
class oldbook_viewset(viewsets.ModelViewSet):
    queryset=OldBooks.objects.all();
    serializer_class=Oldbook_serializer;
    permission_classes=[permissions.IsAuthenticatedOrReadOnly];
class Newbook_category_viewset(viewsets.ModelViewSet):
    queryset=NewBookscategory.objects.all();
    serializer_class=Newbook_category_serializer;
    permission_classes=[permissions.IsAuthenticatedOrReadOnly];
class Newbook_viewset(viewsets.ModelViewSet):
    queryset=NewBooks.objects.all();
    serializer_class=Newbook_serializer;
    permission_classes=[permissions.IsAuthenticatedOrReadOnly];