# Spizarka

Django + React application.

Live: https://spizarkaa.herokuapp.com/

# Cel aplikacji

Zdarzyło Ci się pójść do sklepu i kupić mąkę, mimo, że czekają na Ciebie trzy nieotwarte paczki w domu? Żeby walczyć z nadmiernym magazynowaniem żywności, powstała aplikacja, dzięki której w łatwy sposób zapiszesz stan swojej domowej spiżarni, aby potem w sklepie nie mieć wątpliwości co faktycznie Ci się przyda.

# Zakres projektu

## Aktorzy:

    - Gość,
    - Użytkownik

## Funkcjonalności:

#### Gość:

    - Rejestracja użytkownika

#### Użytkownik:

    - Logowanie
    - Wyświetlanie listy produktów
    - Podgląd generowanej listy zakupów w zależności od obecnego stanu spiżarni
    - Możliwość dodawania nowych produktów
    - Możliwość edytowania wybranego produktu
    - Możliwość usuwania wybranego produktu

## Opis bazy:

    - Product (id, userId, name, categoryId, quantity, minQuantity)
    - User (id, email, password)
    - Category (id, name)

## Modelowana część świata:

    - Robienie zakupów i zarządzanie aktualnym stanem

## Widoki:

#### Widok logowania:

    - Użytkownik loguje sie na swoje konto

#### Widok rejestracji:

    - Użytkownik rejestruje nowe konto

#### Widok główny:

    - Każdy element można łatwo usunąć z listy, alert przy usuwaniu
    - Stan produktów ma wartość numeryczną i można go w wygodny sposób modyfikować

#### Widok edycji:

    - Zmiana nazwy i kategorii
    - Możliwość usunięcia z listy
    - Zmiana ilości stanu i minimalnego stanu listy produktów

#### Widok dodawania:

    - Dodanie nowego produktu po wypełnieniu formularza

#### Widok listy zakupów:

    - Lista zakupów generuje się automatycznie jeśli poziom jakiegoś produktu przekroczy określone minimum

# Model bazy danych

![db_schema](db_schema.png 'Schemat bazy danych')
