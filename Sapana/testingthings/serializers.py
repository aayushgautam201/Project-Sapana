from rest_framework import serializers
from .models import Blogs,Blogcategory,NewBooks,NewBookscategory,OldBooks
class blog_category_serializer(serializers.ModelSerializer):
    class Meta:
        model=Blogcategory;
        fields='__all__';
class blog_serializer(serializers.ModelSerializer):
    class Meta:
        model=Blogs;
        fields='__all__';
class Newbook_category_serializer(serializers.ModelSerializer):
    class Meta:
        model=NewBookscategory;
        fields='__all__';
class Newbook_serializer(serializers.ModelSerializer):
    class Meta:
        model=NewBooks;
        fields='__all__';
class Oldbook_serializer(serializers.ModelSerializer):
    class Meta:
        model=OldBooks;
        fields='__all__';
