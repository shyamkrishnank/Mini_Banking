from django.urls import path
from .views import *

urlpatterns = [
    path("create_user",SignUpView.as_view()),
    path('login', LoginView.as_view()),
    path('withdraw', Withdraw.as_view()),
    path('deposit', Deposit.as_view()),
    path('transaction', MiniStatement.as_view()),
    path('balence', BalenceView.as_view())


]