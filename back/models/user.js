


let pub = {};

pub.login = function(req, res) {

    if(req.param('username'.trim() == '1'))
        res.send('login success')

}

module.exports = pub;
