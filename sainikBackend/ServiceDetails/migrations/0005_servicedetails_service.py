# Generated by Django 3.0.5 on 2020-04-25 00:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ServiceDetails', '0004_auto_20200419_1842'),
    ]

    operations = [
        migrations.AddField(
            model_name='servicedetails',
            name='service',
            field=models.CharField(default='', max_length=10),
        ),
    ]