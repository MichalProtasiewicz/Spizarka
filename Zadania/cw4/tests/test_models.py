import pytest
from django.urls import reverse
from films.models import Film, User, Category, Comment

@pytest.mark.django_db
def test__add_film(client):
    data_to_save = {
        'categoryId': 1,
        'name': 'Bright',
        'description': 'film sensacyjny',
    }

    url = reverse('api:films')

    # Wysyłamy dane
    response = client.post(
        url,
        data_to_save,
        content_type='application/json',
    )

    # Request się powiódł?
    assert response.status_code == 200

    # Czy odpowiedź nam odpowiada?
    assert response.json() == data_to_save

    # Czy został dodany obiekt?
    all_films = Film.objects.all()
    assert all_films.count() == 1

    # Czy obiekt zapisał się poprawnie?
    saved_film = all_films.first()
    assert saved_film.categoryId == 1
    assert saved_film.name == 'Bright'
    assert saved_film.description == 'film sensacyjny'