from django.db import models


# Create your models here.
class Todo(models.Model):
    priority = models.IntegerField(default=0)
    title = models.CharField(max_length=255, default="Untitled")
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True, null=True)
