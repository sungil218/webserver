import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Lib_1Schema = new Schema({
    lib_num: {
        type: Number,
        required: true
    },
    seat_num: {
        type: Number
    },
    seat_check: {
        type: Number
    }
});

export default mongoose.model('Lib_1', Lib_1Schema);