export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const data = {};
    return res.status(200).json({ message: "Sign-in successful", data });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
