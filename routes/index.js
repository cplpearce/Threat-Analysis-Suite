const express = require('express');
const router = express.Router();

// T E S T   D A T A
const testData = require('../data/test_data')
const sigactData = require('../data/IraqSigact.json')
const sigactDataSmall = require('../data/IraqSigactSmall.json')

// R O O T
router.get('/', (req, res, next) => {
  res.render('main', { title: 'Main' });
});

// A D D   R E P O R T
router.get('/reports/add', (req, res, next) => {
  res.render('add_report', { title: 'Add Report' });
});

// V I E W   R E P O R T S 
router.get('/reports', (req, res, next) => {
  res.render('view_reports', { title: 'View Reports' , reports: sigactDataSmall });
});

// V I E W   R E P O R T
router.post('/reports/:id', (req, res, next) => {
  res.render('report', { report_id: req.paramas.id })
})

// G E O S P A T I A L   V I E W
router.get('/geo', (req, res, next) => {
  res.render('geo', { title: 'Geo' });
});

// S E T T I N G S
router.get('/settings', (req, res, next) => {
  res.render('settings', { title: 'Settings' });
});

// P R O F I L E
router.get('/profile', (req, res, next) => {
  res.render('profile', { title: 'Profile' });
});

module.exports = router;
