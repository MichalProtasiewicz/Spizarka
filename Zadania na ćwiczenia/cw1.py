# zad1
loremIpsum = "Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker"
print(loremIpsum)

# zad2
imie = "Michal"
nazwisko = "Protasiewicz"

print ("2 litera imienia ", (imie[1]))
print ("3 litera nazwiska ", (nazwisko[2]))

print ("W tekscie jest ", (len(loremIpsum)), "liter")
print ("W tekscie jest", (loremIpsum.count(imie[1])), "liter ", imie[1])
print ("W tekscie jest", (loremIpsum.count(nazwisko[2])), "liter ", nazwisko[2])

# zad3
print('{:10.5}'.format("Lorem Ipsum jest tekstem"))
print('{:.20}'.format("Lorem Ipsum jest tekstem"))
print('{:10d}'.format(5445))
print('{:+d}'.format(1451926))
print('{} {}'.format(1, 2))

# zad4
zmienna_typu_string = loremIpsum
print(dir(zmienna_typu_string))
help(zmienna_typu_string.encode())

# zad5
print(imie[::-1], nazwisko[::-1], "\n")

# zad6
lista = []
lista1 = []
for i in range(10):
    lista.append(i+1)

lista1 = lista[5:len(lista)]
lista = lista[0:5]

print(lista)
print(lista1)

# zad7
lista = lista+lista1
lista.insert(0, 0)
lista2 = lista
print(lista)
lista2.sort(reverse=True)
print(lista2, "\n")

# zad8
lista_krotki = []
lista_krotki.append([134567, "Michal Prota"])
lista_krotki.append([134553, "Adrian Nowak"])
lista_krotki.append([134568, "Zenon Klos"])
lista_krotki = tuple(lista_krotki)

print(lista_krotki, "\n")
nowa_lista = list(lista_krotki)

# zad9
slownik = dict(nowa_lista)
slownik[136567] = "Michal Protasiewicz 25 mpro@gmail.com 1995 Olsztyn"
slownik[136568] = "Adam Wysocki 25 awys@gmail.com 1996 Olsztyn"
print(slownik)
print(slownik.keys(), "\n")

# zad10
numery = []
for i in range(5):
    numery.append(i+514758412)
    numery.append(i+514758412)

print(numery)
numery = list(set(numery))
print(numery, "\n")

# zad11
for i in range(10):
    print(i+1, end=', ')

print("\n")

# zad12
for i in range(100, 19, -5):
    print(i, end=', ')

print("\n")

# zad13
slownik1 = dict([("jeden", 1), ("dwa", 2), ("trzy", 3)])
slownik2 = dict([("cztery", 4), ("piec", 5), ("szesc", 6)])

lista = list(slownik1) + list(slownik2)
zmienna_string = " ".join(map(str, lista))

print(lista)
print(zmienna_string)