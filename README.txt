# StarMovie
  Django + React application.

# Cel aplikacji
  Przeglądanie i ocenianie filmów.

# Zakres projektu
  ### Aktorzy:
    - Gość,
    - Użytkownik,
    - Admin

  ### Funkcjonalności:
  Gość:
    - Rejestracja użytkownika
    - Wyświetlanie filmów
    - Wyszukiwanie filmów
    - Wyświetlanie filmów w zależności od kategorii
  Użytkownik:
    - Logowanie
    - Wylogowanie
    - Możliwość oceniania filmów
    - Możliwość pisania komentarzy do filmów, jak i usuwanie oraz edytowanie
    - Możliwość zmiany avatara
  Admin:
    - Usuwanie i edytowanie wszystkich komentarzy
    - Zarządzanie użytkownikami

  ### Opis bazy:
    - Film (id, categoryId, name, description, votes, rate)
    - User (id, email, login, password, permissions)
    - Comments (id, filmId, userId, commentText, createdAt, updatedAt)
    - Category (id, name)

  ### Modelowana część świata:
    - Filmy

# Wykonali
  - Michał Protasiewicz
  - Mateusz Sowiński
