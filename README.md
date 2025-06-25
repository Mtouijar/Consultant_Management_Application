# Application de Gestion de Consultants - Systeme d'Authentification

Ce backend implémente un système d'authentification sécurisé avec FastAPI, SQLAlchemy et JWT.
Il permet l'inscription, la connexion, le hachage des mots de passe et la gestion des rôles (admin, consultant, client).

## Fonctionnalités

### Inscription d'un utilisateur (/api/auth/register) :
Permet à un nouvel utilisateur de s'inscrire avec un email, un nom d'utilisateur, un mot de passe, un nom complet et un rôle.
Les mots de passe sont hachés de manière sécurisée avec bcrypt.

### Connexion (/api/auth/login) :
Permet à un utilisateur de se connecter avec son email et son mot de passe.
Retourne un token JWT pour gérer la session.

### Gestion des rôles :
Chaque utilisateur possède un rôle (admin, consultant ou client).
Cela permet de gérer les droits d'accès dans l'application.

---

## Frontend (React)

L'interface d'administration (dashboard) est développée avec React et Bootstrap.

### Installation et démarrage :

```bash
cd frontend
npm install
npm run dev
```

Ouvrez le navigateur à l'adresse indiquée (généralement http://localhost:5173).

---

## Utilisation du Dashboard Administrateur

1. **Créer un utilisateur admin** via Swagger UI (`/api/auth/register`) ou le script Python.
2. **Lancer le frontend** et accéder à la page de connexion.
3. **Se connecter** avec l'email et le mot de passe admin.
4. **Accéder au dashboard** : Si le compte est admin, le tableau de bord s'affiche avec les sections :
   - CRUD Consultants
   - CRUD Missions/Projets
   - Statistiques

> Les boutons sont pour l'instant des placeholders (le backend CRUD reste à implémenter).

---

## Structure du projet

```
Consultant_Management_Application/
  backend/    # API FastAPI, base de données, modèles, routes
  frontend/   # Application React (dashboard, login, etc.)
```

---

## Comment Tester (Backend uniquement)

1. Lancer le serveur: `uvicorn main:app --reload`
2. Ouvrir Swagger UI: http://localhost:8000/docs
3. Inscrire un utilisateur: Utiliser l'endpoint `/api/auth/register` avec les informations demandées.
4. Se connecter: Utiliser l'endpoint `/api/auth/login` avec l'email et le mot de passe pour obtenir un token JWT.
5. Utiliser le token: Le token peut être utilisé pour accéder à des routes protégées (à implémenter).

---

## Branche en cours

Le développement du dashboard admin se fait sur la branche :
```
feature/admin-dashboard
```

---

# Technologies utilisées

FastAPI — Framework web
SQLAlchemy — ORM pour la gestion de la base de données
SQLite — Base de données par défaut (modifiable)
bcrypt (passlib) — Hachage des mots de passe
JWT (python-jose) — Authentification par token
React — Frontend SPA
Bootstrap — UI/UX

