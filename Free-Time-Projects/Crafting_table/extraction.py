import zipfile
import os

# Computer Paths
minecraft_jar = r"C:\Users\rapha\Documents\Github\4bWI_SWP1_fo\Free-Time Projects\Minecraft_Crafting_Table\frontend\src\assets\minecraft\1.21.4.jar"
output_folder = r"C:\Users\rapha\Documents\Github\4bWI_SWP1_fo\Free-Time Projects\Minecraft_Crafting_Table\frontend\src\assets\minecraft\textures"

# Funktion zum Extrahieren der Texturen aus der JAR-Datei
def extract_textures_from_jar(minecraft_jar, output_folder):
    try:
        with zipfile.ZipFile(minecraft_jar, 'r') as jar:
            for file in jar.namelist():
                # Überprüfe, ob der Pfad zu den Block-Texturen führt
                if file.startswith("assets/minecraft/textures/block/") and file.endswith(".png"):
                    # Extrahiere nur den relevanten Teil des Pfads
                    relative_path = file.replace("assets/minecraft/textures/block/", "")
                    # Der endgültige Zielpfad
                    target_path = os.path.join(output_folder, relative_path)

                    # Stelle sicher, dass der Zielordner existiert
                    os.makedirs(os.path.dirname(target_path), exist_ok=True)

                    # Extrahiere die Datei
                    with open(target_path, 'wb') as f:
                        f.write(jar.read(file))
                    print(f"Extrahiere: {file} nach {target_path}")

        print(f"Alle Block-Texturen sind jetzt im Ordner: {output_folder}")
    except Exception as e:
        print(f"Fehler beim Verarbeiten der JAR-Datei: {e}")

# Beispielaufruf
extract_textures_from_jar(minecraft_jar, output_folder)
