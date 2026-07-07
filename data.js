const appData = {
    profiles: [
        { id: "giu", name: "Giu" },
        { id: "ester", name: "Ester" },
        { id: "gabriel", name: "Gabriel" }
    ],
    parks: [
        { id: "home", name: "🏠 Home" },
        { id: "universal", name: "🎬 Universal Studios" },
        { id: "epic", name: "🚀 Epic Universe" },
        { id: "islands", name: "🦖 Islands of Adventure" },
        { id: "magic", name: "🏰 Magic Kingdom" },
        { id: "hollywood", name: "🎥 Hollywood Studios" },
        { id: "animal", name: "🌳 Animal Kingdom" }
    ],
    itinerary: [
        { date: "10/09", title: "Chegada em Orlando ✈️" },
        { date: "11/09", title: "🦁 Disney's Animal Kingdom" },
        { date: "12/09", title: "🎬 Universal Studios + 🧙 Islands of Adventure" },
        { date: "13/09", title: "🌌 Universal Epic Universe" },
        { date: "14/09", title: "🚢 Cruzeiro Disney (Embarque)" },
        { date: "18/09", title: "🏰 Magic Kingdom" },
        { date: "19/09", title: "🛍️ Outlet / Disney Springs & Voo de Retorno" }
    ],
    attractions: [
        {
            id: "u_rockit", park: "universal", name: "Hollywood Rip Ride Rockit", express: true, image: "imagens/Hollywood Rip Ride Rockit.jpeg",
            type: "🎢 Montanha-russa de alta velocidade com subida vertical de 90°.",
            fear: { giu: 10, ester: 8, gabriel: 6 },
            recommendation: {
                giu: "O maior pico de frio na barriga do parque. A subida olhando pro céu dá nervoso, e a primeira queda faz o estômago sair do lugar.",
                ester: "Dá bastante frio na barriga, mas escolher uma música legal ajuda a distrair!",
                gabriel: "Divertida pela trilha sonora, mas chacoalha um pouco."
            }
        },
        {
            id: "u_mummy", park: "universal", name: "Revenge of the Mummy", express: true, image: "",
            type: "=== Montanha-russa no escuro com lançamentos rápidos.",
            fear: { giu: 6, ester: 4, gabriel: 2 },
            recommendation: {
                giu: "Tem um lançamento inicial forte e um trecho curto de ré que dão aquele frio na barriga rápido, mas passageiro.",
                ester: "O escuro dá mais impression de velocidade, mas é super tranquila.",
                gabriel: "Cenários excelentes, o trecho de ré é a melhor parte."
            }
        },
        {
            id: "u_gringotts", park: "universal", name: "Harry Potter & Escape from Gringotts", express: true, image: "",
            type: "=== Simulador 3D híbrido com trilhos.",
            fear: { giu: 4, ester: 3, gabriel: 1 },
            recommendation: {
                giu: "Uma pequena queda com chacoalhão bem no começo dá um leve frio na barriga, mas o resto é puramente projeção 3D.",
                ester: "Muito imersiva, para ir prestando atenção nos detalhes visuais.",
                gabriel: "Fácil e divertida para qualquer fã da saga."
            }
        },
        {
            id: "u_simpsons", park: "universal", name: "The Simpsons Ride", express: true, image: "",
            type: "=== Simulador de movimento com tela gigante côncava.",
            fear: { giu: 5, ester: 5, gabriel: 2 },
            recommendation: {
                giu: "A tela engana muito o cérebro simulando quedas livres bizarras. Dá sensação visual de frio na barriga e tontura.",
                ester: "Chacoalha demais e a simulação de queda me deixa um pouco zonza.",
                gabriel: "Divertido pelo humor, mas o simulador é um pouco antigo."
            }
        },
        {
            id: "u_minions", park: "universal", name: "Despicable Me Minion Mayhem", express: true, image: "",
            type: "=== Simulador de base móvel 3D.",
            fear: { giu: 3, ester: 3, gabriel: 1 },
            recommendation: {
                giu: "Movimentos mais suaves. Tem uma queda virtual logo no início, mas o estômago quase não sente o impacto físico.",
                ester: "Super fofa, movimentos tranquilos de cinema simulator.",
                gabriel: "Puramente infantil, mas bem engraçada."
            }
        },
        {
            id: "u_transformers", park: "universal", name: "TRANSFORMERS: The Ride-3D", express: true, image: "",
            type: "=== Simulador em trilhos com movimentos rápidos.",
            fear: { giu: 3, ester: 2, gabriel: 1 },
            recommendation: {
                giu: "O carrinho gira rápido entre as telas. Há simulações de queda de prédio, mas o frio na barriga físico é mínimo.",
                ester: "Muita ação na tela, mas fisicamente o carrinho só faz giros horizontais.",
                gabriel: "Efeitos de calor e fumaça ótimos durante a simulação."
            }
        },
        {
            id: "u_fallon", park: "universal", name: "Race Through New York Starring Jimmy Fallon", express: true, image: "",
            type: "=== Simulador de teatro voador (estilo cinema).",
            fear: { giu: 2, ester: 2, gabriel: 1 },
            recommendation: {
                giu: "É uma poltrona de cinema grande que se mexe unida. Simula uma corrida com saltos virtuais bem tranquilos.",
                ester: "Sem perigo nenhum, ritmo de passeio de carro virtual.",
                gabriel: "A área de espera com o mascote é melhor que o brinquedo em si."
            }
        },
        {
            id: "u_fast", park: "universal", name: "Fast & Furious - Supercharged", express: true, image: "",
            type: "=== Simulador imersivo dentro de um ônibus.",
            fear: { giu: 1, ester: 1, gabriel: 1 },
            recommendation: {
                giu: "O ônibus apenas treme e finge velocidade usando as telas ao redor. Zero frio na barriga.",
                ester: "Muito morna, dá para ir até descansando.",
                gabriel: "Uma das atrações mais fracas do parque, vá se a fila estiver zerada."
            }
        },
        {
            id: "u_mib", park: "universal", name: "MEN IN BLACK Alien Attack", express: true, image: "",
            type: "=== Carrinho de tiro com giros intensos.",
            fear: { giu: 2, ester: 2, gabriel: 1 },
            recommendation: {
                giu: "Sem quedas. O único momento de surpresa são os giros rápidos em 360° que o carrinho dá se for atingido.",
                ester: "Competitiva e divertida, os giros não dão tontura.",
                gabriel: "Tente acertar o bônus do botão vermelho no final para pontuar mais."
            }
        },
        {
            id: "u_et", park: "universal", name: "E.T. Adventure", express: true, image: "",
            type: "=== Atração escura clássica (bicicletas suspensas).",
            fear: { giu: 1, ester: 1, gabriel: 0 },
            recommendation: {
                giu: "Nostálgico, lento e relaxante. As bicicletas flutuam suavemente pelo cenário. Zero frio na barriga.",
                ester: "Uma gracinha de atração, música calma e cheiro nostálgico de floresta.",
                gabriel: "Um clássico histórico do parque que deve ser respeitado."
            }
        },
        {
            id: "u_minionblast", park: "universal", name: "Villain-Con Minion Blast", express: true, image: "",
            type: "=== Atração de tiro em esteira rolante (de pé).",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Você fica de pé em uma esteira andando devagar segurando uma arma laser. Absolutamente nenhum movimento físico.",
                ester: "Diferente por ser de pé, ótimo para passar o tempo.",
                gabriel: "Bom para quem curte jogos interativos e quer pontuar pelo app."
            }
        },
        {
            id: "u_express", park: "universal", name: "Hogwarts Express", express: true, image: "",
            type: "=== Trem temático que conecta os dois parques.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Um trem real e calmo. A graça está nas telas das janelas mostrando os personagens.",
                ester: "Super relaxante e útil para trocar de parque sem andar.",
                gabriel: "A imersão da cabine é perfeita para os fãs."
            }
        },
        {
            id: "u_animals", park: "universal", name: "Animal Actors on Location!", express: true, image: "",
            type: "=== Show ao vivo com animais adestrados.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Sentar no anfiteatro e assistir a cachorros e pássaros fazendo truques. Ritmo totalmente relaxado.",
                ester: "Muito fofo, ótimo para descansar no meio do dia.",
                gabriel: "Show simples, legal para ver uma vez."
            }
        },
        {
            id: "u_bourne", park: "universal", name: "The Bourne Stuntacular", express: true, image: "",
            type: "=== Show de dublês de ação com efeitos especiais.",
            fear: { giu: 1, ester: 1, gabriel: 0 },
            recommendation: {
                giu: "Você assiste sentado no teatro. Dá aquele susto leve com rajadas de vento e calor das explosões, mas sem impacto físico.",
                ester: "A tecnologia da tela de fundo engana os olhos de tão perfeita. Imperdível!",
                gabriel: "O melhor show de dublês do mundo atualmente, coreografias perfeita."
            }
        },
        {
            id: "u_makeup", park: "universal", name: "Universal Orlando's Horror Make-Up Show", express: true, image: "",
            type: "=== Show de comédia e efeitos de maquiagem de terror.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Um show de teatro muito engraçado explicando os bastidores de filmes de monstros. Sem sustos pesados.",
                ester: "Focado no humor dos apresentadores, não dá medo nenhum.",
                gabriel: "Muito engraçado e interativo com a plateia."
            }
        },
        {
            id: "e_racers", park: "epic", name: "Stardust Racers", express: true, image: "",
            type: "🚀 Montanha-russa de duelo de alta velocidade (lançamento duplo).",
            fear: { giu: 9, ester: 8, gabriel: 6 },
            recommendation: {
                giu: "Rápida, alta e os carrinhos se cruzam no ar. Os lançamentos dão aquele estômago vazio clássico, mas não vira de ponta-cabeça.",
                ester: "Muita adrenalina e velocidade, mas o trilho é incrivelmente suave.",
                gabriel: "Sensacional à noite, o visual dos carrinhos iluminados imita cometas."
            }
        },
        {
            id: "e_dk", park: "epic", name: "Mine-Cart Madness (Donkey Kong)", express: true, image: "",
            type: "🍌 Montanha-russa de projeção com efeito de 'salto' sobre trilhos.",
            fear: { giu: 6, ester: 5, gabriel: 3 },
            recommendation: {
                giu: "O carrinho parece pular buracos no trilho. Dá pequenos frios na barriga pela surpresa visual, mas não tem quedas colossais.",
                ester: "Diferente de tudo que já andei, a ilusão de ótica te deixa em alerta.",
                gabriel: "A engenharia desse brinquedo é genial, o trilho real fica escondido por baixo."
            }
        },
        {
            id: "e_wolf", park: "epic", name: "Curse of the Werewolf", express: true, image: "",
            type: "🐺 Montanha-russa giratória familiar lançada.",
            fear: { giu: 5, ester: 4, gabriel: 2 },
            recommendation: {
                giu: "Ela acelera rápido e o carrinho gira enquanto anda. O frio na barriga vem da mistura de velocidade com a rotação.",
                ester: "Divertida e gostosa, os giros não são tontos como os de xícaras.",
                gabriel: "Visual gótico bem legal, montanha-russa de intensidade média."
            }
        },
        {
            id: "e_frank", park: "epic", name: "Monsters Unchained: Frankenstein Experiment", express: true, image: "",
            type: "🧟 Dark ride de braço robótico de alta movimentação.",
            fear: { giu: 6, ester: 5, gabriel: 3 },
            recommendation: {
                giu: "A garra mecânica te joga para os lados e simula quedas rápidas no escuro enquanto foge dos monstros. Dá frio na barriga físico.",
                ester: "Movimentos intensos e ambiente bem assustador por causa dos monstros clássicos.",
                gabriel: "Tecnologia fantástica, os animatrônicos se movem de forma bizarramente rápida."
            }
        },
        {
            id: "e_ministry", park: "epic", name: "Harry Potter and the Battle at Ministry", express: true, image: "",
            type: "🪄 Dark ride tecnológica de movimentação ágil.",
            fear: { giu: 4, ester: 3, gabriel: 1 },
            recommendation: {
                giu: "Os carrinhos se movem subindo e descendo rápido pelo Ministério. Tem uma cena de queda de elevador simulada que dá um frio na barriga rápido.",
                ester: "Cenários imensos e projeções lindas, o movimento do carrinho acompanha a ação.",
                gabriel: "Imersão total, você se sente dentro do filme do Harry Potter."
            }
        },
        {
            id: "e_mariokart", park: "epic", name: "Mario Kart: Bowser’s Challenge", express: true, image: "",
            type: "🍄 Atração interativa com Realidade Aumentada.",
            fear: { giu: 2, ester: 2, gabriel: 1 },
            recommendation: {
                giu: "Foco total em atirar cascos. Embora o cenário simule velocidade nas pistas, o carrinho físico anda devagar. Zero queda.",
                ester: "Os óculos digitais são super legais, parece que você está no videogame.",
                gabriel: "Viciante para tentar quebrar o recorde de moedas do grupo."
            }
        },
        {
            id: "e_dragonrally", park: "epic", name: "Dragon Racer’s Rally", express: true, image: "",
            type: "🐉 Atração de voo acrobático controlado pelo passageiro.",
            fear: { giu: 7, ester: 6, gabriel: 4 },
            recommendation: {
                giu: "Fica preso em um braço mecânico gigante. Se você operar as asas para fazer o assento girar de ponta-cabeça, a intensidade sobe muito!",
                ester: "Dá para deixar o assento travado se não quiser virar de ponta-cabeça, virando apenas um voo alto.",
                gabriel: "Se você pegar o jeito das asas, dá para girar dezenas de vezes seguidas."
            }
        },
        {
            id: "e_fyredrill", park: "epic", name: "Fyre Drill", express: true, image: "",
            type: "💦 Batalha de barcos com jatos d'água.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Passeio calmo de barco onde o objetivo é atirar água nos alvos. O único risco aqui é sair encharcada, zero frio na barriga.",
                ester: "Vá preparada para se molhar muito se os outros barcos mirarem em você.",
                gabriel: "Brinquedo divertido para dias de muito calor."
            }
        },
        {
            id: "e_gliders", park: "epic", name: "Hiccup’s Wing Gliders", express: true, image: "",
            type: "🍃 Montanha-russa familiar lançada (estilo voo).",
            fear: { giu: 4, ester: 3, gabriel: 2 },
            recommendation: {
                giu: "Simula o voo de um dragão. Tem pequenos lançamentos perto da água, mas é suave, sem quedas abruptas ou loops.",
                ester: "Uma delícia de passeio, dá sensação de liberdade sem dar medo.",
                gabriel: "Excelente visual da área de Como Treinar o Seu Dragão por cima."
            }
        },
        {
            id: "e_carousel", park: "epic", name: "Constellation Carousel", express: true, image: "",
            type: "🌌 Carrossel moderno com constelações giratórias.",
            fear: { giu: 1, ester: 1, gabriel: 0 },
            recommendation: {
                giu: "As criaturas giram em 360° e sobem/descem suavemente. Lindo de morrer, principalmente à noite, e super relaxante.",
                ester: "As músicas de fundo e as luzes deixam o ambiente mágico.",
                gabriel: "Atração puramente estética e calma."
            }
        },
        {
            id: "e_astronomica", park: "epic", name: "Astronomica", express: false, image: "",
            type: "⛲ Área de fontes dançantes e interativas com água.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Não é um brinquedo, mas sim uma praça com jatos d'água iluminados que reagem à música. Feito para caminhar.",
                ester: "Legal para tirar fotos com o visual futurista de Celestial Park.",
                gabriel: "Ponto de passagem estético no centro do parque."
            }
        },
        {
            id: "e_yoshi", park: "epic", name: "Yoshi’s Adventure", express: true, image: "",
            type: "🦖 Passeio elevado e lento em carrinhos do Yoshi.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Passeio infantil e contemplativo para ver a área do Mario por cima. Anda a passos de tartaruga. Zero impacto físico.",
                ester: "Fofíssimo, bom para dar um descanso para as pernas e olhar os detalhes da ilha.",
                gabriel: "Fila costuma ser longa para uma atração puramente infantil."
            }
        },
        {
            id: "e_arcanus", park: "epic", name: "Le Cirque Arcanus", express: true, image: "",
            type: "🎪 Show teatral com acrobatas e criaturas mágicas.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Show baseado no universo de Animais Fantásticos. Você assiste tudo sentado confortavelmente no teatro.",
                ester: "Muito bonito e bem produzido, nível de espetáculo do Cirque du Soleil.",
                gabriel: "Ótima opção para preencher a tarde em um ambiente fechado."
            }
        },
        {
            id: "e_untrainable", park: "epic", name: "The Untrainable Dragon", express: true, image: "",
            type: "🎭 Show musical ao vivo com dragões gigantes voando.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "É lindo, focado na história e nas músicas dos filmes de dragão. Sem sustos ou impactos na plateia.",
                ester: "Os dragões mecânicos gigantes que sobrevoam os assentos são impressionantes.",
                gabriel: "Produção de altíssimo nível da Universal, vale muito a pena conferir."
            }
        },
        {
            id: "e_cinesational", park: "epic", name: "CineSational: A Symphonic Spectacular", express: false, image: "",
            type: "🎆 Show de encerramento com fontes, luzes e fogos.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "O espetáculo noturno no lago central do Epic Universe. Emocionante e visual, assistido de pé ao redor do parque.",
                ester: "As projeções de água com as músicas clássicas de filmes dão arrepios.",
                gabriel: "Melhor jeito de encerrar o dia de parque com chave de ouro."
            }
        },
        {
            id: "i_velocicoaster", park: "islands", name: "Jurassic World VelociCoaster", express: true, image: "",
            type: "🦖 Montanha-russa de lançamento duplo de extrema velocidade com inversões.",
            fear: { giu: 10, ester: 9, gabriel: 7 },
            recommendation: {
                giu: "O ápice do frio na barriga em Orlando. A queda de 47 metros a 80° de inclinação e a sensação de gravidade zero são contínuas e intensas.",
                ester: "Dá muito medo de início, mas o trilho é tão perfeito que não chacoalha nada. Vale a coragem!",
                gabriel: "A melhor montanha-russa do mundo. O looping ao redor da torre é indescritível."
            }
        },
        {
            id: "i_hulk", park: "islands", name: "The Incredible Hulk Coaster", express: true, image: "",
            type: "🤢 Montanha-russa de alta velocidade com lançamento inclinado e 7 loops.",
            fear: { giu: 9, ester: 8, gabriel: 6 },
            recommendation: {
                giu: "O frio na barriga começa com um lançamento surpresa de dentro de um tubo inclinado. Muito intensa na força G física.",
                ester: "Vira de ponta-cabeça o tempo todo e o começo te pega de surpresa. Rosto treme bastante.",
                gabriel: "Clássica e agressiva, dá bastante tontura e pressão na cabeça se for repetida."
            }
        },
        {
            id: "i_hagrid", park: "islands", name: "Hagrid's Magical Creatures Motorbike Adventure", express: false, image: "",
            type: "🏍️ Montanha-russa de lançamento múltiplo com queda vertical de trilho.",
            fear: { giu: 7, ester: 5, gabriel: 3 },
            recommendation: {
                giu: "Os grandes picos de frio na barriga vêm de duas surpresas: um trecho onde o trem anda de ré e uma queda livre onde o trilho inteiro cai alguns metros.",
                ester: "Deliciosa e divertida, se puder escolha ir montada na motocicleta em vez do carrinho lateral.",
                gabriel: "A mais divertida de Orlando. Percurso longo e cheio de acelerações gostosas."
            }
        },
        {
            id: "i_spiderman", park: "islands", name: "The Amazing Adventures of Spider-Man", express: true, image: "",
            type: "🕷️ Simulador 3D em trilhos com efeitos físicos (fogo e água).",
            fear: { giu: 4, ester: 3, gabriel: 1 },
            recommendation: {
                giu: "Uma queda simulada em um arranha-céu dá um frio na barriga visual incrível, mas o carrinho físico quase não cai.",
                ester: "Mesmo antigo, o 3D funciona super bem e as chamas reais dão um calor na cara.",
                gabriel: "Uma das atrações mais revolucionárias da história. Clássico impecável."
            }
        },
        {
            id: "i_forbidden_journey", park: "islands", name: "Harry Potter and the Forbidden Journey", express: true, image: "",
            type: "🧙 Simulador montado em braço robótico cruzando cenários reais.",
            fear: { giu: 5, ester: 5, gabriel: 3 },
            recommendation: {
                giu: "O braço robótico te deita completamente de costas e te joga pra frente rápido. Costuma dar mais enjoo físico do que medo.",
                ester: "Fiquei com tontura por causa dos giros perto da tela, mas andar pelo castelo de Hogwarts na fila compensa tudo.",
                gabriel: "A imersão dentro do castelo é fantástica. Cuidado se tiver propensão a enjoar."
            }
        },
        {
            id: "i_dudley", park: "islands", name: "Dudley Do-Right's Ripsaw Falls", express: true, image: "",
            type: "🛶 Splash de troncos na água com uma queda final enorme.",
            fear: { giu: 6, ester: 6, gabriel: 3 },
            recommendation: {
                giu: "A queda final passa por baixo do trilho de uma montanha-russa e dá muito frio na barriga. Sai complemente encharcado.",
                ester: "Você vai se molhar dos pés à cabeça, não tem escapatória. Leve capa ou vá perto do almoço.",
                gabriel: "Mais intensa e molhada que a média dos brinquedos de água."
            }
        },
        {
            id: "i_popeye", park: "islands", name: "Popeye & Bluto's Bilge-Rat Barges", express: true, image: "",
            type: "🌊 Bóia circular gigante em corredeiras violentas.",
            fear: { giu: 2, ester: 2, gabriel: 1 },
            recommendation: {
                giu: "Zero quedas ou frio na barriga, mas ondas engolem a bóia inteira. É o brinquedo que mais molha em Orlando.",
                ester: "Esqueça a capa de chuva, a água entra pelo assento. Guarde o celular no miolo central vedado.",
                gabriel: "Muito divertido para ir em grupo e rir de quem está tomando a maior ducha."
            }
        },
        {
            id: "i_jurassic_river", park: "islands", name: "Jurassic Park River Adventure", express: true, image: "",
            type: "🦖 Passeio de barco calmo que termina com uma queda de 26 metros.",
            fear: { giu: 6, ester: 5, gabriel: 3 },
            recommendation: {
                giu: "Começa como um safári calmo de dinossauros e termina com um tiranossauro na sua cara e uma queda repentina no escuro.",
                ester: "O susto com o T-Rex seguido da queda dá um baita frio na barriga!",
                gabriel: "Clássico sensacional. Molha na medida certa na primeira fileira."
            }
        },
        {
            id: "i_kong", park: "islands", name: "Skull Island: Reign of Kong", express: true, image: "",
            type: "🦍 Simulador 3D dentro de um caminhão gigante.",
            fear: { giu: 3, ester: 3, gabriel: 1 },
            recommendation: {
                giu: "O caminhão apenas chacoalha de um lado para o outro. Algumas criaturas pulando na janela dão sustos leves.",
                ester: "O animatrônico do King Kong no final é gigante e perfeito, vale muito a pena.",
                gabriel: "As telas laterais são enormes, mas a movimentação física é bem boba."
            }
        },
        {
            id: "i_dr_doom", park: "islands", name: "Doctor Doom's Fearfall", express: true, image: "",
            type: "🚀 Duas torres de queda livre com lançamento vertical para cima.",
            fear: { giu: 8, ester: 8, gabriel: 5 },
            recommendation: {
                giu: "Ao contrário dos outros elevadores, ele te dispara para o céu em 2 segundos. O frio na barriga forte está na subida inicial.",
                ester: "A contagem regressiva dá muita ansiedade. A vista lá de cima do parque é linda antes de cair.",
                gabriel: "A subida inicial é forte, mas a descida é bem controlada por cabos, não dá tanta flutuação."
            }
        },
        {
            id: "i_flight_hippogriff", park: "islands", name: "Flight of the Hippogriff", express: true, image: "",
            type: "🦅 Montanha-russa infantil do Universo Harry Potter.",
            fear: { giu: 2, ester: 2, gabriel: 1 },
            recommendation: {
                giu: "Super curtinha e mansa. Perfeita para quem quer perder o medo de montanha-russa.",
                ester: "Dá para ver a cabana do Hagrid bem de perto durante a subida.",
                gabriel: "Dura menos de 1 minuto, só vale se a fila estiver pequena."
            }
        },
        {
            id: "i_cat_in_the_hat", park: "islands", name: "The Cat in the Hat", express: true, image: "",
            type: "🎩 Passeio em trilhos por cenários giratórios infantis.",
            fear: { giu: 2, ester: 2, gabriel: 1 },
            recommendation: {
                giu: "O carrinho gira de um lado para o outro rápido nas curvas, o que pode incomodar quem tem labirintite.",
                ester: "Super colorido e fofinho, baseado nos livros do Dr. Seuss.",
                gabriel: "Totalmente infantil, os giros horizontais pegam de surpresa."
            }
        },
        {
            id: "i_high_in_the_sky", park: "islands", name: "The High in the Sky Seuss Trolley Train Ride!", express: true, image: "",
            type: "🚝 Trem elevado lento que passa por cima de Seuss Landing.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Passeio super lento e calmo ao ar livre. Ótimo para ver o parque por cima e descansar.",
                ester: "Uma delícia de visual, super colorido e relaxante.",
                gabriel: "Boa atração para fazer uma pausa e tirar fotos panorâmicas."
            }
        },
        {
            id: "i_pteranodon", park: "islands", name: "Pteranodon Flyers", express: false, image: "",
            type: "🦖 Cadeirinha suspensa que voa suavemente sobre a área jurássica.",
            fear: { giu: 1, ester: 1, gabriel: 0 },
            recommendation: {
                giu: "Voo calmo com os pés balançando. Atenção: adultos só podem ir se estiverem acompanhando uma criança!",
                ester: "Pena que tem essa regra da criança, porque o visual do voo parece ótimo.",
                gabriel: "Atração restrita para famílias com crianças pequenas."
            }
        },
        {
            id: "i_poseidon", park: "islands", name: "Oh! The Stories You'll Hear!", express: false, image: "",
            type: "🎭 Show de rua musical com contação de histórias infantis.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Show de rua rápido com os personagens do Dr. Seuss dançando. Sem impacto físico.",
                ester: "Bonitinho para as crianças tirarem foto na calçada.",
                gabriel: "Apenas uma apresentação rápida ao ar livre."
            }
        },
        {
            id: "m_space", park: "magic", name: "Space Mountain", express: true, image: "",
            type: "🚀 Montanha-russa clássica totalmente no escuro.",
            fear: { giu: 6, ester: 5, gabriel: 3 },
            recommendation: {
                giu: "Ela não é rápida nem tem quedas gigantes, mas o fato de ser no breu total faz com que você não veja nada chegando. Fator surpresa total.",
                ester: "O carrinho é de assento individual em fila, balança bastante e o escuro assusta um pouco.",
                gabriel: "Clássico retrô espacial, os trancos nos trilhos antigos são fortes."
            }
        },
        {
            id: "m_tron", park: "magic", name: "TRON Lightcycle / Run", express: true, image: "",
            type: "🏍️ Montanha-russa de lançamento em alta velocidade.",
            fear: { giu: 6, ester: 4, gabriel: 2 },
            recommendation: {
                giu: "O arranque inicial para a área externa dá um frio na barriga ótimo, mas depois ela flui muito suave, sem quedas verticais pesadas.",
                ester: "A posição de ir montada na moto é super diferente e confortável. Uma delícia de velocidade.",
                gabriel: "Visual futurista incrível, mas a pista é um pouco curta, acaba rápido."
            }
        },
        {
            id: "m_tiana", park: "magic", name: "Tiana's Bayou Adventure", express: true, image: "",
            type: "🛶 Passeio de barco na água com uma queda livre grande.",
            fear: { giu: 7, ester: 6, gabriel: 4 },
            recommendation: {
                giu: "O passeio inteiro é calmo e musical, mas termina com uma queda livre clássica de 15 metros. Dá aquele vazio no estômago clássico.",
                ester: "A queda final dá bastante frio na barriga e espirra bastante água na frente.",
                gabriel: "Visual reformulado lindo, vale muito a pena conferir."
            }
        },
        {
            id: "m_seven_dwarfs", park: "magic", name: "Seven Dwarfs Mine Train", express: true, image: "",
            type: "💎 Montanha-russa familiar com carrinhos que balançam para os lados.",
            fear: { giu: 3, ester: 2, gabriel: 1 },
            recommendation: {
                giu: "Super suave. Os carrinhos oscilam um pouco nas curvas, mas as quedas são minúsculas. Ótima para começar.",
                ester: "Uma gracinha! A parte de dentro da mina dos anões é linda demais.",
                gabriel: "Muito bem ambientada, mas a fila costuma ser enorme para um percurso curto."
            }
        },
        {
            id: "m_big_thunder", park: "magic", name: "Big Thunder Mountain Railroad", express: true, image: "",
            type: "🚂 Montanha-russa clássica em ritmo de trem desgovernado.",
            fear: { giu: 4, ester: 4, gabriel: 2 },
            recommendation: {
                giu: "Não tem loops nem quedas grandes, mas faz curvas acentuadas e chacoalha bastante no escuro das cavernas.",
                ester: "Super divertida e clássica, dá aquela sensação gostosa de vento no rosto.",
                gabriel: "O visual do Velho Oeste é muito legal. Tente ir na última fileira para chacoalhar mais."
            }
        },
        {
            id: "m_peter_pan", park: "magic", name: "Peter Pan's Flight", express: true, image: "",
            type: "⛵ Atração clássica suspensa sobre cenários em miniatura.",
            fear: { giu: 1, ester: 1, gabriel: 0 },
            recommendation: {
                giu: "O navio voa preso por trilhos no teto. Movimento lento e puramente contemplativo.",
                ester: "Mágica pura ver a cidade de Londres brilhando lá embaixo.",
                gabriel: "Um clássico obrigatório da Disney, mas use o fura-fila se puder."
            }
        },
        {
            id: "m_haunted_mansion", park: "magic", name: "Haunted Mansion", express: true, image: "",
            type: "👻 Passeio clássico em carrinho por uma mansão assombrada.",
            fear: { giu: 2, ester: 2, gabriel: 1 },
            recommendation: {
                giu: "Ambiente escuro e misterioso, mas o foco é em efeitos visuais divertidos, não em dar sustos.",
                ester: "Super charmosa e cheia de detalhes clássicos. Não dá medo real.",
                gabriel: "A ilusão dos fantasmas dançando no salão principal é genial até hoje."
            }
        },
        {
            id: "m_pirates", park: "magic", name: "Pirates of the Caribbean", express: true, image: "",
            type: "🏴‍☠️ Passeio de barco cênico pelo mundo dos piratas.",
            fear: { giu: 2, ester: 1, gabriel: 1 },
            recommendation: {
                giu: "Tem uma quedinha na completa escuridão logo no início que pega distraídos, mas o resto é super calmo.",
                ester: "Muito legal ver o boneco do Jack Sparrow idêntico ao filme.",
                gabriel: "A música clássica gruda na cabeça. Cenários fantásticos."
            }
        },
        {
            id: "m_buzz", park: "magic", name: "Buzz Lightyear's Space Ranger Spin", express: true, image: "",
            type: "🔫 Atração de tiro laser interativa em formato de jogo.",
            fear: { giu: 1, ester: 1, gabriel: 1 },
            recommendation: {
                giu: "Você controla o giro do próprio carrinho enquanto atira nos alvos. Zero frio na barriga físico.",
                ester: "Divertida para competir quem faz mais pontos na cabine.",
                gabriel: "Dica: procure pelos alvos secretos que valem 100 mil pontos."
            }
        },
        {
            id: "m_jungle_cruise", park: "magic", name: "Jungle Cruise", express: true, image: "",
            type: "🚢 Passeio de barco guiado com piadas e animais animatrônicos.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Totalmente relaxante na água. O destaque fica por conta do capitão contando piadas.",
                ester: "Passeio calmo na floresta artificial, ótimo para ir no meio da tarde.",
                gabriel: "O humor do guia (em inglês) dita se o passeio vai ser excelente ou bobo."
            }
        },
        {
            id: "m_philharmagic", park: "magic", name: "Mickey's PhilharMagic", express: true, image: "",
            type: "🎭 Cinema 3D/4D com efeitos de vento, cheiro e água.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Você assiste sentado no teatro com ar-condicionado. Perfeito para descansar.",
                ester: "Lindo demais ver as cenas musicais clássicas da Disney voando na tela.",
                gabriel: "Ótima projeção e o cheiro de torta de maçã na sala é sensacional."
            }
        },
        {
            id: "m_winnie_pooh", park: "magic", name: "The Many Adventures of Winnie the Pooh", express: true, image: "",
            type: "🍯 Passeio infantil em um pote de mel dinâmico.",
            fear: { giu: 1, ester: 1, gabriel: 0 },
            recommendation: {
                giu: "O carrinho pula imitando o Tigrão em uma cena, mas é um movimento super leve.",
                ester: "Super fofo e colorido para quem gosta do Ursinho Pooh.",
                gabriel: "Atração estritamente infantil, vá se a fila estiver pequena."
            }
        },
        {
            id: "m_it_a_small_world", park: "magic", name: "it's a small world", express: true, image: "",
            type: "🌍 O clássico e histórico passeio de barco cultural.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "O barco flutua em ritmo de tartaruga. Zero impacto físico. Bom para tirar um cochilo.",
                ester: "Uma obra de arte cheia de bonequinhos de vários países, mas a música vicia.",
                gabriel: "História pura da Disney e do próprio Walt. Obrigatório ir pelo menos uma vez."
            }
        },
        {
            id: "m_peoplemover", park: "magic", name: "Tomorrowland Transit Authority PeopleMover", express: false, image: "",
            type: "🚝 Trem elevado que passa por dentro das atrações do futuro.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Passeio super relaxante que passa por dentro da Space Mountain no escuro. Uma delícia.",
                ester: "O vento no rosto e a vista panorâmica da Tomorrowland são maravilhosos.",
                gabriel: "Sem filas e ótimo para descansar as pernas observando o movimento do parque."
            }
        },
        {
            id: "m_monsters_inc", park: "magic", name: "Monsters, Inc. Laugh Floor", express: true, image: "",
            type: "🎤 Show de comédia interativo com telas digitais ao vivo.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Você assiste sentado. Os monstros conversam de verdade com as pessoas da plateia.",
                ester: "Muito divertido, os comediantes improvisam piadas em tempo real.",
                gabriel: "Muito engraçado se você entender inglês e interagir com o show."
            }
        },
        {
            id: "h_rise_resistance", park: "hollywood", name: "Star Wars: Rise of the Resistance", express: true, image: "",
            type: "🛰️ Experiência imersiva colossal de última geração sem trilhos.",
            fear: { giu: 4, ester: 3, gabriel: 1 },
            recommendation: {
                giu: "Tem uma pequena queda de simulador estilo elevador bem rápida no final, mas o impacto físico é bem tranquilo.",
                ester: "A maior imersão que já vi na vida, você realmente se sente capturado pela Primeira Ordem.",
                gabriel: "A melhor atração tecnológica da Disney. Os AT-ATs em tamanho real impressionam."
            }
        },
        {
            id: "h_tower_terror", park: "hollywood", name: "The Twilight Zone Tower of Terror", express: true, image: "",
            type: "🏨 Elevador assombrado com quedas livres verticais aleatórias.",
            fear: { giu: 9, ester: 9, gabriel: 6 },
            recommendation: {
                giu: "Muito frio na barriga! Você perde o contato com o assento várias vezes seguidas nas quedas puxadas para baixo.",
                ester: "O clima de mistério dá muito medo e o estômago sobe na boca a cada queda livre.",
                gabriel: "O sistema de quedas aleatórias controlado por computador é genial. Clássico imbatível."
            }
        },
        {
            id: "h_rockn_roller", park: "hollywood", name: "Rock 'n' Roller Coaster Starring Aerosmith", express: true, image: "",
            type: "🎸 Montanha-russa no escuro com lançamento de 0 a 92 km/h e 3 inversões.",
            fear: { giu: 9, ester: 8, gabriel: 6 },
            recommendation: {
                giu: "O arranque inicial esmaga você contra o banco e dá muito frio na barriga. Depois ela flui no escuro com loops intensos.",
                ester: "O lançamento com música alta do Aerosmith dá muita adrenalina. Uma das mais fortes da Disney.",
                gabriel: "Excelente montanha-russa fechada, o som nos alto-falantes do banco deixa tudo melhor."
            }
        },
        {
            id: "h_slinky_dog", park: "hollywood", name: "Slinky Dog Dash", express: true, image: "",
            type: "🐶 Montanha-russa familiar com lançamento duplo inspirada em Toy Story.",
            fear: { giu: 4, ester: 4, gabriel: 2 },
            recommendation: {
                giu: "Tem um segundo lançamento no meio do percurso super gostoso, com quedas suaves que dão um leve frio na barriga.",
                ester: "Visual do parquinho do Andy muito lindo. É uma delícia de passeio, flui super bem.",
                gabriel: "Excelente engenharia familiar. Vá no final do dia para ver a iluminação acesa."
            }
        },
        {
            id: "h_millennium_falcon", park: "hollywood", name: "Millennium Falcon: Smugglers Run", express: true, image: "",
            type: "🛸 Simulador de voo interativo dentro da cabine da nave.",
            fear: { giu: 3, ester: 3, gabriel: 2 },
            recommendation: {
                giu: "Chacoalha bastante dependendo de quem está pilotando a nave. Pode dar um leve enjoo visual.",
                ester: "Ir como piloto é muito legal, você realmente comanda os movimentos e o salto para o hiperespaço.",
                gabriel: "A experiência varia muito dependendo da sua função na cabine (Piloto, Atirador ou Engenheiro)."
            }
        },
        {
            id: "h_mickey_runaway", park: "hollywood", name: "Mickey & Minnie's Runaway Railway", express: true, image: "",
            type: "🚂 Passeio tecnológico sem trilhos por dentro de um desenho animado.",
            fear: { giu: 2, ester: 1, gabriel: 1 },
            recommendation: {
                giu: "Os carrinhos dançam e se movem de forma imprevisível. Tem uma simulação de queda de cachoeira rápida, mas sem impacto físico.",
                ester: "Cenários incrivelmente coloridos em 2.5D, parece mágica de tão perfeito.",
                gabriel: "A tecnologia de projeção e movimentação dos carrinhos sem trilho é fantástica."
            }
        },
        {
            id: "h_toy_story_mania", park: "hollywood", name: "Toy Story Mania!", express: true, image: "",
            type: "🎯 Jogo de tiro 3D em carrinhos giratórios de alta velocidade.",
            fear: { giu: 2, ester: 2, gabriel: 1 },
            recommendation: {
                giu: "Sem quedas livres, mas o carrinho gira e dá arranques rápidos em 90° entre as telas de pontuação.",
                ester: "Viciante! Você sai com o braço cansado de tanto puxar a cordinha do laser.",
                gabriel: "Dica: foque nos alvos que aparecem no alto das telas para conseguir pontuações gigantes."
            }
        },
        {
            id: "h_star_tours", park: "hollywood", name: "Star Tours – The Adventures Continue", express: true, image: "",
            type: "🚀 Simulador de cabine espacial clássico em 3D.",
            fear: { giu: 4, ester: 4, gabriel: 2 },
            recommendation: {
                giu: "Como a cabine chacoalha muito olhando para a tela 3D, costuma dar mais tontura e enjoo do que frio na barriga.",
                ester: "As missões mudam de ordem a cada passeio, então você nunca sabe qual planeta vai visitar.",
                gabriel: "Simulador clássico de movimento. Um pouco antigo, mas divertido."
            }
        },
        {
            id: "h_indiana_jones", park: "hollywood", name: "Indiana Jones Epic Stunt Spectacular!", express: true, image: "",
            type: "💥 Show de dublês ao vivo com explosões e bastidores de cinema.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Você assiste confortavelmente na arquibancada coberta. Leves sustos com o calor do fogo.",
                ester: "Muito legal ver como os dublês caem de prédios e desviam de pedras gigantes de verdade.",
                gabriel: "Show clássico de coreografia de ação da Disney, vale para descansar no meio do dia."
            }
        },
        {
            id: "h_fantasmic", park: "hollywood", name: "Fantasmic!", express: false, image: "",
            type: "🎆 Espetáculo noturno em anfiteatro com água, luzes, fogos e atores.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "O show mais emocionante de Orlando. Assistido sentado no mega anfiteatro no final da noite.",
                ester: "A trilha sonora clássica e os vilões aparecendo nas telas de água dão muitos arrepios.",
                gabriel: "O melhor encerramento de parque da Disney. Chegue com 45 minutos de antecedência."
            }
        },
        {
            id: "h_muppet_3d", park: "hollywood", name: "Muppet*Vision 3D", express: true, image: "",
            type: "🎭 Cinema 3D clássico com bonecos animatrônicos no teatro.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Sala fechada, ar gelado, perfeito para jogar conversa fora e fugir do sol da tarde.",
                ester: "Humor bem clássico dos Muppets, nostálgico e bonitinho.",
                gabriel: "Os bonecos que aparecem nas sacadas do teatro de verdade são a melhor parte."
            }
        },
        {
            id: "h_frozen_sing_along", park: "hollywood", name: "For the First Time in Forever: A Frozen Sing-Along Celebration", express: true, image: "",
            type: "🎤 Show teatral musical com os historiadores de Arendelle.",
            fear: { id: "giu", fear: 0, ester: 0, gabriel: 0 },
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Focado em cantar as músicas do filme. Clima totalmente relaxante de teatro.",
                ester: "Os narradores são extremamente engraçados e o final com neve caindo na plateia é lindo.",
                gabriel: "Excelente para os fãs da animação e ótimo para descansar com as pernas para o alto."
            }
        },
        {
            id: "h_beauty_beast", park: "hollywood", name: "Beauty and the Beast-Live on Stage", express: true, image: "",
            type: "🎭 Show musical em formato resumido da Broadway.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Sentar no anfiteatro aberto e curtir as músicas clássicas. Ritmo de espetáculo.",
                ester: "Figurinos lindos e coreografias idênticas ao filme, muito emocionante.",
                gabriel: "Produção teatral de alta qualidade, ideal para preencher os horários da tarde."
            }
        },
        {
            id: "h_alien_saucers", park: "hollywood", name: "Alien Swirling Saucers", express: true, image: "",
            type: "🛸 Atração giratória estilo xícara maluca puxada por ETs.",
            fear: { giu: 2, ester: 3, gabriel: 1 },
            recommendation: {
                giu: "O carrinho desliza para os lados mudando de pista rápido. Pode dar um leve enjoo de rotação.",
                ester: "Divertido pelas músicas eletrônicas e pelas guinadas que o carrinho dá nas curvas.",
                gabriel: "Atração de intensidade leve, bom para passar o tempo se a fila estiver menor de 20 minutos."
            }
        },
        {
            id: "h_lightning_mcqueen", park: "hollywood", name: "Lightning McQueen's Racing Academy", express: false, image: "",
            type: "🏎️ Show de projeção envelopada com animatrônico do Relâmpago McQueen.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Você assiste de pé ou sentado ao redor da arena. Sem quedas, puramente visual.",
                ester: "O Relâmpago McQueen no centro do palco se mexe perfeitamente como se fosse real.",
                gabriel: "Rápido e focado nos carros de Cars, ótimo para fotos."
            }
        },
        {
            id: "a_avatar_flight", park: "animal", name: "Avatar Flight of Passage", express: false, image: "",
            type: "🍃 Simulador 4D imersivo em formato de moto voando de Banshee.",
            fear: { giu: 4, ester: 3, gabriel: 2 },
            recommendation: {
                giu: "A sensação visual de voo livre e mergulho em penhascos dá um frio na barriga maravilhoso, mas a moto real só balança suavemente.",
                ester: "O melhor brinquedo de Orlando! Você sente até a respiração do bicho prendendo suas pernas.",
                gabriel: "Tecnologia absurda de imersão. Indispensável ir, mesmo com filas longas."
            }
        },
        {
            id: "a_expedition_everest", park: "animal", name: "Expedition Everest - Legend of the Forbidden Mountain", express: true, image: "",
            type: "🏔️ Montanha-russa em alta velocidade com trecho longo de ré no escuro.",
            fear: { giu: 8, ester: 7, gabriel: 4 },
            recommendation: {
                giu: "O maior frio na barriga do parque está no trecho em que o trem anda para trás em alta velocidade no breu total, puxando bastante força G.",
                ester: "A descida para frente depois de ver o Yeti assusta um pouco, mas é uma montanha-russa deliciosa.",
                gabriel: "Muito divertida, o percurso de ré e a queda externa de 24 metros são espetaculares."
            }
        },
        {
            id: "a_dinosaur", park: "animal", name: "DINOSAUR", express: true, image: "",
            type: "🦖 Jipe todo-terreno rápido em trilhos em floresta escura com dinossauros.",
            fear: { giu: 5, ester: 6, gabriel: 3 },
            recommendation: {
                giu: "O jipe balança e dá solavancos violentos. Dá medo pelas aparições repentinas de predadores gigantes piscando no escuro.",
                ester: "Assustadora pela escuridão e barulhos estridentes dos monstros mecânicos.",
                gabriel: "Movimentação intensa do carrinho sobre os eixos. Clássico com muita ação."
            }
        },
        {
            id: "a_kali_river", park: "animal", name: "Kali River Rapids", express: true, image: "",
            type: "🛶 Bóia circular em corredeiras bravas com uma queda na água.",
            fear: { giu: 4, ester: 4, gabriel: 2 },
            recommendation: {
                giu: "Tem apenas uma queda pequena de 9 metros de costas que dá um friozinho rápido. O maior risco é sair ensopada.",
                ester: "Dá para se molhar muito dependendo de como a boia gira na queda d'água.",
                gabriel: "Boa atração para os dias quentes, mas curta se comparada às da Universal."
            }
        },
        {
            id: "a_safari", park: "animal", name: "Kilimanjaro Safaris", express: true, image: "",
            type: "🦁 Safári real em caminhão aberto por savana artificial imensa.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Passeio totalmente calmo para fotografar animais de verdade. Zero frio na barriga físico.",
                ester: "Lindo demais ver girafas, elefantes e leões soltos pertinho do caminhão. Vá de manhã bem cedo.",
                gabriel: "Experiência sensacional de imersão biológica. Os animais são muito ativos nas primeiras horas."
            }
        },
        {
            id: "a_navi_river", park: "animal", name: "Na'vi River Journey", express: true, image: "",
            type: "🚣 Passeio de barco lento e contemplativo pelo mundo bioluminescente de Pandora.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Barco se move em ritmo relaxante. Bom para olhar as luzes e descansar. Zero impacto.",
                ester: "O animatrônico da xamã no final é a coisa mais realista do mundo. Lindo e calmo.",
                gabriel: "Visualmente deslumbrante, mas extremamente curta. Só vá se a fila estiver razoável."
            }
        },
        {
            id: "a_tough_bug", park: "animal", name: "It's Tough to be a Bug!", express: true, image: "",
            type: "🐜 Cinema 3D/4D localizado dentro do tronco da Árvore da Vida.",
            fear: { giu: 3, ester: 4, gabriel: 1 },
            recommendation: {
                giu: "Efeitos 4D na cadeira simulam insetos picando e andando nas suas costas. Dá aflição e sustos bobos.",
                ester: "O teto enche de fumaça e algumas baratas falsas dão susto no escuro. Muitas crianças choram.",
                gabriel: "Divertido pelos efeitos físicos inesperados nos assentos."
            }
        },
        {
            id: "a_feathered_friends", park: "animal", name: "Feathered Friends in Flight!", express: true, image: "",
            type: "🦅 Show ao vivo com aves e falcões voando livremente sobre a plateia.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Sentar na arquibancada e assistir. As aves passam raspando na cabeça, o que dá um sustinho legal.",
                ester: "Muito educativo e os pássaros são incrivelmente inteligentes.",
                gabriel: "Ótimo show para preencher o roteiro da tarde e descansar."
            }
        },
        {
            id: "a_lion_king", park: "animal", name: "Festival of the Lion King", express: true, image: "",
            type: "🎭 Show musical acrobático estilo Cirque du Soleil em arena fechada.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Apenas assistir sentado. Ritmo puramente artístico com músicas impecáveis.",
                ester: "Incrível! Os cantores e os acrobatas pulando em trampolins são de arrepiar.",
                gabriel: "O melhor show teatral da Disney inteira. Imperdível."
            }
        },
        {
            id: "a_finding_nemo", park: "animal", name: "Finding Nemo: The Big Blue... and Beyond!", express: true, image: "",
            type: "🎭 Show musical ao vivo com fantoches gigantes baseados em Nemo.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Teatro fechado com ar gelado. Relaxante e sem impactos físicos.",
                ester: "Cenários lindíssimos e canções originais muito bonitas.",
                gabriel: "Excelente produção de palco, muito bom para descansar no meio do dia."
            }
        },
        {
            id: "a_maharajah_trek", park: "animal", name: "Maharajah Jungle Trek", express: false, image: "",
            type: "🐯 Trilha a pé por ruínas asiáticas antigas com tigres e morcegos.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Caminhada livre no seu próprio ritmo. Sem filas, ambiente calmo.",
                ester: "O recinto dos tigres andando pelas ruínas de pedra rende fotos maravilhosas.",
                gabriel: "Ótima trilha de observação zoológica autoguiada."
            }
        },
        {
            id: "a_gorilla_falls", park: "animal", name: "Gorilla Falls Exploration Trail", express: false, image: "",
            type: "🦍 Trilha de caminhada na floresta observando gorilas e hipopótamos.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Caminhada relaxante após sair do Safári. Feita totalmente a pé.",
                ester: "Ver os gorilas bebês brincando nos gramados é a coisa mais fofa do mundo.",
                gabriel: "Excelente área de preservação de espécies bem estruturada."
            }
        },
        {
            id: "a_boneyard", park: "animal", name: "The Boneyard", express: false, image: "",
            type: "🦴 Área interativa de escavação arqueológica de fósseis.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Praça aberta temática. Não é um brinquedo móvel, apenas para andar.",
                ester: "Legal para ver as réplicas gigantes de ossos de dinossauro.",
                gabriel: "Área puramente recreativa e voltada para exploração visual."
            }
        },
        {
            id: "a_animation_experience", park: "animal", name: "The Animation Experience at Conservation Station", express: false, image: "",
            type: "🎨 Aula rápida com animadores da Disney para desenhar personagens.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Você faz a aula sentado em uma prancheta de desenho. Totalmente calmo.",
                ester: "Você aprende técnicas reais e leva o seu desenho do Simba ou Stitch de lembrança!",
                gabriel: "Diferente e interativo. É preciso pegar o trem do parque para ir até lá."
            }
        },
        {
            id: "a_wildlife_express", park: "animal", name: "Wildlife Express Train", express: false, image: "",
            type: "🚂 Trem clássico rústico que leva até a estação de conservação.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Trem lento de transporte interno. Ritmo tranquilo de locomoção panorâmica.",
                ester: "Bom para ver os bastidores onde os veterinários cuidam dos animais do parque.",
                gabriel: "Transporte utilitário necessário para acessar a área de animação."
            }
        }
    ]
};
