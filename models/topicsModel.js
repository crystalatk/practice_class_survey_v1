'use strict';

const db = require('./conn');

class TOPICSModel {
    constructor(id, ranking_score, name, topic_score) {
        this.id = id;
        this.ranking_score = ranking_score;
        this.name = name;
        this.topic_score = topic_score;
    }

    static async getAll() {
        const response = await db.any(`SELECT * FROM topics INNER JOIN ranking_scale ON topics.topic_score = ranking_scale.id_rank ORDER BY ranking_scale.ranking_score DESC;`);
        return response;
    }

    static async getByID(id) {
        const response = await db.one(`SELECT * FROM topics INNER JOIN ranking_scale ON topics.topic_score = ranking_scale.id_rank WHERE topics.id = '${id}';`);
        return response;
    }

    async changeEntry(topic_score) {
        const response = await db.result(`UPDATE topics SET topic_score = $1 WHERE id = $2`, [topic_score, this.id])
        return response;
    }
};

module.exports = TOPICSModel;