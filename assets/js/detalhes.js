const listaDeArtigos = {
    "artigos" : [
        {
            "id": 1,
            "titulo": "Empreendedorismo Feminino: Construindo seu império",
            "autor": "Letícia Gonçalves",
            "data": "29/12/2025" ,
            "imagem": "img/empreendedorismo feminino.jpg",
            "tag": "Carreira",
            "texto completo": ["Cada vez mais mulheres transformam sonhos em negócios de sucesso." ,
                "Empreender é conquistar autonomia, desenvolver liderança e abrir caminhos para outras mulheres crescerem com coragem, criatividade e independência financeira."]
        } ,
        {
            "id": 2,
            "titulo": "Self Care: a arte de cuidar de si mesma",
            "autor":"Leandra Meireles",
            "data": "12/02/2026",
            "imagem": "img/self care.jpg",
            "tag": "Cuidado",
            "texto completo": ["Cuidar de si mesma vai além da estética." , 
                "O autocuidado envolve descanso, saúde mental, alimentação equilibrada e momentos de paz que fortalecem a autoestima e o bem-estar feminino."]

        } ,
        {
            "id": 3,
            "titulo": "Viajar Sozinha: Liberdade e Descobertas",
            "autor":"Ana Clara Bretz",
            "data": "13/03/2026",
            "imagem": "img/viagens.jpg",
            "tag": "Viagens",
            "texto completo": ["Viajar sozinha é uma experiência transformadora.", 
                "Além de conhecer novos lugares, mulheres descobrem independência, confiança e aprendem mais sobre si mesmas em cada nova aventura."]
        } ,
        {
            "id": 4,
            "titulo": "Estilo e personalidade",
            "autor":"Julia Silva",
            "data": "07/07/2025",
            "imagem": "img/moda.jpg",
            "tag": "Moda",
            "texto completo": ["Moda é uma forma de expressão.", 
                "O estilo pessoal revela identidade, sentimentos e autenticidade, permitindo que cada mulher demonstre sua personalidade através das roupas, cores e acessórios."]
        } ,
        {
            "id": 5,
            "titulo": "Mulheres e idependência",
            "autor":"Ana Carolina Santos",
            "data": "23/08/2025",
            "imagem": "img/financas.jpg",
            "tag": "Finanças",
            "texto completo": ["A independência feminina representa liberdade de escolhas, autonomia financeira e emocional.",
                "Mulheres independentes constroem seus próprios caminhos, enfrentando desafios com força, determinação e confiança."]
        } ,
        {
            "id": 6,
            "titulo": "Histórias que Inspiram",
            "autor":"Izabella Cristina",
            "data": "27/09/2025",
            "imagem": "img/estudos.jpg",
            "tag": "Entretenimento",
            "texto completo": ["Histórias de mulheres inspiradoras mostram coragem, superação e transformação.", 
                "Cada conquista feminina incentiva outras mulheres a acreditarem em seus sonhos e nunca desistirem dos próprios objetivos."]
        } ,
        {
            "id": 7,
            "titulo": "Entretenimento e emoção",
            "autor":"Yasmin Diogo",
            "data": "08/03/2026",
            "imagem": "img/filmes.jpg",
            "tag": "Entretenimento",
            "texto completo": ["Filmes, séries, músicas e livros criam experiências emocionantes e inesquecíveis.", 
                "O entretenimento feminino conecta emoções, desperta reflexões e oferece momentos de diversão, conforto e inspiração."]
        } ,
        {
            "id": 8,
            "titulo": "Conexões Saudáveis",
            "autor":"Larissa Antunes",
            "data": "12/07/2025",
            "imagem": "img/amizade.jpg",
            "tag": "Relacionamentos",
            "texto completo": ["Relacionamentos saudáveis são construídos com respeito, diálogo e confiança.", 
                "Conexões verdadeiras fortalecem emoções, incentivam o crescimento pessoal e tornam a vida mais leve e equilibrada."]
        } ,
        {
            "id": 9,
            "titulo": "Saúde Feminina: Bem-estar Sempre",
            "autor":"Rayane Larissa",
            "data": "28/12/2025",
            "imagem": "img/saude.jpg",
            "tag": "Saúde",
            "texto completo": ["Cuidar da saúde feminina é essencial para viver com qualidade.", 
                "Consultas regulares, alimentação saudável, exercícios e atenção emocional ajudam mulheres a manter equilíbrio e bem-estar diariamente."]
        } ,
        
    ]
};

const parametrosUrl = new URLSearchParams(window.location.search);
const idTexto = parametrosUrl.get('id');
const idArtigoClicado = parseInt(idTexto);

const artigoEncontrado = listaDeArtigos.artigos.find(artigo => artigo.id === idArtigoClicado);


const containerArtigo = document.getElementById('corpo-do-artigo');
if (artigoEncontrado) {
    const paragrafosHtml = artigoEncontrado["texto completo"].map(p => `<p>${p}</p>`).join('');
    containerArtigo.innerHTML = `
        <img src="${artigoEncontrado.imagem}" alt="${artigoEncontrado.titulo}" class="img-principal-artigo">
        
        <h1>${artigoEncontrado.titulo}</h1>
        
        <div class="autor-data-artigo">
            <span><i class="fa-solid fa-user"></i> Por <strong>${artigoEncontrado.autor}</strong></span>
            <span><i class="fa-solid fa-calendar"></i> ${artigoEncontrado.data}</span>
        </div>
        
        <div class="texto-completo">
            ${paragrafosHtml}
        </div>
    `;

} else {
    containerArtigo.innerHTML = `
        <div class="alert alert-danger text-center" role="alert">
            <h4>Artigo não encontrado!</h4>
            <p>O link acessado parece estar quebrado.</p>
            <hr>
            <a href="index.html" class="btn btn-outline-danger">Voltar para a Home</a>
        </div>
    `;
}
