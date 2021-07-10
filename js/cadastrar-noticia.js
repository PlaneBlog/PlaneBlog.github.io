const btn1 = document.querySelector('#codigo1 .botao button');
const btn2 = document.querySelector('#codigo2 .botao button');
const btn3 = document.querySelector('#codigo3 .botao button');
const btn4 = document.querySelector('#codigo4 .botao button');
const gerar = document.querySelector('#inputs .botao button');
const titulo_noticia = document.querySelector('#titulo-da-materia');
const materia_lermais = document.querySelector('#materia-lermais');
const materia_completa = document.querySelector('#materia-completa');
const caminho_fotos = document.querySelector('#caminho-fotos');
const link_videos = document.querySelector('#link-videos');
const enviar_fotos = document.querySelector('.enviar-fotos')
const enviar_videos = document.querySelector('.enviar-videos');

let titulo;
let mat_lermais;
let mat_completa;
let url_fotos;
let url_videos;

gerar.onclick = () => {
  if(titulo_noticia.value == "" || materia_lermais.value == "" || materia_completa.value == ""){
    alert("Preencha todos campos");
    return;
  } else {
    titulo = titulo_noticia.value;
    mat_lermais = materia_lermais.value;
    mat_completa = materia_completa.value;

    data.push(
        {
          "titulo": titulo,
          "materia-lermais": mat_lermais,
          "materia-completa": mat_completa
        }
      )
      console.table(data)

      titulo_noticia.value = ""
      materia_lermais.value = ""
      materia_completa.value = ""
  }
}

enviar_fotos.onclick = () => {
  url_fotos = caminho_fotos.value;
  fotos.push(url_fotos);
  console.table(fotos)
  caminho_fotos.value = "";
}

enviar_videos.onclick = () => {
  url_videos = link_videos.value;
  videos.push(url_videos);
  console.table(videos)
  link_videos.value = "";
}

const data = [];
const fotos = [];
const videos = [];