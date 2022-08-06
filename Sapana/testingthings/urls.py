from rest_framework.routers import DefaultRouter
from django.urls import URLPattern
from testingthings.views import *
router=DefaultRouter()
router.register(r'blogcategory',blog_category_viewset,basename="blogcategory")
router.register(r'blogs',blog_viewset,basename="blogs")
router.register(r'oldbooks',oldbook_viewset,basename="oldbooks")
router.register(r'newbookscategory',Newbook_category_viewset,basename="newbookcategory")
router.register(r'newbooks',Newbook_viewset,basename="newbook")
urlpatterns=[]
urlpatterns+=router.urls