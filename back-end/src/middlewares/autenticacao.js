import jsonwebtoken from "jsonwebtoken";

export default function autenticacao(req, res, next) {
    // Validação do token JWT

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: "JWT token is missing" });
    }

    // Bearer

    const [, token] = authHeader.split(" ");

    try {
        const decoded = jsonwebtoken.verify(token, process.env.SECRET, {
            ignoreExpiration: true,
        });

        const { sub, exp } = decoded;

        // x 1000 para conversão
        // + 86400000 para adicionar um dia ao vencimento (para não deslogar o usuário imediatamente após a expiração)
        const exp_timestamp = exp * 1000 + 86400000;

        if (exp_timestamp < Date.now()) {
            return res.status(401).json({ message: "JWT token is expired" });
        }

        req.atendente = { id: sub };

        return next();
    } catch (err) {
        return res.status(401).json({ message: "Invalid JWT token" });
    }
}
