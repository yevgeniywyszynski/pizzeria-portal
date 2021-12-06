# Dashboard-homepage

- '/'
    - statystyki dzisiejszych zamowien (zdalne i lokalne)
    - liste rezerwacji i eventy zaplanowanych na dzisiaj

# Logowanie

- '/login'
    - pola na login i haslo
    - guzik do zalogowanie (link do dashboardu)

# Widok dostepnosci stolikow

- '/tables'
    - wybor daty i gdoziny 
    - tabela z lista rezerwacji oraz wydarzen
        - kazda kolumna bedzie jednym stolikiem
        - kazdy wiersz = 30 min
        - ma przypominac widok tygodnia w kalendarzu Googla, gdzie w kolumnach zamiast dni sa rozne stoliki
        - po kliknieciu rezerqacji lub eventu, przechodzimy na strone szczegolow

- '/tables/booking/:id'
    - zawiera wszystkie informacje dotyczace rezerwacji
    - umozliwia edycje i zapisania zmian

- '/tables/booking/new'
    - anologicznie do powyzej, bez poczatkowych informacji

- '/tables/events/:id'
    - analogicznie do powyzej, dla eventow

- '/tables/events/new'
    - anologicznie do powyzej, dla eventow, bez poczatkowych informacji 

# Widok kelnera

- '/waiter'
    - tabela
        - w wierszach stoliki
        - w kolumnach rozne rodzaje informacji (status, czas od ostatniej aktywmosci)
        - w ostatniej kolumnie dostepne akcje dla danego stolika


- '/waiter/order/new'
    - numer stolika (edytowalny)
    - menu produktow 
    - opcja wybranego produktu
    - zamowienie (zamowione produkty z opcjami i cena)
    - kwote zamowienia

- '/waiter/order/:id'
    - jak powyzsza

# Widok kuchni 

- '/kitchen'
    - wyswietlacz liste zamowien w kolejnosci ich zlozenia 
    - lista musi zawierac 
        - numer stolika lub zamowienia zdalnego 
        - pelne informacje dotcz. zamowionych dan
    - na liscie musi byc mozliwosc oznaczenia zamowienia jako zrealizowane

