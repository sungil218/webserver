import Lib_1 from './models/Lib_1';
export const resolvers = {
    Query: {
        async seat_check() {
            return await Lib_1.find({seat_check:{$eq:1}});
        }
    }
}