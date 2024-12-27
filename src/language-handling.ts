// Define the type for the language data structure
interface NavMenu {
  home: string;
  about: string;
  projects: string;
  contact: string;
}

// Define the interface for the "What I Do" section
interface WhatIDo {
  title: string;
  coding: [string, string];
  design: [string, string];
  sewing: [string, string];
}

// Define the main About interface
interface About {
  philosophy: string[];
  what_i_do: WhatIDo;
  journey: string[];
}

interface ContactList {
  title: string;
  content: string;
}

interface LanguageData {
  navMenu: NavMenu;
  Main: string;
  About: About;
  Contact: ContactList
}



const raw_languages: Record<string, LanguageData> = {
  en: {
    navMenu: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact"
    },
    Main: "it looks like you landed on",
    About: {
      philosophy: ["The Philosophy", "Ever sent an email to the wrong person or accidentally deleted that important file? Us too. But instead of sweating the small stuff, we hit the redo button. At ReCode, we embrace the art of the comeback, turning missteps into masterpieces. Because let’s face it, perfection is overrated and every genius was once a disaster waiting to happen."],
      what_i_do: {
        title: "What I Do",
        coding: ["Coding", "From crafting sleek websites to developing robust applications, our code is as clean as our jokes are bad (we promise, they’re getting better)."],
        design: ["Design", "Whether it's logos that pop or illustrations that tell a story, our designs are a blend of creativity and a hint of mystery—just enough to keep you guessing and engaged."],
        sewing: ["Sewing", "When we’re not tapping away at keyboards or sketching designs, you might find us threading needles and creating something unexpected. Because why limit creativity to the digital realm?"]
      },
      journey: ["The Journey", "ReCode wasn’t built overnight. It’s the culmination of countless retries, late-night brainstorming sessions, and the unwavering belief that every mistake is a lesson in disguise",
        "Take, for example, the time I decided to sew a hoodie for my cousin. Ambitious and full of enthusiasm, I dove right in—only to realize I had stitched the hood incorrectly, resulting in her face being half-covered by fabric. What followed was a two-hour unpicking marathon, filled with swearing at stubborn threads and a newfound respect for sewing instructions. But did I make the same mistake again? No way! Instead, I learned the importance of patience, precision, and the beauty of embracing imperfections. This experience embodies the ReCode spirit: turning a misstep into a masterpiece.",
        "Our portfolio is a testament to resilience, creativity, and the endless pursuit of improvement. Every project you see here has its own story of trial, error, and triumph."
      ]
    },
    Contact: {
      title: "Get in Touch",
      content: "Why should you even reach out? I'm a great listener, I promise. Whether you have a project in mind, a question, or just want to chat, I'm all ears"
    }
  },
  fr: {
    navMenu: {
      home: "Accueil",
      about: "À propos",
      projects: "Projets",
      contact: "Contact"
    },
    Main: "il semble que vous ayez atterri sur",
    About: {
      philosophy: [
        "La Philosophie",
        "Vous avez déjà envoyé un e-mail à la mauvaise personne ou accidentellement supprimé un fichier important ? Nous aussi. Mais au lieu de stresser pour les petites choses, nous appuyons sur le bouton **re**faire. Chez ReCode, nous adoptons l'art du retour en force, transformant les faux pas en chefs-d'œuvre. Parce qu'avouons-le, la perfection est surfacturée et chaque génie a été un désastre en devenir."
      ],
      what_i_do: {
        title: "Ce Que Je Fais",
        coding: [
          "Programmation",
          "De la création de sites web élégants au développement d'applications robustes, notre code est aussi propre que nos blagues sont mauvaises (nous promettons, elles s'améliorent)."
        ],
        design: [
          "Design",
          "Qu'il s'agisse de logos accrocheurs ou d'illustrations qui racontent une histoire, nos designs sont un mélange de créativité et une touche de mystère—assez pour te laisser deviner et engagé."
        ],
        sewing: [
          "Couture",
          "Quand nous ne tapons pas sur les claviers ou ne dessinons pas des designs, tu pourrais nous trouver enfilant des aiguilles et créant quelque chose d'inattendu. Parce que pourquoi limiter la créativité au seul domaine numérique ?"
        ]
      },
      journey: [
        "Le Parcours",
        "ReCode n'a pas été construit du jour au lendemain. C'est le résultat de nombreuses tentatives, de sessions de brainstorming nocturnes et de la croyance inébranlable que chaque erreur est une leçon déguisée.",
        "Prenez par exemple le moment où j'ai décidé de coudre un sweat à capuche pour mon cousin. Ambitieux et plein d'enthousiasme, je me suis lancé — pour réaliser que j'avais mal cousu la capuche, recouvrant ainsi la moitié du visage de mon cousin avec le tissu. Ce qui a suivi, c'est un marathon de deux heures à découdre, ponctué de jurons contre les fils récalcitrants et une nouvelle appréciation pour les instructions de couture. Mais ai-je refait la même erreur ? Absolument pas ! Au lieu de cela, j'ai appris l'importance de la patience, de la précision et la beauté d'embrasser les imperfections. Cette expérience incarne l'esprit ReCode : transformer un faux pas en chef-d'œuvre.",
        "Notre portfolio est un témoignage de résilience, de créativité et de la quête incessante d'amélioration. Chaque projet que vous voyez ici a sa propre histoire d'essais, d'erreurs et de triomphes."
      ]
    },
    Contact: {
      title: "Contactez-moi",
      content: "Pourquoi devriez-vous me contacter ? Je suis un excellent auditeur, je le promets. Que vous ayez un projet en tête, une question, ou que vous vouliez simplement discuter, je suis tout ouïe."
    }
  },
  it: {
    navMenu: {
      home: "Home",
      about: "Chi sono",
      projects: "Progetti",
      contact: "Contatti"
    },
    Main: "sembra che tu sia atterratə su",
    About: {
      philosophy: [
        "La Filosofia",
        "Hai mai inviato un'email alla persona sbagliata o accidentalmente eliminato un file importante? Anche noi. Ma invece di sudare per le piccole cose, premiamo il pulsante di **redo**. In ReCode, abbracciamo l'arte del ritorno, trasformando gli errori in capolavori. Perché diciamocelo, la perfezione è sopravvalutata e ogni genio è stato una volta un disastro in attesa di accadere."
      ],
      what_i_do: {
        title: "Cosa Faccio",
        coding: [
          "Coding",
          "Dalla creazione di siti web eleganti allo sviluppo di applicazioni robuste, il nostro codice è pulito quanto le nostre battute sono brutte (promettiamo, stanno migliorando)."
        ],
        design: [
          "Design",
          "Che si tratti di loghi che risaltano o illustrazioni che raccontano una storia, i nostri design sono un mix di creatività e un tocco di mistero—abbastanza per farti indovinare e rimanere coinvolto."
        ],
        sewing: [
          "Cucito",
          "Quando non siamo impegnati a digitare sulla tastiera o a disegnare, potresti trovarci infilando ago e filo e creando qualcosa di inaspettato. Perché limitare la creatività solo al mondo digitale?"
        ]
      },
      journey: [
        "Il Viaggio",
        "ReCode non è stato costruito da un giorno all'altro. È la culminazione di innumerevoli tentativi, sessioni di brainstorming notturne e la ferma convinzione che ogni errore è una lezione mascherata.",
        "Prendi, per esempio, la volta in cui ho deciso di cucire una felpa per mio cugino. Ambizioso e pieno di entusiasmo, mi sono lanciato subito—solo per rendermi conto di aver cucito erroneamente la cappuccio, coprendo metà del volto con il tessuto. Ciò che è seguito è stato un maratona di due ore a sbrogliare, piena di bestemmie contro i fili ostinati e un nuovo rispetto per le istruzioni di cucito. Ma ho fatto di nuovo lo stesso errore? Assolutamente no! Invece, ho imparato l'importanza della pazienza, della precisione e la bellezza di abbracciare le imperfezioni. Questa esperienza incarna lo spirito di ReCode: trasformare un passo falso in un capolavoro.",
        "Il nostro portfolio è una testimonianza di resilienza, creatività e la continua ricerca del miglioramento. Ogni progetto che vedi qui ha la propria storia di prova, errore e trionfo."
      ]
    },
    Contact: {
      title: "Mettiti in Contatto",
      content: "Perché dovresti contattarmi? Sono un ottimo ascoltatore, lo prometto. Che tu abbia un progetto in mente, una domanda, o semplicemente voglia chiacchierare, sono tutto orecchi."
    }
  },
  es: {
    navMenu: {
      home: "Inicio",
      about: "Quien soy",
      projects: "Proyectos",
      contact: "Contactos"
    },
    Main: "parece que has aterrizado en",
    About: {
      philosophy: [
        "La Filosofía",
        "¿Alguna vez has enviado un correo electrónico a la persona equivocada o has eliminado accidentalmente ese archivo importante? Nosotros también. Pero en lugar de sudar por las pequeñas cosas, presionamos el botón de **re**hacer. En ReCode, abrazamos el arte del regreso, convirtiendo los tropiezos en obras maestras. Porque, seamos honestos, la perfección está sobrevalorada y todo genio alguna vez fue un desastre esperando a suceder."
      ],
      what_i_do: {
        title: "Lo Que Hago",
        coding: [
          "Programación",
          "Desde la creación de sitios web elegantes hasta el desarrollo de aplicaciones robustas, nuestro código es tan limpio como nuestros chistes son malos (prometemos, están mejorando)."
        ],
        design: [
          "Diseño",
          "Ya sea que se trate de logotipos que destacan o ilustraciones que cuentan una historia, nuestros diseños son una mezcla de creatividad y un toque de misterio—suficiente para mantenerte adivinando y comprometido."
        ],
        sewing: [
          "Costura",
          "Cuando no estamos tecleando en los teclados o dibujando diseños, podrías encontrarnos enhebrando agujas y creando algo inesperado. Porque ¿por qué limitar la creatividad solo al ámbito digital?"
        ]
      },
      journey: [
        "El Viaje",
        "ReCode no se construyó de la noche a la mañana. Es la culminación de innumerables reintentos, sesiones de lluvia de ideas nocturnas y la creencia inquebrantable de que cada error es una lección disfrazada.",
        "Tomemos, por ejemplo, la vez que decidí coser una sudadera con capucha para mi prima. Ambicioso y lleno de entusiasmo, me lancé de lleno—solo para darme cuenta de que había cosido la capucha incorrectamente, resultando en que su cara estuviera medio cubierta por la tela. Lo que siguió fue un maratón de dos horas deshaciendo costuras, lleno de maldiciones hacia hilos obstinados y un nuevo respeto por las instrucciones de costura. ¿Pero volví a cometer el mismo error? ¡De ninguna manera! En su lugar, aprendí la importancia de la paciencia, la precisión y la belleza de abrazar las imperfecciones. Esta experiencia encarna el espíritu de ReCode: convertir un tropiezo en una obra maestra.",
        "Nuestro portafolio es un testamento a la resiliencia, la creatividad y la búsqueda interminable de la mejora. Cada proyecto que ves aquí tiene su propia historia de prueba, error y triunfo."
      ]
    },
    Contact: {
      title: "Contáctame",
      content: "¿Por qué deberías contactarme? Soy un gran oyente, lo prometo. Ya sea que tengas un proyecto en mente, una pregunta, o simplemente quieras charlar, estoy todo oídos."
    }
  },
  ar: {
    navMenu: {
      home: "الرئيسية",
      about: "من أنا",
      projects: "مشاريع",
      contact: "اتصلوا بي"
    },
    Main: "يبدو أنك هبطت على",
    About: {
      philosophy: [
        "الفلسفة",
        "هل سبق لك أن أرسلت بريدًا إلكترونيًا إلى الشخص الخطأ أو حذفت ملفًا مهمًا عن طريق الخطأ؟ نحن أيضًا. ولكن بدلاً من التعرّض للضغوط بسبب الأشياء الصغيرة، نضغط على زر **إعادة**. في ReCode، نحتضن فن العودة، محولين الأخطاء إلى تحف فنية. لأنه دعنا نواجه الأمر، الكمال مبالغ فيه وكل عبقري كان يومًا ما كارثة تنتظر أن تحدث."
      ],
      what_i_do: {
        title: "ما أفعله",
        coding: [
          "البرمجة",
          "من إنشاء مواقع ويب أنيقة إلى تطوير تطبيقات قوية، يكون كودنا نظيفًا بقدر ما تكون نكاتنا سيئة (نعدك بأنها تتحسن)."
        ],
        design: [
          "التصميم",
          "سواء كانت شعارات تبرز أو رسومات توضيحية تحكي قصة، تصميماتنا مزيج من الإبداع ولمسة من الغموض—بما يكفي لتجعلك تحزر وتظل مشتركًا."
        ],
        sewing: [
          "الخياطة",
          "عندما لا نكون مشغولين بالكتابة على لوحات المفاتيح أو رسم التصاميم، قد تجدنا نخيط الإبر ونبدع شيئًا غير متوقع. لأن لماذا نحد الإبداع بمجال رقمي فقط؟"
        ]
      },
      journey: [
        "الرحلة",
        "لم يتم بناء ReCode بين عشية وضحاها. إنه تتويج لمحاولات لا تحصى، وجلسات عصف ذهني ليلية، والإيمان الثابت بأن كل خطأ هو درس متخفٍ.",
        "خذ على سبيل المثال المرة التي قررت فيها خياطة سترة قطنية لابن عمي. بطموح وحماس، انطلقت على الفور—فقط لأدرك أنني خيطت القلنسوة بشكل غير صحيح، مما أدى إلى تغطية نصف وجهه بالقماش. ما تلا ذلك كان ماراثون فك الخياطة لمدة ساعتين، مليء بالشتم على الخيوط العنيدة واحترام جديد لتعليمات الخياطة. لكن هل ارتكبت نفس الخطأ مرة أخرى؟ بالتأكيد لا! بدلاً من ذلك، تعلمت أهمية الصبر والدقة وجمال احتضان العيوب. تجسد هذه التجربة روح ReCode: تحويل الخطأ إلى تحفة فنية.",
        "محفظتنا هي شهادة على الصمود والإبداع والسعي المستمر للتحسين. كل مشروع تراه هنا له قصته الخاصة من التجربة والخطأ والانتصار."
      ]
    },
    Contact: {
      title: "تواصل معنا",
      content: "لماذا يجب عليك التواصل؟ أنا مستمع ممتاز، أعدك. سواء كان لديك مشروع في ذهنك، أو سؤال، أو كنت ترغب فقط في الدردشة، فأنا هنا للاستماع."
    }
  }
};

export { NavMenu, LanguageData, raw_languages, WhatIDo, About };