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
        (0, 'https://raw.githubusercontent.com/gabrielaalvescosta/ChooseACardTarot/main/cards/00-TheFool.png', '0 - The Fool', 'Yes', 'New beginnings, spontaneity, adventure, innocence, potential, faith, fearlessness, a leap of faith, originality, freedom from constraints, purity of action, acting without malice, being in the present, acting without thinking, eccentricity, silliness, seeking freedom.'),
        (1, 'https://raw.githubusercontent.com/gabrielaalvescosta/ChooseACardTarot/main/cards/01-TheMagician.png', '1 - The Magician', 'Yes', 'Creativity, action, power, manifestation, skill, communication – oral, written & electronic, technology, magic, work, self-employment, a smooth talker, having the gift of the gab, will-power, directing your will, creative visualization, manifesting your desires.'),
        (2, 'https://raw.githubusercontent.com/gabrielaalvescosta/ChooseACardTarot/main/cards/02-TheHighPriestess.png', '2 - The High Priestess', 'Maybe', 'Mystery, intuition, inner-knowing, self-trust, spiritual insight, emotional stability, divination, esoteric wisdom/knowledge, things yet to be revealed, your higher-self, spirit guides, discovering your own truth, a single woman; a chaste woman; morality, sanctity.'),
        (3, 'https://raw.githubusercontent.com/gabrielaalvescosta/ChooseACardTarot/main/cards/03-TheEmpress.png', '3 - The Empress', 'Yes', 'Nurturing, abundance, fertility, mothering, your mother, love, beauty, a businesswoman, mother earth, a multi-tasker, pregnancy, creativity, solving problems creatively, fulfilling your potential, a successful business or opportunity; social status.'),
        (4, 'https://raw.githubusercontent.com/gabrielaalvescosta/ChooseACardTarot/main/cards/04-TheEmperor.png', '4 - The Emperor', 'Yes', 'Authority, order, structure, authority, your boss, leadership, your father, the establishment, promotion to a senior role, asserting yourself, ambition, law and order, taking a stand, firmness with others & yourself, rational thought, responsibility, stability, fairness.'),
        (5, 'https://raw.githubusercontent.com/gabrielaalvescosta/ChooseACardTarot/main/cards/05-TheHierophant.png', '5 - The Hierophant', 'Maybe', 'Group identity, large institutions, education, teaching, learning, tradition, orthodoxy, the status quo, religion, a guru or teacher, spiritual guidance, occult or mystical groups, divine laws, seeking counsel and advice, church, spiritual retreat, brotherhood.'),
        (6, 'https://raw.githubusercontent.com/gabrielaalvescosta/ChooseACardTarot/main/cards/06-TheLovers.png', '6 - The Lovers', 'Maybe', 'Love, choices, partnerships, affection, being at a crossroads, togetherness, going into business with another, being duty bound, a love affair, falling in love, commitment, an engagement, choosing between two lovers, harmony, trust, marriage, contracts, union.'),
        (7, 'https://raw.githubusercontent.com/gabrielaalvescosta/ChooseACardTarot/main/cards/07-TheChariot.png', '7 - The Chariot', 'Yes', 'Drive, will power, direction, ambition, confidence, victory, success, a journey, transportation, success with little or no support, overcoming obstacles, triumph in the face of adversity, coming to the aid of another, mastering a skill, driving force, impetus, energy.'),
        (8, 'https://raw.githubusercontent.com/gabrielaalvescosta/ChooseACardTarot/main/cards/08-Strength.png', '8 - The Strength', 'Yes', 'Inner strength, self-assurance, self-control, self-belief, patience, confidence, enjoying power, lust, sex, sexuality, eroticism, heroic acts, strength through personal power & not violence, vitality, virility, potency, confidence without arrogance, compassionate.'),
        (9, 'https://raw.githubusercontent.com/gabrielaalvescosta/ChooseACardTarot/main/cards/09-TheHermit.png', '9 - The Hermit', 'Yes', 'Introspection, contemplation, wanting or finding solitude, private self-reflection, seeking enlightenment & spiritual experiences, meditation, being discreet, privacy, home study, withdrawing from society, patience, self-exploration, therapy/counseling, self-help.'),
        (10, 'https://raw.githubusercontent.com/gabrielaalvescosta/ChooseACardTarot/main/cards/10-WheelOfFortune.png', '10 - The Wheel of Fortune', 'Maybe', 'Luck, chance, opportunity, changes, a turning point, movement, winning, the cycle of life, ups and downs, fate, destiny, a chance meeting that can change your life, what goes around comes around, winning at a game of chance, a definite yes, good times, success.'),
        (11, 'https://raw.githubusercontent.com/gabrielaalvescosta/ChooseACardTarot/main/cards/11-Justice.png', '11 - The Justice', 'Maybe', 'Justice, karma, balance and equilibrium, truth, fairness, responsibility, accountability, integrity, dignity, agreements, legal affairs, a court case or tribunal, consulting a lawyer, checking legal documents, seeking fairness through clarity, trial outcomes, justice system.'),
        (12, 'https://raw.githubusercontent.com/gabrielaalvescosta/ChooseACardTarot/main/cards/12-TheHangedMan.png', '12 - The Hanged Man', 'No', 'Letting go, sacrifice for gain, surrender, breaking patterns, a crisis, delays, seeing from another direction, a fresh perspective, suspension of activity, giving something up, experiencing a metamorphosis, spiritual advancement, a detachment from the material.'),
        (13, 'https://raw.githubusercontent.com/gabrielaalvescosta/ChooseACardTarot/main/cards/13-Death.png', '13 - Death', 'No', 'Endings, mortality, profound change, letting go of emotional attachments, severing ties, it’s over, the end of an era or cycle, failure, loss. For some: transformation, renewal, rebirth, the breaking of old habits.'),
        (14, 'https://raw.githubusercontent.com/gabrielaalvescosta/ChooseACardTarot/main/cards/14-Temperance.png', '14 - Temperance', 'Yes', 'Harmony, balance, synthesis, moderation, blending, synergy, alchemy, being temperate, blending opposites, angel communication, connecting with your guides, merging, looking for divine intervention; beginning self-help/therapy, self-acceptance.'),
        (15, 'https://raw.githubusercontent.com/gabrielaalvescosta/ChooseACardTarot/main/cards/15-TheDevil.png', '15 - The Devil', 'No', 'Bondage, temptation, enslavement, addictions to sex/drugs/drink/money, fear & doubt, materialism, lies, violence, unhealthy relationships, sexual deviancy/gratification, obsessions, hard work/over worked, tied to the job, feeling trapped & without options.'),
        (16, 'https://raw.githubusercontent.com/gabrielaalvescosta/ChooseACardTarot/main/cards/16-TheTower.png', '16 - The Tower', 'No', 'Sudden & unexpected change, upheaval, destruction, ruin, catastrophe, release, revelation, breaking down of old forms, renovation, an accident or damage to the home, bankruptcy, redundancy or loss of work, being overthrown or ousted, house repossession.'),
        (17, 'https://raw.githubusercontent.com/gabrielaalvescosta/ChooseACardTarot/main/cards/17-TheStar.png', '17 - The Star', 'Yes', 'Hope, happiness, opportunities, optimism, renewal, spirituality, cosmic blessings, help in all forms, beauty & aesthetics, astrology, astronomy, the heavens, wishing on a star, good health & healing, an inspirational person, a period of tranquility, alternative therapies.'),
        (18, 'https://raw.githubusercontent.com/gabrielaalvescosta/ChooseACardTarot/main/cards/18-TheMoon.png', '18 - The Moon', 'No', 'Dreams but also nightmares, illusion, hidden things – particularly enemies, insecurity, mystery, falsehoods, visions, mental confusion, a dark night of the soul, a difficult period, lacking clarity, deception, secrets, increased psychic ability and experiences.'),
        (19, 'https://raw.githubusercontent.com/gabrielaalvescosta/ChooseACardTarot/main/cards/19-TheSun.png', '19 - The Sun', 'Yes', 'Life, energy, vitality, joy, enlightenment, warmth, manifestation, happiness, YES! riches, marriage, good times, success, clear thinking, optimism, blessings, good fortune, a good holiday, nice weather; male archetype/masculinity, the conscious mind.'),
        (20, 'https://raw.githubusercontent.com/gabrielaalvescosta/ChooseACardTarot/main/cards/20-TheJudgement.png', '20 - O Judgement', 'Yes', 'Redemption, rebirth, an awakening, renewal, a call to action, spiritual or religious calling, reincarnation, a realization, a change that has already occurred, end of an era, a rite of passage, a period of transition, decision making, the final outcome, a judgement, moving on.'),
        (21, 'https://raw.githubusercontent.com/gabrielaalvescosta/ChooseACardTarot/main/cards/21-TheWorld.png', '21 - The World', 'Yes', 'Completion, fulfillment, possibilities, outcomes, realisations, wholeness, success, totality, moving – particularly abroad, success and successful conclusions, the journey’s end, goal achievement; world travel, exploration, anthropology, socializing, studying cultures.')
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