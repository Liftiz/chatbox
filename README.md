
Chatbox Javascript

Ce code crée une petite application de chat en utilisant JavaScript pour manipuler le DOM. Il commence par définir quatre variables qui font référence à des éléments HTML spécifiques sur la page - le conteneur de chat, l'entrée de message, et deux boutons pour envoyer un message en tant qu'expéditeur ou destinataire.
Ensuite, une variable messages est initialisée comme un tableau vide. Cette variable stockera toutes les informations sur les messages entrants dans le chat.
La fonction addMessage est définie pour ajouter un message au chat. La fonction prend deux arguments - le message lui-même et un booléen indiquant si l'utilisateur est l'expéditeur ou le destinataire. La fonction commence par créer un élément de message div et ajoute les classes CSS appropriées en fonction du statut d'expéditeur ou de destinataire.
Deux boutons sont ensuite créés - un pour modifier le message et l'autre pour le supprimer. Les deux boutons ont des classes CSS appropriées et ont des écouteurs d'événements attachés pour les actions de clic.
Les boutons Modifier et Supprimer modifient également les informations stockées dans la variable messages en fonction des actions effectuées sur les messages.
La fonction addMessage ajoute finalement l'élément de message au conteneur de chat et met à jour la variable messages.
Enfin, deux écouteurs d'événements sont attachés aux boutons d'expéditeur et de destinataire. Lorsqu'un utilisateur clique sur l'un des boutons, la fonction addMessage est appelée avec le texte de l'entrée de message et un booléen pour indiquer l'expéditeur ou le destinataire. Si le champ de message est vide, rien ne se produit.
Voilà quelques explications en détails des variables et des fonctions utilisées :

1.	const chatContainer = document.getElementById("chat-container"); Déclare une variable constante "chatContainer" qui récupère l'élément HTML avec l'ID "chat-container". Cet élément sera utilisé pour ajouter les nouveaux messages dans la boîte de chat.
2.	const messageInput = document.getElementById("message-input"); Déclare une variable constante "messageInput" qui récupère l'élément HTML avec l'ID "message-input". Cet élément est un champ de saisie de texte où l'utilisateur peut saisir un nouveau message.
3.	const senderButton = document.getElementById("sender-button"); Déclare une variable constante "senderButton" qui récupère l'élément HTML avec l'ID "sender-button". Cet élément est un bouton qui envoie le message en tant qu'expéditeur.
4.	const recipientButton = document.getElementById("recipient-button"); Déclare une variable constante "recipientButton" qui récupère l'élément HTML avec l'ID "recipient-button". Cet élément est un bouton qui envoie le message en tant que destinataire.
5.	let messages = []; Déclare une variable "messages" initialisée à un tableau vide. Ce tableau stockera tous les messages ajoutés par l'utilisateur.
6.	function addMessage(message, isSender) { ... } Déclare une fonction "addMessage" qui prend deux arguments : "message" (le texte du message à ajouter) et "isSender" (une valeur booléenne indiquant si le message doit être ajouté en tant qu'expéditeur ou destinataire).
7.	const messageClass = isSender ? "sender" : "recipient"; Déclare une variable constante "messageClass" qui contient la classe CSS du message en fonction de sa provenance (expéditeur ou destinataire).
8.	const messageContainer = document.createElement("div"); Crée un nouvel élément HTML "div" et stocke-le dans la variable constante "messageContainer".
9.	messageContainer.textContent = message; Affecte le texte du message à l'élément HTML "messageContainer".
10.	messageContainer.classList.add("message", messageClass); Ajoute les classes CSS "message" et "messageClass" à l'élément HTML "messageContainer".
11.	const editButton = document.createElement("button"); Crée un nouvel élément HTML "button" et stocke-le dans la variable constante "editButton".
12.	editButton.textContent = "Modifier"; Affecte le texte "Modifier" à l'élément HTML "editButton".
13.	editButton.classList.add("edit-button"); Ajoute la classe CSS "edit-button" à l'élément HTML "editButton".
14.	editButton.addEventListener("click", () => { ... }); Ajoute un écouteur d'événements "click" à l'élément HTML "editButton". Cet écouteur ouvrira une boîte de dialogue de modification lorsque l'utilisateur cliquera sur le bouton "Modifier".
15.	const deleteButton = document.createElement("button"); Crée un nouvel élément HTML "button" et stocke-le dans la variable constante "deleteButton".
16.	deleteButton.textContent = "Supprimer"; Affecte le texte "Supprimer" à l'élément HTML "deleteButton".

