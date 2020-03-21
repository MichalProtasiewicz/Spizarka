# zad1
def powiel(a_list, b_list):
    c_list = a_list
    for index, value in enumerate(a_list):
        if index % 2 == 0:
            c_list[index] = a_list[index]
        if index % 2 != 0:
            c_list[index] = b_list[index]
    return c_list


list1 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
list2 = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
print(powiel(list1, list2))


# zad2
def infoText(data_text):
    length = len(data_text)
    letters = []
    for i in data_text:
        letters.append(i)
    big_letters = data_text.upper()
    small_letters = data_text.lower()
    dict = {length, tuple(letters), big_letters, small_letters}
    return dict


data_text = input('Podaj ciag znakow ')
data_text = str(data_text)
print(infoText(str(data_text)))


# zad3
def deleteLetters(text, letter):
    text = text.replace(letter, "")
    return text


letter = input('Podaj znak ')
letter = str(letter)
text = "Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker"
print(deleteLetters(text, letter))


# zad4
def changeTemperature(temperature, temperature_type):
    if temperature_type == "1":
        changed_temperature = temperature * 2 + 32
    elif temperature_type == "2":
        changed_temperature = temperature + 273 * 9/5
    elif temperature_type == "3":
        changed_temperature = temperature + 273
    else:
        print("Zle dane.")
        changed_temperature = ""
    return changed_temperature


temperature = input('Podaj temperature ')
temperature = int(temperature)
temperature_type = input('Fahrenheit = 1  Rankine = 2  Kelvin = 3  ')
temperature_type = str(temperature_type)
print(changeTemperature(temperature, temperature_type))


# zad5
class Calculator:
    def add(self):
        return 'add...'

    def difference(self):
        return 'difference...'

    def multiply(self):
        return 'multiply...'

    def divide(self):
        return 'divide...'


calculator = Calculator()
print(calculator.add())
print(calculator.difference())
print(calculator.multiply())
print(calculator.divide())


# zad6
class ScienceCalculator(Calculator):
    def pow(self):
        return 'pow...'


science_calculator = ScienceCalculator()
print(science_calculator.pow())


# zad7
def odTylu(text):
    return text[::-1]


text = input('Podaj tekst ')
text = str(text)
print(odTylu(text))


# zad8

# zad9

# zad10
