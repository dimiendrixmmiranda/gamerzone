import { adicionarElemento } from "utils/adicionarElemento";
import Coluna from "../colunas/coluna";

export const listaColunas: Coluna[] = []

adicionarElemento(
    listaColunas,
    {
        id: 1,
        imagem: '/wireframe.png',
        nome: 'Leis do Cs',
        autor: 'Dimi Martins',
        conteudo: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu fringilla sem, in mattis diam. Curabitur ut turpis rutrum, venenatis lacus interdum, tincidunt leo. Ut cursus bibendum nulla, a bibendum turpis dignissim id. Maecenas purus felis, tincidunt id leo ac, laoreet consectetur ligula. Duis ullamcorper mauris quis ante vehicula ornare at a ante. Aenean nec porttitor elit, vel viverra risus. Etiam congue dui vitae ex euismod ultricies. Suspendisse fermentum ante et justo convallis, quis suscipit magna efficitur. Integer ac diam eu metus vulputate porta ac sit amet orci. Curabitur auctor mollis mauris. Sed accumsan sollicitudin turpis, nec dapibus ligula mollis a. Cras facilisis aliquam justo, non porta leo consectetur commodo. Nam finibus lacinia nunc. Nullam placerat odio nec gravida posuere. Ut vel iaculis libero, rhoncus molestie sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum eget ultrices enim, et rutrum tellus. Morbi id imperdiet ex. Sed id ligula a leo egestas elementum ac eu metus. Cras elementum tellus vitae sodales bibendum. Praesent id pulvinar lacus. Donec vel lacinia urna. Morbi fringilla risus nibh, a bibendum orci auctor et.',
            'Nunc viverra diam sit amet dolor ultrices, a aliquam dolor venenatis. Pellentesque blandit ex non sapien gravida, sit amet molestie ligula faucibus. Duis laoreet malesuada nulla. Maecenas non dapibus dui, et porta enim. Donec nunc augue, aliquam nec ligula ac, pharetra rutrum odio. Nam hendrerit ut justo eget condimentum. Cras a tellus sed ex vestibulum vestibulum ac eu erat. Suspendisse et semper sem. Cras in venenatis felis. Mauris porta sem ac eros convallis feugiat. Aenean vehicula neque mollis mauris lacinia, ac blandit dolor rutrum. In imperdiet facilisis nulla a porttitor. Quisque placerat nisi quis lacus fermentum feugiat at id orci. Etiam bibendum luctus velit a tempor. Quisque sagittis pretium pellentesque.',
            'Maecenas nec consectetur nulla. Sed metus neque, luctus vitae lobortis sed, dictum in magna. Maecenas convallis tincidunt fermentum. Cras metus lorem, euismod non lorem vel, eleifend scelerisque nibh. Praesent placerat arcu eget convallis commodo. Maecenas luctus feugiat dolor, sit amet pulvinar augue sollicitudin in. Nam iaculis semper urna, at iaculis sapien sagittis non. Proin nec nulla congue, pulvinar elit tincidunt, vulputate leo. Nam venenatis mi vel leo mollis mattis.',
            'Nulla facilisi. Vestibulum ornare ultricies mi sed malesuada. Suspendisse potenti. Nulla varius hendrerit nibh ut semper. Donec venenatis rhoncus augue eu rhoncus. Pellentesque lobortis arcu turpis, vitae lacinia lectus aliquet ac. Aenean sed commodo felis. Sed ac commodo odio, in tempor risus. Donec tortor turpis, condimentum ultrices venenatis eu, viverra ultricies est. Proin consectetur libero id quam mollis eleifend. Phasellus aliquam, augue vel luctus lacinia, ipsum mi cursus risus, quis ultrices nibh sem sed erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean a interdum nulla, a euismod dui. Cras nec condimentum turpis, quis varius felis.'
        ],
        tituloColuna: 'As Leis do Counter-Strike: O pioneirismo francês em relação ao esporte eletrônico'
    }
)

