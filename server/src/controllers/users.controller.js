import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist" });

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "nodejsserver",
      { expiresIn: "2h" }
    );
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const signup = async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) res.status(400).json({ message: "User already exists" });
    if (password !== confirmPassword)
      res.status(400).json({ message: "Passwords do not match" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });

    const token = jwt.sign(
      { email: result.email, id: result._id },
      "nodejsserver",
      { expiresIn: "2h" }
    );

    res.status(200).json({ result, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
