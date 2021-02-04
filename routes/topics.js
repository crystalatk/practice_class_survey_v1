'use strict';

const { getBySlug } = require('../models/topicsModel');

const express = require('express'),
    router = express.Router(), 
    topicsModel = require('../models/topicsModel');


router.get('/', async (req, res) => {
    const topicsData = await topicsModel.getAll();
    res.render('template', {
        locals: {
            title: "Topics I Have Learned",
            data: topicsData,
        },
        partials: {
            body: "partials/topics",
        }
    });
});

router.get('/change_response:id', async (req, res) => {
    const { id } = req.params;
    const topicsData = await topicsModel.getByID(id);
    const statusData = await topicsModel.getAllStatuses();
    console.log(statusData);
    res.render('template', {
        locals: {
            title: "Change Response",
            topicsData,
            statusData,
        },
        partials: {
            body: "partials/change_response",
        }
    });
});

router.post('/:id', async (req, res) => {
    const { id } = req.params;
    const { topic_score } = req.body;
    const topic = new topicsModel(id);
    const response = await topic.changeEntry(topic_score);
    if(response.rowCount >= 1) {
        res.redirect('/topics')
    } else {
        res.sendStatus(500);
    }
})

module.exports = router