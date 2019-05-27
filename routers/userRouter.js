const express=require('express');
const router=express.Router();
const ctrluser=require('../controller/userController');
const addexpense=require('../controller/expenseController');
const addsalary=require('../controller/salaryController');
const addcat=require('../controller/addCatController');
const imgupload=require('../controller/uploadController');
const ctrladmin=require('../controller/adminController');

const jwtHelper=require('../config/jwtHelper');
//const adminjwtHelper=require('../config/adminjwtHelper');

router.post('/createuser',ctrluser.createnew);
router.post('/addexpense/:id',addexpense.createxpense);
router.post('/addsalary/:id',addsalary.createsalary);
router.post('/addcat/:id',addcat.createaddcat);
router.get('/displayexpense/:id',addexpense.viewexpense);
router.get('/display',ctrluser.viewall);
router.get('/displaysalary/:id',addsalary.viewsalary);
router.post('/upload',imgupload.uploadfile);
router.delete('/delete',ctrluser.delete);

router.post('/createadmin',ctrladmin.admincreatenew);

// router.get('/adminprofile',adminjwtHelper.verifyJwtToken,ctrladmin.adminprofile);
router.get('/displayadmin',ctrladmin.viewadmin);
router.post('/adminverify',ctrladmin.verify)
router.post('/authenticate',ctrluser.authenticate);
router.get('/userprofile',jwtHelper.verifyJwtToken,ctrluser.userprofile);

module.exports=router;  