adicionarElemento(
    listaColunas,
    {
        id: 2,
        imagem: '/wireframe.png',
        nome: 'Estrategistas de Battlefield',
        autor: 'Dimi Martins',
        conteudo: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu fringilla sem, in mattis diam. Curabitur ut turpis rutrum, venenatis lacus interdum, tincidunt leo. Ut cursus bibendum nulla, a bibendum turpis dignissim id. Maecenas purus felis, tincidunt id leo ac, laoreet consectetur ligula. Duis ullamcorper mauris quis ante vehicula ornare at a ante. Aenean nec porttitor elit, vel viverra risus. Etiam congue dui vitae ex euismod ultricies. Suspendisse fermentum ante et justo convallis, quis suscipit magna efficitur. Integer ac diam eu metus vulputate porta ac sit amet orci. Curabitur auctor mollis mauris. Sed accumsan sollicitudin turpis, nec dapibus ligula mollis a. Cras facilisis aliquam justo, non porta leo consectetur commodo. Nam finibus lacinia nunc. Nullam placerat odio nec gravida posuere. Ut vel iaculis libero, rhoncus molestie sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum eget ultrices enim, et rutrum tellus. Morbi id imperdiet ex. Sed id ligula a leo egestas elementum ac eu metus. Cras elementum tellus vitae sodales bibendum. Praesent id pulvinar lacus. Donec vel lacinia urna. Morbi fringilla risus nibh, a bibendum orci auctor et.',
            'Nunc viverra diam sit amet dolor ultrices, a aliquam dolor venenatis. Pellentesque blandit ex non sapien gravida, sit amet molestie ligula faucibus. Duis laoreet malesuada nulla. Maecenas non dapibus dui, et porta enim. Donec nunc augue, aliquam nec ligula ac, pharetra rutrum odio. Nam hendrerit ut justo eget condimentum. Cras a tellus sed ex vestibulum vestibulum ac eu erat. Suspendisse et semper sem. Cras in venenatis felis. Mauris porta sem ac eros convallis feugiat. Aenean vehicula neque mollis mauris lacinia, ac blandit dolor rutrum. In imperdiet facilisis nulla a porttitor. Quisque placerat nisi quis lacus fermentum feugiat at id orci. Etiam bibendum luctus velit a tempor. Quisque sagittis pretium pellentesque.',
            'Maecenas nec consectetur nulla. Sed metus neque, luctus vitae lobortis sed, dictum in magna. Maecenas convallis tincidunt fermentum. Cras metus lorem, euismod non lorem vel, eleifend scelerisque nibh. Praesent placerat arcu eget convallis commodo. Maecenas luctus feugiat dolor, sit amet pulvinar augue sollicitudin in. Nam iaculis semper urna, at iaculis sapien sagittis non. Proin nec nulla congue, pulvinar elit tincidunt, vulputate leo. Nam venenatis mi vel leo mollis mattis.',
            'Nulla facilisi. Vestibulum ornare ultricies mi sed malesuada. Suspendisse potenti. Nulla varius hendrerit nibh ut semper. Donec venenatis rhoncus augue eu rhoncus. Pellentesque lobortis arcu turpis, vitae lacinia lectus aliquet ac. Aenean sed commodo felis. Sed ac commodo odio, in tempor risus. Donec tortor turpis, condimentum ultrices venenatis eu, viverra ultricies est. Proin consectetur libero id quam mollis eleifend. Phasellus aliquam, augue vel luctus lacinia, ipsum mi cursus risus, quis ultrices nibh sem sed erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean a interdum nulla, a euismod dui. Cras nec condimentum turpis, quis varius felis.'
        ],
        tituloColuna: 'Como os comandantes fazem a diferença em Battlefield: Estratégia e Coordenação'
    }
)

