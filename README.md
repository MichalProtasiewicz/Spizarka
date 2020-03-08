# BookBoking
  Django + React application.

# Cel aplikacji
  Wypożyczalnia książek.

# Zakres projektu
  1. Aktorzy:
    - Uzytkownik,
    - Bibliotekarz,
    - Admin

  2. Funkcjonalności:
    - Rezerwacja książek w bibliotece

  3. Opis bazy:
    - User(id, login, haslo, imie, nazwisko, adres, kod_pocztowy, miasto, email, telefon)
    - Zamowienie(id, id_user, id_ksiazka, data_zamowienai, data_odbioru, data_zwrotu)
    - Kategoria(id, name)
    - Ksiazka(id, id_kategoria, isbn, tytul, autor, wydawnictwo, rok_wydania, opis)
    - Bibliotekarz(id, login, password)
    - Admin(id, login, password)

  4. Modelowana część świata:
    - Biblioteka

# Wykonali
  - Michał Protasiewicz
  - Mateusz Sowiński
