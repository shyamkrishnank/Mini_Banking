
from rest_framework import serializers
from .models import Transactions



class StatementSerializers(serializers.ModelSerializer):
    class Meta:
        model = Transactions
        fields = '__all__'
