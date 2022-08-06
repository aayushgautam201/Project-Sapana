from tkinter import CASCADE
from django.db import models

# Create your models here.

class Blogcategory(models.Model):
    category_name=models.CharField(max_length=300);
    def __str__(self):
        return self.category_name

class Blogs(models.Model):
    author_name=models.CharField(max_length=400);
    author_post=models.TextField();
    published_date=models.DateField();
    blog_title=models.TextField();
    blog_description=models.TextField();
    blog_description2=models.TextField();
    blog_description3=models.TextField();
    blog_image=models.ImageField(upload_to='media');
    blog_category=models.ForeignKey(Blogcategory,on_delete=models.CASCADE);
    def __str__(self):
        return self.blog_title

class NewBookscategory(models.Model):
    category_name=models.CharField(max_length=300);
    def __str__(self):
        return self.category_name

class NewBooks(models.Model):
    book_categoryname=models.ForeignKey(NewBookscategory,on_delete=models.CASCADE);
    book_name=models.CharField(max_length=500);
    book_price=models.IntegerField(default=1000);
    available_stocks=models.IntegerField(default=10);
    book_description1=models.TextField();
    book_description2=models.TextField();
    book_description3=models.TextField();
    book_authorname=models.CharField(max_length=700);
    def __str__(self):
        return self.book_name

class OldBooks(models.Model):
    book_categoryname=models.ForeignKey(NewBookscategory,on_delete=models.CASCADE);
    book_name=models.CharField(max_length=500);
    book_price=models.IntegerField(default=1000);
    book_description1=models.TextField();
    book_description2=models.TextField();
    book_description3=models.TextField();
    book_seller_name=models.CharField(max_length=700);
    book_seller_contact=models.IntegerField();
    book_seller_info=models.TextField();
    def __str__(self):
        return self.book_name




    



