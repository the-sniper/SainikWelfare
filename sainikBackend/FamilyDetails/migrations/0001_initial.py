# Generated by Django 3.0.5 on 2020-05-03 15:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('UserAuth', '0008_remove_userauthdetails_usertype'),
    ]

    operations = [
        migrations.CreateModel(
            name='FamilyDetails',
            fields=[
                ('slno', models.AutoField(primary_key=True, serialize=False)),
                ('maritalStatus', models.CharField(choices=[('M', 'Married'), ('S', 'Single'), ('D', 'Divorcee')], default='M', max_length=10)),
                ('marriageDate', models.DateField()),
                ('spouseName', models.CharField(max_length=20)),
                ('spouseRelation', models.CharField(choices=[('W', 'Wife'), ('H', 'Husband')], default='W', max_length=8)),
                ('spouseDOB', models.DateField()),
                ('spouseID', models.CharField(max_length=20)),
                ('spouseQualification', models.CharField(max_length=25)),
                ('spouseEmpStatus', models.CharField(choices=[('E', 'Employed'), ('U', 'Un employed')], default='U', max_length=10)),
                ('spouseEmpProf', models.CharField(max_length=25)),
                ('spouseRetirementDate', models.DateField()),
                ('nextOfKin', models.CharField(max_length=25)),
                ('relationToESM', models.CharField(max_length=15)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='UserAuth.UserAuthDetails')),
            ],
            options={
                'db_table': 'FamilyDetails',
            },
        ),
    ]