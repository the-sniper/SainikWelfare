# Generated by Django 3.0.6 on 2020-05-31 10:57

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='ServiceDetails',
            fields=[
                ('slno', models.AutoField(primary_key=True, serialize=False)),
                ('service', models.CharField(choices=[('AF', 'Air Force'), ('AR', 'Army'), ('NV', 'Navy')], default='AF', max_length=10)),
                ('serviceNumber', models.CharField(max_length=20)),
                ('enrollmentDate', models.DateField()),
                ('rank', models.CharField(choices=[('SP', 'SEPOY'), ('HV', 'HAVILDAR'), ('LT', 'LEUTENANT'), ('CL', 'COLONEL'), ('CP', 'CAPTAIN'), ('MJ', 'MAJOR')], default='SP', max_length=5)),
                ('trade', models.CharField(max_length=20)),
                ('operationsAttended', models.IntegerField()),
                ('decorations', models.CharField(blank=True, choices=[('', 'NONE'), ('PVC', 'PARAM_VEER_CHAKRA'), ('AC', 'ASHOK_CHAKRA')], default='', max_length=5)),
                ('groups', models.CharField(blank=True, max_length=5, null=True)),
                ('inWW2', models.BooleanField(default=False)),
                ('user', models.OneToOneField(db_column='user', on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'db_table': 'ServiceDetails',
            },
        ),
        migrations.CreateModel(
            name='PensionDetails',
            fields=[
                ('slno', models.AutoField(primary_key=True, serialize=False)),
                ('lastUnit', models.CharField(max_length=20)),
                ('dateDischarged', models.DateField()),
                ('deathOnService', models.BooleanField(default=False)),
                ('deathDetails', models.CharField(blank=True, max_length=20, null=True)),
                ('medCategoryAtDischarge', models.CharField(max_length=20)),
                ('characterWhileDischarge', models.CharField(max_length=15)),
                ('dischargeBook', models.CharField(max_length=15)),
                ('pppNum', models.PositiveIntegerField()),
                ('recordOffice', models.CharField(max_length=20)),
                ('pensionSanctioned', models.PositiveIntegerField(default=0)),
                ('disabilityPension', models.PositiveIntegerField(default=0)),
                ('percentDisability', models.PositiveIntegerField(default=0)),
                ('pensionAccNum', models.PositiveIntegerField()),
                ('bankName', models.CharField(max_length=30)),
                ('branchName', models.CharField(max_length=20)),
                ('ifsc', models.CharField(max_length=15)),
                ('board', models.CharField(max_length=30)),
                ('user', models.ForeignKey(db_column='user', on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'db_table': 'PensionDetails',
            },
        ),
    ]
