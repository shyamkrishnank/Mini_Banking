from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Users
from .models import Transactions
from .serializers import StatementSerializers
import datetime


# Create your views here.
class SignUpView(APIView):
    def post(self,request):
        print(request.data)
        name = request.data.get('name')
        email = request.data.get('email')
        password = request.data['password']
        user = Users( Name = name, email = email , password = password)
        user.save()
        return Response({'account': user.Account_Number},status = status.HTTP_201_CREATED)


class LoginView(APIView):
    def post(self,request):
        email = request.data['email']
        password = request.data['password']
        try:
           user = Users.objects.get(email = email, password = password)
           if user:
               return Response(status = status.HTTP_202_ACCEPTED)
        except:
            return Response(status = status.HTTP_401_UNAUTHORIZED)
        
class Deposit(APIView):
    def post(self, request):
        account_number = request.data['account_number']
        amount = request.data['amount']
        try:
           user = Users.objects.get(Account_Number = account_number)
           user.Current_balence = user.Current_balence + float(amount)
           user.save()
           transaction = Transactions(user = user, transaction = "Deposit" , amount = amount)
           transaction.save()
           return Response( status = status.HTTP_202_ACCEPTED)

        except Exception as e:
            print(e)
            message = "Please enter your correct account number"
            return Response({'message':message}, status = status.HTTP_406_NOT_ACCEPTABLE)


class Withdraw(APIView):
    def post(self, request):
        account_number = request.data['account_number']
        amount = request.data['amount']
        try:
           user = Users.objects.get(Account_Number = account_number)
           user.Current_balence = user.Current_balence - float(amount)
           user.save()
           transaction = Transactions(user = user, transaction = "Withdraw" , amount = amount)
           transaction.save()
           return Response( status = status.HTTP_202_ACCEPTED)
        except:
            message = "Please enter your correct account number"
            return Response({'message':message}, status = status.HTTP_406_NOT_ACCEPTABLE)
        

class MiniStatement(APIView):
    def post(self, request):
        account_number = request.data['account_number']
        try:
            user = Users.objects.get(Account_Number = account_number)
            start_date = request.data['start_date']
            end_date = request.data['end_date']
            transactions = Transactions.objects.filter( user = user, transaction_date__range = [start_date, end_date])
            serializer = StatementSerializers(transactions, many = True)
            print(serializer.data)
            return Response({'transactions':serializer.data}, status = status.HTTP_202_ACCEPTED)
        except Exception as e:
            print(e)
            return Response( status = status.HTTP_202_ACCEPTED)
        

class BalenceView(APIView):
    def post(self, request):
        account_number = request.data['account_number']
        try:
            user = Users.objects.get(Account_Number = account_number)
            return Response({'balence':user.Current_balence}, status = status.HTTP_202_ACCEPTED)
        except:
            return Response(status = status.HTTP_406_NOT_ACCEPTABLE)


        