adicionarElemento(
    listaColunas,
    {
        id: 3,
        imagem: '/wireframe.png',
        nome: 'Modding no Arma 3',
        autor: 'Dimi Martins',
        conteudo: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu fringilla sem, in mattis diam. Curabitur ut turpis rutrum, venenatis lacus interdum, tincidunt leo. Ut cursus bibendum nulla, a bibendum turpis dignissim id. Maecenas purus felis, tincidunt id leo ac, laoreet consectetur ligula. Duis ullamcorper mauris quis ante vehicula ornare at a ante. Aenean nec porttitor elit, vel viverra risus. Etiam congue dui vitae ex euismod ultricies. Suspendisse fermentum ante et justo convallis, quis suscipit magna efficitur. Integer ac diam eu metus vulputate porta ac sit amet orci. Curabitur auctor mollis mauris. Sed accumsan sollicitudin turpis, nec dapibus ligula mollis a. Cras facilisis aliquam justo, non porta leo consectetur commodo. Nam finibus lacinia nunc. Nullam placerat odio nec gravida posuere. Ut vel iaculis libero, rhoncus molestie sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum eget ultrices enim, et rutrum tellus. Morbi id imperdiet ex. Sed id ligula a leo egestas elementum ac eu metus. Cras elementum tellus vitae sodales bibendum. Praesent id pulvinar lacus. Donec vel lacinia urna. Morbi fringilla risus nibh, a bibendum orci auctor et.',
            'Nunc viverra diam sit amet dolor ultrices, a aliquam dolor venenatis. Pellentesque blandit ex non sapien gravida, sit amet molestie ligula faucibus. Duis laoreet malesuada nulla. Maecenas non dapibus dui, et porta enim. Donec nunc augue, aliquam nec ligula ac, pharetra rutrum odio. Nam hendrerit ut justo eget condimentum. Cras a tellus sed ex vestibulum vestibulum ac eu erat. Suspendisse et semper sem. Cras in venenatis felis. Mauris porta sem ac eros convallis feugiat. Aenean vehicula neque mollis mauris lacinia, ac blandit dolor rutrum. In imperdiet facilisis nulla a porttitor. Quisque placerat nisi quis lacus fermentum feugiat at id orci. Etiam bibendum luctus velit a tempor. Quisque sagittis pretium pellentesque.',
            'Maecenas nec consectetur nulla. Sed metus neque, luctus vitae lobortis sed, dictum in magna. Maecenas convallis tincidunt fermentum. Cras metus lorem, euismod non lorem vel, eleifend scelerisque nibh. Praesent placerat arcu eget convallis commodo. Maecenas luctus feugiat dolor, sit amet pulvinar augue sollicitudin in. Nam iaculis semper urna, at iaculis sapien sagittis non. Proin nec nulla congue, pulvinar elit tincidunt, vulputate leo. Nam venenatis mi vel leo mollis mattis.',
            'Nulla facilisi. Vestibulum ornare ultricies mi sed malesuada. Suspendisse potenti. Nulla varius hendrerit nibh ut semper. Donec venenatis rhoncus augue eu rhoncus. Pellentesque lobortis arcu turpis, vitae lacinia lectus aliquet ac. Aenean sed commodo felis. Sed ac commodo odio, in tempor risus. Donec tortor turpis, condimentum ultrices venenatis eu, viverra ultricies est. Proin consectetur libero id quam mollis eleifend. Phasellus aliquam, augue vel luctus lacinia, ipsum mi cursus risus, quis ultrices nibh sem sed erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean a interdum nulla, a euismod dui. Cras nec condimentum turpis, quis varius felis.'
        ],
        tituloColuna: 'A importância da comunidade de modding em Arma 3: Criando novos cenários de combate'
    }
)

adicionarElemento(
    listaColunas,
    {
        id: 4,
        imagem: '/wireframe.png',
        nome: 'Heróis do Overwatch',
        autor: 'Dimi Martins',
        conteudo: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu fringilla sem, in mattis diam. Curabitur ut turpis rutrum, venenatis lacus interdum, tincidunt leo. Ut cursus bibendum nulla, a bibendum turpis dignissim id. Maecenas purus felis, tincidunt id leo ac, laoreet consectetur ligula. Duis ullamcorper mauris quis ante vehicula ornare at a ante. Aenean nec porttitor elit, vel viverra risus. Etiam congue dui vitae ex euismod ultricies. Suspendisse fermentum ante et justo convallis, quis suscipit magna efficitur. Integer ac diam eu metus vulputate porta ac sit amet orci. Curabitur auctor mollis mauris. Sed accumsan sollicitudin turpis, nec dapibus ligula mollis a. Cras facilisis aliquam justo, non porta leo consectetur commodo. Nam finibus lacinia nunc. Nullam placerat odio nec gravida posuere. Ut vel iaculis libero, rhoncus molestie sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum eget ultrices enim, et rutrum tellus. Morbi id imperdiet ex. Sed id ligula a leo egestas elementum ac eu metus. Cras elementum tellus vitae sodales bibendum. Praesent id pulvinar lacus. Donec vel lacinia urna. Morbi fringilla risus nibh, a bibendum orci auctor et.',
            'Nunc viverra diam sit amet dolor ultrices, a aliquam dolor venenatis. Pellentesque blandit ex non sapien gravida, sit amet molestie ligula faucibus. Duis laoreet malesuada nulla. Maecenas non dapibus dui, et porta enim. Donec nunc augue, aliquam nec ligula ac, pharetra rutrum odio. Nam hendrerit ut justo eget condimentum. Cras a tellus sed ex vestibulum vestibulum ac eu erat. Suspendisse et semper sem. Cras in venenatis felis. Mauris porta sem ac eros convallis feugiat. Aenean vehicula neque mollis mauris lacinia, ac blandit dolor rutrum. In imperdiet facilisis nulla a porttitor. Quisque placerat nisi quis lacus fermentum feugiat at id orci. Etiam bibendum luctus velit a tempor. Quisque sagittis pretium pellentesque.',
            'Maecenas nec consectetur nulla. Sed metus neque, luctus vitae lobortis sed, dictum in magna. Maecenas convallis tincidunt fermentum. Cras metus lorem, euismod non lorem vel, eleifend scelerisque nibh. Praesent placerat arcu eget convallis commodo. Maecenas luctus feugiat dolor, sit amet pulvinar augue sollicitudin in. Nam iaculis semper urna, at iaculis sapien sagittis non. Proin nec nulla congue, pulvinar elit tincidunt, vulputate leo. Nam venenatis mi vel leo mollis mattis.',
            'Nulla facilisi. Vestibulum ornare ultricies mi sed malesuada. Suspendisse potenti. Nulla varius hendrerit nibh ut semper. Donec venenatis rhoncus augue eu rhoncus. Pellentesque lobortis arcu turpis, vitae lacinia lectus aliquet ac. Aenean sed commodo felis. Sed ac commodo odio, in tempor risus. Donec tortor turpis, condimentum ultrices venenatis eu, viverra ultricies est. Proin consectetur libero id quam mollis eleifend. Phasellus aliquam, augue vel luctus lacinia, ipsum mi cursus risus, quis ultrices nibh sem sed erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean a interdum nulla, a euismod dui. Cras nec condimentum turpis, quis varius felis.'
        ],
        tituloColuna: 'Os personagens mais populares e suas habilidades em Overwatch: Como dominar o jogo'
    }
)

