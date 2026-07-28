# Portfolio — Moussa Sarr

🔗 Démo : https://moussa-sarr.github.io/moussa-sarr

---

## ✨ Fonctionnalités

- Design system sur-mesure (palette violette dark/light, typographies Syne / DM Sans / JetBrains Mono)
- Site 100% bilingue **FR / EN** (i18n en JavaScript, aucun texte codé en dur)
- Mode clair / sombre avec détection des préférences système
- **Mode recruteur** : condense le contenu pour une lecture en 60 secondes
- Architecture SI interactive (composant cliquable, du firewall au PRA)
- Compteurs animés, timeline, roadmap carrière, certifications
- QR Code généré côté client pour partager le portfolio
- Carte de visite numérique téléchargeable (PNG)
- Formulaire de contact prêt pour **Supabase** (dégradation propre si non configuré)
- Statistiques GitHub via l'API publique (dégradation propre si indisponible)
- SEO complet (JSON-LD Person/Occupation, Open Graph, Twitter Cards, sitemap, robots.txt, llms.txt)
- Accessibilité WCAG 2.2 AA : navigation clavier, focus visibles, `prefers-reduced-motion`, ARIA
- PWA-ready (`manifest.webmanifest`)

## 📁 Structure

```
index.html                 Page principale
404.html                    Page d'erreur personnalisée
robots.txt / sitemap.xml    SEO
manifest.webmanifest        PWA
favicon.svg                 Icône / logo animé
llms.txt                    Contexte structuré pour les assistants IA
css/style.css                Design system complet
js/i18n.js                   Toutes les chaînes FR/EN
js/main.js                   Logique (rendu, thème, langue, formulaire, QR code…)
assets/photo.jpg             Photo de profil (à ajouter)
cv.pdf                        CV téléchargeable (à ajouter)
```

## 🚀 Déploiement sur GitHub Pages

1. Créer un dépôt `moussasarr.github.io` (ou tout autre nom + activer Pages).
2. Pousser l'ensemble de ces fichiers à la racine du dépôt.
3. Dans **Settings → Pages**, choisir la branche `main` et le dossier `/ (root)`.
4. Ajouter votre photo réelle dans `assets/photo.jpg` et votre CV dans `cv.pdf`
   (le site fonctionne sans ces fichiers, avec un message informatif).
5. Adapter les URLs `moussasarr.github.io` dans `index.html`, `robots.txt`,
   `sitemap.xml` et `llms.txt` si vous utilisez un domaine personnalisé
   (ajouter alors un fichier `CNAME`).

## 🔌 Configurer le formulaire de contact (Supabase)

1. Créer un projet sur [supabase.com](https://supabase.com) (offre gratuite suffisante).
2. Dans l'éditeur SQL, exécuter :

```sql
create table contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text,
  message text not null,
  created_at timestamp with time zone default now()
);

alter table contact_messages enable row level security;

create policy "Allow public insert"
  on contact_messages for insert
  to anon
  with check (true);
```

3. Dans `js/main.js`, renseigner :

```js
const SUPABASE_URL = "https://xxxxx.supabase.co";
const SUPABASE_ANON_KEY = "votre-clé-anon-publique";
```

Tant que ces valeurs sont vides, le formulaire affiche un message d'erreur
clair au lieu d'échouer silencieusement — aucune clé secrète n'est jamais requise
côté client (seule la clé publique anonyme est utilisée).

## 🌐 Ajouter une langue

Toutes les chaînes vivent dans `js/i18n.js` sous forme d'un objet `I18N`.
Pour ajouter l'espagnol par exemple : dupliquer la clé `en`, traduire les
valeurs, puis ajouter un bouton `<button class="lang-btn" data-lang="es">ES</button>`
dans la navigation d'`index.html`.

## 🎨 Design system

| Token | Valeur |
|---|---|
| Fond | `#0A0A0F` |
| Surface | `#111118` |
| Accent | `#7C3AED` |
| Accent secondaire | `#A855F7` |
| Succès | `#22C55E` |
| Danger | `#EF4444` |
| Titres | Syne |
| Texte | DM Sans |
| Code | JetBrains Mono |

## ✅ Qualité

Objectifs Lighthouse : Performance 95+, SEO 100, Accessibilité 100, Bonnes pratiques 100.
Aucune dépendance de build : ouvrez simplement `index.html`, ou servez le dossier
avec n'importe quel serveur statique pour tester en local (`npx serve .`).

## 📄 Licence

Code sous licence MIT (voir `LICENSE`). Contenu éditorial et photo réservés.
