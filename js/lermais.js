const conteudo1 = document.querySelector("#content1");
const lermais1 = document.querySelector("#first_content");
const conteudo2 = document.querySelector("#content2");
const lermais2 = document.querySelector("#second_content");
const conteudo3 = document.querySelector("ignore");
const lermais3 = document.querySelector("#third_content");

const data = [
    {
        content1: "O avião mais moderno: Airbus A350 XWB é uma aeronave widebody bimotor turbofan, desenvolvida e fabricada pela Airbus. O A350 é a primeira aeronave fabricada pela Airbus com fuselagem e asas feitas principalmente com fibra de carbono e polímero. Sua capacidade de passageiros varia de 280 a 366 passageiros.",

        content2: "O avião mais moderno: Airbus A350 XWB é uma aeronave widebody bimotor turbofan, desenvolvida e fabricada pela Airbus. O A350 é a primeira aeronave fabricada pela Airbus com fuselagem e asas feitas principalmente com fibra de carbono e polímero. Sua capacidade de passageiros varia de 280 a 366 passageiros.<br><br><b>Informações</b><br><br> Passageiros: 270–440<br> Motor(es): 2x Rolls-Royce Trent XWB<br> Velocidade máxima: 945 km/h (510 kn)."
    },
    {
        content1: "O Embraer C-390 Millennium é um avião para transporte tático/logístico e reabastecimento em voo, desenvolvido e fabricado pela Embraer Defesa e Segurança, subsidiária do grupo brasileiro Embraer. Sua designação de projeto, desenvolvimento e até o início de produção era Embraer KC-390. Em novembro de 2019, recebeu da Embraer a nova designação Embraer C-390 Millennium.",

        content2: "O Embraer C-390 Millennium é um avião para transporte tático/logístico e reabastecimento em voo, desenvolvido e fabricado pela Embraer Defesa e Segurança, subsidiária do grupo brasileiro Embraer. Sua designação de projeto, desenvolvimento e até o início de produção era Embraer KC-390. Em novembro de 2019, recebeu da Embraer a nova designação Embraer C-390 Millennium. O C-390 Millennium foi desenvolvido como um jato militar de transporte, anunciado pela primeira vez na feira de materiais de defesa Latin America Aero & Defence (LAAD), no Rio de Janeiro em abril de 2007. Na edição de 2009 do mesmo evento, foi anunciado formalmente o lançamento do programa, com a presença do então presidente Luiz Inácio Lula da Silva.<br><br><b>Informações</b><br><br>País de origem: Brasil<br><br>Pesos e capacidades<br>Vazio: 51 000 kg (112 000 lb)<br><br>Propulsão: Dois Turbofans Pratt & Whitney IAE V2500-E5 - 31 330 lbf (139 400 N) de empuxo cada.<br><br>Desempenho<br>Velocidade máxima: 988 km/h<br>Altitude máxima da operação: 36 000 ft (11 000 m)<br><br>Dimensões<br>Comprimento: 35,2 m (115 ft)<br>Envergadura: 35 m (115 ft)<br>Altura: 11,8 m (38,7 ft)"
    },
    {
        content1: '<p><img width="620px" src="img/img3.jpg" /> <b>1. Bagagens perdidas e não reclamadas são doadas ou leiloadas</b><br> Quase 2 milhões de bagagens despachadas em aviões são perdidas todos os anos no mundo. A grande maioria é recuperada. Outras não são encontradas e o passageiro recebe uma indenização da companhia aérea. Mas, uma parte das bagagens não é reclamada, ou não tem proprietário identificado. Nestes casos, no Brasil, as empresas fazem uma doação para instituições beneficentes. Nos Estados Unidos e em alguns países da Europa as malas sem dono são leiloadas. Portanto, se você tinha uma mala que nunca mais viu, provavelmente foi esse o destino dela… <br><hr><br> <img width="620px" src="img/img4.jpg" /> <b>2.	É difícil calcular a duração exata de uma viagem</b><br> Existem diversas variáveis que influenciam no tempo de voo, como distância, altitude, tipo de aeronave, clima (especialmente a direção dos ventos) e o tráfego aéreo nos aeroportos de saída e chegada e ao longo do trajeto. Por melhor que seja a previsão, não é incomum acontecerem eventos não esperados. Por isso, as companhias aéreas geralmente utilizam um software para calcular o tempo de viagem, mas sempre adicionam uma margem de segurança para contingências (que pode chegar a 20% do tempo total estimado), evitando assim atrasos em cascata na programação dos voos. Mas nada como uma tempestade inesperada, um passageiro atrasado, ou uma manutenção de última hora na aeronave para fazer com que o voo atrase assim mesmo.</p>',

        content2: '<p><img width="620px" src="img/img3.jpg" /> <b>1. Bagagens perdidas e não reclamadas são doadas ou leiloadas</b><br> Quase 2 milhões de bagagens despachadas em aviões são perdidas todos os anos no mundo. A grande maioria é recuperada. Outras não são encontradas e o passageiro recebe uma indenização da companhia aérea. Mas, uma parte das bagagens não é reclamada, ou não tem proprietário identificado. Nestes casos, no Brasil, as empresas fazem uma doação para instituições beneficentes. Nos Estados Unidos e em alguns países da Europa as malas sem dono são leiloadas. Portanto, se você tinha uma mala que nunca mais viu, provavelmente foi esse o destino dela… <br><hr><br> <img width="620px" src="img/img4.jpg" /> <b>2.	É difícil calcular a duração exata de uma viagem</b><br> Existem diversas variáveis que influenciam no tempo de voo, como distância, altitude, tipo de aeronave, clima (especialmente a direção dos ventos) e o tráfego aéreo nos aeroportos de saída e chegada e ao longo do trajeto. Por melhor que seja a previsão, não é incomum acontecerem eventos não esperados. Por isso, as companhias aéreas geralmente utilizam um software para calcular o tempo de viagem, mas sempre adicionam uma margem de segurança para contingências (que pode chegar a 20% do tempo total estimado), evitando assim atrasos em cascata na programação dos voos. Mas nada como uma tempestade inesperada, um passageiro atrasado, ou uma manutenção de última hora na aeronave para fazer com que o voo atrase assim mesmo. <br><br><hr><br> <img width="620px" src="img/img5.jpg" /> <b>3.	Pernas podem inchar durante voos mais longos</b><br> Se você passar mais de duas horas voando, pode notar que seus pés, tornozelos e pernas se expandiram. Em alguns casos, o inchaço é bem visível. E isso são sintomas comuns da mudança na pressão do ar e de uma menor hidratação do corpo, especialmente se você ficar sentado durante muito tempo, sem se movimentar durante a viagem. Por isso, o ideal é utilizar calçados e roupas confortáveis e leves durante viagens longas. Andar um pouco no avião, movimentar os pés e as pernas mesmo sentado e beber bastante água também ajuda muito, não só a reduzir o inchaço, mas também a prevenir tromboses. <br><br><hr><br> <img width="620px" src="img/img6.webp" /> <b>4.	O rastro branco deixado pelos aviões nos céus é chamado de trilha de condensação</b><br> Aquelas faixas brancas no céu, que ficam depois que um avião passa em elevada altitude, são chamadas de trilhas, rastros ou esteiras de condensação (contrail, em inglês). Isso acontece porque o avião libera vapor da combustão do motor, que se mistura com a atmosfera ao redor, muito mais fria e úmida devido à elevada altitude, deixando uma nuvem fina de cristais de gelo que demora a se dissipar.</p>'
    }
]

