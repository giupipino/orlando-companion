const appData = {
  profiles: [
    { id: 'giu', name: 'Giu' },
    { id: 'ester', name: 'Ester' },
    { id: 'gabriel', name: 'Gabriel' }
  ],
  parks: [
    { id: 'home', name: 'Home' },
    { id: 'universal', name: 'Universal Studios' },
    { id: 'epic', name: 'Epic Universe' },
    { id: 'islands', name: 'Islands of Adventure' },
    { id: 'magic', name: 'Magic Kingdom' },
    { id: 'hollywood', name: 'Hollywood Studios' },
    { id: 'animal', name: 'Animal Kingdom' }
  ],
  itinerary: [
    { date: '10/09', title: 'Chegada em Orlando' },
    { date: '11/09', title: 'Animal Kingdom' },
    { date: '12/09', title: 'Universal Studios + Islands of Adventure' },
    { date: '13/09', title: 'Universal Epic Universe' },
    { date: '14/09', title: 'Cruzeiro Disney' },
    { date: '18/09', title: 'Magic Kingdom' },
    { date: '19/09', title: 'Outlet / Disney Springs' }
  ],
  attractions: [
    {
      id: 'u_rockit', park: 'universal', name: 'Hollywood Rip Ride Rockit', express: true,
      type: 'Montanha-russa de alta velocidade com subida vertical de 90 graus.',
      fear: { giu: 10, ester: 8, gabriel: 6 },
      recommendation: {
        giu: 'O maior pico de frio na barriga do parque. A subida olhando pro ceu da nervoso, e a primeira queda faz o estomago sair do lugar.',
        ester: 'Da bastante frio na barriga, mas escolher uma musica legal ajuda a distrair!',
        gabriel: 'Divertida pela trilha sonora, mas chacoalha um pouco.'
      }
    },
    {
      id: 'u_mummy', park: 'universal', name: 'Revenge of the Mummy', express: true,
      image: 'Revenge of the Mummy .jpeg',
      type: 'Montanha-russa no escuro com lancamentos rapidos.',
      fear: { giu: 6, ester: 4, gabriel: 2 },
      recommendation: {
        giu: 'Tem um lancamento inicial forte e um trecho curto de re que dao aquele frio na barriga rapido, mas passageiro.',
        ester: 'O escuro da mais impressao de velocidade, mas e super tranquila.',
        gabriel: 'Cenarios excelentes, o trecho de re e a melhor parte.'
      }
    },
    {
      id: 'u_gringotts', park: 'universal', name: 'Harry Potter & Escape from Gringotts', express: true,
      image: 'Harry Potter & Escape from Gringotts.jpg',
      type: 'Simulador 3D hibrido com trilhos.',
      fear: { giu: 4, ester: 3, gabriel: 1 },
      recommendation: {
        giu: 'Uma pequena queda com chacoalhao bem no comeco da um leve frio na barriga, mas o resto e puramente projecao 3D.',
        ester: 'Muito imersiva, para ir prestando atencao nos detalhes visuais.',
        gabriel: 'Facil e divertida para qualquer fa da saga.'
      }
    },
    {
      id: 'u_simpsons', park: 'universal', name: 'The Simpsons Ride', express: true,
      image: 'The Simpsons Ride.jpeg',
      type: 'Simulador de movimento com tela gigante concava.',
      fear: { giu: 5, ester: 5, gabriel: 2 },
      recommendation: {
        giu: 'A tela engana muito o cerebro simulando quedas livres bizarras. Da sensacao visual de frio na barriga e tontura.',
        ester: 'Chacoalha demais e a simulacao de queda me deixa um pouco zonza.',
        gabriel: 'Divertido pelo humor, mas o simulador e um pouco antigo.'
      }
    },
    {
      id: 'u_minions', park: 'universal', name: 'Despicable Me Minion Mayhem', express: true,
      image: 'Despicable Me Minion Mayhem.jpeg',
      type: 'Simulador de base movel 3D.',
      fear: { giu: 3, ester: 3, gabriel: 1 },
      recommendation: {
        giu: 'Movimentos mais suaves. Tem uma queda virtual logo no inicio, mas o estomago quase nao sente o impacto fisico.',
        ester: 'Super fofa, movimentos tranquilos de cinema simulator.',
        gabriel: 'Puramente infantil, mas bem engracada.'
      }
    },
    {
      id: 'u_transformers', park: 'universal', name: 'TRANSFORMERS: The Ride-3D', express: true,
      image: 'TRANSFORMERS- The Ride-3D.jpeg',
      type: 'Simulador em trilhos com movimentos rapidos.',
      fear: { giu: 3, ester: 2, gabriel: 1 },
      recommendation: {
        giu: 'O carrinho gira rapido entre as telas. Ha simulacoes de queda de predios, mas o frio na barriga fisico e minimo.',
        ester: 'Muita acao na tela, mas fisicamente o carrinho so faz giros horizontais.',
        gabriel: 'Efeitos de calor e fumaca otimos durante a simulacao.'
      }
    },
    {
      id: 'u_fallon', park: 'universal', name: 'Race Through New York Starring Jimmy Fallon', express: true,
      image: 'Race Through New York Starring Jimmy Fallon .jpeg',
      type: 'Simulador de teatro voador.',
      fear: { giu: 2, ester: 2, gabriel: 1 },
      recommendation: {
        giu: 'E uma poltrona de cinema grande que se mexe unida. Simula uma corrida com saltos virtuais bem tranquilos.',
        ester: 'Sem perigo nenhum, ritmo de passeio de carro virtual.',
        gabriel: 'A area de espera com o mascote e melhor que o brinquedo em si.'
      }
    },
    {
      id: 'u_fast', park: 'universal', name: 'Fast & Furious - Supercharged', express: true,
      type: 'Simulador imersivo dentro de um onibus.',
      fear: { giu: 1, ester: 1, gabriel: 1 },
      recommendation: {
        giu: 'O onibus apenas treme e finge velocidade usando as telas ao redor. Zero frio na barriga.',
        ester: 'Muito morna, da para ir ate descansando.',
        gabriel: 'Uma das atracoes mais fracas do parque, va se a fila estiver zerada.'
      }
    },
    {
      id: 'u_mib', park: 'universal', name: 'MEN IN BLACK Alien Attack', express: true,
      image: 'MEN IN BLACK Alien Attack.jpeg',
      type: 'Carrinho de tiro com giros intensos.',
      fear: { giu: 2, ester: 2, gabriel: 1 },
      recommendation: {
        giu: 'Sem quedas. O unico momento de surpresa sao os giros rapidos em 360 graus que o carrinho da se for atingido.',
        ester: 'Competitiva e divertida, os giros nao dao tontura.',
        gabriel: 'Tente acertar o bonus do botao vermelho no final para pontuar mais.'
      }
    },
    {
      id: 'u_et', park: 'universal', name: 'E.T. Adventure', express: true,
      image: 'E.T. Adventure.jpeg',
      type: 'Atracao escura classica.',
      fear: { giu: 1, ester: 1, gabriel: 0 },
      recommendation: {
        giu: 'Nostalgico, lento e relaxante. As bicicletas flutuam suavemente pelo cenario. Zero frio na barriga.',
        ester: 'Uma gracinha de atracao, musica calma e cheiro nostalgico de floresta.',
        gabriel: 'Um classico historico do parque que deve ser respeitado.'
      }
    }
  ]
};
