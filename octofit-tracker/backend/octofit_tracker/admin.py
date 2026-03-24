from django.contrib import admin
from .models import CustomUser, Team, Activity, Workout, Leaderboard
from django.contrib.auth.admin import UserAdmin

admin.site.register(CustomUser, UserAdmin)
admin.site.register(Team)
admin.site.register(Activity)
admin.site.register(Workout)
admin.site.register(Leaderboard)
