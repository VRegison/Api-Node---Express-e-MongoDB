import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://regison:xfak002200@vregison.o0aka.mongodb.net/node-express",{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

let db = mongoose.connection;

export default db;