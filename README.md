# BookBoking
  Django + React application.

# Cel aplikacji
  Wypożyczalnia książek.

# Zakres projektu
  ### Aktorzy:
    - Uzytkownik,
    - Bibliotekarz,
    - Admin

  ### Funkcjonalności:
    - Rezerwacja książek w bibliotece

  ### Opis bazy:
    - Uzytkownik(id, login, haslo, imie, nazwisko, adres, kod_pocztowy, miasto, email, telefon)
    - Zamowienie(id, id_uzytkownik, id_ksiazka, data_zamowienia, data_odbioru, data_zwrotu)
    - Kategoria(id, name)
    - Ksiazka(id, id_kategoria, isbn, tytul, autor, wydawnictwo, rok_wydania, opis)
    - Bibliotekarz(id, login, password)
    - Admin(id, login, password)

  ### Modelowana część świata:
    - Biblioteka

# Wykonali
  - Michał Protasiewicz
  - Mateusz Sowiński
