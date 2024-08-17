const Category = require('../models/Category');  

module.exports = {
  
  async getCategories(req, res) {
    const { limit = 12, page = 1, fields, use_in_menu } = req.query;
    const queryOptions = {
      where: {},
      attributes: fields ? fields.split(',') : undefined,
      limit: limit === '-1' ? undefined : parseInt(limit, 10),
      offset: limit === '-1' ? undefined : (parseInt(page, 10) - 1) * parseInt(limit, 10),
    };

    if (use_in_menu) {
      queryOptions.where.use_in_menu = use_in_menu === 'true';
    }

    try {
      const { count, rows } = await Category.findAndCountAll(queryOptions);
      return res.status(200).json({
        data: rows,
        total: count,
        limit: parseInt(limit, 10),
        page: parseInt(page, 10),
      });
    } catch (error) {
      console.error('Error fetching categories:', error);
      return res.status(500).json({ message: 'Error fetching categories' });
    }
  },


  async getCategoryById(req, res) {
    try {
      const category = await Category.findByPk(req.params.id);

      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }

      return res.status(200).json(category);
    } catch (error) {
      console.error('Error fetching category by ID:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  },

  
  async createCategory(req, res) {
    const { name, slug, use_in_menu } = req.body;

   
    if (!name || !slug) {
      return res.status(400).json({ message: 'Name and slug are required' });
    }

    try {
      const category = await Category.create({ name, slug, use_in_menu });
      return res.status(201).json({ id: category.id });
    } catch (error) {
      console.error('Error creating category:', error);
      return res.status(400).json({ message: 'Error creating category' });
    }
  },

  
  async updateCategory(req, res) {
    const { id } = req.params;
    const { name, slug, use_in_menu } = req.body;

    
    if (!name || !slug) {
      return res.status(400).json({ message: 'Name and slug are required' });
    }

    try {
      const [updated] = await Category.update({ name, slug, use_in_menu }, { where: { id } });

      if (updated) {
        return res.status(204).send();
      }

      return res.status(404).json({ message: 'Category not found' });
    } catch (error) {
      console.error('Error updating category:', error);
      return res.status(400).json({ message: 'Error updating category' });
    }
  },


  async deleteCategory(req, res) {
    const { id } = req.params;

    try {
      const deleted = await Category.destroy({ where: { id } });

      if (deleted) {
        return res.status(204).send();
      }

      return res.status(404).json({ message: 'Category not found' });
    } catch (error) {
      console.error('Error deleting category:', error);
      return res.status(400).json({ message: 'Error deleting category' });
    }
  },
};
