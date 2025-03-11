export const authMiddleware = (req, res, next) => {
    // Implementar lógica de autenticación
    next();
  };

export const errorMiddleware = (err, req, res, next) => {
  res.status(500).json({ message: err.message });
};