export const property = {
  name: "La Normandine",
  publicLocation: "Viessoix — Valdallière, Normandie",
  shortLocation: "Viessoix — Valdallière, Normandie",
  price: "560 000 €",
  land: "Environ deux hectares",
  mainHouse: "Environ 180 m²",
  secondHouse: "Environ 70 m²",
  potential: "Environ 70 m² sur deux niveaux",
} as const;

export const essentials = [
  { value: "≈ 2 ha", label: "de terrain arboré et fleuri" },
  { value: "≈ 180 m²", label: "pour la maison principale" },
  { value: "≈ 60 m²", label: "pour la maison indépendante" },
  { value: "≈ 70 m²", label: "de potentiel complémentaire" },
  { value: "560 000 €", label: "prix de vente affiché" },
] as const;

export const domainSpaces = [
  {
    index: "01",
    title: "La maison principale",
    text: "Environ 180 m² de pièces de vie ouvertes sur le parc, où les volumes, la lumière et la circulation ont été pensés pour un quotidien confortable.",
  },
  {
    index: "02",
    title: "La maison indépendante",
    text: "Une seconde habitation d’environ 60 m², avec son entrée et son accès propres. Une solution idéale pour accueillir des proches tout en préservant l’indépendance de chacun.",
  },
  {
    index: "03",
    title: "Un potentiel complémentaire",
    text: "Un bâtiment indépendant d’environ 70 m² sur deux niveaux, laissant la possibilité d’un projet de construction complémentaire."
  },
  {
    index: "04",
    title: "Les dépendances",
    text: "Garage, atelier, salle de sport, espace bien-être avec jacuzzi et abri pouvant accueillir des chevaux complètent harmonieusement l’ensemble.",
  },
] as const;

export const gallery = [
  {
    src: "/media/la-normandine-facade.jpg",
    alt: "Façade en pierre de la maison principale, entourée d’arbres et donnant sur une terrasse en bois.",
    caption: "La maison principale au cœur du parc",
    layout: "feature",
  },
  {
    src: "/media/la-normandine-salon.jpg",
    alt: "Salon lumineux installé dans une pièce vitrée avec charpente apparente et vues sur le jardin.",
    caption: "Le salon et ses ouvertures sur le jardin",
    layout: "wide",
  },
  {
    src: "/media/la-normandine-salle-a-manger.jpg",
    alt: "Salle à manger ouverte, aux tons naturels, prolongée par un espace salon.",
    caption: "Des espaces de vie communicants",
    layout: "portrait",
  },
  {
    src: "/media/la-normandine-cuisine.jpg",
    alt: "Cuisine équipée claire avec plans de travail en bois et îlot central.",
    caption: "La cuisine équipée",
    layout: "landscape",
  },
  {
    src: "/media/la-normandine-chambre-parentale.jpg",
    alt: "Grande chambre aux tons doux avec accès visible vers une pièce d’eau.",
    caption: "Une chambre de la maison principale",
    layout: "landscape",
  },
  {
    src: "/media/la-normandine-chambre-deux.jpg",
    alt: "Chambre lumineuse à deux fenêtres, avec mobilier en bois et mur anthracite.",
    caption: "Lumière naturelle et volumes préservés",
    layout: "portrait",
  },
  {
    src: "/media/la-normandine-chambre-trois.jpg",
    alt: "Chambre aux teintes brunes et vertes, éclairée par une grande fenêtre donnant sur l’extérieur.",
    caption: "Une autre chambre de la maison principale",
    layout: "portrait",
  },
  {
    src: "/media/la-normandine-salon-second-niveau.jpg",
    alt: "Salon du second niveau avec canapé d’angle placé devant une large rangée de fenêtres.",
    caption: "Le salon central du second niveau",
    layout: "landscape",
  },
  {
    src: "/media/la-normandine-terrasse.jpg",
    alt: "Table dressée sur une terrasse en bois ouverte sur un jardin planté de grands arbres.",
    caption: "La terrasse tournée vers le parc",
    layout: "wide",
  },
  {
    src: "/media/la-normandine-salle-sport.jpg",
    alt: "Salle de sport avec appareils d’entraînement, sac de frappe et baies vitrées.",
    caption: "L’espace aménagé en salle de sport",
    layout: "landscape",
  },
  {
    src: "/media/la-normandine-bien-etre.jpg",
    alt: "Jacuzzi installé sous un abri en bois, dans un espace dédié au bien-être.",
    caption: "L’espace bien-être avec jacuzzi",
    layout: "wide",
  },
  {
    src: "/media/la-normandine-seconde-maison.jpg",
    alt: "Façade en pierre et toiture à deux fenêtres de toit de la seconde maison indépendante.",
    caption: "La seconde maison — image de repérage",
    layout: "feature",
  },
  {
  src: "/media/la-normandine-petite-maison-bas.jpg",
  alt: "Pièce de vie de la seconde maison.",
  caption: "L’espace de vie de la seconde maison",
  layout: "wide",
},
{
  src: "/media/la-normandine-petite-maison-2.jpg",
  alt: "Chambre située à l’étage de la seconde maison.",
  caption: "La chambre principale de la seconde maison",
  layout: "portrait",
},
  
] as const;

export const projectIdeas = [
  {
    title: "Habiter en famille",
    text: "Profiter des volumes de la maison principale, des espaces extérieurs et d’un cadre de vie où chacun peut trouver son rythme.",
  },
  {
    title: "Rapprocher plusieurs générations",
    text: "La seconde maison permet d’accueillir des proches dans une habitation indépendante, tout en partageant le même domaine.",
  },
  {
    title: "Développer une activité",
    text: "Un bureau, un atelier ou une activité indépendante peuvent naturellement trouver leur place au sein du domaine.",
  },
  {
    title: "Faire évoluer le domaine",
    text: "Le potentiel de construction complémentaire permet d’envisager de nouveaux aménagements ou de futurs projets selon vos besoins.",
  },
] as const;

export const confirmations = [
  "Géothermie installée en 2021 dans la maison principale",
  "Huisseries à double vitrage remplacées en 2024",
  "Chauffage électrique et poêle à bois de 2023 dans la seconde maison",
  "Deux accès indépendants avec portails électriques et visiophonie",
  "Alimentation en eau du réseau, complétée par un puits équipé d’une pompe",
  "Équipements de contrôle d’accès et de vidéosurveillance",
] as const;

export const pendingInformation = [
  "DPE actualisé en cours de réalisation",
 
] as const;
