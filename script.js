document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM entièrement chargé et analysé');

    // Fonction de mise à jour du chargement
    function updateLoading() {
        let progress = 0;
        const loadingText = document.getElementById('loading-text');
        const loadingProgress = document.getElementById('loading-progress');
        const loader = document.querySelector('.loader');
        const mainTitle = document.getElementById('main-title');
        const subtitle = document.getElementById('subtitle');

        if (loadingText && loadingProgress && loader && mainTitle && subtitle) {
            function update() {
                progress += 2;
                loadingText.textContent = `Chargement... ${progress}%`;
                loadingProgress.style.width = `${progress}%`;

                if (progress < 100) {
                    setTimeout(update, 30);
                } else {
                    loader.classList.add('hidden');
                    setTimeout(() => {
                        loader.style.display = 'none';
                        mainTitle.style.animationPlayState = 'running';
                        subtitle.style.animationPlayState = 'running';
                    }, 1000);
                }
            }

            update();
        } else {
            console.log('Éléments de chargement non trouvés');
        }
    }

    updateLoading();

    // Gestion du menu déroulant
    const dropdown = document.querySelector('.dropdown');
    if (dropdown) {
        const dropbtn = dropdown.querySelector('.dropbtn');
        const arrow = dropbtn.querySelector('.arrow');
        const dropdownContent = dropdown.querySelector('.dropdown-content');

        if (dropbtn && arrow && dropdownContent) {
            dropbtn.addEventListener('click', () => {
                dropdownContent.classList.toggle('show');
                arrow.classList.toggle('up');
            });

            window.onclick = function(event) {
                if (!event.target.matches('.dropbtn')) {
                    if (dropdownContent.classList.contains('show')) {
                        dropdownContent.classList.remove('show');
                        arrow.classList.remove('up');
                    }
                }
            }
        } else {
            console.log('Éléments du menu déroulant non trouvés');
        }
    }

    // Fonction pour le défilement fluide
    const scrollDownLink = document.querySelector('.scroll-down a');
    if (scrollDownLink) {
        scrollDownLink.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    }

    window.scrollTo(0, 0);
    document.body.style.overflow = 'auto';

    // Gestion des notes de patch
    const patchList = document.querySelector('.patch-list');
    const modal = document.getElementById('modal');
    const modalDetails = document.getElementById('modal-details');
    const closeModal = document.querySelector('.close');

    if (patchList && modal && modalDetails && closeModal) {
        const notes = [
            {
                date: "06 Août 2024",
                title: "Patchnote : 3.1.3",
                description: "Grosse mise à jour du téléphone & Système Samu.",
                details: `
                    <p><span class="underline-green">Maj :</span></p>
                    <ul>
                        <li>Mise à jour du téléphone, design amelioré, optimisation, etc...</li>
                        <li>Mise à jour Agent immobilier.</li>
                        <li>Mise à jour de l'hopital et de tout le systeme de soins ( interface de soin, interface de mort, system de perte de sang, etc...)</li>
                        <li>Mise à jour du job taxi.</li>
                        <li>Mise a jour de mapping divers.</li>
                    </ul>
                `,
                image: "image/patchnote13.jpg",
            },
            {
                date: "04 Août 2024",
                title: "Patchnote : 3.1.2",
                description: "Ajout de mapping illégaux.",
                details: `
                    <p><span class="underline-green">Fix</span></p>
                    <ul>
                        <li>Nous avons fix la plupart des vêtements femme qui avaient des trous.</li>
                        <li>Nous avons fix le sous t-shirt qui apparaissait parfois sur certain vêtements femme.</li>
                        <li>Fix de certains problèmes de duplication dans les restaurants.</li>
                    </ul>
                    <p><span class="underline-green">Modification</span></p>
                    <ul>
                        <li>Nous avons fait en sorte que dans certains véhicules tout le monde puisse attacher des motos ou voitures.</li>
                        <li>Nous avons réglé les braquages maisons et modifié les spawns de certains items.</li>
                        <li>Nous avons ajouter les vêtements, fit-bit et joints que vous pouviez avoir dans certains braquages.</li>
                    </ul>
                    <p><span class="underline-green">Ajouts & Maj</span></p>
                    <ul>
                        <li>Nous avons réduit les dégâts quand vous vous tapez à mains nues.</li>
                        <li>Ajout de mapping illégal.</li>
                        <li>Ajout de véhicules moddés.</li>
                    </ul>
                `,
                image: "image/patchnote12.jpg",
            },
            {
                date: "02 Août 2024",
                title: "Patchnote : 3.1.1",
                description: "Améliorations pour le mécano.",
                details: `
                    <p><span class="underline-green">Méchanic & civil</span></p>
                    <ul>
                    <li>Ajout d'un système pour attacher vos véhicules (moto/voiture) sur le flatbed ainsi que d'autres véhicules à découvrir en RP.</li>
                    </ul>
                    <p><span class="underline-green">Illégal</span></p>
                    <ul>
                        <li>Modification des cambriolages de maison : ajustement du taux de drop, retrait des sandwichs, ajout de nouveaux items.</li>
                        <li>Nous avons réglé les braquages maisons et modifié les spawns de certains items.</li>
                        <li>Nous avons ajouter les vêtements, fit-bit et joints que vous pouviez avoir dans certains braquages.</li>
                    </ul>
                    <p><span class="underline-green">Police</span></p>
                    <ul>
                        <li>Mise à jour des sérigraphies pour n'avoir que celles de la police.</li>
                        <li>Mise à jour de la radio police.</li>
                        <li>Ajout de véhicules moddés.</li>
                    </ul>
                    <p><span class="underline-green">Ajouts & Maj</span></p>
                    <ul>
                        <li>Ajout d'un recycleur en ville où vous pouvez broyer certains items pour en obtenir d'autres pour le craft.</li>
                        <li>Mise à jour du menu admin, désormais plus complet avec plus de logs.</li>
                        <li>Mise à jour de pa-textuyi.</li>

                `,
                image: "image/patchnote11.jpg",
            },
            {
                date: "28 Juillet 2024",
                title: "Patchnote : 3.1.0",
                description: "Ajout des derniers DLC.",
                details: `
                    <p><span class="underline-green">Méchanic</span></p>
                    <ul>
                        <li>Correction des employés 3 et 4 qui ne pouvaient pas custom.</li>
                        <li>Correction des codes promo qui ne s'effaçaient pas.</li>
                        <li>Correction de l'argent qui ne rentrait plus dans le compte société.</li>
                    </ul>
                    <p><span class="underline-green">Mappings</span></p>
                    <ul>
                        <li>Correction de la rivière à un endroit où on marchait dans l'eau.</li>
                        <li>Correction d'occlusion au Moore Club.</li>
                        <li>Nous avons ajouter les vêtements, fit-bit et joints que vous pouviez avoir dans certains braquages.</li>
                    </ul>
                    <p><span class="underline-green">Restaurants</span></p>
                    <ul>
                        <li>Ajout de plateaux pour Burgershot et Atom.</li>
                        <li>Ajout d'un système de facturation pour Burgershot, Atom, Motors, et Pizzeria.</li>
                        <li>Correction de la facturation à distance + ajout de Burgershot.</li>
                    </ul>
                    <p><span class="underline-green">Ajouts</span></p>
                    <ul>
                        <li>Ajout d'un système de musique DJ pour les bars.</li>
                        <li>Ajout d'un système pour les festivals. On peut placer une table de DJ et des enceintes.</li>
                        <li>Ajout d'items vendables au reseller.</li>
                        <li>Ajout de nouveau véhicules des derniers DLC gta.</li>
                        <li>Ajout de reboot automatique à 9:00 et 17:00.</li>
                    </ul>
                     <p><span class="underline-green">Corrections</span></p>
                    <ul>
                        <li>Correction de l'hôpital : on redonne 50% faim/soif au revive.</li>
                        <li>Ajout d'une affiche au casino indiquant l'heure de la prochaine relance de la luckywheel.</li>
                        <li>Correction de l'inventaire pour les coffres de voiture.</li>
                    </ul>
                `,
                image: "image/patchnote10.jpg",
            },
            {
                date: "24 Juillet 2024",
                title: "Patchnote : 3.0.9",
                description: "Très grosse mise à jour de Juillet.",
                details: `
                    <p><span class="underline-green">Fix création/sauvegarde des perso après migration base de données</span></p>
                    <ul>
                        <li>Correction de la création et de la sauvegarde des personnages après la migration de la base de données.</li>
                    </ul>
                    <p><span class="underline-green">Fix notification casino</span></p>
                    <ul>
                        <li>Correction des notifications du casino.</li>
                    </ul>
                    <p><span class="underline-green">Fix ped casino</span></p>
                    <ul>
                        <li>Correction des peds du casino.</li>
                    </ul>
                    <p><span class="underline-green">Fix possibilité de frapper avec des menottes</span></p>
                    <ul>
                        <li>Correction de la possibilité de frapper lorsque les personnages sont menottés.</li>
                    </ul>
                    <p><span class="underline-green">Fix inventaire (vis-à-vis du poids des inventaires)</span></p>
                    <ul>
                        <li>Correction du système d'inventaire concernant le poids des objets.</li>
                    </ul>
                    <p><span class="underline-green">Fix carburant métier post-op</span></p>
                    <ul>
                        <li>Correction du système de carburant pour le métier de post-op.</li>
                    </ul>
                    <p><span class="underline-green">Mise à jour job chasseur</span></p>
                    <ul>
                        <li>Mise à jour du métier de chasseur.</li>
                    </ul>
                    <p><span class="underline-green">Suppression de la clé redondante pour lever les mains</span></p>
                    <ul>
                        <li>Suppression de la clé redondante pour lever les mains.</li>
                    </ul>
                    <p><span class="underline-green">Suppression de la clé redondante pour lever les mains</span></p>
                    <ul>
                        <li>Suppression de la clé redondante pour lever les mains.</li>
                    </ul>
                    <p><span class="underline-green">Fix file d'attente de connexion</span></p>
                    <ul>
                        <li>Correction de la file d'attente de connexion.</li>
                    </ul>
                    <p><span class="underline-green">Fix vol à l'arraché</span></p>
                    <ul>
                        <li>Correction du vol à l'arraché.</li>
                    </ul>
                    <p><span class="underline-green">Fix appel des joueurs via la tablette de police</span></p>
                    <ul>
                        <li>Correction de l'appel des joueurs via la tablette de police</li>
                    </ul>
                    <p><span class="underline-green">Ajout de Receleur</span></p>
                    <ul>
                        <li>Modification du receleur, il avait 4 positions et changer tout les X temps. Nous avons augmenter le temps ou il reste a sa place et mis que 2 positions, plutot que 4.</li>
                    </ul>
                    <p><span class="underline-green">Côté admin</span></p>
                    <ul>
                        <li>Fix réparation des voitures vs carburant.</li>
                        <li>Fix suppression des joueurs.</li>
                        <li>Ajout : fonctionnalité wipe.</li>
                    </ul>                  
                `,
                image: "image/patchnote9.jpg",
            },
            {
                date: "20 Juillet 2024",
                title: "Patchnote : 3.0.8",
                description: "Un appartement ? Pour bientôt !",
                details: `
                    <p><span class="underline-green">Essence</span></p>
                    <ul>
                        <li>Nous avons revue la dépense d'essence a la baisse.</li>
                    </ul>
                    <p><span class="underline-green">Agence immo</span></p>
                    <ul>
                        <li>Nous avons fix des problèmes sur le métier Agence immo.</li>
                        <li>Ajout d'un mapping pour l'agence immo.</li>
                    </ul>
                    <p><span class="underline-green">Burger shot</span></p>
                    <ul>
                        <li>Ajout du Burger shot dans le téléphone.</li>
                    </ul>
                    <p><span class="underline-green">Divers fix</span></p>
                    <ul>
                        <li>Meca motors, nous avons fix le mapping et refait la pièce du bas.</li>
                    </ul>
                `,
                image: "image/patchnote8.jpg",
            },
            {
                date: "19 Juillet 2024",
                title: "Patchnote : 3.0.7",
                description: "Station essences réparées, changements interface.",
                details: `
                    <p><span class="underline-green">Essence</span></p>
                    <ul>
                        <li>FIX : Problème de carburant à la sortie du garage.</li>
                        <li>FIX : Véhicules qui ne pouvaient pas être remplis à la pompe à essence.</li>
                    </ul>
                    <p><span class="underline-green">Divers</span></p>
                    <ul>
                        <li>FIX : Animation de santé qui interrompait les autres animations / démarches</li>
                        <li>FIX : Affichage de la portée de la voix lors du changement de proximité</li>
                        <li>FIX : Conflit entre les raccourcis d'animation et l'inventaire</li>
                        <li>FIX : Affichage de la portée de la voix lors du changement de proximité</li>
                        <li>Amélioration : Augmentation du temps d'affichage des annonces métiers</li>
                    </ul>
                    <p><span class="underline-green">Ajouts & Maj</span></p>
                    <ul>
                        <li>Nous avons réduit les dégâts quand vous vous tapez à mains nues.</li>
                        <li>Ajout de mapping illégal.</li>
                        <li>Ajout de véhicules moddés.</li>
                    </ul>
                `,
                image: "image/patchnote7.jpg",
            },
            {
                date: "17 Juillet 2024",
                title: "Patchnote : 3.0.6",
                description: "Visibilité pour les entreprises.",
                details: `
                    <p><span class="underline-green">Benny's</span></p>
                    <ul>
                        <li>Mise à jour du script, fix pas mal de petit bug.</li>
                    </ul>
                    <p><span class="underline-green">Entreprises</span></p>
                    <ul>
                        <li>Ajout de la possibilité de faire des annonces de job pour tous les membres d'une entreprise.</li>
                        <li>Ajout des société dans le téléphone, si il en manque n'hésité pas à nous faire le retour.</li>
                        <li>Nous avons ajouter les vêtements, fit-bit et joints que vous pouviez avoir dans certains braquages.</li>
                    </ul>
                    <p><span class="underline-green">Divers</span></p>
                    <ul>
                        <li>Fix connectqueue.</li>
                        <li>Mise à jour du mapping barber.</li>
                        <li>Fix de spawn aleatoire : Nous avons tenté un fix, faite nous un retour si vous avez encore des soucis.</li>
                    </ul>
                `,
                image: "image/patchnote6.jpg",
            },
            {
                date: "16 Juillet 2024",
                title: "Patchnote : 3.0.5",
                description: "Très grosse màj globale.",
                details: `
                    <p><span class="underline-green">Police</span></p>
                    <ul>
                        <li>Radar : Ajout d'un radar quand on est en voiture PN, vous pouvez faire un /radar  pour qu'il apparaisse et un /radartablet pour la régler.</li>
                        <li>Véhicules : L'achat de véhicules sérigraphiés se fait au concessionnaire (PDM).</li>
                        <li>FIX : Nous avons corrigé les alertes des braquages de boutique de vêtements et ATM.</li>
                        <li>FIX : Nous avons corrigé les doublons des notifications.</li>
                    </ul>
                    <p><span class="underline-green">Ajout Général</span></p>
                    <ul>
                        <li>Notifications :  Nous avons mis en place tout un système de notification pour les métiers.</li>
                    </ul>
                    <p><span class="underline-green">Bahama & Moore club</span></p>
                    <ul>
                        <li>Portes : Nous avons fait les portes pour le Bahama. Si certaines ne sont pas faites, passez en BDA, nous les ferons directement.</li>
                        <li>Sono : Ajout d'un système de sono, nous l'installons inGame dès ce soir.</li>
                    </ul>
                    <p><span class="underline-green">Pizzeria</span></p>
                    <ul>
                        <li>Portes : Nous avons fait les portes pour le Pizzeria. Si certaines ne sont pas faites, passez en BDA, nous les ferons directement.</li>
                    </ul>
                    <p><span class="underline-green">Mineur</span></p>
                    <ul>
                        <li>Salaire : Nous avons ajusté des prix et des quantité qui n'étaient pas possible de livrer.</li>
                    </ul>
                    <p><span class="underline-green">Taxi</span></p>
                    <ul>
                        <li>Salaire : Nous avons ajusté les prix.</li>
                        <li>Bug visuel : Fix d'un problème où vous ne vous voyiez pas.</li>
                    </ul>
                    <p><span class="underline-green">Casino</span></p>
                    <ul>
                        <li>Gains : Nous avons ajusté les gains du Casino, qui étaient beaucoup trop élevés.</li>
                    </ul>
                    <p><span class="underline-green">Barber</span></p>
                    <ul>
                        <li>Nous avons ajouté plusieurs endroits pour vous couper les cheveux ou refaire votre barbe/maquillage.</li>
                    </ul>
                    <p><span class="underline-green">PDM</span></p>
                    <ul>
                        <li>Bug : Nous avons corriger le problème ou plusieurs véhicules spawner au meme endroit sur le parking.</li>
                    </ul>
                    <p><span class="underline-green">Benny's</span></p>
                    <ul>
                        <li>Ajout : possibilité pour les mécanos de facturer à distance.</li>
                        <li>Ajustements : Prix des réparations modifiés.</li> 
                    </ul>
                    <p><span class="underline-green">Inventaire</span></p>
                    <ul>
                        <li>FIX : Nous avons corrigé les coffres de véhicules et les boîtes à gants.</li>
                    </ul>
                    <p><span class="underline-green">Visuel</span></p>
                    <ul>
                        <li>FIX :Nous avons corrigé l'HUD, qui n'affichait pas correctement les dégâts des véhicules.</li>
                    </ul>
                    <p><span class="underline-green">DIVERS</span></p>
                    <ul>
                        <li>Ajustements : Traductions des configurations de touches, dans le menu paramètre (30%)</li>
                    </ul>
                `,
                image: "image/patchnote5.jpg",
            },
            {
                date: "13 Juillet 2024",
                title: "Patchnote : 3.0.4",
                description: "Nouveau menu Admin & Fix inventaire.",
                details: `
                    <p><span class="underline-green">Ajout :</span></p>
                    <ul>
                        <li>Coffre : Ajout de coffre pour la nourriture société : police, mecano et mairie.</li>
                        <li>Nouveau menu admin : Nouveau menu admin avec plus de possibilité pour les staff.</li>
                    </ul>
                    <p><span class="underline-green">Fix</span></p>
                    <ul>
                        <li>Plusieurs petit fix ont était apporter sur les garages et l'inventaire.</li>
                    </ul>
                `,
                image: "image/patchnote4.jpg",
            },
            {
                date: "12 Juillet 2024",
                title: "Patchnote : 3.0.3",
                description: "Revue de problèmes pour les métiers.",
                details: `
                    <p><span class="underline-green">Fix</span></p>
                    <ul>
                        <li>Casino : Taux de gains a la baisse.</li>
                        <li>Dégât véhicule : Nous avons revues les dégâts des véhicules pour qu'ils s'abiment moins vite après un choc</li>
                        <li>Benny's : Certain grades qui ne pouvaient pas tuning des véhicules à était fix.</li>
                        <li>Braquage de maison : Fix des braquages de maison qui parfoit ne se lancer pas.</li>
                        <li>Burgershot : Ajout du blips du Burgershot</li>
                    </ul>
                `,
                image: "image/patchnote3.jpg",
            },
            {
                date: "11 Juillet 2024",
                title: "Patchnote : 3.0.2",
                description: "Ajouts pour la qualité de jeu.",
                details: `
                    <p><span class="underline-green">Fix de Commande</span></p>
                    <ul>
                        <li>Coffre de voiture et boîte à gant : Correctifs apportés aux problèmes de stockage et de réinitialisation.</li>
                        <li>Superette : Désormais, si vous possédez une superette, vous ne pouvez plus avoir un autre travail Whitelist. Fixation et traduction des items, ajout de nouveaux items comme le téléphone.</li>
                        <li>Casino : Réparation complète de toutes les fonctionnalités du casino.</li>
                    </ul>
                    <p><span class="underline-green">Multiple Fix d'Interface</span></p>
                    <ul>
                        <li>Benny's : Ajout d'un point pour les gros véhicules à l'extérieur du Benny's.</li>
                        <li>Motors : Ajout de coffres et de services ainsi que de coffres pour les employés.</li>
                        <li>Écran noir : Correction des problèmes d'écran noir au chargement.</li>
                    </ul>
                    <p><span class="underline-green">Inventaire</span></p>
                    <ul>
                        <li>Gestion des items : Les items peuvent désormais être déplacés sans risque de perte. Les items peuvent être stackés automatiquement.</li>
                        <li>Ajout de mapping illégal.</li>
                        <li>Ajout de véhicules moddés.</li>
                    </ul>
                    <p><span class="underline-green">Divers</span></p>
                    <ul>
                        <li>Maladies : Réduction du taux de contamination, ajout de descriptions pour les médicaments.</li>
                        <li>Boissons : Augmentation des effets des Coca et autres boissons simples.</li>
                        <li>Problèmes d'envoi d'argent : Résolution des problèmes liés à l'envoi d'argent par téléphone.</li>
                        <li>Nettoyage de personnage : Ajout d'une option dans le menu radial pour nettoyer votre personnage si vous avez un props en main.</li>
                        <li>Dérober un sac : Augmentation du taux de réussite pour dérober un sac.</li>
                        <li>Hôpital : Soins améliorés, vous gagnez désormais de la faim et de la soif lorsque vous êtes soigné. Les soins par les médecins ne réduisent plus votre santé en dessous de 80%.</li>
                        <li>Tablette police : Correction du problème où la tablette restait dans les mains des utilisateurs.</li>
                    </ul>
                `,
                image: "image/patchnote2.jpg",
            },
            {
                date: "09 Juillet 2024",
                title: "Patchnote : 3.0.1",
                description: "Revue des interactions globales.",
                details: `
                    <p><span class="underline-green">PNJ</span></p>
                    <ul>
                        <li>Fix des Pnj de magasins, police avec qui vous pouviez parler.</li>
                    </ul>
                    <p><span class="underline-green">Téléphone</span></p>
                    <ul>
                        <li>Fix de l'envoie d'argent.</li>
                    </ul>
                    <p><span class="underline-green">Salaires</span></p>
                    <ul>
                        <li>Augmentation de certains salaires qui n'etais pas encore calculé.</li>
                    </ul>
                    <p><span class="underline-green">Perms Discord</span></p>
                    <ul>
                        <li>Fix de la connect queue, qui bloquer certaines personnes en cliquant sur connecter et ou il fallait forcer pour que ca passe.</li>
                    </ul>
                     <p><span class="underline-green">Metiers Restaurants</span></p>
                    <ul>
                        <li>Les metiers restaurants ont maintenant tout le systeme pour faire payer les gens.</li>
                    </ul>
                `,
                image: "image/patchnote1.jpg",
            },

        ];

        notes.forEach(note => {
            const patchItem = document.createElement('div');
            patchItem.classList.add('patch-item');

            const patchImage = document.createElement('img');
            patchImage.src = note.image;
            patchItem.appendChild(patchImage);

            const meta = document.createElement('div');
            meta.classList.add('meta');
            meta.innerHTML = `<span>ACTUALITÉS</span><span class="dot"></span><span>${note.date}</span>`;
            patchItem.appendChild(meta);

            const patchTitle = document.createElement('h2');
            patchTitle.textContent = note.title;
            patchItem.appendChild(patchTitle);

            const patchDescription = document.createElement('p');
            patchDescription.textContent = note.description;
            patchItem.appendChild(patchDescription);

            patchItem.addEventListener('click', () => {
                modalDetails.innerHTML = `
                    <div class="modal-background" style="background-image: url('${note.image}');"></div>
                    <img src="${note.image}" class="modal-image" alt="${note.title}">
                    <h2>${note.title}</h2>
                    <p><strong>Date:</strong> ${note.date}</p>
                    <div>${note.details}</div>
                `;
                modal.style.display = 'flex';
                modal.classList.remove('hide');
                modal.classList.add('show');
            });

            patchList.appendChild(patchItem);
        });

        const hideModal = () => {
            modal.classList.remove('show');
            modal.classList.add('hide');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        };

        closeModal.addEventListener('click', hideModal);

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                hideModal();
            }
        });
    } else {
        console.log('Éléments pour la modale non trouvés');
    }

const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const expanded = header.getAttribute('aria-expanded') === 'true' || false;
            const icon = header.querySelector('.icon');

            accordionHeaders.forEach(h => {
                h.setAttribute('aria-expanded', 'false');
                h.nextElementSibling.style.maxHeight = null;
                h.nextElementSibling.style.padding = '0 15px';
                const icon = h.querySelector('.icon');
                if (icon) icon.textContent = '+';
            });

            if (!expanded) {
                header.setAttribute('aria-expanded', 'true');
                header.nextElementSibling.style.maxHeight = header.nextElementSibling.scrollHeight + 'px';
                header.nextElementSibling.style.padding = '15px';
                if (icon) icon.textContent = '-';
            } else {
                if (icon) icon.textContent = '+';
            }
        });
    });

    const backToTopButton = document.getElementById('back-to-top');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
            backToTopButton.style.opacity = '1';
        } else {
            backToTopButton.style.opacity = '0';
            setTimeout(() => {
                backToTopButton.style.display = 'none';
            }, 300);
        }
    });
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.href.includes('#')) return;
            e.preventDefault();
            const targetUrl = this.href;
            document.body.classList.add('fade-out');
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 500);
        });
    });
    document.body.classList.add('fade-in');
});
