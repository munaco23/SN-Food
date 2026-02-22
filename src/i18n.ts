import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "nav": {
        "home": "Home",
        "company": "Company",
        "team": "Team",
        "vendors": "Vendors",
        "customers": "Customers",
        "events": "Events",
        "catalogs": "Catalogs",
        "brands": "Brands",
        "new_arrivals": "New arrivals",
        "contact": "Contact",
        "branches": "Branches",
        "pages": "Pages"
      },
      "header": {
        "logo_subtitle": "Premium Groceries",
        "search_placeholder": "How can we help you ?",
        "search_button": "Search",
        "language": "Language",
        "accounts": "Accounts",
        "login_register": "Login/Register"
      },
      "topbar": {
        "address": "262 Rue des Bouleaux, 59860 Bruay-sur-l’Escaut",
        "email": "contact@snfood.fr"
      },
      "categorybar": {
        "all_categories": "All Categories",
        "weekly_discount": "Weekly Discount!"
      },
      "offcanvas": {
        "close_menu": "Close menu",
        "close": "Close",
        "type_products": "Type Your Products ...",
        "menu": "Menu",
        "search": "Search",
        "collapse": "Collapse",
        "expand": "Expand",
        "swap": "Swap",
        "wishlist": "Wishlist",
        "cart": "Cart",
        "wholesale": "Wholesale Food Distribution",
        "social": {
          "facebook": "Facebook",
          "instagram": "Instagram",
          "tiktok": "TikTok"
        }
      },
      "footer": {
        "brand_alt": "SN Food",
        "brand_text": "SN Food Distribution is a leading wholesaler of African and Asian food products, providing authentic flavors and reliable service to professionals across the region.",
        "quick_links": "Quick Links",
        "categories": "Categories",
        "contact_us": "Contact Us",
        "catalogues": "Catalogues",
        "account": "Account",
        "contact_wholesale": "Contact us for wholesale inquiries",
        "rights": "All rights reserved.",
        "terms": "Terms & Conditions",
        "privacy": "Privacy Policy",
        "cookie": "Cookie Policy"
      },
      "auth": {
        "login": "Login",
        "register": "Register",
        "email": "Email",
        "password": "Password",
        "forgot_password": "Forgot password?",
        "new_to": "New to SN Food?",
        "already_have": "Already have an account?",
        "first_name": "First Name",
        "last_name": "Last Name",
        "company_name": "Company Name",
        "vat_number": "VAT Number",
        "billing_address": "Billing Address",
        "address": "Address",
        "city": "City",
        "country": "Country",
        "postal_code": "Postal Code",
        "sdi_pec": "SDI or PEC Code",
        "phone": "Phone Number",
        "account": "Account"
      },
      "company": {
        "hero": {
          "title_line1": "Distributor of",
          "title_line2": "African & Asian food products",
          "text": "Based in Bruay-sur-l’Escaut, SN Food Distribution supports restaurants, specialty grocery stores, and food retailers with a reliable selection of authentic products.",
          "cta": "THE CATALOG"
        },
        "history": {
          "title": "Company History",
          "p1": "SN Food Distribution was created to meet the growing demand for African and Asian food products in the Hauts-de-France region.",
          "p2": "Based in Bruay-sur-l’Escaut, the company has steadily grown by expanding its product range and strengthening its network of international suppliers.",
          "p3": "Today, SN Food Distribution is a trusted partner for restaurants, specialty grocery stores, and food retailers."
        },
        "customers_suppliers": {
          "customers_title": "Customers",
          "customers_text": "SN Food Distribution is a trusted partner for African and Asian restaurants, exotic grocery stores, specialized supermarkets, as well as food wholesalers and retailers. We provide a wide range of authentic products with a focus on quality and reliability.",
          "suppliers_title": "Suppliers",
          "suppliers_text": "Our products are imported from West Africa, Central Africa, Southeast Asia, and the Middle East through certified partners recognized for their high-quality merchandise. We maintain strong relationships with international suppliers to ensure a permanent stock and rapid availability of authentic products.",
          "learn_more": "Learn more"
        },
        "strengths": {
          "aria": "Our strengths",
          "title": "Our strengths",
          "sub": "Quality at the heart of our commitment",
          "cta": "Request catalog",
          "text": "Through a strong network of international suppliers, SN Food Distribution continuously expands its range of African and Asian products. We support professionals with a reliable offering, consistent availability, and service focused on long-term customer satisfaction.",
          "card1": "Consistent sourcing through trusted international partners",
          "card2": "A curated selection tailored to restaurants, specialty stores, and food retailers",
          "card3": "A trusted partner in Hauts-de-France, based in Bruay-sur-l’Escaut"
        },
        "logistics": {
          "aria": "Commercial and logistics area",
          "title_line1": "Commercial and",
          "title_line2": "logistics area",
          "p1": "Our main warehouse is located at 262 rue des Bouleaux – Bloc 5 & 6, 59860 Bruay-sur-l’Escaut, with a storage area of approximately 200 m². The facility is equipped with dedicated zones for dry, fresh, and frozen products, including specialized cold rooms.",
          "p2": "Our dedicated team of 5 to 10 professionals ensures efficient order management and warehouse operations. We maintain a fleet of 3 to 5 vehicles, including refrigerated trucks, to guarantee the integrity of the cold chain during transport.",
          "p3": "We are committed to providing fast and reliable delivery within 24 to 48 hours depending on the area. Our responsive and personalized customer service is always ready to handle urgent orders and ensure client satisfaction."
        },
        "brands": {
          "aria": "All our brands",
          "title": "All our brands",
          "see_all": "See all",
          "sub": "SN Food Distribution works with a wide range of international brands, bringing you authentic flavors from Africa and Asia. We select only certified partners to ensure the best quality for our clients."
        },
        "request_info": {
          "aria": "Request information",
          "title": "Request information",
          "text": "SN Food Distribution is at your disposal for any need: contact us today for inquiries about our products and services.",
          "cta": "CONTACT US"
        }
      },
      "team": {
        "hero": {
          "title": "Meet our team of enthusiasts"
        },
        "values": {
          "title": "Company Values",
          "sub": "Quality, Reliability, and Respect",
          "p1": "At SN Food Distribution, we place quality, reliability, and respect at the heart of our business. We cultivate a dynamic and collaborative work environment where every team member actively contributes to the satisfaction of our customers.",
          "p2": "Our team benefits from more than 15 years of combined experience in the import-export and food distribution sector, ensuring excellence in every order we handle.",
          "image_alt": "Our values in action"
        },
        "grid": {
          "title": "Meet the team.",
          "empty": "No members found for this department."
        },
        "departments": {
          "direction": "DIRECTION",
          "sales": "SALES DEPARTMENT",
          "purchasing": "PURCHASING & SUPPLY",
          "logistics": "LOGISTICS & WAREHOUSE",
          "accounting": "ACCOUNTING & ADMINISTRATION"
        },
        "roles": {
          "director": "Director"
        }
      },
      "customers": {
        "hero": {
          "title": "Our Mission",
          "text": "Providing professionals with a wide range of high-quality African and Asian products, supported by fast, reliable, and competitive service.",
          "cta": "THE CATALOG"
        },
        "stats": {
          "title": "Key Statistics",
          "sub": "Distribution excellence in Hauts-de-France",
          "p1": "Based in Bruay-sur-l’Escaut, SN Food Distribution operates from a 200 m² specialized warehouse. We guarantee delivery within 24 to 48 hours, ensuring your business never faces a stockout of essential ethnic products.",
          "p2": "Our comprehensive catalog covers multiple categories, including dry, fresh, and frozen goods. We pride ourselves on being a reliable local partner for retailers and restaurants seeking authentic African and Asian flavors."
        },
        "categories": {
          "title": "Product Categories",
          "sub": "A diverse catalog for all your ethnic food needs",
          "desc": "SN Food Distribution provides a large multi-category catalog, from pantry staples to specialized ingredients. We are your one-stop shop for authentic African and Asian supplies in the Hauts-de-France region.",
          "cta": "Request catalog",
          "items": {
            "dry": {
              "title": "Dry Products",
              "desc": "Rice, flours, authentic spices, and specialty sauces."
            },
            "fresh": {
              "title": "Fresh Products",
              "desc": "Quality fresh ingredients sourced from trusted partners."
            },
            "frozen": {
              "title": "Frozen Goods",
              "desc": "A wide range of deep-frozen items maintained at optimal temperatures."
            },
            "drinks": {
              "title": "Exotic Drinks",
              "desc": "Popular beverages and juices from Africa and Asia."
            },
            "halal": {
              "title": "Halal Certified",
              "desc": "A dedicated selection of Halal products for your customers."
            },
            "african": {
              "title": "African Specialties",
              "desc": "Specific oils, condiments, and traditional African food staples."
            }
          }
        }
      },
      "vendors": {
        "hero": {
          "title": "Logistics and innovation",
          "text": "SN Food Distribution is a highly qualified partner for the preservation and distribution of ethnic specialties, supported by professional logistics and strict quality standards.",
          "cta": "THE CATALOG"
        },
        "infrastructure": {
          "title": "Infrastructure Details",
          "sub": "Professional distribution of ethnic food products",
          "p1": "SN Food Distribution operates from a secure warehouse featuring distinct zones for dry, fresh, and frozen goods. Our facility is optimized with industrial shelving to ensure efficient stock management.",
          "p2": "We utilize specialized cold rooms adapted for frozen products, maintaining the highest quality standards. Our logistics are powered by a fleet of refrigerated vehicles, ensuring the cold chain is never broken.",
          "p3": "Based in Bruay-sur-l’Escaut, our infrastructure is designed to serve as a reliable hub for professionals across the Hauts-de-France region, combining security with operational efficiency."
        },
        "guarantees": {
          "title": "Service Guarantees",
          "sub": "A trusted partner in the African & Asian food wholesale sector",
          "desc": "SN Food Distribution guarantees delivery within 24 to 48 hours depending on your zone. We ensure constant availability of our flagship products and provide rapid management of urgent orders to keep your business running smoothly.",
          "cta": "Request catalog",
          "items": {
            "excellence": {
              "title": "Operational Excellence",
              "desc": "Strict adherence to European hygiene standards and HACCP procedures."
            },
            "supply": {
              "title": "Reliable Supply",
              "desc": "Permanent stock and rapid availability of core African and Asian products."
            },
            "partnerships": {
              "title": "Sustainable Partnerships",
              "desc": "Building long-term, mutually beneficial relationships with our suppliers."
            },
            "cold_chain": {
              "title": "Cold Chain Integrity",
              "desc": "Refrigerated trucks and cold rooms ensuring strict compliance with sanitary norms."
            },
            "innovation": {
              "title": "Logistics Innovation",
              "desc": "Optimized industrial shelving and modern fleet for superior distribution."
            },
            "certified": {
              "title": "Certified Products",
              "desc": "Halal certifications and products sourced from internationally recognized partners."
            }
          }
        }
      },
      "events_page": {
        "title": "Events",
        "subtitle": "Find out what happens in the SN Food world",
        "go_to": "Go to the events page"
      },
      "catalogs_page": {
        "hero_title": "The many colors of ethnic food",
        "hero_text": "SN Food Distribution offers a wide catalog of African and Asian food products for professionals.",
        "grid_title": "Product catalogues",
        "items": {
          "complete": "Complete catalog",
          "fresh": "Fresh",
          "meat": "Meat",
          "drinks": "Drinks",
          "tea": "Tea",
          "dairy": "Dairy",
          "ghee": "Ghee",
          "noodles": "Noodles"
        }
      },
      "brands_page": {
        "hero_title": "All our brands",
        "hero_text": "SN Food Distribution works with dozens of international brands, from well-known names to local specialties. With us, you will find what your customers want.",
        "popular_title": "Popular brands"
      },
      "new_arrivals_page": {
        "hero_title": "New Arrivals",
        "hero_text": "Discover the latest additions to our catalog: new products and authentic ethnic gastronomic experiences.",
        "add_to_wishlist": "Add to wishlist",
        "add_to_cart": "Add to cart",
        "code_prefix": "cod.",
        "categories": {
          "fresh": "Fresh Products",
          "flours": "Assorted Flours",
          "dairy": "Dairy",
          "condiments": "Condiments",
          "noodles": "Instant Noodles"
        }
      },
      "contact_page": {
        "hero": {
          "title": "Contact Us",
          "subtitle": "African & Asian food wholesaler based in Bruay-sur-l’Escaut. Get in touch with our team today."
        },
        "map_title": "Google Maps",
        "info": {
          "location_title": "Our Location",
          "phone_title": "Phone Number",
          "phone_line1": "Contact us for more information",
          "phone_line2": "about our wholesale services",
          "email_title": "Email Address",
          "hours_title": "Working Hours",
          "hours_line1": "Mon - Sat: 09:00 - 20:00",
          "hours_line2": "Sunday: Closed"
        },
        "form": {
          "title": "Send Us a Message",
          "subtitle": "Fill out the form below and we'll get back to you as soon as possible.",
          "full_name": "Full Name",
          "full_name_ph": "Enter your name",
          "email": "Email Address",
          "email_ph": "Enter your email",
          "subject": "Subject",
          "subject_ph": "What is this about?",
          "message": "Your Message",
          "message_ph": "How can we help you?",
          "submit": "Send Message"
        }
      },
      "account_page": {
        "hero_title": "My Account",
        "breadcrumb_home": "Home",
        "sidebar": {
          "dashboard": "Dashboard",
          "orders": "Orders",
          "addresses": "Addresses",
          "details": "Account Details",
          "logout": "Logout"
        },
        "dashboard": {
          "title": "Dashboard",
          "hello": "Hello,",
          "member": "SN Member",
          "desc": "From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details."
        },
        "orders": {
          "title": "Recent Orders",
          "empty": "No orders has been made yet.",
          "browse": "BROWSE PRODUCTS"
        },
        "addresses": {
          "title": "Addresses",
          "desc": "The following addresses will be used on the checkout page by default.",
          "billing": "Billing Address",
          "shipping": "Shipping Address",
          "edit": "Edit",
          "placeholder": "You have not set up this type of address yet."
        },
        "details": {
          "title": "Account Details",
          "first_name": "First Name",
          "last_name": "Last Name",
          "display_name": "Display Name",
          "display_hint": "This will be how your name will be displayed in the account section and in reviews",
          "email": "Email Address",
          "password_change": "Password Change",
          "current_password": "Current password (leave blank to leave unchanged)",
          "new_password": "New password (leave blank to leave unchanged)",
          "confirm_new_password": "Confirm new password",
          "save_changes": "SAVE CHANGES"
        }
      },
      "slider": {
        "prev": "Previous slide",
        "next": "Next slide",
        "select": "Select slide",
        "go_to": "Go to slide {{index}}",
        "slide_alt": "Hero slide {{index}}"
      },
      "wishlist_page": {
        "title": "My Wishlist",
        "item_count": "{{count}} item",
        "item_count_plural": "{{count}} items",
        "remove": "Remove from wishlist",
        "code_prefix": "cod.",
        "add_to_cart": "Add to cart",
        "empty": {
          "title": "Your wishlist is empty",
          "text": "Save your favorite items here to buy them later.",
          "cta": "Shop Now"
        }
      },
      "discover": {
        "title": "Your Partner in Excellence",
        "subtitle": "SN Food Distribution provides premium quality African and Asian products directly to professionals. Elevate your business with authentic flavors and reliable wholesale service.",
        "cta": "EXPLORE CATALOGUE"
      },
      "feature_strip": {
        "title": "We Bring You the Taste of Home",
        "text": "SN Food Distribution is a reference company for the import of ethnic food products, meeting the growing demand for African and Asian products. Every day, we distribute the best products from around the world to stores and wholesalers, with a reliable delivery service.",
        "company": "Company",
        "history": "Our History",
        "brand_highlight": "Trusted distributor for catering professionals and specialized grocery stores.",
        "leader_title": "Leader in ethnic product distribution",
        "leader_text": "Optimized warehouse management and a modern fleet of vehicles. Products always available and reliable delivery throughout the region.",
        "stats": {
          "storage": "200 m2 Storage",
          "storage_text": "Main warehouse located in Bruay-sur-l'Escaut, optimized for dry, fresh, and frozen products.",
          "fleet": "Modern Fleet",
          "fleet_text": "A fleet of utility vehicles and refrigerated trucks to respect the cold chain.",
          "delivery": "24 to 48 Hours",
          "delivery_text": "All orders are processed quickly for delivery within 24h to 48h.",
          "import": "International Import",
          "import_text": "We import authentic products from West Africa, Central Africa, Asia, and the Middle East."
        }
      },
      "values": {
        "title": "Our Values",
        "sub": "Quality, Reliability, and Respect",
        "text": "At SN Food Distribution, we place quality, reliability, and respect at the heart of our business. We cultivate a dynamic and collaborative work environment where every team member actively contributes to the satisfaction of our customers. Our team benefits from more than 15 years of combined experience in the import-export and food distribution sector.",
        "cta": "Discover our team"
      },
      "export": {
        "title": "We deliver everywhere",
        "text": "SN Food Distribution delivers throughout the region and beyond. Our products are selected to meet the requirements of professionals with controlled logistics."
      },
      "catalog": {
        "title": "A large catalog dedicated to food professionals",
        "subtitle": "Discover our most viewed categories and top products, with premium logistics and reliable delivery.",
        "col_viewed": "Most Viewed Categories",
        "col_top": "Top Products",
        "col_delivery": "Delivery in 24 to 48h",
        "pill_fresh_frozen": "Fresh and Frozen",
        "promo_title": "More than 5 vehicles for responsive logistics",
        "promo_text": "Daily deliveries adapted to the requirements of the cold chain and availability.",
        "promo_link": "Learn more",
        "suggest_kicker": "Today we suggest...",
        "suggest_title": "Fresh Products",
        "suggest_link": "Go to Category"
      }
    }
  },
  fr: {
    translation: {
      "nav": {
        "home": "Accueil",
        "company": "Entreprise",
        "team": "Équipe",
        "vendors": "Fournisseurs",
        "customers": "Clients",
        "events": "Événements",
        "catalogs": "Catalogues",
        "brands": "Marques",
        "new_arrivals": "Nouveautés",
        "contact": "Contact",
        "branches": "Agences",
        "pages": "Pages"
      },
      "header": {
        "logo_subtitle": "Épicerie premium",
        "search_placeholder": "Comment pouvons-nous vous aider ?",
        "search_button": "Rechercher",
        "language": "Langue",
        "accounts": "Compte",
        "login_register": "Connexion/Inscription"
      },
      "topbar": {
        "address": "262 Rue des Bouleaux, 59860 Bruay-sur-l’Escaut",
        "email": "contact@snfood.fr"
      },
      "categorybar": {
        "all_categories": "Toutes les catégories",
        "weekly_discount": "Promo de la semaine !"
      },
      "offcanvas": {
        "close_menu": "Fermer le menu",
        "close": "Fermer",
        "type_products": "Recherchez vos produits ...",
        "menu": "Menu",
        "search": "Rechercher",
        "collapse": "Réduire",
        "expand": "Développer",
        "swap": "Échanger",
        "wishlist": "Liste de souhaits",
        "cart": "Panier",
        "wholesale": "Distribution alimentaire en gros",
        "social": {
          "facebook": "Facebook",
          "instagram": "Instagram",
          "tiktok": "TikTok"
        }
      },
      "footer": {
        "brand_alt": "SN Food",
        "brand_text": "SN Food Distribution est un grossiste de premier plan de produits alimentaires africains et asiatiques, offrant des saveurs authentiques et un service fiable aux professionnels de la région.",
        "quick_links": "Liens rapides",
        "categories": "Catégories",
        "contact_us": "Nous contacter",
        "catalogues": "Catalogues",
        "account": "Compte",
        "contact_wholesale": "Contactez-nous pour vos demandes en gros",
        "rights": "Tous droits réservés.",
        "terms": "Conditions générales",
        "privacy": "Politique de confidentialité",
        "cookie": "Politique de cookies"
      },
      "auth": {
        "login": "Connexion",
        "register": "Inscription",
        "email": "E-mail",
        "password": "Mot de passe",
        "forgot_password": "Mot de passe oublié ?",
        "new_to": "Nouveau chez SN Food ?",
        "already_have": "Vous avez déjà un compte ?",
        "first_name": "Prénom",
        "last_name": "Nom",
        "company_name": "Nom de l'entreprise",
        "vat_number": "Numéro de TVA",
        "billing_address": "Adresse de facturation",
        "address": "Adresse",
        "city": "Ville",
        "country": "Pays",
        "postal_code": "Code postal",
        "sdi_pec": "Code SDI ou PEC",
        "phone": "Numéro de téléphone",
        "account": "Compte"
      },
      "company": {
        "hero": {
          "title_line1": "Distributeur de",
          "title_line2": "produits alimentaires africains et asiatiques",
          "text": "Basée à Bruay-sur-l’Escaut, SN Food Distribution accompagne les restaurants, épiceries spécialisées et commerces alimentaires avec une sélection fiable de produits authentiques.",
          "cta": "LE CATALOGUE"
        },
        "history": {
          "title": "Histoire de l'entreprise",
          "p1": "SN Food Distribution a été créée pour répondre à la demande croissante de produits alimentaires africains et asiatiques dans la région des Hauts-de-France.",
          "p2": "Basée à Bruay-sur-l’Escaut, l'entreprise s'est développée en élargissant sa gamme de produits et en renforçant son réseau de fournisseurs internationaux.",
          "p3": "Aujourd'hui, SN Food Distribution est un partenaire de confiance pour les restaurants, les épiceries spécialisées et les commerces alimentaires."
        },
        "customers_suppliers": {
          "customers_title": "Clients",
          "customers_text": "SN Food Distribution est un partenaire de confiance pour les restaurants africains et asiatiques, les épiceries exotiques, les supermarchés spécialisés, ainsi que les grossistes et détaillants alimentaires. Nous proposons une large gamme de produits authentiques avec un focus sur la qualité et la fiabilité.",
          "suppliers_title": "Fournisseurs",
          "suppliers_text": "Nos produits sont importés d'Afrique de l'Ouest, d'Afrique centrale, d'Asie du Sud-Est et du Moyen-Orient via des partenaires certifiés reconnus pour la qualité de leurs marchandises. Nous entretenons des relations solides avec nos fournisseurs pour assurer un stock permanent et une disponibilité rapide.",
          "learn_more": "En savoir plus"
        },
        "strengths": {
          "aria": "Nos atouts",
          "title": "Nos atouts",
          "sub": "La qualité au cœur de notre engagement",
          "cta": "Demander le catalogue",
          "text": "Grâce à un solide réseau de fournisseurs internationaux, SN Food Distribution élargit en permanence sa gamme de produits africains et asiatiques. Nous accompagnons les professionnels avec une offre fiable, une disponibilité constante et un service orienté vers la satisfaction à long terme.",
          "card1": "Un approvisionnement régulier grâce à des partenaires internationaux de confiance",
          "card2": "Une sélection adaptée aux restaurants, magasins spécialisés et commerces alimentaires",
          "card3": "Un partenaire de confiance dans les Hauts-de-France, basé à Bruay-sur-l’Escaut"
        },
        "logistics": {
          "aria": "Zone commerciale et logistique",
          "title_line1": "Zone commerciale et",
          "title_line2": "logistique",
          "p1": "Notre entrepôt principal est situé au 262 rue des Bouleaux – Blocs 5 & 6, 59860 Bruay-sur-l’Escaut, avec une surface de stockage d’environ 200 m². Le site dispose de zones dédiées aux produits secs, frais et surgelés, incluant des chambres froides.",
          "p2": "Notre équipe de 5 à 10 professionnels assure une gestion efficace des commandes et des opérations. Nous disposons d'une flotte de 3 à 5 véhicules, dont des camions frigorifiques, pour garantir le respect de la chaîne du froid.",
          "p3": "Nous nous engageons à livrer rapidement et de manière fiable sous 24 à 48 heures selon la zone. Notre service client réactif est prêt à gérer les demandes urgentes et à assurer la satisfaction."
        },
        "brands": {
          "aria": "Toutes nos marques",
          "title": "Toutes nos marques",
          "see_all": "Voir tout",
          "sub": "SN Food Distribution travaille avec un large éventail de marques internationales, pour vous offrir des saveurs authentiques d'Afrique et d'Asie. Nous sélectionnons uniquement des partenaires certifiés afin de garantir la meilleure qualité."
        },
        "request_info": {
          "aria": "Demander des informations",
          "title": "Demander des informations",
          "text": "SN Food Distribution est à votre disposition : contactez-nous dès aujourd'hui pour toute demande concernant nos produits et services.",
          "cta": "NOUS CONTACTER"
        }
      },
      "team": {
        "hero": {
          "title": "Rencontrez notre équipe de passionnés"
        },
        "values": {
          "title": "Valeurs de l'entreprise",
          "sub": "Qualité, Fiabilité et Respect",
          "p1": "Chez SN Food Distribution, nous plaçons la qualité, la fiabilité et le respect au cœur de notre activité. Nous cultivons un environnement de travail dynamique et collaboratif où chaque membre contribue activement à la satisfaction de nos clients.",
          "p2": "Notre équipe bénéficie de plus de 15 ans d'expérience cumulée dans le secteur de l'import-export et de la distribution alimentaire, garantissant l'excellence à chaque commande.",
          "image_alt": "Nos valeurs en action"
        },
        "grid": {
          "title": "Découvrez l'équipe.",
          "empty": "Aucun membre trouvé pour ce service."
        },
        "departments": {
          "direction": "DIRECTION",
          "sales": "SERVICE COMMERCIAL",
          "purchasing": "ACHATS & APPROVISIONNEMENT",
          "logistics": "LOGISTIQUE & ENTREPÔT",
          "accounting": "COMPTABILITÉ & ADMINISTRATION"
        },
        "roles": {
          "director": "Directeur"
        }
      },
      "customers": {
        "hero": {
          "title": "Notre mission",
          "text": "Fournir aux professionnels une large gamme de produits africains et asiatiques de haute qualité, avec un service rapide, fiable et compétitif.",
          "cta": "LE CATALOGUE"
        },
        "stats": {
          "title": "Chiffres clés",
          "sub": "L'excellence de la distribution dans les Hauts-de-France",
          "p1": "Basée à Bruay-sur-l’Escaut, SN Food Distribution opère depuis un entrepôt spécialisé de 200 m². Nous garantissons une livraison sous 24 à 48 heures afin d'éviter toute rupture de stock sur les produits essentiels.",
          "p2": "Notre catalogue couvre plusieurs catégories, notamment les produits secs, frais et surgelés. Nous sommes un partenaire local fiable pour les commerçants et restaurants recherchant des saveurs authentiques d'Afrique et d'Asie."
        },
        "categories": {
          "title": "Catégories de produits",
          "sub": "Un catalogue varié pour tous vos besoins en produits ethniques",
          "desc": "SN Food Distribution propose un catalogue multi-catégories, des produits du quotidien aux ingrédients spécialisés. Votre partenaire unique pour des produits africains et asiatiques authentiques dans les Hauts-de-France.",
          "cta": "Demander le catalogue",
          "items": {
            "dry": {
              "title": "Produits secs",
              "desc": "Riz, farines, épices authentiques et sauces spécialisées."
            },
            "fresh": {
              "title": "Produits frais",
              "desc": "Ingrédients frais de qualité issus de partenaires de confiance."
            },
            "frozen": {
              "title": "Surgelés",
              "desc": "Large choix de produits surgelés conservés à température optimale."
            },
            "drinks": {
              "title": "Boissons exotiques",
              "desc": "Boissons et jus populaires d'Afrique et d'Asie."
            },
            "halal": {
              "title": "Certifié Halal",
              "desc": "Une sélection dédiée de produits Halal pour vos clients."
            },
            "african": {
              "title": "Spécialités africaines",
              "desc": "Huiles, condiments et produits traditionnels africains."
            }
          }
        }
      },
      "vendors": {
        "hero": {
          "title": "Logistique et innovation",
          "text": "SN Food Distribution est un partenaire hautement qualifié pour la conservation et la distribution de spécialités ethniques, avec une logistique professionnelle et des standards de qualité stricts.",
          "cta": "LE CATALOGUE"
        },
        "infrastructure": {
          "title": "Détails des infrastructures",
          "sub": "Distribution professionnelle de produits alimentaires ethniques",
          "p1": "SN Food Distribution opère depuis un entrepôt sécurisé avec des zones distinctes pour les produits secs, frais et surgelés. Notre site est optimisé avec des rayonnages industriels pour une gestion efficace.",
          "p2": "Nous utilisons des chambres froides adaptées aux surgelés et maintenons des standards de qualité élevés. Notre logistique s'appuie sur une flotte de véhicules frigorifiques garantissant la chaîne du froid.",
          "p3": "Basée à Bruay-sur-l’Escaut, notre infrastructure est conçue comme un hub fiable pour les professionnels des Hauts-de-France, alliant sécurité et efficacité opérationnelle."
        },
        "guarantees": {
          "title": "Garanties de service",
          "sub": "Un partenaire de confiance dans le commerce de gros africain et asiatique",
          "desc": "SN Food Distribution garantit une livraison sous 24 à 48 heures selon votre zone. Nous assurons la disponibilité constante de nos produits phares et la gestion rapide des commandes urgentes.",
          "cta": "Demander le catalogue",
          "items": {
            "excellence": {
              "title": "Excellence opérationnelle",
              "desc": "Respect strict des normes d'hygiène européennes et des procédures HACCP."
            },
            "supply": {
              "title": "Approvisionnement fiable",
              "desc": "Stock permanent et disponibilité rapide des produits africains et asiatiques essentiels."
            },
            "partnerships": {
              "title": "Partenariats durables",
              "desc": "Des relations à long terme, mutuellement bénéfiques avec nos fournisseurs."
            },
            "cold_chain": {
              "title": "Chaîne du froid",
              "desc": "Camions frigorifiques et chambres froides pour une conformité sanitaire stricte."
            },
            "innovation": {
              "title": "Innovation logistique",
              "desc": "Rayonnages industriels optimisés et flotte moderne pour une distribution performante."
            },
            "certified": {
              "title": "Produits certifiés",
              "desc": "Certifications Halal et produits issus de partenaires reconnus internationalement."
            }
          }
        }
      },
      "events_page": {
        "title": "Événements",
        "subtitle": "Découvrez ce qui se passe dans l'univers SN Food",
        "go_to": "Aller à la page des événements"
      },
      "catalogs_page": {
        "hero_title": "Les mille couleurs de la cuisine ethnique",
        "hero_text": "SN Food Distribution propose un large catalogue de produits alimentaires africains et asiatiques pour les professionnels.",
        "grid_title": "Catalogues produits",
        "items": {
          "complete": "Catalogue complet",
          "fresh": "Frais",
          "meat": "Viande",
          "drinks": "Boissons",
          "tea": "Thé",
          "dairy": "Produits laitiers",
          "ghee": "Ghee",
          "noodles": "Nouilles"
        }
      },
      "brands_page": {
        "hero_title": "Toutes nos marques",
        "hero_text": "SN Food Distribution travaille avec des dizaines de marques internationales, des plus connues aux spécialités locales. Avec nous, vous trouverez ce que vos clients recherchent.",
        "popular_title": "Marques populaires"
      },
      "new_arrivals_page": {
        "hero_title": "Nouveautés",
        "hero_text": "Découvrez les dernières nouveautés de notre catalogue : nouveaux produits et expériences gastronomiques ethniques authentiques.",
        "add_to_wishlist": "Ajouter à la liste de souhaits",
        "add_to_cart": "Ajouter au panier",
        "code_prefix": "réf.",
        "categories": {
          "fresh": "Produits frais",
          "flours": "Farines assorties",
          "dairy": "Produits laitiers",
          "condiments": "Condiments",
          "noodles": "Nouilles instantanées"
        }
      },
      "contact_page": {
        "hero": {
          "title": "Nous contacter",
          "subtitle": "Grossiste en produits africains et asiatiques basé à Bruay-sur-l’Escaut. Contactez notre équipe dès aujourd'hui."
        },
        "map_title": "Google Maps",
        "info": {
          "location_title": "Notre adresse",
          "phone_title": "Téléphone",
          "phone_line1": "Contactez-nous pour plus d'informations",
          "phone_line2": "sur nos services de grossiste",
          "email_title": "Adresse e-mail",
          "hours_title": "Horaires d'ouverture",
          "hours_line1": "Lun - Sam : 09:00 - 20:00",
          "hours_line2": "Dimanche : Fermé"
        },
        "form": {
          "title": "Envoyez-nous un message",
          "subtitle": "Remplissez le formulaire ci-dessous et nous vous répondrons dès que possible.",
          "full_name": "Nom complet",
          "full_name_ph": "Entrez votre nom",
          "email": "Adresse e-mail",
          "email_ph": "Entrez votre e-mail",
          "subject": "Sujet",
          "subject_ph": "De quoi s'agit-il ?",
          "message": "Votre message",
          "message_ph": "Comment pouvons-nous vous aider ?",
          "submit": "Envoyer"
        }
      },
      "account_page": {
        "hero_title": "Mon compte",
        "breadcrumb_home": "Accueil",
        "sidebar": {
          "dashboard": "Tableau de bord",
          "orders": "Commandes",
          "addresses": "Adresses",
          "details": "Détails du compte",
          "logout": "Déconnexion"
        },
        "dashboard": {
          "title": "Tableau de bord",
          "hello": "Bonjour,",
          "member": "Membre SN",
          "desc": "Depuis votre tableau de bord, vous pouvez consulter vos commandes récentes, gérer vos adresses de livraison et de facturation, et modifier votre mot de passe et les détails de votre compte."
        },
        "orders": {
          "title": "Commandes récentes",
          "empty": "Aucune commande n'a encore été passée.",
          "browse": "PARCOURIR LES PRODUITS"
        },
        "addresses": {
          "title": "Adresses",
          "desc": "Les adresses suivantes seront utilisées par défaut lors du paiement.",
          "billing": "Adresse de facturation",
          "shipping": "Adresse de livraison",
          "edit": "Modifier",
          "placeholder": "Vous n'avez pas encore configuré ce type d'adresse."
        },
        "details": {
          "title": "Détails du compte",
          "first_name": "Prénom",
          "last_name": "Nom",
          "display_name": "Nom d'affichage",
          "display_hint": "C'est ainsi que votre nom apparaîtra dans la section compte et dans les avis",
          "email": "Adresse e-mail",
          "password_change": "Changement de mot de passe",
          "current_password": "Mot de passe actuel (laisser vide pour ne pas modifier)",
          "new_password": "Nouveau mot de passe (laisser vide pour ne pas modifier)",
          "confirm_new_password": "Confirmer le nouveau mot de passe",
          "save_changes": "ENREGISTRER"
        }
      },
      "slider": {
        "prev": "Diapositive précédente",
        "next": "Diapositive suivante",
        "select": "Sélectionner une diapositive",
        "go_to": "Aller à la diapositive {{index}}",
        "slide_alt": "Diapositive d'accueil {{index}}"
      },
      "wishlist_page": {
        "title": "Ma liste de souhaits",
        "item_count": "{{count}} article",
        "item_count_plural": "{{count}} articles",
        "remove": "Retirer de la liste de souhaits",
        "code_prefix": "réf.",
        "add_to_cart": "Ajouter au panier",
        "empty": {
          "title": "Votre liste de souhaits est vide",
          "text": "Enregistrez vos articles favoris ici pour les acheter plus tard.",
          "cta": "Acheter maintenant"
        }
      },
      "discover": {
        "title": "Votre partenaire d'excellence",
        "subtitle": "SN Food Distribution fournit des produits africains et asiatiques de qualité premium directement aux professionnels. Dynamisez votre activité avec des saveurs authentiques et un service de gros fiable.",
        "cta": "EXPLORER LE CATALOGUE"
      },
      "feature_strip": {
        "title": "Nous vous apportons le goût de chez vous",
        "text": "SN Food Distribution est une entreprise de référence pour l'importation de produits alimentaires ethniques, répondant à la demande croissante de produits africains et asiatiques. Chaque jour, nous distribuons les meilleurs produits du monde entier aux magasins et grossistes, avec un service de livraison fiable.",
        "company": "Entreprise",
        "history": "Notre Histoire",
        "brand_highlight": "Distributeur de confiance pour les professionnels de la restauration et les épiceries spécialisées.",
        "leader_title": "Leader dans la distribution de produits ethniques",
        "leader_text": "Gestion d'entrepôt optimisée et flotte de véhicules moderne. Produits toujours disponibles et livraison fiable dans toute la région.",
        "stats": {
          "storage": "200 m2 de Stockage",
          "storage_text": "Entrepôt principal situé à Bruay-sur-l’Escaut, optimisé pour les produits secs, frais et surgelés.",
          "fleet": "Flotte Moderne",
          "fleet_text": "Une flotte de véhicules utilitaires et de camions frigorifiques pour respecter la chaîne du froid.",
          "delivery": "24 à 48 Heures",
          "delivery_text": "Toutes les commandes sont traitées rapidement pour une livraison sous 24h à 48h.",
          "import": "Importation Internationale",
          "import_text": "Nous importons des produits authentiques d'Afrique de l'Ouest, d'Afrique Centrale, d'Asie et du Moyen-Orient."
        }
      },
      "values": {
        "title": "Nos Valeurs",
        "sub": "Qualité, Fiabilité et Respect",
        "text": "Chez SN Food Distribution, nous plaçons la qualité, la fiabilité et le respect au cœur de notre activité. Nous cultivons un environnement de travail dynamique et collaboratif, où chaque membre de l'équipe contribue activement à la satisfaction de nos clients. Notre équipe bénéficie de plus de 15 ans d'expérience combinée dans le secteur de l'import-export et de la distribution alimentaire.",
        "cta": "Découvrir notre équipe"
      },
      "export": {
        "title": "Nous livrons partout",
        "text": "SN Food Distribution livre dans toute la région et au-delà. Nos produits sont sélectionnés pour répondre aux exigences des professionnels avec une logistique contrôlée."
      },
      "catalog": {
        "title": "Un large catalogue dédié aux professionnels de l'alimentation",
        "subtitle": "Découvrez nos catégories les plus consultées et nos produits phares, avec une logistique de qualité et une livraison fiable.",
        "col_viewed": "Catégories les plus consultées",
        "col_top": "Produits Phares",
        "col_delivery": "Livraison en 24 à 48h",
        "pill_fresh_frozen": "Frais et Surgelés",
        "promo_title": "Plus de 5 véhicules pour une logistique réactive",
        "promo_text": "Livraisons quotidiennes adaptées aux exigences de la chaîne du froid et à la disponibilité.",
        "promo_link": "En savoir plus",
        "suggest_kicker": "Aujourd'hui, nous suggérons...",
        "suggest_title": "Produits Frais",
        "suggest_link": "Aller à la catégorie"
      }
    }
  },
  it: {
    translation: {
      "nav": {
        "home": "Home",
        "company": "Azienda",
        "team": "Team",
        "vendors": "Fornitori",
        "customers": "Clienti",
        "events": "Eventi",
        "catalogs": "Cataloghi",
        "brands": "Marchi",
        "new_arrivals": "Nuovi arrivi",
        "contact": "Contatto",
        "branches": "Filiali",
        "pages": "Pagine"
      },
      "header": {
        "logo_subtitle": "Spesa premium",
        "search_placeholder": "Come possiamo aiutarti ?",
        "search_button": "Cerca",
        "language": "Lingua",
        "accounts": "Account",
        "login_register": "Accedi/Registrati"
      },
      "topbar": {
        "address": "262 Rue des Bouleaux, 59860 Bruay-sur-l’Escaut",
        "email": "contact@snfood.fr"
      },
      "categorybar": {
        "all_categories": "Tutte le categorie",
        "weekly_discount": "Sconto settimanale!"
      },
      "offcanvas": {
        "close_menu": "Chiudi menu",
        "close": "Chiudi",
        "type_products": "Digita i tuoi prodotti ...",
        "menu": "Menu",
        "search": "Cerca",
        "collapse": "Comprimi",
        "expand": "Espandi",
        "swap": "Scambia",
        "wishlist": "Preferiti",
        "cart": "Carrello",
        "wholesale": "Distribuzione alimentare all'ingrosso",
        "social": {
          "facebook": "Facebook",
          "instagram": "Instagram",
          "tiktok": "TikTok"
        }
      },
      "footer": {
        "brand_alt": "SN Food",
        "brand_text": "SN Food Distribution è un grossista leader di prodotti alimentari africani e asiatici, che offre sapori autentici e un servizio affidabile ai professionisti della regione.",
        "quick_links": "Link rapidi",
        "categories": "Categorie",
        "contact_us": "Contattaci",
        "catalogues": "Cataloghi",
        "account": "Account",
        "contact_wholesale": "Contattaci per richieste all'ingrosso",
        "rights": "Tutti i diritti riservati.",
        "terms": "Termini e condizioni",
        "privacy": "Informativa sulla privacy",
        "cookie": "Cookie policy"
      },
      "auth": {
        "login": "Accedi",
        "register": "Registrati",
        "email": "Email",
        "password": "Password",
        "forgot_password": "Password dimenticata?",
        "new_to": "Nuovo su SN Food?",
        "already_have": "Hai già un account?",
        "first_name": "Nome",
        "last_name": "Cognome",
        "company_name": "Nome azienda",
        "vat_number": "Partita IVA",
        "billing_address": "Indirizzo di fatturazione",
        "address": "Indirizzo",
        "city": "Città",
        "country": "Paese",
        "postal_code": "CAP",
        "sdi_pec": "Codice SDI o PEC",
        "phone": "Numero di telefono",
        "account": "Account"
      },
      "company": {
        "hero": {
          "title_line1": "Distributore di",
          "title_line2": "prodotti alimentari africani e asiatici",
          "text": "Con sede a Bruay-sur-l’Escaut, SN Food Distribution supporta ristoranti, negozi specializzati e rivenditori alimentari con una selezione affidabile di prodotti autentici.",
          "cta": "IL CATALOGO"
        },
        "history": {
          "title": "Storia dell'azienda",
          "p1": "SN Food Distribution è nata per soddisfare la crescente domanda di prodotti alimentari africani e asiatici nella regione Hauts-de-France.",
          "p2": "Con sede a Bruay-sur-l’Escaut, l'azienda è cresciuta ampliando l'assortimento e rafforzando la rete di fornitori internazionali.",
          "p3": "Oggi SN Food Distribution è un partner affidabile per ristoranti, negozi specializzati e rivenditori alimentari."
        },
        "customers_suppliers": {
          "customers_title": "Clienti",
          "customers_text": "SN Food Distribution è un partner di fiducia per ristoranti africani e asiatici, negozi etnici, supermercati specializzati, oltre a grossisti e rivenditori. Offriamo un'ampia gamma di prodotti autentici con attenzione a qualità e affidabilità.",
          "suppliers_title": "Fornitori",
          "suppliers_text": "I nostri prodotti sono importati dall'Africa occidentale, Africa centrale, Sud-Est asiatico e Medio Oriente tramite partner certificati riconosciuti per la qualità. Manteniamo forti relazioni con i fornitori per garantire stock costante e disponibilità rapida.",
          "learn_more": "Scopri di più"
        },
        "strengths": {
          "aria": "I nostri punti di forza",
          "title": "I nostri punti di forza",
          "sub": "La qualità al centro del nostro impegno",
          "cta": "Richiedi catalogo",
          "text": "Grazie a una solida rete di fornitori internazionali, SN Food Distribution amplia continuamente la gamma di prodotti africani e asiatici. Supportiamo i professionisti con un'offerta affidabile, disponibilità costante e un servizio orientato alla soddisfazione nel lungo periodo.",
          "card1": "Approvvigionamento costante tramite partner internazionali di fiducia",
          "card2": "Una selezione curata per ristoranti, negozi specializzati e rivenditori",
          "card3": "Un partner affidabile negli Hauts-de-France, con sede a Bruay-sur-l’Escaut"
        },
        "logistics": {
          "aria": "Area commerciale e logistica",
          "title_line1": "Area commerciale e",
          "title_line2": "logistica",
          "p1": "Il nostro magazzino principale si trova in 262 rue des Bouleaux – Bloc 5 & 6, 59860 Bruay-sur-l’Escaut, con un'area di stoccaggio di circa 200 m². La struttura dispone di zone dedicate per prodotti secchi, freschi e surgelati, incluse celle frigorifere.",
          "p2": "Il nostro team di 5-10 professionisti garantisce una gestione efficiente degli ordini e delle operazioni. Disponiamo di una flotta di 3-5 veicoli, inclusi camion refrigerati, per rispettare la catena del freddo.",
          "p3": "Ci impegniamo a consegnare in modo rapido e affidabile entro 24-48 ore in base alla zona. Il nostro servizio clienti reattivo è sempre pronto a gestire richieste urgenti e garantire la soddisfazione."
        },
        "brands": {
          "aria": "Tutti i nostri marchi",
          "title": "Tutti i nostri marchi",
          "see_all": "Vedi tutti",
          "sub": "SN Food Distribution lavora con un'ampia gamma di marchi internazionali, portandoti sapori autentici dall'Africa e dall'Asia. Selezioniamo solo partner certificati per garantire la migliore qualità."
        },
        "request_info": {
          "aria": "Richiedi informazioni",
          "title": "Richiedi informazioni",
          "text": "SN Food Distribution è a tua disposizione: contattaci oggi per informazioni sui nostri prodotti e servizi.",
          "cta": "CONTATTACI"
        }
      },
      "team": {
        "hero": {
          "title": "Incontra il nostro team di appassionati"
        },
        "values": {
          "title": "Valori aziendali",
          "sub": "Qualità, Affidabilità e Rispetto",
          "p1": "In SN Food Distribution mettiamo qualità, affidabilità e rispetto al centro del nostro lavoro. Coltiviamo un ambiente dinamico e collaborativo in cui ogni membro del team contribuisce attivamente alla soddisfazione dei nostri clienti.",
          "p2": "Il nostro team vanta oltre 15 anni di esperienza combinata nel settore import-export e distribuzione alimentare, garantendo eccellenza in ogni ordine.",
          "image_alt": "I nostri valori in azione"
        },
        "grid": {
          "title": "Conosci il team.",
          "empty": "Nessun membro trovato per questo reparto."
        },
        "departments": {
          "direction": "DIREZIONE",
          "sales": "REPARTO VENDITE",
          "purchasing": "ACQUISTI & FORNITURE",
          "logistics": "LOGISTICA & MAGAZZINO",
          "accounting": "CONTABILITÀ & AMMINISTRAZIONE"
        },
        "roles": {
          "director": "Direttore"
        }
      },
      "customers": {
        "hero": {
          "title": "La nostra missione",
          "text": "Fornire ai professionisti un'ampia gamma di prodotti africani e asiatici di alta qualità, supportata da un servizio rapido, affidabile e competitivo.",
          "cta": "IL CATALOGO"
        },
        "stats": {
          "title": "Statistiche chiave",
          "sub": "Eccellenza nella distribuzione negli Hauts-de-France",
          "p1": "Con sede a Bruay-sur-l’Escaut, SN Food Distribution opera da un magazzino specializzato di 200 m². Garantiamo consegne entro 24-48 ore, evitando rotture di stock sui prodotti essenziali.",
          "p2": "Il nostro catalogo copre più categorie, inclusi prodotti secchi, freschi e surgelati. Siamo un partner locale affidabile per negozi e ristoranti che cercano sapori autentici africani e asiatici."
        },
        "categories": {
          "title": "Categorie di prodotti",
          "sub": "Un catalogo vario per tutte le esigenze di prodotti etnici",
          "desc": "SN Food Distribution offre un grande catalogo multi-categoria, dai prodotti di base agli ingredienti speciali. Il tuo punto unico per forniture autentiche africane e asiatiche negli Hauts-de-France.",
          "cta": "Richiedi catalogo",
          "items": {
            "dry": {
              "title": "Prodotti secchi",
              "desc": "Riso, farine, spezie autentiche e salse speciali."
            },
            "fresh": {
              "title": "Prodotti freschi",
              "desc": "Ingredienti freschi di qualità da partner affidabili."
            },
            "frozen": {
              "title": "Surgelati",
              "desc": "Ampia gamma di prodotti surgelati mantenuti a temperatura ottimale."
            },
            "drinks": {
              "title": "Bevande esotiche",
              "desc": "Bevande e succhi popolari dall'Africa e dall'Asia."
            },
            "halal": {
              "title": "Certificato Halal",
              "desc": "Una selezione dedicata di prodotti Halal per i tuoi clienti."
            },
            "african": {
              "title": "Specialità africane",
              "desc": "Oli, condimenti e prodotti tradizionali africani."
            }
          }
        }
      },
      "vendors": {
        "hero": {
          "title": "Logistica e innovazione",
          "text": "SN Food Distribution è un partner altamente qualificato per la conservazione e la distribuzione di specialità etniche, con logistica professionale e rigorosi standard qualitativi.",
          "cta": "IL CATALOGO"
        },
        "infrastructure": {
          "title": "Dettagli infrastruttura",
          "sub": "Distribuzione professionale di prodotti alimentari etnici",
          "p1": "SN Food Distribution opera da un magazzino sicuro con zone distinte per prodotti secchi, freschi e surgelati. La struttura è ottimizzata con scaffalature industriali per una gestione efficiente.",
          "p2": "Utilizziamo celle frigorifere per i surgelati e manteniamo elevati standard di qualità. La logistica è supportata da una flotta di veicoli refrigerati per rispettare la catena del freddo.",
          "p3": "Con sede a Bruay-sur-l’Escaut, la nostra infrastruttura è pensata come hub affidabile per i professionisti degli Hauts-de-France, unendo sicurezza ed efficienza operativa."
        },
        "guarantees": {
          "title": "Garanzie di servizio",
          "sub": "Un partner affidabile nel settore all'ingrosso di prodotti africani e asiatici",
          "desc": "SN Food Distribution garantisce consegne entro 24-48 ore in base alla zona. Assicuriamo disponibilità costante dei prodotti principali e gestione rapida degli ordini urgenti.",
          "cta": "Richiedi catalogo",
          "items": {
            "excellence": {
              "title": "Eccellenza operativa",
              "desc": "Rigoroso rispetto degli standard igienici europei e delle procedure HACCP."
            },
            "supply": {
              "title": "Fornitura affidabile",
              "desc": "Stock permanente e disponibilità rapida dei prodotti africani e asiatici principali."
            },
            "partnerships": {
              "title": "Partnership sostenibili",
              "desc": "Relazioni di lungo periodo e vantaggio reciproco con i fornitori."
            },
            "cold_chain": {
              "title": "Integrità della catena del freddo",
              "desc": "Camion refrigerati e celle frigorifere per il rispetto rigoroso delle norme sanitarie."
            },
            "innovation": {
              "title": "Innovazione logistica",
              "desc": "Scaffalature industriali ottimizzate e flotta moderna per una distribuzione superiore."
            },
            "certified": {
              "title": "Prodotti certificati",
              "desc": "Certificazioni Halal e prodotti da partner riconosciuti a livello internazionale."
            }
          }
        }
      },
      "events_page": {
        "title": "Eventi",
        "subtitle": "Scopri cosa succede nel mondo SN Food",
        "go_to": "Vai alla pagina eventi"
      },
      "catalogs_page": {
        "hero_title": "I mille colori del cibo etnico",
        "hero_text": "SN Food Distribution offre un ampio catalogo di prodotti alimentari africani e asiatici per professionisti.",
        "grid_title": "Cataloghi prodotti",
        "items": {
          "complete": "Catalogo completo",
          "fresh": "Fresco",
          "meat": "Carne",
          "drinks": "Bevande",
          "tea": "Tè",
          "dairy": "Latticini",
          "ghee": "Ghee",
          "noodles": "Noodles"
        }
      },
      "brands_page": {
        "hero_title": "Tutti i nostri marchi",
        "hero_text": "SN Food Distribution lavora con decine di marchi internazionali, dai più conosciuti alle specialità locali. Con noi trovi ciò che i tuoi clienti cercano.",
        "popular_title": "Marchi popolari"
      },
      "new_arrivals_page": {
        "hero_title": "Nuovi arrivi",
        "hero_text": "Scopri le ultime aggiunte al nostro catalogo: nuovi prodotti ed esperienze gastronomiche etniche autentiche.",
        "add_to_wishlist": "Aggiungi ai preferiti",
        "add_to_cart": "Aggiungi al carrello",
        "code_prefix": "cod.",
        "categories": {
          "fresh": "Prodotti freschi",
          "flours": "Farine assortite",
          "dairy": "Latticini",
          "condiments": "Condimenti",
          "noodles": "Noodles istantanei"
        }
      },
      "contact_page": {
        "hero": {
          "title": "Contattaci",
          "subtitle": "Grossista di prodotti africani e asiatici con sede a Bruay-sur-l’Escaut. Contatta il nostro team oggi stesso."
        },
        "map_title": "Google Maps",
        "info": {
          "location_title": "La nostra sede",
          "phone_title": "Numero di telefono",
          "phone_line1": "Contattaci per maggiori informazioni",
          "phone_line2": "sui nostri servizi all'ingrosso",
          "email_title": "Indirizzo e-mail",
          "hours_title": "Orari di lavoro",
          "hours_line1": "Lun - Sab: 09:00 - 20:00",
          "hours_line2": "Domenica: Chiuso"
        },
        "form": {
          "title": "Inviaci un messaggio",
          "subtitle": "Compila il modulo qui sotto e ti risponderemo il prima possibile.",
          "full_name": "Nome e cognome",
          "full_name_ph": "Inserisci il tuo nome",
          "email": "Indirizzo e-mail",
          "email_ph": "Inserisci la tua e-mail",
          "subject": "Oggetto",
          "subject_ph": "Di cosa si tratta?",
          "message": "Il tuo messaggio",
          "message_ph": "Come possiamo aiutarti?",
          "submit": "Invia"
        }
      },
      "account_page": {
        "hero_title": "Il mio account",
        "breadcrumb_home": "Home",
        "sidebar": {
          "dashboard": "Dashboard",
          "orders": "Ordini",
          "addresses": "Indirizzi",
          "details": "Dettagli account",
          "logout": "Logout"
        },
        "dashboard": {
          "title": "Dashboard",
          "hello": "Ciao,",
          "member": "Membro SN",
          "desc": "Dal tuo dashboard puoi visualizzare gli ordini recenti, gestire gli indirizzi di spedizione e fatturazione e modificare la password e i dettagli del tuo account."
        },
        "orders": {
          "title": "Ordini recenti",
          "empty": "Non è stato ancora effettuato alcun ordine.",
          "browse": "SFOGLIA I PRODOTTI"
        },
        "addresses": {
          "title": "Indirizzi",
          "desc": "I seguenti indirizzi verranno utilizzati di default al checkout.",
          "billing": "Indirizzo di fatturazione",
          "shipping": "Indirizzo di spedizione",
          "edit": "Modifica",
          "placeholder": "Non hai ancora impostato questo tipo di indirizzo."
        },
        "details": {
          "title": "Dettagli account",
          "first_name": "Nome",
          "last_name": "Cognome",
          "display_name": "Nome visualizzato",
          "display_hint": "Questo sarà il nome visualizzato nella sezione account e nelle recensioni",
          "email": "Indirizzo e-mail",
          "password_change": "Cambio password",
          "current_password": "Password attuale (lascia vuoto per non modificare)",
          "new_password": "Nuova password (lascia vuoto per non modificare)",
          "confirm_new_password": "Conferma nuova password",
          "save_changes": "SALVA MODIFICHE"
        }
      },
      "slider": {
        "prev": "Slide precedente",
        "next": "Slide successiva",
        "select": "Seleziona slide",
        "go_to": "Vai alla slide {{index}}",
        "slide_alt": "Slide hero {{index}}"
      },
      "wishlist_page": {
        "title": "La mia lista dei desideri",
        "item_count": "{{count}} articolo",
        "item_count_plural": "{{count}} articoli",
        "remove": "Rimuovi dalla lista dei desideri",
        "code_prefix": "cod.",
        "add_to_cart": "Aggiungi al carrello",
        "empty": {
          "title": "La tua lista dei desideri è vuota",
          "text": "Salva qui i tuoi prodotti preferiti per acquistarli più tardi.",
          "cta": "Acquista ora"
        }
      },
      "discover": {
        "title": "Il tuo partner nell'eccellenza",
        "subtitle": "SN Food Distribution fornisce prodotti africani e asiatici di qualità superiore direttamente ai professionisti. Eleva il tuo business con sapori autentici e un servizio all'ingrosso affidabile.",
        "cta": "ESPLORA IL CATALOGO"
      },
      "feature_strip": {
        "title": "Vi Portiamo il Gusto di Casa",
        "text": "SN Food Distribution è un'azienda di riferimento per l'importazione di prodotti alimentari etnici, soddisfacendo la crescente domanda di prodotti africani e asiatici. Ogni giorno, distribuiamo i migliori prodotti da tutto il mondo a negozi e grossisti, con un servizio di consegna affidabile.",
        "company": "Azienda",
        "history": "La Nostra Storia",
        "brand_highlight": "Distributore di fiducia per professionisti della ristorazione e negozi di alimentari specializzati.",
        "leader_title": "Leader nella distribuzione di prodotti etnici",
        "leader_text": "Gestione del magazzino ottimizzata e una moderna flotta di veicoli. Prodotti sempre disponibili e consegna affidabile in tutta la regione.",
        "stats": {
          "storage": "200 m2 di Magazzino",
          "storage_text": "Magazzino principale situato a Bruay-sur-l'Escaut, ottimizzato per prodotti secchi, freschi e surgelati.",
          "fleet": "Flotta Moderna",
          "fleet_text": "Una flotta di veicoli commerciali e camion refrigerati per rispettare la catena del freddo.",
          "delivery": "Da 24 a 48 Ore",
          "delivery_text": "Tutti gli ordini vengono elaborati rapidamente per la consegna entro 24-48 ore.",
          "import": "Importazione Internazionale",
          "import_text": "Importiamo prodotti autentici dall'Africa occidentale, dall'Africa centrale, dall'Asia e dal Medio Oriente."
        }
      },
      "values": {
        "title": "I Nostri Valori",
        "sub": "Qualità, Affidabilità e Rispetto",
        "text": "In SN Food Distribution, mettiamo la qualità, l'affidabilità e il rispetto al centro della nostra attività. Coltiviamo un ambiente di lavoro dinamico e collaborativo, dove ogni membro del team contribuisce attivamente alla soddisfazione dei nostri clienti. Il nostro team beneficia di oltre 15 anni di esperienza combinata nel settore dell'import-export e della distribuzione alimentare.",
        "cta": "Scopri il nostro team"
      },
      "export": {
        "title": "Consegniamo ovunque",
        "text": "SN Food Distribution consegna in tutta la regione e oltre. I nostri prodotti sono selezionati per soddisfare le esigenze dei professionisti con una logistica controllata."
      },
      "catalog": {
        "title": "Un ampio catalogo dedicato ai professionisti del settore alimentare",
        "subtitle": "Scopri le nostre categorie più visualizzate e i prodotti di punta, con logistica premium e consegne affidabili.",
        "col_viewed": "Categorie più visualizzate",
        "col_top": "Prodotti di punta",
        "col_delivery": "Consegna in 24-48 ore",
        "pill_fresh_frozen": "Fresco e Surgelato",
        "promo_title": "Più di 5 veicoli per una logistica reattiva",
        "promo_text": "Consegne giornaliere adattate ai requisiti della catena del freddo e alla disponibilità.",
        "promo_link": "Scopri di più",
        "suggest_kicker": "Oggi suggeriamo...",
        "suggest_title": "Prodotti Freschi",
        "suggest_link": "Vai alla categoria"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    supportedLngs: ['en', 'fr', 'it'],
    nonExplicitSupportedLngs: true,
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
