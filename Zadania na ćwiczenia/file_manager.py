class FileManager():
    def __init__(self, file_name):
        self.file_name = file_name

    def read_file(self):
        try:
            with open(self.file_name, "r", encoding="utf-8") as file:
                return file.read()
        except IOError:
            print("Wystapił wyjątek IOError")

    def update_file(self, text_data):
        try:
            with open(self.file_name, "r+", encoding="utf-8") as file:
                old = file.read()
                file.seek(0)
                file.write(old + text_data)
                return 'Zmodyfikowano tekst'
        except IOError:
            print("Wystapil wyjatek IOError")



