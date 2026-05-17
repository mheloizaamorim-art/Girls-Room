// Banco de dados do meu site: Conteúdo dos artigos
const dados = {
    "artigos" : [
        {
            "id": 1,
            "titulo": "Empreendedorismo Feminino: Construindo seu império",
            "resumo": "Descubra histórias inspiradoras de mulheres que transformaram suas paixões em negócios de sucesso. Dicas práticas, desafios superados e muito empoderamento",
            "autor": "Letícia Gonçalves",
            "data": "29/12/2025" ,
            "imagem": "img/empreendedorismo feminino.jpg",
            "tag": "Carreira",
            "destaque": true
        } ,
        {
            "id": 2,
            "titulo": "Self Care: a arte de cuidar de si mesma",
            "resumo": "Autocuidado envolve hábitos saudáveis físicos e mentais, promovendo bem-estar, equilíbrio emocional, autoestima, saúde, produtividade e qualidade de vida diária.",
            "autor":"Leandra Meireles",
            "data": "12/02/2026",
            "imagem": "img/self care.jpg",
            "tag": "Cuidado",
            "destaque": true

        } ,
        {
            "id": 3,
            "titulo": "Viajar Sozinha: Liberdade e Descobertas",
            "resumo": "Viajar fortalece mulheres, proporciona independência, autoconfiança, novas experiências culturais, amizades inesquecíveis, aventuras incríveis e crescimento pessoal constante.",
            "autor":"Ana Clara Bretz",
            "data": "13/03/2026",
            "imagem": "img/viagens.jpg",
            "tag": "Viagens",
            "destaque": true
        } ,
        {
            "id": 4,
            "titulo": "Estilo e personalidade",
            "resumo": "A moda feminina expressa personalidade, criatividade e autoestima, permitindo combinações únicas, tendências modernas e autenticidade em diferentes ocasiões.",
            "autor":"Julia Silva",
            "data": "07/07/2025",
            "imagem": "img/moda.jpg",
            "tag": "Moda",
            "destaque": false
        } ,
        {
            "id": 5,
            "titulo": "Mulheres e idependência",
            "resumo": "Organização financeira ajuda mulheres conquistarem independência, segurança, estabilidade, realização de sonhos, investimentos inteligentes e tranquilidade no futuro.",
            "autor":"Ana Carolina Santos",
            "data": "23/08/2025",
            "imagem": "img/financas.jpg",
            "tag": "Finanças",
            "destaque": false
        } ,
        {
            "id": 6,
            "titulo": "Histórias que Inspiram",
            "resumo": "Livros femininos proporcionam reflexão, emoção, aprendizado, inspiração, conforto emocional e novas perspectivas sobre relacionamentos, carreira e autoconhecimento.",
            "autor":"Izabella Cristina",
            "data": "27/09/2025",
            "imagem": "img/estudos.jpg",
            "tag": "Entretenimento",
            "destaque": false
        } ,
        {
            "id": 7,
            "titulo": "Entretenimento e emoção",
            "resumo": "Filmes voltados ao público feminino misturam romance, humor, drama e inspiração, criando experiências emocionantes, divertidas e inesquecíveis.",
            "autor":"Yasmin Diogo",
            "data": "08/03/2026",
            "imagem": "img/filmes.jpg",
            "tag": "Entretenimento",
            "destaque": false
        } ,
        {
            "id": 8,
            "titulo": "Conexões Saudáveis",
            "resumo": "Relacionamentos saudáveis fortalecem confiança, respeito, comunicação, parceria emocional e ajudam mulheres construírem vínculos mais felizes e equilibrados.",
            "autor":"Larissa Antunes",
            "data": "12/07/2025",
            "imagem": "img/amizade.jpg",
            "tag": "Relacionamentos",
            "destaque": false
        } ,
        {
            "id": 9,
            "titulo": "Saúde Feminina: Bem-estar Sempre",
            "resumo": "Cuidar da saúde feminina envolve prevenção, alimentação equilibrada, exercícios físicos, acompanhamento médico e atenção constante ao corpo.",
            "autor":"Rayane Larissa",
            "data": "28/12/2025",
            "imagem": "img/saude.jpg",
            "tag": "Saúde",
            "destaque": false
        } ,
        
    ]
};

//  Lembrar da analogia da função e da máquina de café
// Algumas dúvidas sobre função e constantes: perguntar ao Wesley depois

function carregarDestaque(){
    const espacos = document.querySelectorAll('.conteudo-card');
    const artigosemdestaque = dados.artigos.filter(artigo => artigo.destaque === true);

    espacos.forEach((espacodaVez, i) => {
        const artigo = artigosemdestaque[i];

        espacodaVez.innerHTML = `
            <span class="tag-destaque">
                 <i class="fa-solid fa-star"></i> Destaque da Semana
            </span>

            <h2 class="titulo-artigo">${artigo.titulo}</h2>
            <p class="autor"> <i class="fa-solid fa-user"></i> <strong>${artigo.autor}</strong></p>
            <p class="data"> <i class="fa-solid fa-calendar"></i> ${artigo.data}</p>
            <p class="resumo-artigo">${artigo.resumo}</p>
            <a href="detalhes.html?id=${artigo.id}" class="btn btn-primary">Ler mais</a>
        `;
    });
}
carregarDestaque();

function carregarRecentes(){
    const caixas = document.querySelectorAll('.card-recente'); 
    const artigosrecentes = dados.artigos.filter(artigo => artigo.destaque === false);

    caixas.forEach((caixadaVez, i) => {
        const artigo = artigosrecentes[i]; 

        if (artigo) {
            caixadaVez.innerHTML = `
                <div class="card h-100 shadow-sm">
                    <img src="${artigo.imagem}" class="card-img-top" alt="${artigo.titulo}">
                    <div class="card-body">
                        <span class="badge bg-secondary mb-2">${artigo.tag}</span>
                        <h5 class="card-title">${artigo.titulo}</h5>
                        <p class="card-text">${artigo.resumo}</p>
                        <p class="text-muted small"> <i class="fa-solid fa-user"></i> ${artigo.autor}</p>
                        <a href="detalhes.html?id=${artigo.id}" class="btn btn-outline-primary button-ler-mais">Ler mais</a>
                    </div>
                </div>
            `;
        }
    }); 
}
carregarRecentes();
