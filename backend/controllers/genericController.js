const fs = require('fs');

const addItem = (Model) => async (req, res) => {
    try {
        const item = new Model({
            title: req.body.title,
            description: req.body.description,
            image: req.file.filename,
            author: req.body.author
        });
        await item.save();
        req.session.message = {
            type: 'success',
            message: 'Item Added Successfully'
        };
        res.redirect('/');
    } catch (err) {
        res.json({ message: err.message, type: 'danger' });
    }
};

const getItems = (Model) => async (req, res) => {
    try {
        const items = await Model.find();
        res.render('main', { title: 'Home Page', items });
    } catch (err) {
        res.json({ message: err.message, type: 'danger' });
    }
};

const editItem = (Model) => async (req, res) => {
    try {
        const item = await Model.findById(req.params.id);
        if (item == null) {
            res.redirect('/');
        } else {
            res.render('edit_item', { title: 'Edit Item', item });
        }
    } catch (err) {
        res.redirect('/');
    }
};

const updateItem = (Model) => async (req, res) => {
    let newImage = "";
    if (req.file) {
        newImage = req.file.filename;
        try {
            fs.unlinkSync('./uploads/' + req.body.oldImage);
        } catch (err) {
            console.log(err);
        }
    } else {
        newImage = req.body.oldImage;
    }

    try {
        await Model.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            description: req.body.description,
            image: newImage,
            author: req.body.author
        });
        req.session.message = {
            type: 'success',
            message: 'Item Updated Successfully'
        };
        res.redirect('/');
    } catch (err) {
        res.json({ message: err.message, type: 'danger' });
    }
};

const deleteItem = (Model) => async (req, res) => {
    try {
        const item = await Model.findById(req.params.id);
        if (item.image != "") {
            try {
                fs.unlinkSync('./uploads/' + item.image);
            } catch (err) {
                console.log(err);
            }
        }
        await Model.findByIdAndDelete(req.params.id);
        req.session.message = {
            type: 'info',
            message: 'Item Deleted Successfully'
        };
        res.redirect('/');
    } catch (err) {
        res.json({ message: err.message, type: 'danger' });
    }
};

module.exports = {
    addItem,
    getItems,
    editItem,
    updateItem,
    deleteItem
};
