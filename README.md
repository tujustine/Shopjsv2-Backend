# ShopJSv2 Backend

Serveur backend pour l'application de boutique en ligne Ma Boutique.

## 🚀 Installation

```bash
npm install
```

## 🏃‍♂️ Démarrage

### Mode Production

```bash
npm start
```

### Mode Développement (avec nodemon)

```bash
npm run dev
```

Le serveur démarre sur `http://localhost:4000`

## 🗄️ Base de Données

### MongoDB

- URL de connexion : `mongodb://localhost:27017/shopjsv2`
- Assurez-vous que MongoDB est en cours d'exécution

### Initialisation

Appelez une fois l'endpoint `POST /create-db` pour peupler la base de données avec des produits.

## 📡 API Endpoints

### Authentification

- `POST /user/signup` - Création de compte
- `POST /user/login` - Connexion

### Produits

- `POST /create-db` - Initialisation de la base de données
- `GET /products` - Liste des produits
- `GET /products/:id` - Détail d'un produit

### Commandes

- `POST /orders` - Création de commande (authentifié)
- `GET /orders` - Liste des commandes (admin)
- `PUT /orders/mark-delivered/:id` - Marquer comme livrée (admin)

## 🔐 Sécurité

- Middleware d'authentification pour les routes protégées
- Middleware admin pour les routes d'administration
- Validation des tokens JWT

## 🚀 Déploiement

### Northflank

1. Connectez votre repository
2. Configurez les variables d'environnement
3. Déployez automatiquement

### Variables d'Environnement

```env
MONGODB_URI=mongodb://localhost:27017/shopjsv2
PORT=4000
JWT_SECRET=votre_secret_jwt
```

## 📁 Structure

```
├── index.js           # Point d'entrée
├── models/            # Modèles Mongoose
├── routes/            # Routes API
├── middlewares/       # Middlewares (auth, admin)
└── assets/            # Données statiques
```

## 🧪 Test

```bash
# Vérifier que le serveur démarre
curl http://localhost:4000/products

# Initialiser la base de données
curl -X POST http://localhost:4000/create-db
```

---

**Backend pour Ma Boutique - Application E-commerce**