adicionarElemento(
    listaColunas,
    {
        id: 5,
        imagem: '/wireframe.png',
        nome: 'Regras de Rainbow Six',
        autor: 'Dimi Martins',
        conteudo: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu fringilla sem, in mattis diam. Curabitur ut turpis rutrum, venenatis lacus interdum, tincidunt leo. Ut cursus bibendum nulla, a bibendum turpis dignissim id. Maecenas purus felis, tincidunt id leo ac, laoreet consectetur ligula. Duis ullamcorper mauris quis ante vehicula ornare at a ante. Aenean nec porttitor elit, vel viverra risus. Etiam congue dui vitae ex euismod ultricies. Suspendisse fermentum ante et justo convallis, quis suscipit magna efficitur. Integer ac diam eu metus vulputate porta ac sit amet orci. Curabitur auctor mollis mauris. Sed accumsan sollicitudin turpis, nec dapibus ligula mollis a. Cras facilisis aliquam justo, non porta leo consectetur commodo. Nam finibus lacinia nunc. Nullam placerat odio nec gravida posuere. Ut vel iaculis libero, rhoncus molestie sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum eget ultrices enim, et rutrum tellus. Morbi id imperdiet ex. Sed id ligula a leo egestas elementum ac eu metus. Cras elementum tellus vitae sodales bibendum. Praesent id pulvinar lacus. Donec vel lacinia urna. Morbi fringilla risus nibh, a bibendum orci auctor et.',
            'Nunc viverra diam sit amet dolor ultrices, a aliquam dolor venenatis. Pellentesque blandit ex non sapien gravida, sit amet molestie ligula faucibus. Duis laoreet malesuada nulla. Maecenas non dapibus dui, et porta enim. Donec nunc augue, aliquam nec ligula ac, pharetra rutrum odio. Nam hendrerit ut justo eget condimentum. Cras a tellus sed ex vestibulum vestibulum ac eu erat. Suspendisse et semper sem. Cras in venenatis felis. Mauris porta sem ac eros convallis feugiat. Aenean vehicula neque mollis mauris lacinia, ac blandit dolor rutrum. In imperdiet facilisis nulla a porttitor. Quisque placerat nisi quis lacus fermentum feugiat at id orci. Etiam bibendum luctus velit a tempor. Quisque sagittis pretium pellentesque.',
            'Maecenas nec consectetur nulla. Sed metus neque, luctus vitae lobortis sed, dictum in magna. Maecenas convallis tincidunt fermentum. Cras metus lorem, euismod non lorem vel, eleifend scelerisque nibh. Praesent placerat arcu eget convallis commodo. Maecenas luctus feugiat dolor, sit amet pulvinar augue sollicitudin in. Nam iaculis semper urna, at iaculis sapien sagittis non. Proin nec nulla congue, pulvinar elit tincidunt, vulputate leo. Nam venenatis mi vel leo mollis mattis.',
            'Nulla facilisi. Vestibulum ornare ultricies mi sed malesuada. Suspendisse potenti. Nulla varius hendrerit nibh ut semper. Donec venenatis rhoncus augue eu rhoncus. Pellentesque lobortis arcu turpis, vitae lacinia lectus aliquet ac. Aenean sed commodo felis. Sed ac commodo odio, in tempor risus. Donec tortor turpis, condimentum ultrices venenatis eu, viverra ultricies est. Proin consectetur libero id quam mollis eleifend. Phasellus aliquam, augue vel luctus lacinia, ipsum mi cursus risus, quis ultrices nibh sem sed erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean a interdum nulla, a euismod dui. Cras nec condimentum turpis, quis varius felis.'
        ],
        tituloColuna: 'Entenda as regras não escritas que todo jogador de Rainbow Six Siege precisa conhecer'
    }
)

