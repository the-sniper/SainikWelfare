# Generated by Django 3.0.5 on 2020-04-26 15:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('UserAuth', '0006_auto_20200426_2058'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userauthdetails',
            name='approvalStatus',
            field=models.CharField(choices=[('P', 'Pending'), ('A', 'Approved')], default='P', max_length=10),
        ),
        migrations.AlterField(
            model_name='userauthdetails',
            name='userCategory',
            field=models.CharField(choices=[('ESM', 'Ex Service men'), ('OFF', 'Officers'), ('MNS', 'Military Nursing Services'), ('APS', 'Army Postal Services'), ('WIDDOW', 'Widow')], default='ESM', max_length=10),
        ),
    ]