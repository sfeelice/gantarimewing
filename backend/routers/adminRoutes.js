const express = require("express");
const router = express.Router();
const admin = require("../models/adminModels");
const { getAdminStatus } = require('../controllers/adminController');
const { GenerateJWT, VerifyJWT } = require("../middleware/authorization");
const bcrypt = require("bcryptjs/dist/bcrypt");
const adminModels = require("../models/adminModels");

//Helper variable
const cookieDuration = 6 * 60 * 60 * 1000;

// Route to get admin status
router.get('/status', VerifyJWT, getAdminStatus);

// Sign Up
router.post("/SignUp", async (req, res) => {
    try {
        // Destructure the necessary fields from the request body
        const { username, email, password, status } = req.body;

        // Log the entire request body to ensure 'status' is present
        console.log("Received input:", req.body);

        // Validate the status field
        if (status !== 'Baha' && status !== 'Sobangan') {
            return res.status(400).json({ message: "Status must be either 'Baha' or 'Sobangan'" });
        }

        // Check if the email already exists
        const existingAdmin = await adminModels.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({
                message: "Email sudah digunakan"
            });
        }

        // Check if the username already exists
        const existingUsername = await adminModels.findOne({ username });
        if (existingUsername) {
            return res.status(400).json({
                message: "Username sudah digunakan"
            });
        }

        // Create a new admin with the status included
        const newAdmin = new adminModels({ username, email, password, status });
        const savedAdmin = await newAdmin.save();
        const token = GenerateJWT(savedAdmin);

        return res.cookie('token', token, { maxAge: cookieDuration }).json({
            username: savedAdmin.username,
            email: savedAdmin.email,
            status: savedAdmin.status, // Include status in the response
            id: savedAdmin._id
        });
    } catch (error) {
        console.error("Error during signup:", error.stack || error);
        return res.status(500).json({ error: error.message });
    }
});

//Login
router.post("/LogIn", async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await adminModels.findOne({ email: email });

    if (admin && (await admin.comparePassword(password))) {
      const token = GenerateJWT(admin);
      return res.cookie("token", token, { maxAge: cookieDuration }).json({
        username: admin.username,
        email: admin.email,
        id: admin._id,
      });
    } else {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error });
  }
});

//LogOut
router.post("/LogOut", VerifyJWT, async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ message: "You are now logged out." });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
});


// //CRUD profile
// //Getting one
// router.get("/CRUD", async (req, res) => {
//   try {
//     const admin = await Admin.findById(req.params.id);
//     if (!admin) return res.status(404).json({ error: "admin not found" });
//     res.json(admin);
//   } catch (error) {
//     console.error("Error pulling data: ", error);
//     return res.status(500).json({ error: "Server error!" });
//   }
// });

// //Creating one
// router.post("/CRUD", async (req, res) => {
//   try {
//     const input_value = req.body;
//     const new_document = new admin(input_value);
//     const new_docSaved = await new_document.save();
//     return res.status(201).json(new_docSaved);
//   } catch (error) {
//     console.error("Error creating data:", error);
//     return res.status(500).json({
//       error: "Server Error!",
//       message: error.message,
//     });
//   }
// });
// //Updating one
// router.patch("/CRUD/:username", async (req, res) => {
//   try {
//     const { username } = req.params;
//     const dataToUpdate = await admin.findOne({ username: username });
//     const newData = req.body;

//     if (!dataToUpdate) {
//       return res.status(404).json({
//         message: "user tidak ditemukan",
//       });
//     }

//     Object.keys(newData).forEach((key) => {
//       if (newData[key]) {
//         dataToUpdate[key] = newData[key];
//       }
//     });

//     const updatedData = await dataToUpdate.save();
//     return res.status(201).json(updatedData);
//   } catch (error) {
//     console.error(error.message);
//     return res.status(500).json({
//       message: `Error while updating Data => ${error.message}`,
//     });
//   }
// });

// //Deleting one
// router.delete("/CRUD/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedData = await admin.findOneAndDelete({ _id: id });

//     if (!deletedData || deletedData.length === 0) {
//       return res.json({
//         message: "user tidak ditemukan",
//       });
//     }

//     return res.status(201).json(deletedData);
//   } catch (error) {
//     console.error(error.message);
//     return res.status(500).json({
//       message: `Error while deleting Data => ${error.message}`,
//     });
//   }
// });

module.exports = router;
