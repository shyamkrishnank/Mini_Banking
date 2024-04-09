from django.db import models
from django.contrib.auth.models import User
import uuid
import string
import random


def createAccountNumber():
        account_number = ''.join(random.choices(string.ascii_uppercase +
                             string.digits, k=10))
        return account_number

class Users(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    Name = models.CharField(max_length=300,default=None)
    email = models.EmailField()
    password = models.CharField(max_length=30)
    Account_Number = models.CharField(max_length=15, default=createAccountNumber())
    Current_balence = models.FloatField(default=0.0)

transation_Choices = (
     ("Withdraw","Withdraw"),
     ("Deposit", "Deposit"),
)

class Transactions(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(Users, related_name='transactions', on_delete=models.CASCADE)
    transaction = models.CharField(max_length=200, choices=transation_Choices, default="Withdraw")
    transaction_date = models.DateTimeField(auto_now=True)
    amount = models.FloatField()




