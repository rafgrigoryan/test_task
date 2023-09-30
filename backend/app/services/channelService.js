const User = require('../models/User');
const Channel = require('../models/Channel')

const getChannels = async (userId) => {
    try {
        const channels = await Channel.find({ members: userId })
            .select('id name description')
            .exec();

        return {
            data: { channels },
            error: false,
            message: 'Logged in Successfully'
        };

    } catch (error) {
        throw error
    }
};

module.exports = { getChannels }