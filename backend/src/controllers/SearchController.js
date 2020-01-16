const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/ParseStringAsArray')

module.exports = {
    async index(request, response) {
        const { latitude, longitude, techs } = request.query

        const techsArray = parseStringAsArray(techs)

        const dev = await Dev.find({
            techs:{
                $in: techsArray,
                location: {
                    $near: {
                        $geometry: {
                            tupe: 'Point',
                            cordinates: [longitude, latitude],
                        },
                        $maxDistance: 10000,
                        
                    }
                }
            }
        })

        return response.json({ devs})
    }
}