# FinLab Website

Questo repository contiene un semplice sito web statico per l'azienda **FinLab**, produttrice di bancali e casse in legno su misura a Permignano (MC).

Il sito &egrave; realizzato con [Tailwind CSS](https://tailwindcss.com) tramite CDN e pu&ograve; essere modificato rapidamente lavorando sui file HTML.

## Struttura

- `index.html` – homepage con sezione hero, video aziendale e punti di forza.
- `about.html` – storia dell'azienda e filosofia.
- `services.html` – descrizione dei prodotti e della lavorazione.
- `contact.html` – recapiti e form di contatto.
- `assets/img/` – immagini (attualmente sono presenti placeholder da sostituire).
- `assets/video/` – video aziendale (placeholder `placeholder.mp4`).
- `style.css` – piccole personalizzazioni aggiuntive (body beige e testo scuro).

## Personalizzazione

1. **Logo e immagini**
   - Sostituisci `assets/img/placeholder.jpg` con il tuo logo e altre immagini. Mantieni lo stesso nome file oppure aggiorna il percorso nei tag `<img>` e nel CSS.
   - Per cambiare l'immagine di sfondo dell'hero in `index.html`, modifica l'URL nello stile inline del relativo `<section>`.

2. **Video aziendale**
   - Rimpiazza `assets/video/placeholder.mp4` con il tuo video. Assicurati di mantenere l'estensione `.mp4` o aggiorna il tag `<source>` in `index.html`.

3. **Testi**
   - Tutti i testi si trovano direttamente nei file HTML. Apri il file che ti interessa e modifica il contenuto tra i tag.

4. **Contatti**
   - Aggiorna indirizzo, email e telefono in `contact.html` modificando i rispettivi paragrafi.
   - L'iframe della mappa pu&ograve; essere sostituito con il codice fornito da Google Maps o da un altro servizio.

5. **Stile**
   - `style.css` contiene solo poche regole di base. Puoi ampliarlo aggiungendo nuove classi o utilizzando l'utility `@apply` di Tailwind se hai un processo di build dedicato.

## Note

Il sito &egrave; pensato per aziende del settore logistico e **non** include funzionalit&agrave; di e-commerce o autenticazione. Tutto il codice HTML &egrave; commentato per facilitare eventuali modifiche.
