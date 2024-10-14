const users = [
    {id:1, name:'Usuario 1', email:'user1@gmail.com'},
    {id:2, name:'Usuario 2', email:'user2@gmail.com'}
];

const getUsersHandler  = (req, res) =>{
    res.json(users);
}

const getUsersByIdHandler = (req, res) => {
    const user = user.find(u => u.id === parseInt(req.params.id));
    if(!user) return res.status(404).send('Usuario no encontrado');
    res.json(user);
};

module.exports = {
    getUsersHandler,
    getUsersByIdHandler
};