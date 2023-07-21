import tkinter as tk
from tkinter import messagebox
import webbrowser
import json
import requests
import socket

def generate_pack_name():
    age = entry_age.get()
    titre = entry_titre.get().title().replace(" ", "_")
    auteur = entry_auteur.get()
    bonus = entry_bonus.get()
    version = entry_version.get()

    if not age or not titre or not auteur or not bonus or not version:
        clipboard_label.config(text="Veuillez remplir toutes les cases s'il vous plait!", fg="red")
    else:
        result = f"{age}+]{titre}_({bonus}_episodes)[by_{auteur}_{version}]"
        root.clipboard_clear()
        root.clipboard_append(result)
        clipboard_label.config(text="Le nom du pack a été copié dans votre presse-papier !", fg="green")

def open_about():
    webbrowser.open("https://github.com/LuckyTheCookie/lunii_name_generator/releases")

def check_github_release():
    repo_url = "https://api.github.com/repos/LuckyTheCookie/lunii_name_generator/releases"
    try:
        response = requests.get(repo_url)
        response.raise_for_status()  # Vérifie si la requête a réussi
        releases_info = response.json()
        latest_version = releases_info[0]["tag_name"]
        # Compare la dernière version avec la version actuelle de l'application
        if latest_version > current_version:
            new_release_available = True
            # Afficher un message à l'utilisateur pour l'informer de la nouvelle version
            user_response = messagebox.askquestion("Nouvelle version disponible",
                                                   f"Une nouvelle version ({latest_version}) est disponible sur GitHub ! Voulez-vous la télécharger maintenant ?")
            if user_response == "yes":
                # Ouvre le lien de téléchargement vers la nouvelle version
                download_link = releases_info[0]["html_url"]
                webbrowser.open(download_link)
        else:
            new_release_available = False
            print("Vous utilisez la dernière version de l'application.")
    except requests.exceptions.RequestException as e:
        new_release_available = False
        print("Erreur lors de la requête vers l'API GitHub:", e)

    return new_release_available

current_version = "0.0.5" 


root = tk.Tk()
root.title("Lunii Name Generator")
root.geometry("400x400")

new_release_available = check_github_release()

# Barre horizontale
toolbar_frame = tk.Frame(root, bg="lightgray")
toolbar_frame.pack(fill=tk.X)

# Bouton "À propos" dans la barre horizontale
about_button = tk.Button(toolbar_frame, text="Github", command=open_about)
about_button.pack(side=tk.LEFT, padx=10, pady=5)

title_label = tk.Label(root, text="Générateur de nom de pack", font=("Helvetica", 16, "bold"))
title_label.pack(pady=10)

frame = tk.Frame(root)
frame.pack(padx=20, pady=10)

label_age = tk.Label(frame, text="Entrez l'âge minimum de votre histoire :")
label_age.grid(row=0, column=0, padx=5, pady=5)
entry_age = tk.Entry(frame)
entry_age.grid(row=0, column=1, padx=5, pady=5)

label_titre = tk.Label(frame, text="Entrez le titre :")
label_titre.grid(row=1, column=0, padx=5, pady=5)
entry_titre = tk.Entry(frame)
entry_titre.grid(row=1, column=1, padx=5, pady=5)

label_auteur = tk.Label(frame, text="Entrez le nom de l'auteur :")
label_auteur.grid(row=2, column=0, padx=5, pady=5)
entry_auteur = tk.Entry(frame)
entry_auteur.grid(row=2, column=1, padx=5, pady=5)

label_bonus = tk.Label(frame, text="Entrez le nombre d'histoires dans votre pack")
label_bonus.grid(row=3, column=0, padx=5, pady=5)
entry_bonus = tk.Entry(frame)
entry_bonus.grid(row=3, column=1, padx=5, pady=5)

label_version = tk.Label(frame, text="Entrez la version de votre pack :")
label_version.grid(row=4, column=0, padx=5, pady=5)
entry_version = tk.Entry(frame)
entry_version.grid(row=4, column=1, padx=5, pady=5)

submit_button = tk.Button(root, text="Générer le nom du pack", command=generate_pack_name, bg="lightblue", fg="black")
submit_button.pack(pady=10)

clipboard_label = tk.Label(root, text="", fg="red")
clipboard_label.pack(pady=10)

root.mainloop()
