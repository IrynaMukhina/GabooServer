module.exports = {
    getData,
    notFound
}

function getData(req, res) {
    res.json(require('./dummy-data/data.json'));
}

function notFound(req, res) {
    res.status(404).send();
}