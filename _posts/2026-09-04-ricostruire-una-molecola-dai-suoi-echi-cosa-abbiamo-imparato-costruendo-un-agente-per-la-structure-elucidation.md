---
title: Cosa abbiamo imparato costruendo un agente per la structure elucidation
date: 2026-09-04T00:00:00.000Z
permalink: /blog/agent_structure_elucidation
layout: article
image: /img/Gemini_Generated_Image_9oipl29oipl29oip.jpeg
image_alt: Image generated with AI
author: Carmine Mattia
excerpt: |
  Cosa abbiamo imparato costruendo un agente AI per la structure elucidation tramite NMR? Una riflessione su autonomia, overthinking e su come l'IA stia trasformando la risoluzione di problemi specialistici e la formulazione delle domande scientifiche.
markdown_content: |
  Qualche mese fa abbiamo iniziato a lavorare a un agente AI per la structure elucidation tramite NMR.

  Poi Anthropic ha pubblicato Making Claude a chemist. [1]

  La mia prima reazione è stata di scoraggiamento.

  Stavamo investendo tempo ed energie per capire se un agente potesse affrontare un problema di
  questa complessità e, quasi contemporaneamente, uno dei principali laboratori di AI al mondo pubblicava un lavoro in cui Claude veniva messo alla prova praticamente sullo stesso problema.[2]

  Poi abbiamo iniziato a guardare la coincidenza in modo diverso.

  Nella storia della scienza e della tecnologia capita spesso che idee simili emergano indipendentemente nello stesso periodo. A un certo punto alcune idee diventano semplicemente possibili: gli strumenti sono maturi, i problemi sono lì e persone diverse iniziano a vedere contemporaneamente la stessa opportunità, magari da prospettive differenti.

  Nel nostro caso non stavamo cercando di studiare le capacità dei frontier model. Stavamo cercando di capire se intorno a quelle capacità si potesse costruire qualcosa che funzionasse davvero.

  Superato lo scoraggiamento iniziale, vedere Anthropic esplorare nello stesso momento la stessa possibilità è diventato quindi quasi una conferma: forse quella che stavamo seguendo non era un’idea così campata in aria.

  ## Un problema che sembra fatto per un agente.

  La structure elucidation ha una lunga storia alle spalle: specialisti con decenni di esperienza, software sofisticati e una quantità enorme di ricerca. Per noi, che lavoriamo quotidianamente con l’NMR ma su problemi differenti, era invece un territorio nuovo.

  Quando ci si è presentata l’opportunità concreta di affrontare un problema di questo tipo, la domanda è venuta quasi spontanea:* potremmo provare a risolverlo con un agente?*

  > La structure elucidation è, in fondo, un processo intrinsecamente investigativo.
  > 

  Con l’NMR non osserviamo direttamente la molecola. Cerchiamo di ricostruirla attraverso le tracce che lascia nell’esperimento. Mi piace pensarla, in modo certamente poco rigoroso ma evocativo, come il tentativo di **ricostruire un oggetto dai suoi echi più profondi**.

  Immaginiamo di essere in una stanza completamente buia, con davanti un oggetto che non possiamo vedere né toccare. Possiamo però lanciargli contro una pallina e ascoltare il suono che produce quando lo colpisce.

  Un singolo suono ci direbbe molto poco. Ma ripetendo l’esperimento potremmo iniziare a raccogliere indizi: un suono potrebbe suggerirci qualcosa sul materiale, il modo in cui la pallina rimbalza potrebbe farci intuire la presenza di una superficie piatta o di uno spigolo, risposte diverse potrebbero suggerire che l’oggetto sia composto da parti differenti.

  Nessun indizio, da solo, ci restituirebbe l’oggetto. Ma mettendoli insieme alcune forme diventerebbero progressivamente incompatibili con ciò che osserviamo, mentre altre diventerebbero sempre più plausibili.

  Naturalmente l’NMR non funziona lanciando palline contro le molecole, ma il processo investigativo ha qualcosa di simile.

  Si raccolgono indizi, si interpretano segnali, si costruiscono ipotesi. Le ipotesi vengono confrontate con ciò che osserviamo. Se qualcosa non torna, le modifichiamo, le abbandoniamo o torniamo a interrogarci sui dati di partenza.

  Ricerca, ragionamento, costruzione e verifica di ipotesi. Sembrava, quasi naturalmente, un problema per un agente. Così abbiamo deciso di provare. 

  ## Dare libertà a un agente. Ma non troppa.

  Siamo abituati a pensare agli agenti come sistemi generalisti: gli diamo un obiettivo, degli strumenti e una certa libertà, e ci aspettiamo che trovino autonomamente una strada. 

  **Quando si cerca di costruire qualcosa di specialistico, però, dare libertà è facile. Decidere dove limitarla è molto più difficile.**

  Volevamo che il nostro esperimento partisse il più vicino possibile al dato prodotto dallo strumento. Prima che uno spettro possa essere interpretato, infatti, il segnale acquisito deve attraversare una serie di elaborazioni e bisogna identificare quali parti contengano informazione rilevante.[3]

  Sono passaggi meno affascinanti dell’ipotesi finale sulla struttura della molecola, ma fondamentali: se qualcosa va storto qui, tutto ciò che viene dopo parte da informazioni sbagliate.
  Un agente sufficientemente capace potrebbe decidere ogni volta da zero come affrontare
  queste operazioni: scegliere algoritmi, scrivere codice, costruirsi il proprio workflow.

  Ma perché dovrebbe reinventarlo ogni volta?
  Per alcuni passaggi ci siamo accorti che era molto più sensato dargli delle ricette. Non procedure completamente rigide, ma metodi già strutturati all’interno dei quali l’agente può ancora scegliere cosa utilizzare e come adattarlo al dato che ha davanti. Se un’elaborazione è già stata applicata, per esempio, può decidere di non ripeterla.

  Mantiene quindi la capacità di decidere senza dover ogni volta riscoprire da zero come si
  processa uno spettro. Il vantaggio è pragmatico: velocità, riproducibilità e minore variabilità tra un’esecuzione e l’altra. Ma da qui nasce una domanda più interessante: **quanta libertà deve avere un agente specializzato?**

  Se gliene lasciamo troppa, può reinventare continuamente procedure già note, con risultati
  diversi e tempi imprevedibili.

  Se codifichiamo tutto, invece, non abbiamo più un agente. Abbiamo costruito una pipeline.
  La parte interessante sembra stare da qualche parte nel mezzo. Ed è proprio cercando questo equilibrio che ci siamo scontrati con uno dei problemi che trovo più interessanti. Le cose difficili per noi possono essere facili per “loro” e viceversa. Guardare uno spettro e capire che qualcosa “non va” può essere quasi immediato per una persona esperta. Formalizzare quel giudizio per un agente è molto meno banale.

  Un sistema capace di costruire e rivedere ipotesi articolate può spendere una quantità sproporzionata di reasoning su decisioni che all’occhio umano sembrano quasi ovvie. Può entrare in loop. Tornare su ipotesi già considerate. Cercare spiegazioni elaborate per qualcosa che potrebbe essere semplicemente un artefatto. Continuare a ragionare quando una persona esperta avrebbe probabilmente già detto: no, qui c’è qualcosa che non va.

  Quella che chiamiamo intuizione dell’esperto potrebbe essere vista anche come una forma estremamente efficiente di compressione dell’esperienza: anni di casi osservati condensati in euristiche che permettono di riconoscere in pochi secondi qualcosa che, esplicitato passo dopo passo, richiederebbe un processo sorprendentemente complesso. 

  Il parallelismo con i language model è suggestivo. Esiste una relazione profonda tra predizione e compressione: Language Modeling Is Compression mostra come modelli predittivi e sistemi di compressione possano essere letti all’interno di un quadro comune.[4]

  **Non sto dicendo che l’intuizione umana e un LLM funzionino allo stesso modo.** L’analogia,
  però, mi sembra interessante: in entrambi i casi possiamo pensare a una grande quantità di informazione o esperienza che viene condensata in qualcosa capace di guidare una decisione senza dover ricostruire esplicitamente ogni passaggio che l’ha prodotta. Non so quale sia la soluzione al problema dell’overthinking degli agenti. Ed è probabilmente una delle parti che trovo più interessanti da esplorare. 

  ## Non sempre la risposta migliore è una risposta
  Non sempre i dati disponibili permettono di arrivare a una conclusione univoca.

  Un buon risultato non dovrebbe quindi essere semplicemente: “La struttura è questa.” Dovrebbe essere qualcosa di più simile a: questa è l’ipotesi che ritengo più plausibile; queste sono le evidenze che la sostengono; questo è quanto sono sicuro; queste sono le alternative ancora compatibili con i dati; e queste sono le informazioni o gli esperimenti che permetterebbero di distinguerle.

  L’agente può anche arrivare alla conclusione che gli elementi disponibili non siano sufficienti e proporre cosa sarebbe utile fare dopo.

  Per uno specialista può diventare una sorta di sparring partner: qualcuno con cui confrontare un’interpretazione, che costruisce un’ipotesi alternativa o evidenzia un’inconsistenza. Ma c’è anche un’altra possibilità che mi interessa personalmente: io non sono uno specialista di structure elucidation.
  Davanti a un problema del genere, senza uno strumento che mi guidasse, non avrei saputo nemmeno da dove iniziare. Con un agente posso invece entrare nel problema. Posso seguire perché un segnale è
  importante, quali ipotesi ne derivano, perché una possibilità viene scartata e quale
  informazione servirebbe successivamente.

  Questo non mi rende improvvisamente un esperto di structure elucidation. Ed è importante non confondere le due cose. 

  ## Rendere accessibili problemi specialistici
  Forse una delle possibilità dell’AI che mi affascina maggiormente è proprio questa. Non soltanto fare più velocemente qualcosa che sappiamo già fare, ma permetterci di provare ad affrontare problemi che prima non avremmo nemmeno tentato. In un contesto industriale la stessa idea ha implicazioni molto concrete. 

  Le competenze altamente specialistiche sono difficili da trovare e difficili da scalare. Se un agente permette a personale meno specializzato di svolgere una parte di quel lavoro, mantenendo lo specialista nei punti in cui il suo giudizio è realmente necessario, cambia potenzialmente il modo in cui possiamo organizzare molte attività scientifiche e tecniche.

  Ma c’è un problema che non possiamo ignorare.
  Rendere accessibile una competenza non significa automaticamente rendere accessibile la capacità di validarla. Anzi, il non esperto che beneficia maggiormente dell’agente potrebbe essere proprio la persona meno capace di accorgersi di un suo errore sottile.

  In fisica — e, più in generale, nella scienza sperimentale — una misura senza una stima della sua incertezza ha poco significato. Perché dovremmo aspettarci qualcosa di diverso da un agente che sta affrontando un problema scientifico?

  Non basta la risposta. Dobbiamo capire quanto possiamo fidarci della conclusione, quali evidenze la sostengono, quali verifiche sono state fatte e cosa potrebbe ancora smentirla. L’obiettivo non dovrebbe essere far sembrare tutti esperti. Dovrebbe essere abbassare la barriera d’ingresso a problemi specialistici, senza nascondere la differenza tra essere in grado di affrontare un problema ed essere in grado di giudicare con competenza la risposta.

  ## Cosa significa allora costruire un prodotto verticale?
  Questa esperienza ci ha portati anche a chiederci dove stia il valore di un prodotto verticale se i modelli generalisti continueranno a diventare capaci di affrontare task sempre più specialistici.

  Forse non necessariamente nell’avere un modello più intelligente. Potrebbe stare in ciò che costruiamo intorno al modello. Gli strumenti che può utilizzare. Le procedure che non deve reinventare. I vincoli entro cui deve operare. L’accesso ai dati. Le verifiche. E l’interfaccia attraverso cui uno specialista —
  o un non specialista — interagisce con tutto questo.

  Nel software development lo vediamo già: un frontier model può scrivere codice dentro una normale chat. Ma inserire quella capacità in un ambiente che conosce il repository, può modificare file, eseguire codice, usare un terminale e presenta tutto attraverso un’interfaccia pensata per uno sviluppatore cambia radicalmente ciò che possiamo farne.

  > Non è soltanto una questione di rendere il modello “più specializzato”, ma di costruire il contesto in cui una capacità generalista diventa realmente utilizzabile per un lavoro specialistico.

  Credo che qualcosa di analogo possa accadere in molti verticali scientifici e industriali.

  ## E le domande?
  La scienza e il piacere della scoperta sono qualcosa di profondamente umano. Ma lavorare con questi sistemi rende difficile non chiedersi come possa cambiare il modo in cui arriviamo alle risposte. Una delle possibilità che mi affascina maggiormente è la capacità dell’AI di attraversare quantità enormi di conoscenza e mettere in relazione informazioni provenienti da specialità differenti.

  Sono sempre stato affascinato da una visione della conoscenza come qualcosa che emerge anche e soprattutto dalle connessioni: non soltanto accumulare informazioni, ma riuscire a vedere relazioni tra cose che fino a quel momento appartenevano a contesti differenti.[5]

  Gli agenti sono già capaci di consultare letteratura, interrogare database, utilizzare strumenti e analizzare dati. Quello che trovo interessante è capire cosa succederà quando queste capacità saranno abbastanza affidabili da attraversare realmente discipline differenti e lavorare sulle connessioni tra di esse.

  La quantità di conoscenza prodotta è ormai molto più grande di ciò che una singola persona può maneggiare. In questo senso, la possibilità di collegare competenze e informazioni lontane tra loro mi sembra almeno altrettanto interessante della capacità di automatizzare un singolo task. E forse proprio qui il ruolo umano nella scoperta potrebbe diventare ancora più importante.

  Fare le domande giuste è sempre stato parte della scienza. Ma potrebbe diventare una
  parte sempre più predominante del lavoro scientifico.[6] Se gli strumenti diventano progressivamente migliori nel cercare, collegare informazioni, costruire ipotesi e aiutarci a trovare risposte, diventa ancora più importante decidere verso quali problemi dirigere quelle capacità.

  Non tutte le domande possibili meritano necessariamente una risposta. Alcune sono curiosità interessanti; altre aprono nuove prospettive; altre ancora possono avere conseguenze profonde sulla nostra capacità di comprendere o cambiare il mondo. Probabilmente continueremo ad aver bisogno di menti eccezionali proprio per questo: non soltanto per risolvere problemi difficili, ma per riconoscere quali problemi valga la pena formulare e perseguire.

  Gli strumenti con cui cerchiamo le risposte possono cambiare radicalmente. La responsabilità — e forse sempre più il valore — di scegliere le domande potrebbe rimanere una delle parti più profondamente umane della scienza.

  ## Provare
  Quando abbiamo iniziato a lavorare sulla structure elucidation non avevamo una teoria
  sull’AI e sulla scienza da dimostrare. Ci siamo trovati davanti a un problema che non avevamo mai affrontato direttamente.

  La mia prima reazione, a dire il vero, era stata molto meno ambiziosa: non sappiamo farlo. Poi la domanda è cambiata: possiamo provare a farlo con un agente?

  La cosa che trovo più interessante non è tanto poter dire che un agente possa occuparsi di
  structure elucidation. È che un problema altamente specialistico, che poco tempo prima avremmo probabilmente considerato fuori dalla nostra portata, ci sia sembrato improvvisamente abbastanza
  accessibile da provare.

  Non so ancora dove porterà tutto questo.

  Ma guardando quanto rapidamente stanno cambiando gli strumenti a nostra disposizione, è difficile non chiedersi quanti altri problemi scientifici e industriali si trovino oggi esattamente nella stessa situazione. Problemi che fino a ieri non avremmo nemmeno provato ad affrontare. E per i quali oggi potrebbe valere la pena iniziare semplicemente chiedendosi: **possiamo provare?**



  ---
  1. Anthropic, Making Claude a chemist, 5 giugno 2026, https://www.anthropic.com/research/makingclaude-a-chemist
  2. La coincidenza non è perfetta, ed è proprio qui che le due esperienze si differenziano. Nel test di
  inverse prediction Anthropic forniva a Claude la formula molecolare esatta e gli spettri ^1H e ^13C e
  gli chiedeva di proporre strutture candidate; per i target più complessi aggiungeva anche la struttura
  dello starting material. Il loro obiettivo era studiare le capacità di un frontier model. Noi partivamo
  invece da una domanda diversa: cosa succede se costruiamo intorno a queste capacità un agente
  che affronti il processo più a monte, partendo direttamente dal dato sperimentale?
  3. In termini NMR, sto semplificando qui due fasi distinte: il preprocessing, che trasforma e corregge il
  segnale acquisito per ottenere uno spettro interpretabile, e il peak picking, con cui vengono
  identificati i segnali rilevanti nello spettro, sia per esperimenti 1D sia 2D. 
  4. G. Delétang et al., Language Modeling Is Compression, ICLR 2024. Il lavoro mostra una relazione tra
  language modeling e lossless compression. Il parallelismo che faccio qui con l’intuizione dell’esperto
  è un’analogia personale, non una conclusione degli autori. 
  5. Questa fascinazione per la conoscenza che emerge dalle connessioni, per me, viene dalla
  fantascienza. A. E. van Vogt immaginava già in The Voyage of the Space Beagle una disciplina — il
  nexialism, tradotto in italiano come connettivismo — nata proprio dalla necessità di mettere in
  relazione conoscenze diventate sempre più specialistiche e distanti tra loro. È un’idea che mi è
  sempre rimasta impressa e che oggi mi torna inevitabilmente in mente quando penso alle possibilità
  dell’AI. Curiosamente, proprio scrivendo questo articolo ho scoperto anche il connettivismo di George
  Siemens e Stephen Downes, nato molti anni dopo e in tutt’altro ambito, quello dell’apprendimento, ma
  costruito anch’esso intorno all’importanza delle connessioni nella conoscenza. 
  6. L’importanza della formulazione delle domande è naturalmente molto più antica dell’AI. Einstein e
  Infeld scrivevano che «la formulazione di un problema è spesso più essenziale della sua soluzione»,
  perché porre nuove domande e guardare vecchi problemi da una nuova prospettiva richiede
  immaginazione creativa. Albert Einstein & Leopold Infeld, The Evolution of Physics, Simon and
  Schuster, 1942. Testo originale su Internet Archive.
---

