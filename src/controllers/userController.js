import * as userService from '../services/userService';

export const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json({ data: users });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.json({ data: user, status: 'success' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    res.json({ data: user, status: 'success' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getUserByName = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.name);
    res.json({ data: user, status: 'success' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    res.json({ data: user, status: 'success' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await userService.deleteUser(req.params.id);
    res.json({ data: user, status: 'success' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// exports.getAvailableProductsByCustomerId = async (req, res) => {
//     const cid = req.params.cid || '';
//     if (cid === '') {
//         return [];
//     }
//
//     try {
//         const user = await userService.getUserByExternalId(cid);
//         const prodList = await getAvailableProducts(user.achievements)
//
//         return res.send({
//             success: true,
//             data: prodList
//         });
//
//     } catch (err) {
//         return res.send({
//             success: false,
//             data: [],
//             message: err.message
//         });
//     }
// };
//
// getAvailableProducts = async (achList) => {
//     if (achList.length === 0) {
//         return [];
//     }
//
//     let result = [];
//     for (const achId of achList) {
//         const achievement = await getAchievementById(achId);
//         if (!achievement) {
//             continue;
//         }
//
//         result = result.concat(achievement.products);
//     }
//     result = [...new Set(result)];
//
//     return result;
// };
