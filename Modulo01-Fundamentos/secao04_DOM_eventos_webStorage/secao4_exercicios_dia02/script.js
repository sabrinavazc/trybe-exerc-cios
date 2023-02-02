// Adicione a tag h1 com o texto TrybeTrip - Agência de Viagens como filho da tag body;

let h1 = document.createElement('h1');
document.body.appendChild(h1);
h1.innerHTML = "TrybeTrip - Agência de Viagens";

// Adicione a tag main com a classe main-content como filho da tag body;

let mainContent = document.createElement('main');
document.body.appendChild(mainContent);
mainContent.classList.add('main-content');

// Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

let centerContent = document.createElement('section');
mainContent.appendChild('centerContent');
centerContent.classList.add('center-content');

// Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

let p = document.createElement('p');
centerContent.appendChild('p');
p.innerHTML = 'Vamos testar algo ficarei feliz se funcionar.';


// Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

// Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;

// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, … como valores da lista. Essa lista deve ser filha do section criado no passo 6;

// Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.