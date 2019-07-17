const jwt = require('jsonwebtoken');

//verificar token

let verificaToken = (req, res, next) => {
    let token = req.get('token');

    // res.json({
    //     token: token
    // });
    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'token no valido'
                }
            });
        }
        req.usuario = decoded.usuario;
        next();
    });

};

//verificar adminrole

let verificaAdmin_role = (req, res, next) => {
    let usuario = req.usuario;
    if (usuario.role === 'ADMIN_ROLE') {
        next();
    } else {
        res.json({
            ok: false,
            err: {
                message: 'el usuario no es admin'
            }
        });
    }

}

module.exports = {
    verificaToken,
    verificaAdmin_role
}