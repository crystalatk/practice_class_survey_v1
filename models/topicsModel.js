'use strict';

const db = require('./conn');

class TOPICSModel {
    constructor(name, topic_score) {
        this.name = name;
        this.topic_score = topic_score;
    }

    static async getAll() {
        const response = await db.any(`SELECT * FROM topics;`);
        return response;
    }
};

module.exports = TOPICSModel;