lermais1.onclick = () => {
    
    if(lermais1.textContent === "Ler mais"){
        conteudo1.innerHTML = data[0].content2;
        lermais1.textContent = "Mostrar Menos";
        return;
    } 
    
    if(lermais1.textContent === "Mostrar Menos") {
        conteudo1.innerHTML = data[0].content1;
        lermais1.textContent = "Ler mais";
        return;
    }
}

lermais2.onclick = () => {
    
    if(lermais2.textContent === "Ler mais"){
        conteudo2.innerHTML = data[1].content2;
        lermais2.textContent = "Mostrar Menos";
        return;
    } 
    
    if(lermais2.textContent === "Mostrar Menos") {
        conteudo2.innerHTML = data[1].content1;
        lermais2.textContent = "Ler mais";
        return;
    }
}

lermais3.onclick = () => {
    
    if(lermais3.textContent === "Ler mais"){
        conteudo3.innerHTML = ''
        conteudo3.innerHTML = data[2].content2 + conteudo3.innerHTML;
        lermais3.textContent = "Mostrar Menos"
        return;
    } 
    
    if(lermais3.textContent === "Mostrar Menos") {
        conteudo3.innerHTML = '';
        conteudo3.innerHTML = data[2].content1 + conteudo3.innerHTML;
        lermais3.textContent = "Ler mais"
        return;
    }
}