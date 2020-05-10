# Generated by Django 3.0.5 on 2020-05-03 16:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('UserAuth', '0008_remove_userauthdetails_usertype'),
        ('userDetails', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ContactDetails',
            fields=[
                ('slno', models.AutoField(primary_key=True, serialize=False)),
                ('mobileNumber', models.CharField(max_length=10)),
                ('telephoneNumber', models.PositiveIntegerField(max_length=10)),
                ('emailAddress', models.EmailField(max_length=30)),
                ('state', models.CharField(max_length=20)),
                ('district', models.CharField(max_length=20)),
                ('city', models.CharField(max_length=20)),
                ('streetAddress', models.CharField(max_length=45)),
                ('houseNumber', models.CharField(max_length=10)),
                ('policeStation', models.CharField(max_length=30)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='UserAuth.UserAuthDetails')),
            ],
            options={
                'db_table': 'ContactDetails',
            },
        ),
    ]