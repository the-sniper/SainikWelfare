from django.db import models
from UserAuth.models import *


class userDetails(models.Model):

    slno = models.AutoField(primary_key=True)
    user = models.ForeignKey(UserAuthDetails, on_delete=models.CASCADE)
    fullName = models.CharField(max_length=50)
    dob = models.DateField()
    fatherName = models.CharField(max_length=50)
    motherName = models.CharField(max_length=50)
    idMark = models.CharField(max_length=50)
    aadharNum = models.PositiveIntegerField(max_length=20)
    panNum = models.CharField(max_length=15)
    echsCardNum = models.CharField(max_length=20)
    religion = models.CharField(max_length=20, null=True, blank=True)
    caste = models.CharField(max_length=20, null=True, blank=True)
    birthPlace = models.CharField(max_length=30)
    birthState = models.CharField(max_length=25)
    birthCity = models.CharField(max_length=30)
    eduQualInCivil = models.CharField(max_length=20)
    eduQualInService = models.CharField(max_length=20, null=True, blank=True)
    isCivilEmployed = models.BooleanField(default=False)
    civilEmployer = models.CharField(max_length=25, null= True, blank = True)
    monthlyIncome = models.PositiveIntegerField(default=0)
    deptInCivil = models.CharField(max_length=25, null=True, blank=True)
    civilDateRetirement = models.DateField(null=True, blank=True)
    officialContactNum = models.PositiveIntegerField(null=True, blank=True)


    class Meta:

        db_table = "PersonalDetails"

    def __str__(self):
        return str(f"Slno : {self.slno}.")

class ContactDetails(models.Model):

    MARRIED = "M"
    SINGLE = "S"
    DIVORCEE = "D"

    MARITAL_STATUS = (
        (MARRIED, "Married"),
        (SINGLE, "Single"),
        (DIVORCEE, "Divorcee")
    )

    slno = models.AutoField(primary_key=True)
    user = models.ForeignKey(UserAuthDetails, on_delete=models.CASCADE)
    mobileNumber = models.PositiveIntegerField(max_length=10)
    telephoneNumber = models.PositiveIntegerField(max_length=10)
    emailAddress = models.EmailField(max_length=30)
    state = models.CharField(max_length=20)
    district = models.CharField(max_length=20)
    city = models.CharField(max_length=20)
    streetAddress = models.CharField(max_length=45)
    houseNumber = models.CharField(max_length=10)
    policeStation = models.CharField(max_length=30)
   

    
    class Meta:
        db_table = "ContactDetails"

    def __str__(self):
        return str(f"Slno : {self.slno}")



# Create your models here.