adicionarElemento(
    listaColunas,
    {
        id: 6,
        imagem: '/wireframe.png',
        nome: 'História de Call of Duty',
        autor: 'Dimi Martins',
        conteudo: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu fringilla sem, in mattis diam. Curabitur ut turpis rutrum, venenatis lacus interdum, tincidunt leo. Ut cursus bibendum nulla, a bibendum turpis dignissim id. Maecenas purus felis, tincidunt id leo ac, laoreet consectetur ligula. Duis ullamcorper mauris quis ante vehicula ornare at a ante. Aenean nec porttitor elit, vel viverra risus. Etiam congue dui vitae ex euismod ultricies. Suspendisse fermentum ante et justo convallis, quis suscipit magna efficitur. Integer ac diam eu metus vulputate porta ac sit amet orci. Curabitur auctor mollis mauris. Sed accumsan sollicitudin turpis, nec dapibus ligula mollis a. Cras facilisis aliquam justo, non porta leo consectetur commodo. Nam finibus lacinia nunc. Nullam placerat odio nec gravida posuere. Ut vel iaculis libero, rhoncus molestie sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum eget ultrices enim, et rutrum tellus. Morbi id imperdiet ex. Sed id ligula a leo egestas elementum ac eu metus. Cras elementum tellus vitae sodales bibendum. Praesent id pulvinar lacus. Donec vel lacinia urna. Morbi fringilla risus nibh, a bibendum orci auctor et.',
            'Nunc viverra diam sit amet dolor ultrices, a aliquam dolor venenatis. Pellentesque blandit ex non sapien gravida, sit amet molestie ligula faucibus. Duis laoreet malesuada nulla. Maecenas non dapibus dui, et porta enim. Donec nunc augue, aliquam nec ligula ac, pharetra rutrum odio. Nam hendrerit ut justo eget condimentum. Cras a tellus sed ex vestibulum vestibulum ac eu erat. Suspendisse et semper sem. Cras in venenatis felis. Mauris porta sem ac eros convallis feugiat. Aenean vehicula neque mollis mauris lacinia, ac blandit dolor rutrum. In imperdiet facilisis nulla a porttitor. Quisque placerat nisi quis lacus fermentum feugiat at id orci. Etiam bibendum luctus velit a tempor. Quisque sagittis pretium pellentesque.',
            'Maecenas nec consectetur nulla. Sed metus neque, luctus vitae lobortis sed, dictum in magna. Maecenas convallis tincidunt fermentum. Cras metus lorem, euismod non lorem vel, eleifend scelerisque nibh. Praesent placerat arcu eget convallis commodo. Maecenas luctus feugiat dolor, sit amet pulvinar augue sollicitudin in. Nam iaculis semper urna, at iaculis sapien sagittis non. Proin nec nulla congue, pulvinar elit tincidunt, vulputate leo. Nam venenatis mi vel leo mollis mattis.',
            'Nulla facilisi. Vestibulum ornare ultricies mi sed malesuada. Suspendisse potenti. Nulla varius hendrerit nibh ut semper. Donec venenatis rhoncus augue eu rhoncus. Pellentesque lobortis arcu turpis, vitae lacinia lectus aliquet ac. Aenean sed commodo felis. Sed ac commodo odio, in tempor risus. Donec tortor turpis, condimentum ultrices venenatis eu, viverra ultricies est. Proin consectetur libero id quam mollis eleifend. Phasellus aliquam, augue vel luctus lacinia, ipsum mi cursus risus, quis ultrices nibh sem sed erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean a interdum nulla, a euismod dui. Cras nec condimentum turpis, quis varius felis.'
        ],
        tituloColuna: 'Evolução de Call of Duty: Desde a Segunda Guerra Mundial até o combate moderno'
    }
)
