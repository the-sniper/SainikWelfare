# Generated by Django 3.0.5 on 2020-04-19 13:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ServiceDetails', '0003_pensiondetails'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pensiondetails',
            name='deathOnService',
            field=models.BooleanField(default=False),
        ),
    ]
