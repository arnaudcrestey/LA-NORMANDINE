# La Normandine

Site immobilier propriétaire de La Normandine, construit avec Next.js, TypeScript, App Router et Tailwind CSS.

## Lancer le projet

```bash
npm install
npm run dev
```

Le site est ensuite disponible sur `http://localhost:3000`.

Vérifications de production :

```bash
npm run lint
npm run typecheck
npm run build
```

## Organisation

- `app/page.tsx` : composition de la vitrine et de la one-page.
- `app/mentions-legales/page.tsx` : mentions légales et confidentialité.
- `app/api/visite/route.ts` : validation serveur et envoi du formulaire.
- `components/` : vitrine, navigation, galerie/visionneuse et formulaire.
- `content/property.ts` : informations immobilières et légendes centralisées.
- `public/media/` : médias nécessaires au site public.
- `app/globals.css` : direction artistique et adaptations responsive.

## Activer le formulaire de visite

Le formulaire utilise l’API HTTP de [Resend](https://resend.com). Tant que la configuration n’est pas présente, l’API répond avec un statut `503` et indique explicitement au visiteur que sa demande n’a été ni enregistrée ni transmise.

1. Créer et vérifier un domaine d’envoi dans Resend.
2. Copier `.env.example` vers `.env.local`.
3. Renseigner :
   - `RESEND_API_KEY` : clé serveur Resend ;
   - `VISIT_RECIPIENT_EMAIL` : adresse qui reçoit les demandes ;
   - `VISIT_FROM_EMAIL` : expéditeur autorisé par le domaine vérifié ;
   - `NEXT_PUBLIC_SITE_URL` : URL canonique finale, sans slash terminal.
4. Redémarrer le serveur puis envoyer une demande de test.
5. Vérifier la réception, le champ de réponse, les contenus et la politique de conservation.

La route valide à nouveau les champs côté serveur, échappe les contenus inclus dans l’e-mail, contient un champ anti-robot et limite à trois les tentatives par heure et par adresse réseau. Cette limitation est en mémoire : sur un déploiement distribué, la remplacer par un stockage partagé (par exemple Vercel KV ou Upstash Redis) et ajouter, si nécessaire, une protection de type Turnstile.

## Points obligatoires avant publication

- compléter l’identité et les coordonnées de l’éditeur ;
- renseigner l’hébergeur et l’adresse d’exercice des droits ;
- fixer la durée de conservation des demandes ;
- obtenir ou actualiser le DPE, les diagnostics et le rapport SPANC ;
- confirmer les surfaces cadastrales, les plans et les surfaces des dépendances ;
- confirmer l’éligibilité fibre et les usages du puits ;
- valider les informations d’urbanisme et les équipements inclus dans la vente ;
- définir la date de disponibilité du bien ;
- confirmer l’URL canonique et le domaine d’envoi du formulaire ;
- effectuer une relecture juridique et immobilière finale des contenus.

## Médias

Les originaux restent dans `medias-source/` et ne sont jamais supprimés. Seuls les médias utiles sont copiés sous `public/media/`. Les images sont servies via l’optimisation native de Next.js ; la vidéo utilise un poster, des contrôles natifs et `preload="metadata"`.
