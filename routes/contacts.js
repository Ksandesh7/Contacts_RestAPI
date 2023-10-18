const express = require('express')
const router = express.Router()
const Contact = require('../models/contact')

router.get('/', async(req, res)=>{

    try {
        const contacts = await Contact.find();
        res.json(contacts)
    }
    catch(err) {
        console.log("Error : "+err);
    }

})


router.get('/:id', async(req, res)=>{

    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.json(contact)
    }
    catch(err) {
        console.log("Error : "+err);
    }

})



router.post('/', async(req, res)=>{

    const contact = new Contact({
        name:req.body.name,
        email:req.body.email,
        mobile: req.body.mobile,
    })
    
    try {
        const a1 = await contact.save()
        res.json(a1);
    }
    catch(err) {
        console.log("Error : "+err);
    }
})


router.patch('/:id', async(req, res)=>{

    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        if (req.body.name) {
            contact.name = req.body.name;
        }

        if (req.body.email) {
            contact.email = req.body.email;
        }

        if (req.body.mobile) {
            contact.mobile = req.body.mobile;
        }
        const a1 = await contact.save()
        res.json(a1)
    }
    catch(err) {
        console.log("Error : "+err);
    }

})


router.put('/:id', async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);

        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        contact.name = req.body.name;
        contact.email = req.body.email;
        contact.mobile = req.body.mobile;

        const updatedContact = await contact.save();
        res.json(updatedContact);
    } catch (err) {
        console.log('Error: ' + err);
        res.status(500).json({ message: 'Server error' });
    }
});


router.delete('/:id', async(req, res)=>{

    try {
        const contact = await Contact.findByIdAndRemove(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.json({ message: 'Contact deleted' });
    }
    catch(err) {
        console.log("Error : "+err);
    }

})

router.delete('/', async (req, res) => {
    try {
        await Contact.deleteMany({}); // Delete all aliens
        res.json({ message: 'All Contacts deleted' });
    } catch (err) {
        console.log('Error: ' + err);
        res.status(500).json({ message: 'Server error' });
    }
});



module.exports = router