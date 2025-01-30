import Noticia from "../noticia/Noticia"

const listaDeNoticias: Noticia[] = [
    {
        id: 1,
        titulo: "Final do Mundial de League of Legends será no próximo mês",
        subtitulo: "Equipes favoritas prometem grandes jogos na disputa pelo título.",
        imagem: "",
        autor: "João Silva",
        data: "2025-01-20",
        hora: "14:00",
        game: "lol",
        logoGame: '/icones/league-of-legends.png',
        conteudoDaMateria: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus sem et tellus tristique mattis. Quisque scelerisque ipsum turpis, a lacinia magna scelerisque vitae. In condimentum neque vitae enim sagittis, posuere hendrerit libero fringilla. Praesent ullamcorper rutrum metus sollicitudin bibendum. Nulla suscipit quis turpis sit amet vestibulum. Sed vel convallis nibh. Cras vitae interdum mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque libero sem, dapibus in purus sit amet, dapibus malesuada massa. Pellentesque vitae est libero. Nulla leo libero, gravida a dui vitae, lacinia interdum eros. Proin non pulvinar ante. Fusce ut diam suscipit, aliquet elit ut, sodales dui.',
            'Mauris tortor nibh, faucibus a arcu eu, consectetur ornare mi. Donec ac suscipit velit. Sed ac commodo ante. Cras vitae velit ut dui maximus eleifend. Morbi et urna ac neque pharetra euismod. Curabitur id ornare tellus. Duis dictum aliquam ex ut tempus.',
            'In hac habitasse platea dictumst. Morbi felis quam, accumsan quis orci ut, ultricies placerat urna. Donec finibus vestibulum nibh, a finibus turpis. Nullam accumsan a lectus eu interdum. Donec ut turpis id tellus efficitur varius. Vestibulum bibendum laoreet libero at congue. Morbi in ullamcorper orci, nec finibus dolor.',
            'Phasellus elementum ac arcu vitae blandit. Maecenas gravida metus vel gravida porta. Vivamus orci sapien, suscipit non elit sed, aliquet placerat diam. Duis sagittis sem at pretium egestas. Nunc ultricies aliquet eleifend. Vivamus fringilla condimentum quam id sodales. Vestibulum aliquet dictum diam, a vulputate magna tempus nec. Sed consequat et lacus nec elementum. Donec pharetra urna ut urna consectetur rhoncus. Etiam laoreet, sapien in scelerisque fermentum, velit erat laoreet ex, nec viverra nunc justo vitae massa. Aliquam elementum vulputate urna a euismod. Proin erat neque, molestie id tincidunt a, bibendum ac libero. Curabitur eu odio venenatis, condimentum augue id, sollicitudin ante. Nullam massa sapien, feugiat at dapibus id, faucibus eget erat. Vestibulum pellentesque tortor nec nisl egestas blandit. Cras nec est quam.',
            'Integer enim purus, congue ut ante vitae, aliquet imperdiet dolor. In hac habitasse platea dictumst. Praesent sapien orci, iaculis in enim at, posuere facilisis eros. Nullam ut tristique odio. Nulla rutrum rhoncus dui. Phasellus vel erat eu quam pharetra condimentum. Proin nulla augue, posuere ut ullamcorper eget, commodo vitae ante. Sed rutrum lectus dui, ac rutrum nunc dictum mollis. Vivamus urna risus, consectetur ac tortor cursus, luctus vulputate sem. Aenean tempor sem vitae elit aliquam pharetra. Morbi volutpat maximus nulla, lobortis pulvinar diam consequat a. Donec maximus, dui quis vehicula posuere, nisi arcu pharetra quam, at gravida neque eros ut justo. Nunc odio nisi, volutpat a efficitur at, suscipit non odio. Proin pellentesque sed lacus at volutpat. Duis vulputate mi ligula, sit amet bibendum eros suscipit eget. In vel turpis congue, molestie ipsum semper, venenatis libero.'
        ]
    },
    {
        id: 2,
        titulo: "Time brasileiro avança nos playoffs do CS:GO Major",
        subtitulo: "O Brasil segue forte na competição internacional.",
        imagem: "",
        autor: "Maria Oliveira",
        data: "2025-01-19",
        hora: "18:30",
        game: "CS2",
        logoGame: '/icones/counter-strike.png',
        conteudoDaMateria: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus sem et tellus tristique mattis. Quisque scelerisque ipsum turpis, a lacinia magna scelerisque vitae. In condimentum neque vitae enim sagittis, posuere hendrerit libero fringilla. Praesent ullamcorper rutrum metus sollicitudin bibendum. Nulla suscipit quis turpis sit amet vestibulum. Sed vel convallis nibh. Cras vitae interdum mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque libero sem, dapibus in purus sit amet, dapibus malesuada massa. Pellentesque vitae est libero. Nulla leo libero, gravida a dui vitae, lacinia interdum eros. Proin non pulvinar ante. Fusce ut diam suscipit, aliquet elit ut, sodales dui.',
            'Mauris tortor nibh, faucibus a arcu eu, consectetur ornare mi. Donec ac suscipit velit. Sed ac commodo ante. Cras vitae velit ut dui maximus eleifend. Morbi et urna ac neque pharetra euismod. Curabitur id ornare tellus. Duis dictum aliquam ex ut tempus.',
            'In hac habitasse platea dictumst. Morbi felis quam, accumsan quis orci ut, ultricies placerat urna. Donec finibus vestibulum nibh, a finibus turpis. Nullam accumsan a lectus eu interdum. Donec ut turpis id tellus efficitur varius. Vestibulum bibendum laoreet libero at congue. Morbi in ullamcorper orci, nec finibus dolor.',
            'Phasellus elementum ac arcu vitae blandit. Maecenas gravida metus vel gravida porta. Vivamus orci sapien, suscipit non elit sed, aliquet placerat diam. Duis sagittis sem at pretium egestas. Nunc ultricies aliquet eleifend. Vivamus fringilla condimentum quam id sodales. Vestibulum aliquet dictum diam, a vulputate magna tempus nec. Sed consequat et lacus nec elementum. Donec pharetra urna ut urna consectetur rhoncus. Etiam laoreet, sapien in scelerisque fermentum, velit erat laoreet ex, nec viverra nunc justo vitae massa. Aliquam elementum vulputate urna a euismod. Proin erat neque, molestie id tincidunt a, bibendum ac libero. Curabitur eu odio venenatis, condimentum augue id, sollicitudin ante. Nullam massa sapien, feugiat at dapibus id, faucibus eget erat. Vestibulum pellentesque tortor nec nisl egestas blandit. Cras nec est quam.',
            'Integer enim purus, congue ut ante vitae, aliquet imperdiet dolor. In hac habitasse platea dictumst. Praesent sapien orci, iaculis in enim at, posuere facilisis eros. Nullam ut tristique odio. Nulla rutrum rhoncus dui. Phasellus vel erat eu quam pharetra condimentum. Proin nulla augue, posuere ut ullamcorper eget, commodo vitae ante. Sed rutrum lectus dui, ac rutrum nunc dictum mollis. Vivamus urna risus, consectetur ac tortor cursus, luctus vulputate sem. Aenean tempor sem vitae elit aliquam pharetra. Morbi volutpat maximus nulla, lobortis pulvinar diam consequat a. Donec maximus, dui quis vehicula posuere, nisi arcu pharetra quam, at gravida neque eros ut justo. Nunc odio nisi, volutpat a efficitur at, suscipit non odio. Proin pellentesque sed lacus at volutpat. Duis vulputate mi ligula, sit amet bibendum eros suscipit eget. In vel turpis congue, molestie ipsum semper, venenatis libero.'
        ]
    },
    {
        id: 3,
        titulo: "Atualizações em Valorant trazem novo agente e mapa",
        subtitulo: "Riot Games anuncia novidades para a próxima temporada.",
        imagem: "/icones/valorant.png",
        autor: "Carlos Mendes",
        data: "2025-01-18",
        hora: "12:45",
        game: "Valorant",
        logoGame: '/icones/valorant.png',
        conteudoDaMateria: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus sem et tellus tristique mattis. Quisque scelerisque ipsum turpis, a lacinia magna scelerisque vitae. In condimentum neque vitae enim sagittis, posuere hendrerit libero fringilla. Praesent ullamcorper rutrum metus sollicitudin bibendum. Nulla suscipit quis turpis sit amet vestibulum. Sed vel convallis nibh. Cras vitae interdum mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque libero sem, dapibus in purus sit amet, dapibus malesuada massa. Pellentesque vitae est libero. Nulla leo libero, gravida a dui vitae, lacinia interdum eros. Proin non pulvinar ante. Fusce ut diam suscipit, aliquet elit ut, sodales dui.',
            'Mauris tortor nibh, faucibus a arcu eu, consectetur ornare mi. Donec ac suscipit velit. Sed ac commodo ante. Cras vitae velit ut dui maximus eleifend. Morbi et urna ac neque pharetra euismod. Curabitur id ornare tellus. Duis dictum aliquam ex ut tempus.',
            'In hac habitasse platea dictumst. Morbi felis quam, accumsan quis orci ut, ultricies placerat urna. Donec finibus vestibulum nibh, a finibus turpis. Nullam accumsan a lectus eu interdum. Donec ut turpis id tellus efficitur varius. Vestibulum bibendum laoreet libero at congue. Morbi in ullamcorper orci, nec finibus dolor.',
            'Phasellus elementum ac arcu vitae blandit. Maecenas gravida metus vel gravida porta. Vivamus orci sapien, suscipit non elit sed, aliquet placerat diam. Duis sagittis sem at pretium egestas. Nunc ultricies aliquet eleifend. Vivamus fringilla condimentum quam id sodales. Vestibulum aliquet dictum diam, a vulputate magna tempus nec. Sed consequat et lacus nec elementum. Donec pharetra urna ut urna consectetur rhoncus. Etiam laoreet, sapien in scelerisque fermentum, velit erat laoreet ex, nec viverra nunc justo vitae massa. Aliquam elementum vulputate urna a euismod. Proin erat neque, molestie id tincidunt a, bibendum ac libero. Curabitur eu odio venenatis, condimentum augue id, sollicitudin ante. Nullam massa sapien, feugiat at dapibus id, faucibus eget erat. Vestibulum pellentesque tortor nec nisl egestas blandit. Cras nec est quam.',
            'Integer enim purus, congue ut ante vitae, aliquet imperdiet dolor. In hac habitasse platea dictumst. Praesent sapien orci, iaculis in enim at, posuere facilisis eros. Nullam ut tristique odio. Nulla rutrum rhoncus dui. Phasellus vel erat eu quam pharetra condimentum. Proin nulla augue, posuere ut ullamcorper eget, commodo vitae ante. Sed rutrum lectus dui, ac rutrum nunc dictum mollis. Vivamus urna risus, consectetur ac tortor cursus, luctus vulputate sem. Aenean tempor sem vitae elit aliquam pharetra. Morbi volutpat maximus nulla, lobortis pulvinar diam consequat a. Donec maximus, dui quis vehicula posuere, nisi arcu pharetra quam, at gravida neque eros ut justo. Nunc odio nisi, volutpat a efficitur at, suscipit non odio. Proin pellentesque sed lacus at volutpat. Duis vulputate mi ligula, sit amet bibendum eros suscipit eget. In vel turpis congue, molestie ipsum semper, venenatis libero.'
        ]
    },
    {
        id: 4,
        titulo: "Free Fire: Campeonato Nacional tem prêmio recorde",
        subtitulo: "Premiação promete aquecer o cenário competitivo.",
        imagem: "",
        autor: "Ana Costa",
        data: "2025-01-17",
        hora: "16:15",
        game: "FreeFire",
        logoGame: '/default/escudo-default.png',
        conteudoDaMateria: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus sem et tellus tristique mattis. Quisque scelerisque ipsum turpis, a lacinia magna scelerisque vitae. In condimentum neque vitae enim sagittis, posuere hendrerit libero fringilla. Praesent ullamcorper rutrum metus sollicitudin bibendum. Nulla suscipit quis turpis sit amet vestibulum. Sed vel convallis nibh. Cras vitae interdum mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque libero sem, dapibus in purus sit amet, dapibus malesuada massa. Pellentesque vitae est libero. Nulla leo libero, gravida a dui vitae, lacinia interdum eros. Proin non pulvinar ante. Fusce ut diam suscipit, aliquet elit ut, sodales dui.',
            'Mauris tortor nibh, faucibus a arcu eu, consectetur ornare mi. Donec ac suscipit velit. Sed ac commodo ante. Cras vitae velit ut dui maximus eleifend. Morbi et urna ac neque pharetra euismod. Curabitur id ornare tellus. Duis dictum aliquam ex ut tempus.',
            'In hac habitasse platea dictumst. Morbi felis quam, accumsan quis orci ut, ultricies placerat urna. Donec finibus vestibulum nibh, a finibus turpis. Nullam accumsan a lectus eu interdum. Donec ut turpis id tellus efficitur varius. Vestibulum bibendum laoreet libero at congue. Morbi in ullamcorper orci, nec finibus dolor.',
            'Phasellus elementum ac arcu vitae blandit. Maecenas gravida metus vel gravida porta. Vivamus orci sapien, suscipit non elit sed, aliquet placerat diam. Duis sagittis sem at pretium egestas. Nunc ultricies aliquet eleifend. Vivamus fringilla condimentum quam id sodales. Vestibulum aliquet dictum diam, a vulputate magna tempus nec. Sed consequat et lacus nec elementum. Donec pharetra urna ut urna consectetur rhoncus. Etiam laoreet, sapien in scelerisque fermentum, velit erat laoreet ex, nec viverra nunc justo vitae massa. Aliquam elementum vulputate urna a euismod. Proin erat neque, molestie id tincidunt a, bibendum ac libero. Curabitur eu odio venenatis, condimentum augue id, sollicitudin ante. Nullam massa sapien, feugiat at dapibus id, faucibus eget erat. Vestibulum pellentesque tortor nec nisl egestas blandit. Cras nec est quam.',
            'Integer enim purus, congue ut ante vitae, aliquet imperdiet dolor. In hac habitasse platea dictumst. Praesent sapien orci, iaculis in enim at, posuere facilisis eros. Nullam ut tristique odio. Nulla rutrum rhoncus dui. Phasellus vel erat eu quam pharetra condimentum. Proin nulla augue, posuere ut ullamcorper eget, commodo vitae ante. Sed rutrum lectus dui, ac rutrum nunc dictum mollis. Vivamus urna risus, consectetur ac tortor cursus, luctus vulputate sem. Aenean tempor sem vitae elit aliquam pharetra. Morbi volutpat maximus nulla, lobortis pulvinar diam consequat a. Donec maximus, dui quis vehicula posuere, nisi arcu pharetra quam, at gravida neque eros ut justo. Nunc odio nisi, volutpat a efficitur at, suscipit non odio. Proin pellentesque sed lacus at volutpat. Duis vulputate mi ligula, sit amet bibendum eros suscipit eget. In vel turpis congue, molestie ipsum semper, venenatis libero.'
        ]
    },
    {
        id: 5,
        titulo: "Dota 2: TI atrai recorde de espectadores em 2025",
        subtitulo: "O maior evento de Dota 2 supera expectativas.",
        imagem: "",
        autor: "Luiz Souza",
        data: "2025-01-16",
        hora: "10:00",
        game: "Dota2",
        logoGame: '/default/escudo-default.png',
        conteudoDaMateria: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus sem et tellus tristique mattis. Quisque scelerisque ipsum turpis, a lacinia magna scelerisque vitae. In condimentum neque vitae enim sagittis, posuere hendrerit libero fringilla. Praesent ullamcorper rutrum metus sollicitudin bibendum. Nulla suscipit quis turpis sit amet vestibulum. Sed vel convallis nibh. Cras vitae interdum mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque libero sem, dapibus in purus sit amet, dapibus malesuada massa. Pellentesque vitae est libero. Nulla leo libero, gravida a dui vitae, lacinia interdum eros. Proin non pulvinar ante. Fusce ut diam suscipit, aliquet elit ut, sodales dui.',
            'Mauris tortor nibh, faucibus a arcu eu, consectetur ornare mi. Donec ac suscipit velit. Sed ac commodo ante. Cras vitae velit ut dui maximus eleifend. Morbi et urna ac neque pharetra euismod. Curabitur id ornare tellus. Duis dictum aliquam ex ut tempus.',
            'In hac habitasse platea dictumst. Morbi felis quam, accumsan quis orci ut, ultricies placerat urna. Donec finibus vestibulum nibh, a finibus turpis. Nullam accumsan a lectus eu interdum. Donec ut turpis id tellus efficitur varius. Vestibulum bibendum laoreet libero at congue. Morbi in ullamcorper orci, nec finibus dolor.',
            'Phasellus elementum ac arcu vitae blandit. Maecenas gravida metus vel gravida porta. Vivamus orci sapien, suscipit non elit sed, aliquet placerat diam. Duis sagittis sem at pretium egestas. Nunc ultricies aliquet eleifend. Vivamus fringilla condimentum quam id sodales. Vestibulum aliquet dictum diam, a vulputate magna tempus nec. Sed consequat et lacus nec elementum. Donec pharetra urna ut urna consectetur rhoncus. Etiam laoreet, sapien in scelerisque fermentum, velit erat laoreet ex, nec viverra nunc justo vitae massa. Aliquam elementum vulputate urna a euismod. Proin erat neque, molestie id tincidunt a, bibendum ac libero. Curabitur eu odio venenatis, condimentum augue id, sollicitudin ante. Nullam massa sapien, feugiat at dapibus id, faucibus eget erat. Vestibulum pellentesque tortor nec nisl egestas blandit. Cras nec est quam.',
            'Integer enim purus, congue ut ante vitae, aliquet imperdiet dolor. In hac habitasse platea dictumst. Praesent sapien orci, iaculis in enim at, posuere facilisis eros. Nullam ut tristique odio. Nulla rutrum rhoncus dui. Phasellus vel erat eu quam pharetra condimentum. Proin nulla augue, posuere ut ullamcorper eget, commodo vitae ante. Sed rutrum lectus dui, ac rutrum nunc dictum mollis. Vivamus urna risus, consectetur ac tortor cursus, luctus vulputate sem. Aenean tempor sem vitae elit aliquam pharetra. Morbi volutpat maximus nulla, lobortis pulvinar diam consequat a. Donec maximus, dui quis vehicula posuere, nisi arcu pharetra quam, at gravida neque eros ut justo. Nunc odio nisi, volutpat a efficitur at, suscipit non odio. Proin pellentesque sed lacus at volutpat. Duis vulputate mi ligula, sit amet bibendum eros suscipit eget. In vel turpis congue, molestie ipsum semper, venenatis libero.'
        ]
    },
    {
        id: 6,
        titulo: "Rocket League terá crossover com famosa franquia de carros",
        subtitulo: "Parceria promete trazer novos itens exclusivos para os jogadores.",
        imagem: "",
        autor: "Beatriz Lima",
        data: "2025-01-15",
        hora: "15:20",
        game: "RocketLeague",
        logoGame: '/default/escudo-default.png',
        conteudoDaMateria: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus sem et tellus tristique mattis. Quisque scelerisque ipsum turpis, a lacinia magna scelerisque vitae. In condimentum neque vitae enim sagittis, posuere hendrerit libero fringilla. Praesent ullamcorper rutrum metus sollicitudin bibendum. Nulla suscipit quis turpis sit amet vestibulum. Sed vel convallis nibh. Cras vitae interdum mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque libero sem, dapibus in purus sit amet, dapibus malesuada massa. Pellentesque vitae est libero. Nulla leo libero, gravida a dui vitae, lacinia interdum eros. Proin non pulvinar ante. Fusce ut diam suscipit, aliquet elit ut, sodales dui.',
            'Mauris tortor nibh, faucibus a arcu eu, consectetur ornare mi. Donec ac suscipit velit. Sed ac commodo ante. Cras vitae velit ut dui maximus eleifend. Morbi et urna ac neque pharetra euismod. Curabitur id ornare tellus. Duis dictum aliquam ex ut tempus.',
            'In hac habitasse platea dictumst. Morbi felis quam, accumsan quis orci ut, ultricies placerat urna. Donec finibus vestibulum nibh, a finibus turpis. Nullam accumsan a lectus eu interdum. Donec ut turpis id tellus efficitur varius. Vestibulum bibendum laoreet libero at congue. Morbi in ullamcorper orci, nec finibus dolor.',
            'Phasellus elementum ac arcu vitae blandit. Maecenas gravida metus vel gravida porta. Vivamus orci sapien, suscipit non elit sed, aliquet placerat diam. Duis sagittis sem at pretium egestas. Nunc ultricies aliquet eleifend. Vivamus fringilla condimentum quam id sodales. Vestibulum aliquet dictum diam, a vulputate magna tempus nec. Sed consequat et lacus nec elementum. Donec pharetra urna ut urna consectetur rhoncus. Etiam laoreet, sapien in scelerisque fermentum, velit erat laoreet ex, nec viverra nunc justo vitae massa. Aliquam elementum vulputate urna a euismod. Proin erat neque, molestie id tincidunt a, bibendum ac libero. Curabitur eu odio venenatis, condimentum augue id, sollicitudin ante. Nullam massa sapien, feugiat at dapibus id, faucibus eget erat. Vestibulum pellentesque tortor nec nisl egestas blandit. Cras nec est quam.',
            'Integer enim purus, congue ut ante vitae, aliquet imperdiet dolor. In hac habitasse platea dictumst. Praesent sapien orci, iaculis in enim at, posuere facilisis eros. Nullam ut tristique odio. Nulla rutrum rhoncus dui. Phasellus vel erat eu quam pharetra condimentum. Proin nulla augue, posuere ut ullamcorper eget, commodo vitae ante. Sed rutrum lectus dui, ac rutrum nunc dictum mollis. Vivamus urna risus, consectetur ac tortor cursus, luctus vulputate sem. Aenean tempor sem vitae elit aliquam pharetra. Morbi volutpat maximus nulla, lobortis pulvinar diam consequat a. Donec maximus, dui quis vehicula posuere, nisi arcu pharetra quam, at gravida neque eros ut justo. Nunc odio nisi, volutpat a efficitur at, suscipit non odio. Proin pellentesque sed lacus at volutpat. Duis vulputate mi ligula, sit amet bibendum eros suscipit eget. In vel turpis congue, molestie ipsum semper, venenatis libero.'
        ]
    },
    {
        id: 7,
        titulo: "Streamer quebra recorde mundial em maratona de Fortnite",
        subtitulo: "Transmissão ao vivo atingiu milhões de espectadores simultâneos.",
        imagem: "",
        autor: "Ricardo Pereira",
        data: "2025-01-14",
        hora: "20:00",
        game: "Fortnite",
        logoGame: '/default/escudo-default.png',
        conteudoDaMateria: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus sem et tellus tristique mattis. Quisque scelerisque ipsum turpis, a lacinia magna scelerisque vitae. In condimentum neque vitae enim sagittis, posuere hendrerit libero fringilla. Praesent ullamcorper rutrum metus sollicitudin bibendum. Nulla suscipit quis turpis sit amet vestibulum. Sed vel convallis nibh. Cras vitae interdum mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque libero sem, dapibus in purus sit amet, dapibus malesuada massa. Pellentesque vitae est libero. Nulla leo libero, gravida a dui vitae, lacinia interdum eros. Proin non pulvinar ante. Fusce ut diam suscipit, aliquet elit ut, sodales dui.',
            'Mauris tortor nibh, faucibus a arcu eu, consectetur ornare mi. Donec ac suscipit velit. Sed ac commodo ante. Cras vitae velit ut dui maximus eleifend. Morbi et urna ac neque pharetra euismod. Curabitur id ornare tellus. Duis dictum aliquam ex ut tempus.',
            'In hac habitasse platea dictumst. Morbi felis quam, accumsan quis orci ut, ultricies placerat urna. Donec finibus vestibulum nibh, a finibus turpis. Nullam accumsan a lectus eu interdum. Donec ut turpis id tellus efficitur varius. Vestibulum bibendum laoreet libero at congue. Morbi in ullamcorper orci, nec finibus dolor.',
            'Phasellus elementum ac arcu vitae blandit. Maecenas gravida metus vel gravida porta. Vivamus orci sapien, suscipit non elit sed, aliquet placerat diam. Duis sagittis sem at pretium egestas. Nunc ultricies aliquet eleifend. Vivamus fringilla condimentum quam id sodales. Vestibulum aliquet dictum diam, a vulputate magna tempus nec. Sed consequat et lacus nec elementum. Donec pharetra urna ut urna consectetur rhoncus. Etiam laoreet, sapien in scelerisque fermentum, velit erat laoreet ex, nec viverra nunc justo vitae massa. Aliquam elementum vulputate urna a euismod. Proin erat neque, molestie id tincidunt a, bibendum ac libero. Curabitur eu odio venenatis, condimentum augue id, sollicitudin ante. Nullam massa sapien, feugiat at dapibus id, faucibus eget erat. Vestibulum pellentesque tortor nec nisl egestas blandit. Cras nec est quam.',
            'Integer enim purus, congue ut ante vitae, aliquet imperdiet dolor. In hac habitasse platea dictumst. Praesent sapien orci, iaculis in enim at, posuere facilisis eros. Nullam ut tristique odio. Nulla rutrum rhoncus dui. Phasellus vel erat eu quam pharetra condimentum. Proin nulla augue, posuere ut ullamcorper eget, commodo vitae ante. Sed rutrum lectus dui, ac rutrum nunc dictum mollis. Vivamus urna risus, consectetur ac tortor cursus, luctus vulputate sem. Aenean tempor sem vitae elit aliquam pharetra. Morbi volutpat maximus nulla, lobortis pulvinar diam consequat a. Donec maximus, dui quis vehicula posuere, nisi arcu pharetra quam, at gravida neque eros ut justo. Nunc odio nisi, volutpat a efficitur at, suscipit non odio. Proin pellentesque sed lacus at volutpat. Duis vulputate mi ligula, sit amet bibendum eros suscipit eget. In vel turpis congue, molestie ipsum semper, venenatis libero.'
        ]
    },
    {
        id: 8,
        titulo: "PUBG anuncia torneio global com formato inovador",
        subtitulo: "A competição promete aumentar a interatividade com o público.",
        imagem: "",
        autor: "Fernanda Alves",
        data: "2025-01-13",
        hora: "11:30",
        game: "PUBG",
        logoGame: '/default/escudo-default.png',
        conteudoDaMateria: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus sem et tellus tristique mattis. Quisque scelerisque ipsum turpis, a lacinia magna scelerisque vitae. In condimentum neque vitae enim sagittis, posuere hendrerit libero fringilla. Praesent ullamcorper rutrum metus sollicitudin bibendum. Nulla suscipit quis turpis sit amet vestibulum. Sed vel convallis nibh. Cras vitae interdum mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque libero sem, dapibus in purus sit amet, dapibus malesuada massa. Pellentesque vitae est libero. Nulla leo libero, gravida a dui vitae, lacinia interdum eros. Proin non pulvinar ante. Fusce ut diam suscipit, aliquet elit ut, sodales dui.',
            'Mauris tortor nibh, faucibus a arcu eu, consectetur ornare mi. Donec ac suscipit velit. Sed ac commodo ante. Cras vitae velit ut dui maximus eleifend. Morbi et urna ac neque pharetra euismod. Curabitur id ornare tellus. Duis dictum aliquam ex ut tempus.',
            'In hac habitasse platea dictumst. Morbi felis quam, accumsan quis orci ut, ultricies placerat urna. Donec finibus vestibulum nibh, a finibus turpis. Nullam accumsan a lectus eu interdum. Donec ut turpis id tellus efficitur varius. Vestibulum bibendum laoreet libero at congue. Morbi in ullamcorper orci, nec finibus dolor.',
            'Phasellus elementum ac arcu vitae blandit. Maecenas gravida metus vel gravida porta. Vivamus orci sapien, suscipit non elit sed, aliquet placerat diam. Duis sagittis sem at pretium egestas. Nunc ultricies aliquet eleifend. Vivamus fringilla condimentum quam id sodales. Vestibulum aliquet dictum diam, a vulputate magna tempus nec. Sed consequat et lacus nec elementum. Donec pharetra urna ut urna consectetur rhoncus. Etiam laoreet, sapien in scelerisque fermentum, velit erat laoreet ex, nec viverra nunc justo vitae massa. Aliquam elementum vulputate urna a euismod. Proin erat neque, molestie id tincidunt a, bibendum ac libero. Curabitur eu odio venenatis, condimentum augue id, sollicitudin ante. Nullam massa sapien, feugiat at dapibus id, faucibus eget erat. Vestibulum pellentesque tortor nec nisl egestas blandit. Cras nec est quam.',
            'Integer enim purus, congue ut ante vitae, aliquet imperdiet dolor. In hac habitasse platea dictumst. Praesent sapien orci, iaculis in enim at, posuere facilisis eros. Nullam ut tristique odio. Nulla rutrum rhoncus dui. Phasellus vel erat eu quam pharetra condimentum. Proin nulla augue, posuere ut ullamcorper eget, commodo vitae ante. Sed rutrum lectus dui, ac rutrum nunc dictum mollis. Vivamus urna risus, consectetur ac tortor cursus, luctus vulputate sem. Aenean tempor sem vitae elit aliquam pharetra. Morbi volutpat maximus nulla, lobortis pulvinar diam consequat a. Donec maximus, dui quis vehicula posuere, nisi arcu pharetra quam, at gravida neque eros ut justo. Nunc odio nisi, volutpat a efficitur at, suscipit non odio. Proin pellentesque sed lacus at volutpat. Duis vulputate mi ligula, sit amet bibendum eros suscipit eget. In vel turpis congue, molestie ipsum semper, venenatis libero.'
        ]
    },
    {
        id: 9,
        titulo: "Overwatch 2: nova temporada traz eventos temáticos",
        subtitulo: "Jogadores poderão aproveitar modos exclusivos e skins limitadas.",
        imagem: "",
        autor: "Gustavo Torres",
        data: "2025-01-12",
        hora: "13:45",
        game: "Overwatch2",
        logoGame: '/default/escudo-default.png',
        conteudoDaMateria: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus sem et tellus tristique mattis. Quisque scelerisque ipsum turpis, a lacinia magna scelerisque vitae. In condimentum neque vitae enim sagittis, posuere hendrerit libero fringilla. Praesent ullamcorper rutrum metus sollicitudin bibendum. Nulla suscipit quis turpis sit amet vestibulum. Sed vel convallis nibh. Cras vitae interdum mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque libero sem, dapibus in purus sit amet, dapibus malesuada massa. Pellentesque vitae est libero. Nulla leo libero, gravida a dui vitae, lacinia interdum eros. Proin non pulvinar ante. Fusce ut diam suscipit, aliquet elit ut, sodales dui.',
            'Mauris tortor nibh, faucibus a arcu eu, consectetur ornare mi. Donec ac suscipit velit. Sed ac commodo ante. Cras vitae velit ut dui maximus eleifend. Morbi et urna ac neque pharetra euismod. Curabitur id ornare tellus. Duis dictum aliquam ex ut tempus.',
            'In hac habitasse platea dictumst. Morbi felis quam, accumsan quis orci ut, ultricies placerat urna. Donec finibus vestibulum nibh, a finibus turpis. Nullam accumsan a lectus eu interdum. Donec ut turpis id tellus efficitur varius. Vestibulum bibendum laoreet libero at congue. Morbi in ullamcorper orci, nec finibus dolor.',
            'Phasellus elementum ac arcu vitae blandit. Maecenas gravida metus vel gravida porta. Vivamus orci sapien, suscipit non elit sed, aliquet placerat diam. Duis sagittis sem at pretium egestas. Nunc ultricies aliquet eleifend. Vivamus fringilla condimentum quam id sodales. Vestibulum aliquet dictum diam, a vulputate magna tempus nec. Sed consequat et lacus nec elementum. Donec pharetra urna ut urna consectetur rhoncus. Etiam laoreet, sapien in scelerisque fermentum, velit erat laoreet ex, nec viverra nunc justo vitae massa. Aliquam elementum vulputate urna a euismod. Proin erat neque, molestie id tincidunt a, bibendum ac libero. Curabitur eu odio venenatis, condimentum augue id, sollicitudin ante. Nullam massa sapien, feugiat at dapibus id, faucibus eget erat. Vestibulum pellentesque tortor nec nisl egestas blandit. Cras nec est quam.',
            'Integer enim purus, congue ut ante vitae, aliquet imperdiet dolor. In hac habitasse platea dictumst. Praesent sapien orci, iaculis in enim at, posuere facilisis eros. Nullam ut tristique odio. Nulla rutrum rhoncus dui. Phasellus vel erat eu quam pharetra condimentum. Proin nulla augue, posuere ut ullamcorper eget, commodo vitae ante. Sed rutrum lectus dui, ac rutrum nunc dictum mollis. Vivamus urna risus, consectetur ac tortor cursus, luctus vulputate sem. Aenean tempor sem vitae elit aliquam pharetra. Morbi volutpat maximus nulla, lobortis pulvinar diam consequat a. Donec maximus, dui quis vehicula posuere, nisi arcu pharetra quam, at gravida neque eros ut justo. Nunc odio nisi, volutpat a efficitur at, suscipit non odio. Proin pellentesque sed lacus at volutpat. Duis vulputate mi ligula, sit amet bibendum eros suscipit eget. In vel turpis congue, molestie ipsum semper, venenatis libero.'
        ]
    },
    {
        id: 10,
        titulo: "Mobile Legends cresce no cenário competitivo brasileiro",
        subtitulo: "Popularidade do jogo impulsiona criação de novos times.",
        imagem: "",
        autor: "Paula Santos",
        data: "2025-01-11",
        hora: "17:10",
        game: "MobileLegends",
        logoGame: '/default/escudo-default.png',
        conteudoDaMateria: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus sem et tellus tristique mattis. Quisque scelerisque ipsum turpis, a lacinia magna scelerisque vitae. In condimentum neque vitae enim sagittis, posuere hendrerit libero fringilla. Praesent ullamcorper rutrum metus sollicitudin bibendum. Nulla suscipit quis turpis sit amet vestibulum. Sed vel convallis nibh. Cras vitae interdum mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque libero sem, dapibus in purus sit amet, dapibus malesuada massa. Pellentesque vitae est libero. Nulla leo libero, gravida a dui vitae, lacinia interdum eros. Proin non pulvinar ante. Fusce ut diam suscipit, aliquet elit ut, sodales dui.',
            'Mauris tortor nibh, faucibus a arcu eu, consectetur ornare mi. Donec ac suscipit velit. Sed ac commodo ante. Cras vitae velit ut dui maximus eleifend. Morbi et urna ac neque pharetra euismod. Curabitur id ornare tellus. Duis dictum aliquam ex ut tempus.',
            'In hac habitasse platea dictumst. Morbi felis quam, accumsan quis orci ut, ultricies placerat urna. Donec finibus vestibulum nibh, a finibus turpis. Nullam accumsan a lectus eu interdum. Donec ut turpis id tellus efficitur varius. Vestibulum bibendum laoreet libero at congue. Morbi in ullamcorper orci, nec finibus dolor.',
            'Phasellus elementum ac arcu vitae blandit. Maecenas gravida metus vel gravida porta. Vivamus orci sapien, suscipit non elit sed, aliquet placerat diam. Duis sagittis sem at pretium egestas. Nunc ultricies aliquet eleifend. Vivamus fringilla condimentum quam id sodales. Vestibulum aliquet dictum diam, a vulputate magna tempus nec. Sed consequat et lacus nec elementum. Donec pharetra urna ut urna consectetur rhoncus. Etiam laoreet, sapien in scelerisque fermentum, velit erat laoreet ex, nec viverra nunc justo vitae massa. Aliquam elementum vulputate urna a euismod. Proin erat neque, molestie id tincidunt a, bibendum ac libero. Curabitur eu odio venenatis, condimentum augue id, sollicitudin ante. Nullam massa sapien, feugiat at dapibus id, faucibus eget erat. Vestibulum pellentesque tortor nec nisl egestas blandit. Cras nec est quam.',
            'Integer enim purus, congue ut ante vitae, aliquet imperdiet dolor. In hac habitasse platea dictumst. Praesent sapien orci, iaculis in enim at, posuere facilisis eros. Nullam ut tristique odio. Nulla rutrum rhoncus dui. Phasellus vel erat eu quam pharetra condimentum. Proin nulla augue, posuere ut ullamcorper eget, commodo vitae ante. Sed rutrum lectus dui, ac rutrum nunc dictum mollis. Vivamus urna risus, consectetur ac tortor cursus, luctus vulputate sem. Aenean tempor sem vitae elit aliquam pharetra. Morbi volutpat maximus nulla, lobortis pulvinar diam consequat a. Donec maximus, dui quis vehicula posuere, nisi arcu pharetra quam, at gravida neque eros ut justo. Nunc odio nisi, volutpat a efficitur at, suscipit non odio. Proin pellentesque sed lacus at volutpat. Duis vulputate mi ligula, sit amet bibendum eros suscipit eget. In vel turpis congue, molestie ipsum semper, venenatis libero.'
        ]
    }
]

export default listaDeNoticias
