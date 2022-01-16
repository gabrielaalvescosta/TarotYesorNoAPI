const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const caminhoArq = path.resolve(__dirname, 'database.db')
const db = new sqlite3.Database(caminhoArq);

const CARDS = `
    CREATE TABLE IF NOT EXISTS CARDS (
        "id" INTEGER PRIMARY KEY,
        "url" varchar,
        "card_name" varchar,
        "yes_or_no" varchar,
        "explanation" varchar
    )
`;

const ADD_DADOS_CARDS = `INSERT INTO CARDS
        (id, url, card_name, yes_or_no, explanation)
        VALUES
        (0, 'https://raw.githubusercontent.com/gabrielaalvescosta/ChooseACardTarot/main/cards/00-TheFool.jpg', '0 - O Louco', 'Yes', 'Explicação'),
        (1, 'https://raw.githubusercontent.com/gabrielaalvescosta/ChooseACardTarot/main/cards/major-arcana/01-TheMagician.png', '1 - O Mago', 'Yes', 'Lorem ipsum dollor amet bla bla'),
        (2, 'https://raw.githubusercontent.com/gabrielaalvescosta/ChooseACardTarot/main/cards/major-arcana/02-TheHighPriestess.png', '2 - A Sacerdotisa', 'Yes', 'Explicação da sacerdotisa'),
        (3, 'https://raw.githubusercontent.com/gabrielaalvescosta/ChooseACardTarot/main/cards/major-arcana/03-TheEmpress.png', '3 - A Imperatriz', 'Yes', 'Lorem ipsum dollor amet bla bla'),
        (4, 'https://raw.githubusercontent.com/gabrielaalvescosta/ChooseACardTarot/main/cards/major-arcana/04-TheEmperor.png', '4 - O Imperador', 'Yes', 'Explicação do imperador'),
        (5, 'https://raw.githubusercontent.com/gabrielaalvescosta/ChooseACardTarot/main/cards/major-arcana/05-TheHierophant.png', '5 - O Papa', 'Yes', 'Lorem ipsum dollor amet bla bla dorime'),
        (6, 'https://raw.githubusercontent.com/gabrielaalvescosta/ChooseACardTarot/main/cards/major-arcana/06-TheLovers.png', '6 - Os Amantes', 'Maybe', 'Explicação dos amantes'),
        (7, 'https://raw.githubusercontent.com/gabrielaalvescosta/ChooseACardTarot/main/cards/major-arcana/07-TheChariot.png', '7 - O Carro', 'Yes', 'Lorem o carro'),
        (8, 'https://raw.githubusercontent.com/gabrielaalvescosta/ChooseACardTarot/main/cards/major-arcana/08-Strength.png', '8 - A Força', 'Yes', 'Lorem a força'),
        (9, 'https://raw.githubusercontent.com/gabrielaalvescosta/ChooseACardTarot/main/cards/major-arcana/09-TheHermit.png', '9 - O Eremita', 'Yes', 'Lorem eremita'),
        (10, 'https://raw.githubusercontent.com/gabrielaalvescosta/ChooseACardTarot/main/cards/major-arcana/10-WheelOfFortune.png', '10 - A Roda da Fortuna', 'Maybe', 'Lorem roda da fortuna'),
        (11, 'https://raw.githubusercontent.com/gabrielaalvescosta/ChooseACardTarot/main/cards/major-arcana/11-Justice.png', '11 - A Justiça', 'Yes', 'Lorem justiça'),
        (12, 'https://raw.githubusercontent.com/gabrielaalvescosta/ChooseACardTarot/main/cards/major-arcana/12-TheHangedMan.png', '12 - O Dependurado', 'No', 'Explicacao dependurado'),
        (13, 'https://raw.githubusercontent.com/gabrielaalvescosta/ChooseACardTarot/main/cards/major-arcana/13-Death.png', '13 - A Morte', 'No', 'Lorem a morte'),
        (14, 'https://raw.githubusercontent.com/gabrielaalvescosta/ChooseACardTarot/main/cards/major-arcana/14-Temperance.png', '14 - A Temperança', 'Yes', 'Explicacao temperaca'),
        (15, 'https://raw.githubusercontent.com/gabrielaalvescosta/ChooseACardTarot/main/cards/major-arcana/15-TheDevil.png', '15 - O Diabo', 'No', 'Lorem a morte'),
        (16, 'https://raw.githubusercontent.com/gabrielaalvescosta/ChooseACardTarot/main/cards/major-arcana/16-TheTower.png', '16 - A Torre', 'No', 'Explicacao torre'),
        (17, 'https://raw.githubusercontent.com/gabrielaalvescosta/ChooseACardTarot/main/cards/major-arcana/17-TheStar.png', '17 - A Estrela', 'Yes', 'Lorem estrela'),
        (18, 'https://raw.githubusercontent.com/gabrielaalvescosta/ChooseACardTarot/main/cards/major-arcana/18-TheMoon.png', '18 - A Lua', 'No', 'Explicacao a lua'),
        (19, 'https://raw.githubusercontent.com/gabrielaalvescosta/ChooseACardTarot/main/cards/major-arcana/19-TheSun.png', '19 - O Sol', 'Yes', 'Lorem sol'),
        (20, 'https://raw.githubusercontent.com/gabrielaalvescosta/ChooseACardTarot/main/cards/major-arcana/20-TheJudgement.png', '20 - O Julgamento', 'Yes', 'Explicacao julganto'),
        (21, 'https://raw.githubusercontent.com/gabrielaalvescosta/ChooseACardTarot/main/cards/major-arcana/21-TheWorld.png', '21 - O Mundo', 'Yes', 'Lorem o mundo')
`;

function criaTabelaCards() {
    db.run(CARDS, (e) => {
        if (e) {
            console.log('Erro ao criar a tabela CARDS', e);
        }
    });
}

function insereTabelaCards() {
    db.run(ADD_DADOS_CARDS, (e) => {
        if (e) {
            console.log('Erro ao inserir os dados na tabela CARDS', e);
        }
    });
}

db.serialize(() => {
    criaTabelaCards();
    insereTabelaCards();
})