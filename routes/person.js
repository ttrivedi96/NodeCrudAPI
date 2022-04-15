const express = require('express');
const router = express.Router();
const Person = require('../models/persons');


// Fetch All Data
router.get('/', async (req, res)=>{
    try {
        const persons = await Person.find()
        res.json(persons)
    } catch (err) {
        res.send('Error' + err) 
    }
})

// Fetch Single Record
router.get('/:id', async (req, res)=>{
    try {
        const persons = await Person.findById(req.params.id)
        res.json(persons)
    } catch (err) {
        res.send('Error' + err) 
    } 
})

// Store Data
router.post('/', async (req, res)=>{
    const person = new Person({
        name:req.body.name,
        email:req.body.email,
        contact:req.body.contact,
    })
    try {
        const per = await person.save()
        res.json(per)
    } catch (error) {
        res.send('Error' + error) 
    }
})


// Update Data
router.patch('/:id', async (req, res)=>{
    try {
        const person = await Person.findById(req.params.id)
        person.email = req.body.email
        const per = await person.save()
        res.json(per)
    } catch (error) {
        res.send('Error' + error) 
    }
})

// Delete Data
router.delete('/:id', async (req, res)=>{
    try {
        // const person = await Person.removeById(req.params.id)
        const person = await Person.findByIdAndRemove(req.params.id)
        const per = await person.remove()
        res.json(per)
    } catch (err) {
        res.send('Error' + err) 
    }
})


module.exports = router