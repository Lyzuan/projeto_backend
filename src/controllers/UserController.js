const User = require('./models/User'); 
const bcrypt = require('bcrypt');


exports.getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
  
    const userData = user.toJSON();
    delete userData.password;
    res.status(200).json(userData);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


exports.createUser = async (req, res) => {
  try {
    const { firstname, surname, email, password } = req.body;

    
    if (!firstname || !surname || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ firstname, surname, email, password: hashedPassword });
    
    const userData = newUser.toJSON();
    delete userData.password;
    res.status(201).json(userData);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(400).json({ message: 'Error creating user' });
  }
};


exports.updateUser = async (req, res) => {
  try {
    const { firstname, surname, email } = req.body;

    
    if (!firstname && !surname && !email) {
      return res.status(400).json({ message: 'At least one field is required for update' });
    }

    const [updated] = await User.update({ firstname, surname, email }, { where: { id: req.params.id } });

    if (updated) {
      return res.status(204).send();
    }

    res.status(404).json({ message: 'User not found' });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(400).json({ message: 'Error updating user' });
  }
};


exports.deleteUser = async (req, res) => {
  try {
    const deleted = await User.destroy({ where: { id: req.params.id } });

    if (deleted) {
      return res.status(204).send();
    }

    res.status(404).json({ message: 'User not found' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'Error deleting user' });
  }
};
