/**
 * SleepController
 *
 * @description :: Server-side logic for managing sleeps
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    create: function (req, res, next) {
        var params = req.params.all();

        Sleep.create(params, function (err, data) {
            if (err) return next(err);
            res.status(201);
            res.json(data);
        });

    },
    find: function (req, res, next) {
        var id = req.param('id');
        var idShortCut = isShortcut(id);
        if (idShortCut === true) {
            return next();
        }

        if (id) {
            Sleep.findOne(id, function (err, data) {
                if (data === undefined) return res.notFound();
                if (err) return next(err);
                res.json(data);
            });
        } else {
            var where = req.param('where');

            if (_.isString(where)) {
                where = JSON.parse(where);
            }

            var options = {
                limit: req.param('limit') || undefined,
                skip: req.param('skip') || undefined,
                sort: req.param('sort') || undefined,
                where: where || undefined
            }

            //console.log("this is the options", options);

            Sleep.find(options, function (err, data) {
                if (data === undefined) return res.notFound();
                if (err) return next(err);
                res.json(data);

            });

        }

        function isShortcut(id) {
            if (id === 'find' || id === 'update' || id === 'create' || id === 'destroy') {
                return true;
            }
        }

    },
    update: function (req, res, next) {
        var criteria = {};
        criteria = _.merge({}, req.params.all(), req.body);

        var id = req.param('id');

        //console.log(id);
        //console.log(criteria);

        if (!id) {
            return res.badRequest('No id provided.');
        }

        Sleep.update(id, criteria, function (err, data) {

            if (data.length === 0) return res.notFound();

            if (err) return next(err);

            res.json(data);
        });


    },
    destroy: function (req, res, next) {
        var id = req.param('id');
        //console.log(id)
        if (!id) {
            return res.badRequest('No id provided.');
        }

        Sleep.findOne(id, function (err, data) {
            if (data === undefined) return res.notFound();
            if (err) return next(err);
            
            Sleep.destroy(id, function (err) {
                if (err) return next(err);

                return res.json(data);

            });
        });


        

    }
};