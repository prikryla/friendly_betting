# Generated by Django 5.0.2 on 2024-03-21 21:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('admin', '0003_logentry_add_action_flag_choices'),
        ('auth', '0012_alter_user_first_name_max_length'),
        ('authentication', '0001_initial'),
        ('best_of', '0003_alter_bestof_tournament_winner'),
        ('matches', '0002_rename_team1bet_bet_team1_bet_and_more'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='User',
            new_name='CustomUser',
        ),
    ]
