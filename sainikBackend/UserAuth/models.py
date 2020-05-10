from django.db import models
from django import forms
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager


class UserAuthDetails(AbstractBaseUser):

    PENDING = "P"
    APPROVED = "A"

    APPROVAL_STATUS = (
        (PENDING, "Pending"),
        (APPROVED, "Approved")
    )

    KENDRIYA_SAINIK = "KSB"
    RAJYA_SAINIK = "RSB"
    ZILLA_SAINIK = "ZSB"

    USER_TYPES = (
        (KENDRIYA_SAINIK, "Kendriya Sainik Board"),
        (RAJYA_SAINIK, "Rajya Sainik Board"),
        (ZILLA_SAINIK, "Zilla Sainik Board")
    )

    EX_SERVICE_MEN = "ESM"
    OFFICERS = "OFF"
    MILITARY_NURSING_SERVICES = "MNS"
    ARMY_POSTAL_SERVICE = "APS"
    WIDOWS = "WIDDOW"

    USER_CATEGORY = (
        (EX_SERVICE_MEN, "Ex Service men"),
        (OFFICERS, "Officers"),
        (MILITARY_NURSING_SERVICES, "Military Nursing Services"),
        (ARMY_POSTAL_SERVICE, "Army Postal Services"),
        (WIDOWS, "Widow"),
    )

    slno = models.AutoField(primary_key=True)
    email = models.EmailField(null=True, blank = True)
    username = models.CharField(max_length=50, null=False)
    # registrationNumber = models.CharField(max_length=25, null=False)
    isDeleted = models.BooleanField(default=False)
    # userType = models.CharField(max_length=10, choices=USER_TYPES, default=ZILLA_SAINIK)
    userType = forms.ChoiceField(widget=forms.RadioSelect, choices=USER_TYPES)
    userCategory = models.CharField(max_length=10, choices=USER_CATEGORY, default=EX_SERVICE_MEN )
    dateCreated = models.DateTimeField(auto_now_add=True)
    approvalStatus = models.CharField(max_length=10, choices = APPROVAL_STATUS, default = PENDING)
    documents = models.FileField()

    USERNAME_FIELD = "username"

    class Meta:
        db_table = "UserAuthDetails"

    def __str__(self):
        return str(f"Slno : {self.slno}, username : {self.username}")

# Create your models here.
