'use client';

import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './privacy.module.css';

export default function PrivacyPage() {
    return (
        <div className={styles.pageContainer}>
            <Navbar />

            <div className={styles.hero}></div>

            <main className={styles.contentWrapper}>
                <section className={styles.section}>
                    <h2>INFORMATIVA PER IL TRATTAMENTO DEI DATI PERSONALI</h2>
                    <p>
                        La presente informativa privacy, resa ai sensi dell'art. 13 del Regolamento generale sulla protezione dei dati UE 2016/679 ("GDPR"), contiene informazioni sul trattamento dei dati personali dell'utente forniti durante la navigazione oppure in fase di compilazione di form presenti all'interno del sito web (di seguito "Sito web") come meglio specificato di seguito.
                    </p>

                    <h3>Il Titolare del trattamento</h3>
                    <p>
                        I dati del Titolare del trattamento nonché i dati di contatto sono specificati all'interno del Sito web.
                    </p>

                    <h3>Dati personali trattati</h3>
                    <h4>a) Dati di navigazione</h4>
                    <p>
                        I sistemi informatici e le procedure software preposte al funzionamento del Sito web possono acquisire, nel corso del loro normale esercizio, alcuni dati personali la cui trasmissione è implicita nell'uso dei protocolli di comunicazione di Internet. Si tratta di informazioni che non sono raccolte per essere associate a interessati identificati, ma che per loro stessa natura potrebbero, attraverso elaborazioni ed associazioni con dati detenuti da terzi, permettere di identificare gli utenti. In questa categoria di dati rientrano gli indirizzi IP o i nomi a dominio dei dispostivi utilizzati dagli utenti che si connettono al Sito web, gli indirizzi in notazione URI (Uniform Resource Identifier) delle risorse richieste, l'orario della richiesta, il metodo utilizzato nel sottoporre la richiesta al server, la dimensione del file ottenuto in risposta, il codice numerico indicante lo stato della risposta data dal server (buon fine, errore, ecc.) ed altri parametri relativi al sistema operativo ed all'ambiente informatico dell'utente.
                    </p>
                    <p>
                        Questi dati vengono utilizzati al solo fine di ricavare informazioni statistiche sull'uso del Sito web e per controllarne il corretto funzionamento, per permettere la corretta erogazione delle varie funzionalità da te richieste, per l'accertamento di eventuali responsabilità in caso di ipotetici reati informatici ai danni del Sito web o di terzi.
                    </p>
                    <p>
                        Con riferimento ai dati personali raccolti tramite cookie, si prega di prendere visione della Cookie Policy.
                    </p>

                    <h4>b) Altri dati volontariamente forniti dall'utente</h4>
                    <p>
                        Il Titolare del trattamento potrà trattare anche ulteriori dati personali quali ad esempio nome, cognome, indirizzo e-mail, numero di telefono, dati di pagamento ed eventuali ulteriori dati spontaneamente conferiti ad esempio durante la compilazione di form presenti nel Sito web.
                    </p>

                    <h3>Finalità e basi giuridiche del trattamento</h3>
                    <p>I dati personali verranno trattati per le seguenti finalità:</p>
                    <ol>
                        <li>consentire la navigazione sul Sito web ed erogare i servizi web e le funzionalità richieste;</li>
                        <li>ove presente, gestire e rispondere alle richieste di informazione/assistenza inviate tramite i canali di contatto disponibili all'interno sul Sito web del Titolare del trattamento (anche gestiti tramite sistemi di intelligenza artificiale quale per esempio il chatbot per rispondere alle richieste e un assistente virtuale che consente la registrazione e trascrizione del contatto telefonico);</li>
                        <li>ove presente, creare una area riservata all'interno del Sito web;</li>
                        <li>ove presente, fornire un servizio tra cui la richiesta di un preventivo, la possibilità di effettuare una prenotazione (gestiti anche tramite sistemi di intelligenza artificiale);</li>
                        <li>ove presente, consentire di finalizzare la procedura di acquisto di prodotti e servizi offerti dal Titolare del trattamento.</li>
                    </ol>
                    <p>
                        La base giuridica delle predette finalità è l'esecuzione di un contratto di cui l'utente è parte o l'esecuzione di misure precontrattuali adottate su sua richiesta. Il conferimento dei dati personali in tali casi è necessario. Il mancato conferimento dei dati potrebbe comportare l'impossibilità di concludere il rapporto contrattuale.
                    </p>

                    <p>I dati personali verranno trattati per ulteriori finalità, quali:</p>
                    <ol start="6">
                        <li>verificare il corretto funzionamento del sito web e dei servizi web e garantire un'adeguata sicurezza del Sito web;</li>
                        <li>ove presente, inviare newsletter/comunicazioni informative relative alle novità e iniziative del servizio offerto dal Sito web;</li>
                        <li>accertare, esercitare e difendere un diritto in sede giudiziaria o in sede stragiudiziale.</li>
                    </ol>
                    <p>
                        La base giuridica dei suddetti trattamenti è il legittimo interesse del Titolare del trattamento. Qualora l'utente volesse esercitare il diritto di opposizione, limitatamente alla finalità n° 7 può utilizzare il link di opt-out che è presente nel footer di ciascuna delle suddette comunicazioni.
                    </p>

                    <p>Infine, i dati personali verranno trattati per le seguenti finalità:</p>
                    <ol start="9">
                        <li>adempiere agli obblighi di legge, regolamentari e a richieste delle autorità competenti.</li>
                    </ol>
                    <p>
                        La base giuridica del trattamento è l'obbligo di legge a cui è soggetto il Titolare del trattamento. Il conferimento dei dati personali per tale finalità è necessario per consentire di adempiere agli obblighi di legge, regolamentari e richieste delle autorità competenti.
                    </p>
                    <p>
                        Inoltre, ove previsto, i dati personali potranno essere trattati anche per la finalità di inviare comunicazioni commerciali, materiale promozionale inerente tutti i servizi e prodotti del Titolare del trattamento. Tali comunicazioni potranno avvenire tramite modalità di contatto automatizzate (e.g. sms ed e-mail).
                    </p>
                    <p>
                        Tale trattamento è basato sul consenso che l'utente potrà revocare in ogni momento. Il conferimento dei dati personali e del relativo consenso è facoltativo. Il mancato conferimento dei dati per tale finalità comporta, tuttavia, l'impossibilità per il Titolare del trattamento di perseguire le predette finalità.
                    </p>

                    <h3>Tempo di conservazione dei dati personali</h3>
                    <p>
                        Il Titolare del trattamento conserva i dati personali per il tempo necessario al conseguimento delle finalità per le quali sono stati raccolti o per qualsiasi altra legittima finalità collegata in conformità al principio di limitazione della conservazione previsto dall'art. 5, comma 1 lett. e) del GDPR. Quando i dati personali sono trattati per due differenti finalità, il Titolare del trattamento conserva tali dati fino a che non cessa la finalità con il termine più lungo e successivamente il Titolare del trattamento provvede ad anonimizzarli, aggregarli o cancellarli.
                    </p>
                    <p>
                        In generale, i dati personali dell'utente trattati per le finalità dalla 1 alla 7 vengono conservati per tutta la durata del rapporto contrattuale, e limitatamente ai dati personali strettamente necessari in linea con il principio di limitazione della conservazione del GDPR per non oltre 10 anni successivi alla cessazione del medesimo, fatti salvi i casi in cui ad esempio la conservazione dei dati per un periodo successivo sia richiesta per eventuali contenziosi, richieste delle autorità competenti o ai sensi della normativa applicabile.
                    </p>
                    <p>
                        I dati trattati per finalità di adempimento di obbligo di legge sono conservati per un periodo pari alla durata prescritta per ciascuna tipologia di dato dalla legge.
                    </p>
                    <p>
                        Nel caso in cui sia necessario trattare i dati per finalità di tutela in giudizio, questi vengono conservati per il tempo in cui eventuali pretese e/o azioni possono essere perseguite per legge, ossia per tutta la durata del precontenzioso e del contenzioso, fino all'esaurimento dei termini di esperibilità delle azioni di impugnazione.
                    </p>
                    <p>
                        I dati trattati per finalità di invio di comunicazioni commerciali, materiale promozionale vengono conservati per 24 mesi dalla data di raccolta del consenso o eventualmente per un periodo più breve nel caso in cui l'utente revochi il consenso.
                    </p>

                    <h3>Categorie di destinatari dei dati</h3>
                    <p>
                        Il Titolare del trattamento può comunicare i dati personali a soggetti esterni che operano in qualità di titolari del trattamento oppure che trattano i dati personali in qualità di responsabili del trattamento. In quest'ultimo caso, il Titolare del trattamento disciplina tali trattamenti mediante un contratto di nomina a responsabile del trattamento ai sensi dell'art. 28 GDPR con il quale conferisce al responsabile del trattamento specifiche istruzioni sul trattamento dei dati personali.
                    </p>
                    <p>I dati personali possono essere comunicati alle seguenti categorie di destinatari, tra cui:</p>
                    <ul>
                        <li>persone, società o studi professionali che prestano attività di supporto, assistenza e/o consulenza in materia ad esempio contabile, amministrativa, legale relativamente alla erogazione dei servizi richiesti, con riferimento a specifiche attività di trattamento;</li>
                        <li>banche e istituti di credito;</li>
                        <li>società terze che forniscono sistemi di intelligenza artificiale utilizzati nell'erogazione dei diversi servizi contenuti all'interno del Sito web;</li>
                        <li>soggetti, enti o autorità a cui la comunicazione dei dati risulti obbligatoria in forza di disposizioni di legge o di ordini delle autorità.</li>
                    </ul>
                    <p>
                        Nel caso in cui l'utente desiderasse ricevere ulteriori informazioni in merito all'elenco dei destinatari, può inviare una richiesta all'indirizzo e-mail del Titolare del trattamento.
                    </p>

                    <h3>Trasferimento dei dati all'estero</h3>
                    <p>
                        Se, per le finalità sopra indicate, il Titolare del trattamento avesse la necessità di trasferire i dati personali fuori dall'Unione Europea in paesi per cui la Commissione europea non abbia emesso una Decisione di Adeguatezza, si impegna ad adottare a garantire livelli di tutela e salvaguardia anche di carattere contrattuale adeguati secondo le norme applicabili, ivi inclusa la stipulazione di clausole contrattuali tipo di cui all'art. 46, par. 2, lett. c) del GDPR, integrate eventualmente da misure supplementari di tipo tecnico, legale e organizzativo necessarie a garantire che il livello di protezione dei dati personali sia equivalente a quello dell'Unione Europea. Nel caso in cui l'utente desiderasse ricevere ulteriori informazioni in merito alle garanzie poste in essere e richiedere una copia delle stesse, può inviare una richiesta all'indirizzo e-mail del Titolare del trattamento.
                    </p>

                    <h3>Diritti dell'interessato</h3>
                    <p>
                        Ai sensi degli artt. 15 - 22 del GDPR l'interessato potrà in qualunque momento esercitare i suoi diritti scrivendo a può inviare una richiesta all'indirizzo e-mail del Titolare del trattamento. In particolare, l'utente potrà accedere ai propri dati personali, richiedere l'accesso, la rettifica e la cancellazione dei dati (per i quali non sussista più alcun presupposto giuridico per il trattamento da parte del Titolare del trattamento) o la limitazione del trattamento che lo riguarda o opporsi al trattamento, salvo l'impossibilità di proseguire il rapporto contrattuale nel caso dei trattamenti e dati a ciò finalizzati e ad eccezione dei dati il cui trattamento potrebbe rendersi necessario per far valere o difendere un diritto in sede giudiziaria o per adempiere ad obblighi di legge. Per modificare o cancellare i soli dati che sono archiviati sui sistemi che erogano il presente Sito web può compilare il form presente al seguente link.
                    </p>
                    <p>L'utente ha altresì la facoltà di presentare reclamo all'Autorità di controllo.</p>

                    <hr className={styles.divider} />

                    <h2>COOKIE POLICY</h2>
                    <p>
                        Questo Sito utilizza cookie tecnici (ovvero cookie necessari), e con il tuo consenso anche cookie analitici e di profilazione, che utilizzeremo noi e terze parti, utili rispettivamente per consentire alcune funzionalità fondamentali per il Sito, per ottenere misurazioni delle perfomance del Sito stesso o per fornirti indicazioni promozionali in linea con i tuoi interessi.
                    </p>
                    <p>
                        Per accettare, rifiutare o selezionale i cookie in base alle finalità, utilizza i comandi presenti nel popup banner per la gestione dei cookie.
                    </p>
                    <p>
                        In particolare, per sapere quali cookie vengono installati tramite il presente sito ed esprimere le tue preferenze a riguardo, seleziona il comando “ “Dettagli” dove è possibile anche visualizzare i singoli cookie rilasciati in ogni categoria. Per selezionare le finalità di tuo interesse utilizza il box riportato nel banner, e clicca su “Personalizza” per confermare le tue preferenze.
                    </p>
                    <p>
                        Le tue preferenze verranno registrate in un’apposita piattaforma di gestione del consenso ai cookie (la "CMP"), sviluppata in conformità ai principi della normativa sul trattamento dei dati personali applicabile secondo le linee guida per consentire all’utente di esercitare le sue scelte in maniera granulare. La CMP consente di prestare o negare il consenso a varie tipologie di cookie, che sono identificate e classificate sulla base delle finalità per le quali i cookie vengono rilasciati e utilizzati, rendendo più semplice ed immediato il loro riconoscimento.
                    </p>
                    <p>
                        Puoi in qualunque momento revocare o modificare il consenso rilasciato, cliccando sulla relativa icona di accesso alla CPM che apparirà sul Sito. Tale icona verrà visualizzata in basso a sinistra, una volta che avrai espresso le tue preferenze tramite il pop up banner visualizzato, nel momento in cui accedi al Sito stesso.
                    </p>
                    <p>I cookies utilizzati in questo Sito rientrano nelle categorie descritte di seguito.</p>

                    <h3>Cosa sono i cookies</h3>
                    <p>
                        I cookies sono piccoli file di testo che vengono automaticamente posizionati sul PC del navigatore all'interno del browser. Essi contengono informazioni di base sulla navigazione in Internet e grazie al browser vengono riconosciuti ogni volta che l'utente visita il sito.
                        Di seguito vengono forniti dettagli sui cookie installati da questo sito e indicazioni su come gestire le preferenze in merito ad essi.
                    </p>

                    <h3>A cosa servono i cookies</h3>
                    <p>
                        I cookie sono utili in quanto consentono di memorizzare le preferenze di navigazione dell’utente e quindi personalizzare il sito, secondo le sue esigenze migliorando le esperienze di navigazione degli utenti. I cookie possono ad esempio rendere più immediato l’utilizzo del Sito e/o abilitare determinate funzionalità. Ad esempio, i cookie possono permettere di evitare di reinserire le stesse informazioni più volte durante la visita. In determinati casi, inoltre, i cookie possono fare in modo che le pubblicità visualizzate online siano più adeguate all’utente o pertinenti ai suoi interessi. Alcuni cookie sono necessari alla corretta erogazione del Sito o utili per una fruizione personalizzata degli stessi; in questo caso, la loro inibizione potrebbe compromettere alcune funzionalità dei Sito. Inoltre, grazie ai cookie, si possono pubblicare sul Sito stesso, direttamente o tramite terzi, inserzioni pubblicitarie in linea con i tuoi interessi, dedotti sulla base delle tue attività online e delle tue abitudini di navigazione.
                    </p>

                    <h3>Quali categorie di cookie sono utilizzate sul Sito</h3>
                    <h4>1 - Cookie tecnici ovvero necessari</h4>
                    <p>
                        I cookie tecnici descritti qui di seguito non richiedono consenso e pertanto vengono installati automaticamente a seguito dell’accesso al sito.
                    </p>
                    <ul>
                        <li>Cookie necessari al funzionamento: cookies che permettono al sito di funzionare correttamente anche consentendo all’utente di avere un’esperienza di navigazione funzionale. Ad esempio, mantengono l'utente collegato durante la navigazione evitando che il sito richieda di collegarsi più volte per accedere alle pagine successive.</li>
                        <li>Cookie Statistici e di Misurazione dell'audience: cookie che aiutano a capire, attraverso dati raccolti in forma anonima e aggregata, come gli utenti interagiscono con il Sito internet fornendo informazioni relative alle sezioni visitate, il tempo trascorso sul sito, eventuali malfunzionamenti.</li>
                    </ul>
                    <p>
                        Per esempio, in alcuni casi i cookie di Google Analytics utilizzati da questo sito, sono stati resi anonimi e quindi sono equivalenti a cookie tecnici.
                    </p>

                    <h4>2 – Cookie Funzionali</h4>
                    <p>
                        In questa categoria rientrano i cookie che permettono di ricordare le preferenze selezionate durante la navigazione, ad esempio, consentono di impostare la lingua. Questi cookie sono rilasciati soltanto su richiesta dell’utente e mediante suo preventivo consenso. L'utente è libero di prestare il proprio consenso all'installazione dei cookie funzionali e revocarlo in qualsiasi momento, tramite la CMP, senza che la possibilità di visitare il Sito e fruire dei suoi contenuti sia compromessa; tuttavia, se non acconsentissi a questi cookie potrebbe essere pregiudicato l’utilizzo di alcune funzionalità.
                        Puoi accedere, in qualunque momento, alla CMP tramite l’icona presente sul Sito, dove troverai il riepilogo dei consensi rilasciati che potrai modificare cliccando sul pulsante “Modifica consenso”; a questo punto si aprirà una schermata che ti permette di modificare le tue preferenze scegliendo le categorie di tuo interesse e tramite il pulsante “Dettagli” puoi conoscere quali cookie funzionali sono rilasciati sul Sito, la loro finalità e la durata. Una volta fatta la tua scelta, per confermarla clicca sul pulsante “Personalizza”.
                    </p>

                    <h4>3 – Cookie Analitici</h4>
                    <p>
                        I cookie di questa categoria vengono utilizzati per raccogliere informazioni statistiche, in forma non aggregata, sull'uso del Sito da parte degli utenti che accedono al Sito stesso e sul modo in cui questi navigano sul Sito.
                        Come previsto dalla normativa applicabile, per l'installazione di cookie analitici di terze parti è richiesto il preventivo consenso dell'utente. Nel caso in cui presti il tuo consenso all'installazione dei cookie analitici, il Titolare terrà traccia di tale consenso attraverso un cookie tecnico specifico. In questo modo, sarà possibile evitare di riproporre il cookie banner durante le future visite al Sito. Puoi accedere, in qualunque momento, alla CMP tramite l’icona presente sul Sito, dove troverai il riepilogo dei consensi rilasciati che potrai modificare cliccando sul pulsante “Modifica consenso”; a questo punto si aprirà una schermata che ti permette di modificare le tue preferenze scegliendo le categorie di tuo interesse e tramite il pulsante “Dettagli” puoi conoscere quali cookie analitici sono rilasciati sul Sito ed ottenere così tutte le informazioni necessarie. Una volta fatta la tua scelta, per confermarla clicca sul pulsante “Personalizza”.
                    </p>

                    <h4>4 – Cookie di Profilazione</h4>
                    <p>
                        I cookie di profilazione vengono utilizzati per raggruppare gli utenti in categorie omogenee in base, ad esempio, alle preferenze dell'utente. Tali cookie possono essere utilizzati, tra l’altro, per inviare messaggi pubblicitari conformi al comportamento dell’utente in rete ed ai suoi interessi di navigazione. In conformità con la normativa applicabile, è necessario il previo consenso degli utenti per l'installazione dei cookie di profilazione. L’utente è libero di prestare il proprio consenso all'installazione dei cookie di profilazione e revocarlo in qualsiasi momento, tramite la CMP senza che la possibilità di visitare il Sito e fruire dei suoi contenuti sia compromessa. Nel caso in cui l’utente presti il suo consenso all'installazione dei cookie di profilazione, il Titolare terrà traccia di tale consenso attraverso un cookie tecnico specifico. In questo modo, sarà possibile evitare di riproporre il cookie banner durante le future visite al Sito.
                        I cookie di profilazione sono installati dal Titolare e da soggetti terzi, che agiscono in qualità di autonomi titolari del trattamento dei dati (cookie di terze parti).
                        Puoi accedere, in qualunque momento, alla CMP tramite l’icona presente sul Sito, dove troverai il riepilogo dei consensi rilasciati che potrai modificare cliccando sul pulsante “Modifica consenso”; a questo punto si aprirà una schermata che ti permette di modificare le tue preferenze scegliendo le categorie di tuo interesse e tramite il pulsante “Dettagli” di ottenere maggiori informazioni sulle terze parti che installano i cookie di profilazione, sui singoli cookie rilasciati e sulla loro durata. Una volta fatta la tua scelta, per confermarla clicca sul pulsante “Personalizza”.
                    </p>

                    <p>
                        Inoltre, accedendo alla pagina <a href="http://www.youronlinechoices.com/it/le-tue-scelte" target="_blank">http://www.youronlinechoices.com/it/le-tue-scelte</a> è possibile informarsi sulla pubblicità comportamentale oltre che disattivare o attivare i cookie delle società elencate che lavorano con i gestori dei siti web per raccogliere e utilizzare informazioni utili alla fruizione della pubblicità.
                    </p>

                    <h3>Ricordati che puoi gestire le tue preferenze sui cookie anche attraverso il browser</h3>
                    <p>
                        Si riportano di seguito istruzioni di maggior dettaglio per la gestione dei cookie da parte dell’utente per i browser più diffusi. I produttori dei browser potrebbero aggiornare o modificare i riferimenti dei link sottostanti di volta in volta, per cui si raccomanda di verificare sempre le istruzioni fornite dai produttori dei browser di navigazione utilizzati per comprendere come impostare i cookie.
                    </p>

                    <ul>
                        <li>
                            <strong>Se si utilizza il browser Edge:</strong>
                            <a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank">Link di supporto</a>
                        </li>
                        <li>
                            <strong>Se si utilizza il browser Firefox:</strong>
                            <ul>
                                <li><a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank">Gestione cookie</a></li>
                                <li><a href="https://support.mozilla.org/it/kb/Impostazioni%20di%20Firefox%20-%20pannello%20Privacy" target="_blank">Impostazioni Privacy</a></li>
                                <li><a href="https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie" target="_blank">Attivare/Disattivare cookie</a></li>
                                <li><a href="https://support.mozilla.org/it/kb/Eliminare%20i%20cookie" target="_blank">Eliminare cookie</a></li>
                                <li><a href="https://support.mozilla.org/it/kb/Bloccare%20i%20cookie" target="_blank">Bloccare cookie</a></li>
                            </ul>
                        </li>
                        <li>
                            <strong>Se si utilizza il browser Safari:</strong>
                            <a href="https://support.apple.com/it-it/guide/deployment/depf7d5714d4/web" target="_blank">Link di supporto</a>
                        </li>
                        <li>
                            <strong>Se si utilizza il browser Google Chrome:</strong>
                            <ul>
                                <li><a href="https://policies.google.com/technologies/cookies?hl=it&gl=it#managing-cookies" target="_blank">Gestione cookie</a></li>
                                <li><a href="https://support.google.com/chrome/answer/95464?hl=it" target="_blank">Navigazione in incognito</a></li>
                                <li><a href="https://support.google.com/chrome/answer/95647?hl=it" target="_blank">Eliminare/Bloccare cookie</a></li>
                            </ul>
                        </li>
                    </ul>

                    <p className={styles.lastUpdate}>Ultimo aggiornamento: 03/12/2025.</p>
                </section>
            </main>

            <Footer />
        </div>
    );
}
