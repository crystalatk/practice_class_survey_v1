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

module.exports = router