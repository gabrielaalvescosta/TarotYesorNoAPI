const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const caminhoArq = path.resolve(__dirname, 'database.db')
const db = new sqlite3.Database(caminhoArq);

const CARDS = `
    CREATE TABLE IF NOT EXISTS CARDS (
        "id" INTEGER PRIMARY KEY AUTOINCREMENT,
        "url" varchar,
        "card_name" varchar,
        "yes_or_no" varchar,
        "explanation" varchar
    )
`;

const ADD_DADOS_CARDS = `INSERT INTO CARDS
        (url, card_name, yes_or_no, explanation)
        VALUES
        ('./major-arcana/00-TheFool.png', '0 - O Louco', 'SIM', 'Explicação'),
        ('major-arcana/00-TheFool.png', '0 - O Louco', 'Sim', 'Lorem Ipsum'),
        ('major-arcana/01-TheMagician.png', '1 - O Mago', 'Sim', 'Lorem ipsum dollor amet bla bla'),
        ('major-arcana/02-TheHighPriestess.png', '2 - A Sacerdotisa', 'Sim', 'Explicação da sacerdotisa'),
        ('major-arcana/03-TheEmpress.png', '3 - A Imperatriz', 'Sim', 'Lorem ipsum dollor amet bla bla'),
        ('major-arcana/04-TheEmperor.png', '4 - O Imperador', 'Sim', 'Explicação do imperador'),
        ('major-arcana/05-TheHierophant.png', '5 - O Papa', 'Sim', 'Lorem ipsum dollor amet bla bla dorime'),
        ('major-arcana/06-TheLovers.png', '6 - Os Amantes', 'Talvez', 'Explicação dos amantes'),
        ('major-arcana/07-TheChariot.png', '7 - O Carro', 'Sim', 'Lorem o carro'),
        ('major-arcana/08-Strength.png', '8 - A Força', 'Sim', 'Lorem a força'),
        ('major-arcana/09-TheHermit.png', '9 - O Eremita', 'Sim', 'Lorem eremita'),
        ('major-arcana/10-WheelOfFortune.png', '10 - A Roda da Fortuna', 'Talvez', 'Lorem roda da fortuna'),
        ('major-arcana/11-Justice.png', '11 - A Justiça', 'Sim', 'Lorem justiça'),
        ('major-arcana/12-TheHangedMan.png', '12 - O Dependurado', 'Não', 'Explicacao dependurado'),
        ('major-arcana/13-Death.png', '13 - A Morte', 'Não', 'Lorem a morte'),
        ('major-arcana/14-Temperance.png', '14 - A Temperança', 'Sim', 'Explicacao temperaca'),
        ('major-arcana/15-TheDevil.png', '15 - O Diabo', 'Não', 'Lorem a morte'),
        ('major-arcana/16-TheTower.png', '16 - A Torre', 'Não', 'Explicacao torre'),
        ('major-arcana/15-TheStar.png', '17 - A Estrela', 'Sim', 'Lorem estrela'),
        ('major-arcana/16-TheMoon.png', '18 - A Lua', 'Não', 'Explicacao a lua'),
        ('major-arcana/15-TheSun.png', '19 - O Sol', 'Sim', 'Lorem sol'),
        ('major-arcana/16-TheJudgement.png', '20 - O Julgamento', 'Sim', 'Explicacao julganto'),
        ('major-arcana/15-TheWorld.png', '21 - O Mundo', 'Sim', 'Lorem o mundo')
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