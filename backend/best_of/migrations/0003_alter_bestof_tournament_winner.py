# Generated by Django 5.0.2 on 2024-03-19 22:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('best_of', '0002_alter_bestof_tournament_winner'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bestof',
            name='tournament_winner',
            field=models.CharField(max_length=100),
        ),
    ]
