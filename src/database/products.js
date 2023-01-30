
const productsList = [
    {
        id:"1",
        name:"Hidromel Uruçun",
        category: "Bebidas",
        price: "135.99",
        avaliable:"22",
        picture:"https://flordejambu.com/wp-content/uploads/2022/08/hidromel_amazonico.jpg",
        description:"O Hidromel da Amazônia é o único hidromel feito com mel abelhas sem ferrão nativas da região amazônica. Produto único e de alta qualidade!Feito da fermentação do mel diluído em água, o Hidromel é considerado a bebida alcoólica mais antiga do mundo. Bebida doce, extremamente saborosa! Combina super bem com mariscos e carne vermelha. Serve também para fazer drinks com Gin tônica. 14% Vol Bebida alcoólica, venda proibida para menores de 18 anos.",
    },{
        id:"2",
        name:"Katana com Bainha 121.5cm - Cold Steel",
        category: "Espadas",
        price: "997.00",
        avaliable:"30",
        picture:"https://reidacutelaria.vteximg.com.br/arquivos/ids/180538-2000-2000/CS-88-BOK-.jpg?v=637939260679700000",
        description:"As Katanas eram usadas tradicionalmente pelos samurais aespada não era apenas um instrumento de matar pessoas, mas sim uma forma de fazer a justiça e ajudar as pessoas. A espada ultrapassava seu sentido material, simbolicamente, era como um instrumento capaz de cortar as impurezas da mente.Alem de ser extremamente valorizada e cobiçada por colecionadores no mundo inteiro."
    },{
        id:"3",
        name:"Capacete medieval de metal - Gauge Steel",
        category: "Armaduras",
        price: "118.37",
        avaliable:"31",
        picture:"https://d2r50eqdykdm5j.cloudfront.net/wp-content/uploads/2022/06/LB25524-3a.jpg",
        description:"Capacete mais utilizado entre os cavaleiros da tábua quadrada. Usada para proteger a cabeça, esconder o rosto feio e para os mais aventurados também pode ser uma peça de cosplay apesar do seu peso elevado (4kg). Deixe de ser um camponês com um item desse no armário já.",
    },{
        id:"4",
         name:"Escudo de batalha de aço - 14 Gauge",
         category: "Armaduras",
         price: "50.99",
         avaliable:"112",
         picture:"https://d2r50eqdykdm5j.cloudfront.net/wp-content/uploads/2021/11/2124BK14-3.jpg",
         description:"Escudo altamente versátil para ajudar desde o mais alto dos elfos até o mais barbudo dos anões. Madeira trabalhada de carvalho e mógno em oficina e com um acabamento bilhante preto no centro e fosco nas extremidades para você acabar com o ataque inimigo."
    },{
        id:"5",
        name:"Capacete Templário - Bucket Steel",
        category: "Armaduras",
        price: "418.37",
        avaliable:"88",
        picture:"https://d2r50eqdykdm5j.cloudfront.net/wp-content/uploads/2022/06/SNH2288PL14-3.jpg",
        description:"Se sentindo no dever de cumprir a missão de colonização da igreja enquanto derrama sangue por todos os feudos, invadindo castelos, bebendo cerveja e conquistando donzelas, esse item foi feito pra você. Quem nunca quis esconder o rosto ao passar por alguma situação vergonhosa? Agora você pode e ainda ficar estiloso.",
    },{
        id:"6",
        name:"Revolver Soqueira Medieval - relíquia",
        category:"Outros",
        price:"1659.90",
        avaliable:"1",
        picture:"https://trello.com/1/cards/63cf2b0ab4823067a72f868d/attachments/63cf2f700f7b01323d07993a/download/revolver_apachw.jpg",
        description:"Já pensou em atirar, cortar e socar ao mesmo tempo? Pois esse instrumento veio para sanar suas necessidades! Criado pelo mítico Aron Bado em meados do século XIX é um otimo utensílio para quem não sabe o que escolher para atacar o inimigo."
    },{
        id:"7",
        name:"Cadeado mediavel gigante",
        category: "Outros",
        price: "60.99",
        avaliable:"3",
        picture:"https://d2r50eqdykdm5j.cloudfront.net/wp-content/uploads/2021/11/RPT8051-2-1.jpg",
        description:"Trancar jaulas, masmorras e sessões restritas em bibliotecas com um cadeado deste tamanho nunca será um problema. Além disso essa reliquia só possui as duas chaves que o acompanham então fique atendo para não perdê-las. Com um segredo único não há chaveiro capaz de abrir o mesmo",
    },{
        id: "8",
        name: "Vinho do Monastério",
        category: "Bebidas",
        price: "10.497.00",
        avaliable: "1",
        picture:"https://content.paodeacucar.com/wp-content/uploads/2017/04/r%C3%B3tulo-de-vinhos-antigo.jpg",
        description: "Bebida feita por mãos santas, literalmente. Uvas especiais, selecionas e pisoteadas com todo o cuidado de um padre. Te deixa embriagado e abençoado ao mesmo tempo. Amém!" 	
    },{	
        id: "9",
        name: "Maça de batalha com corrente",
        category: "Outros",
        price: "98.88",
        avaliable: "20",
        picture:"https://trello.com/1/cards/63cf2b0ab4823067a72f868d/attachments/63cf2cf602e6b5078b058fa4/download/05151108650348.png",
        description:"Uma arma altamente mortal para todos os tipo de giros que não acertem o próprio usuário. Além de ser extremamente eficiente e perfurante contra armaduras, fornece maior versatilidade para o combate corpo-a-corpo. 1 a cada 5 templários recomendam."
    },{	
        id: "10",
        name: "Espada curta",
        category: "Espadas",
        price: "119.90",
        avaliable: "14",
        picture:"https://i.pinimg.com/564x/57/59/34/5759340fa54b13cadbe82abcc347a87c.jpg",
        description:"Espada de corte preciso e liga de metais altamente resistente e leve. São otimas segundas opções para caso não se possa empunhar um espada longa ou um alabarda. Só não é recomendada em caso do seu inimigo estar portando um arco e flecha e distante de você."
    },{	
        id: "11",
        name: "Espada Longa",
        category: "Espadas",
        price: "329.88",
        avaliable: "9",
        picture:"https://i.pinimg.com/originals/f0/3a/8c/f03a8caf7ae5cc7006432ddf271b4a1e.jpg",
        description:"Uma arma elegante e versátil, feita de liga metálica essa peça tem um excelente manejo principalmente para aqueles que gostam de segurar na espada. Acabamento em tecido e detalhes trabalhados fazem essa peça um item indispensável para qualquer usuário. Recomenda-se colocar numa bainha pois ela corta!"
    },{	
        id: "12",
        name: "Machadinhas Tomahawlk - Par",
        category: "Machados",
        price: "149.75",
        avaliable: "16",
        picture:"https://i.pinimg.com/originals/c6/56/b9/c656b9b781ff50bc3961fdf686ccde62.jpg",
        description:"Excelentes para o arremeso e resistentes o suficiente para o combate corpo-a-corpo essa belezinha tem tamanhos diferentes para maior alcance e versatilidade ao invadir a grâ-bretanha em seu barco viking. Só não é possivel segurá-las junto a uma caneca de chopp ao mesmo tempo."
    },{
        id: "13",
        name: "Machado Épico - Replica God Of War",
        category: "Machados",
        price: "780.75",
        avaliable: "2",
        picture:"https://i.pinimg.com/564x/30/4a/83/304a83e76c1c716585df71f53d554e27.jpg",
        description:"Que a força de Kratos esteja contigo onde quer que vá, esse imponente e trabalhado machado vai te fazer companhia inclusive naquelas noites solitárias na taberna. O negócio é tão bonito que dá ate pena de usar, mas caso seja seu interesse só lembrar de afiar antes e tudo certo."
    },{
        id: "14",
        name: "Dr Plague Mask - com oculos",
        category: "Outros",
        price: "39.50",
        avaliable: "0",
        picture:"https://trello.com/1/cards/63cf2b0ab4823067a72f868d/attachments/63cf4937b848eb38873b24c4/download/1xg.jpg",
        description:"Mascara de época em que a peste negra (ou a bulbônica, não sei ao certo) assolou a humanidade. Nunca entendi o porque desse formato de bico de tucano mas cada um com seus gostos né, quem sou eu pra julgar? Excelente para usar no tranporte publico pós pandemia de covid-19."
    },{
        id:"15",
        name:"Arco composto - com flechas",
        category:"Arqueria",
        price: "238.90",
        avaliable:"20",
        picture:"https://p.turbosquid.com/ts-thumb/c8/bNDOTk/8DqIrX28/antiquewoodenbowwitharrows3dsmodel001/jpg/1546426713/1920x1080/fit_q99/dbb0fa609fc4934055cf51cb60986a7d789718c6/antiquewoodenbowwitharrows3dsmodel001.jpg",
        description:"Arco composto de precisão para os mais exigentes que preferem não estar no campo de batalha. Flechas de bambu e penas de ganso argentino. Se você enxergar bem pode fazer um belo estrago com o mesmo."
    },{
        id:"16",
        name:"Crossbow composto - com dardos",
        category: "Arqueria",
        price: "254.60",
        avaliable: "14",
        picture:"https://www.by-the-sword.com/images/product/large/ah-5102_1_.jpg",
        description:"Armas pequena e portátil porém extremamente eficiente para os bem mirados. Feito em madeira de reflorestamento para ninguém reclamar que você não faz a sua parte para salver o planeta. Acompanha 3 dardos igualmente resistentes com ponta perfurante."
    }
]


export default productsList;