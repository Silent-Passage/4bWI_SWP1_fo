import numpy as np
from OpenGL.GL import *
from OpenGL.GLUT import *
from OpenGL.GLU import *
from PIL import Image

# Funktion zum Laden der Texturen
def load_texture(image_path):
    img = Image.open(image_path)
    img = img.transpose(Image.FLIP_TOP_BOTTOM)  # Flips the image for OpenGL compatibility
    img_data = np.array(list(img.getdata()), np.uint8)
    
    texture_id = glGenTextures(1)
    glBindTexture(GL_TEXTURE_2D, texture_id)
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR)
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR)
    glTexImage2D(GL_TEXTURE_2D, 0, GL_RGBA, img.width, img.height, 0, GL_RGBA, GL_UNSIGNED_BYTE, img_data)
    return texture_id

# Würfel mit Texturen rendern
def render_cube():
    # Vorderseite
    glBindTexture(GL_TEXTURE_2D, texture_side)
    glBegin(GL_QUADS)
    glTexCoord2f(0, 0); glVertex3f(-1, -1, 1)
    glTexCoord2f(1, 0); glVertex3f(1, -1, 1)
    glTexCoord2f(1, 1); glVertex3f(1, 1, 1)
    glTexCoord2f(0, 1); glVertex3f(-1, 1, 1)
    glEnd()

    # Oberseite
    glBindTexture(GL_TEXTURE_2D, texture_top)
    glBegin(GL_QUADS)
    glTexCoord2f(0, 0); glVertex3f(-1, 1, -1)
    glTexCoord2f(1, 0); glVertex3f(1, 1, -1)
    glTexCoord2f(1, 1); glVertex3f(1, 1, 1)
    glTexCoord2f(0, 1); glVertex3f(-1, 1, 1)
    glEnd()

    # Weitere Seiten (left, right, bottom) hier hinzufügen...

def main():
    # GLUT initialisieren
    glutInit()
    glutInitDisplayMode(GLUT_RGB | GLUT_DOUBLE | GLUT_DEPTH)
    glutCreateWindow(b"3D Minecraft Block")
    glEnable(GL_TEXTURE_2D)
    glEnable(GL_DEPTH_TEST)
    
    # Texturen laden
    global texture_side, texture_top, texture_bottom
    texture_side = load_texture('stone_side.png')
    texture_top = load_texture('stone_top.png')
    texture_bottom = load_texture('stone_bottom.png')

    # Kamera einrichten
    glTranslatef(0.0, 0.0, -5)
    glRotatef(45, 1, 0, 0)
    
    # Rendering starten
    glutDisplayFunc(render_cube)
    glutMainLoop()

if __name__ == "__main__":
    main()
