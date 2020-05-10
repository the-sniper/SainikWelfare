# Generated by Django 3.0.5 on 2020-04-26 15:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('UserAuth', '0003_remove_userauthdetails_registrationnumber'),
    ]

    operations = [
        migrations.AddField(
            model_name='userauthdetails',
            name='userCategory',
            field=models.CharField(choices=[('ESM', 'exServicemen'), ('OFF', 'officers'), ('MNS', 'militaryNursingServices'), ('APS', 'armyPostalServices'), ('WIDD', 'widdos')], default='ESM', max_length=10),
        ),
    ]
