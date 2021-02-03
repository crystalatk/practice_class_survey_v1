'use strict';

const db = require('./conn');

class TOPICSModel {
    constructor(name, topic_score) {
        this.name = name;
        this.topic_score = topic_score;
    }

    static async getAll() {
        const response = await db.any(`SELECT * FROM topics INNER JOIN ranking_scale ON topics.topic_score = ranking_scale.id ORDER BY ranking_scale.ranking_score DESC;`);
        return response;
    }
};

module.exports = TOPICSModel;