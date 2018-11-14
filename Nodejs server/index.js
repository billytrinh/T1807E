var express = require('express');
var app = express();
var storage = require('node-persist');
storage.initSync({
	dir: "data",
	ttl: false
})
app.use(express.static('public'));
app.get("/xxx",function(req,res){
	var new_contact = {
		name: req.query.name_1,
		phone: req.query.phone_1,
		address: req.query.address_1
	};
	var contacts = storage.getItemSync("contacts");
	contacts.push(new_contact);
	storage.setItemSync("contacts",contacts);
	//storage.removeItemSync("contacts");
	res.send("done");
});
app.get("/contacts",function(req,res){
	var contacts = [
				{
					name: "Cornelia Corina",
					phonenumb: "+8491200000",
					studentcode: "AEE5726",
					birth: "01-01-1997",
					gender: "Female",
					school: "Lorem Ipsum Academy",
					classgrade: "T2499C",
					email: " Lorem.ipsum@Gmail.com",
					twitter: " @Loremipsum",
					address: "Lorem Ipsum is simply dummy text of the printing"
				},
				{
					name: "York Esmé",
					phonenumb: "+8491200000",
					studentcode: "APY6243",
					birth: "05-01-1997",
					gender: "Male",
					school: "Lorem Ipsum Academy",
					classgrade: "T2499C",
					email: " Lorem.ipsum@Gmail.com",
					twitter: " @Loremipsum",
					address: "Lorem Ipsum is simply dummy text of the printing"
				},
				{
					name: "Carlton Norbert",
					phonenumb: "+84122111111",
					studentcode: "AVY4482",
					birth: "07-01-1997",
					gender: "Male",
					school: "Lorem Ipsum Academy",
					classgrade: "T2499C",
					email: " Lorem.ipsum@Gmail.com",
					twitter: " @Loremipsum",
					address: "Lorem Ipsum is simply dummy text of the printing"
				},
				{
					name: "Merritt Amber",
					phonenumb: "+84122111111",
					studentcode: "BEL7856",
					birth: "29-01-1997",
					gender: "Female",
					school: "Lorem Ipsum Academy",
					classgrade: "T2499C",
					email: " Lorem.ipsum@Gmail.com",
					twitter: " @Loremipsum",
					address: "Lorem Ipsum is simply dummy text of the printing"
				},
				{
					name: "Brandi Ezekiel",
					phonenumb: "+84167444444",
					studentcode: "BQV2227",
					birth: "06-02-1997",
					gender: "Female",
					school: "Lorem Ipsum Academy",
					classgrade: "T2499C",
					email: " Lorem.ipsum@Gmail.com",
					twitter: " @Loremipsum",
					address: "Lorem Ipsum is simply dummy text of the printing"
				},
				{
					name: "Isabel Adolph",
					phonenumb: "+84167444444",
					studentcode: "BUB2488",
					birth: "22-02-1997",
					gender: "Female",
					school: "Lorem Ipsum Academy",
					classgrade: "T2499C",
					email: " Lorem.ipsum@Gmail.com",
					twitter: " @Loremipsum",
					address: "Lorem Ipsum is simply dummy text of the printing"
				},
				{
					name: "Roxane Gemma",
					phonenumb: "+8491144444",
					studentcode: "CRQ9457",
					birth: "21-03-1997",
					gender: "Female",
					school: "Lorem Ipsum Academy",
					classgrade: "T2499C",
					twitter: " @Loremipsum",
					email: " Lorem.ipsum@Gmail.com",
					address: "Lorem Ipsum is simply dummy text of the printing"
				},
				{
					name: "Bennett Alton",
					phonenumb: "+8491144444",
					studentcode: "EPF7446",
					birth: "14-04-1997",
					gender: "Female",
					school: "Lorem Ipsum Academy",
					classgrade: "T2499C",
					email: " Lorem.ipsum@Gmail.com",
					twitter: " @Loremipsum",
					address: "Lorem Ipsum is simply dummy text of the printing"
				},
				{
					name: "Genevieve Damon",
					phonenumb: "+84167555555",
					studentcode: "SVG7367",
					birth: "18-04-1997",
					gender: "Female",
					school: "Lorem Ipsum Academy",
					classgrade: "T2499C",
					email: " Lorem.ipsum@Gmail.com",
					twitter: " @Loremipsum",
					address: "Lorem Ipsum is simply dummy text of the printing"
				},
				{
					name: "Inez Emil",
					phonenumb: "+84167555555",
					studentcode: "HCG8994",
					birth: "27-04-1997",
					gender: "Male",
					school: "Lorem Ipsum Academy",
					classgrade: "T2499C",
					email: " Lorem.ipsum@Gmail.com",
					twitter: " @Loremipsum",
					address: "Lorem Ipsum is simply dummy text of the printing"
				},
				{
					name: "Charleen Sheryll",
					phonenumb: "+847815492226",
					studentcode: "HXD2838",
					birth: "06-05-1997",
					gender: "Female",
					school: "Lorem Ipsum Academy",
					classgrade: "T2499C",
					email: " Lorem.ipsum@Gmail.com",
					twitter: " @Loremipsum",
					address: "Lorem Ipsum is simply dummy text of the printing"
				},
				{
					name: "Aretha Chrissy",
					phonenumb: "+841637715076",
					studentcode: "NEY6658",
					birth: "21-06-1997",
					gender: "Female",
					school: "Lorem Ipsum Academy",
					classgrade: "T2499C",
					email: " Lorem.ipsum@Gmail.com",
					twitter: " @Loremipsum",
					address: "Lorem Ipsum is simply dummy text of the printing"
				},
				{
					name: "Ariel Brian",
					phonenumb: "+841990357557",
					studentcode: "NMH2844",
					birth: "26-06-1997",
					gender: "Female",
					school: "Lorem Ipsum Academy",
					classgrade: "T2499C",
					email: " Lorem.ipsum@Gmail.com",
					twitter: " @Loremipsum",
					address: "Lorem Ipsum is simply dummy text of the printing"
				},
				{
					name: "Yolonda Leon",
					phonenumb: "+84708039543",
					studentcode: "NSH9792",
					birth: "12-07-1997",
					gender: "Female",
					school: "Lorem Ipsum Academy",
					classgrade: "T2499C",
					email: " Lorem.ipsum@Gmail.com",
					twitter: " @Loremipsum",
					address: "Lorem Ipsum is simply dummy text of the printing"
				},
				{
					name: "Harley Alethea",
					phonenumb: "+84911920856",
					studentcode: "PMB2993",
					birth: "03-08-1997",
					gender: "Male",
					school: "Lorem Ipsum Academy",
					classgrade: "T2499C",
					email: " Lorem.ipsum@Gmail.com",
					twitter: " @Loremipsum",
					address: "Lorem Ipsum is simply dummy text of the printing"
				},
				{
					name: "Larry Mason",
					phonenumb: "+842313297743",
					studentcode: "PQG2446",
					birth: "05-08-1997",
					gender: "Female",
					school: "Lorem Ipsum Academy",
					classgrade: "T2499C",
					email: " Lorem.ipsum@Gmail.com",
					twitter: " @Loremipsum",
					address: "Lorem Ipsum is simply dummy text of the printing"
				},
				{
					name: "Madison Andi",
					phonenumb: "+841648522348",
					studentcode: "SAJ5458",
					birth: "10-09-1997",
					gender: "Female",
					school: "Lorem Ipsum Academy",
					classgrade: "T2499C",
					email: " Lorem.ipsum@Gmail.com",
					twitter: " @Loremipsum",
					address: "Lorem Ipsum is simply dummy text of the printing"
				},
				{
					name: "Vicki Jude",
					phonenumb: "+84703551177",
					studentcode: "SPS7962",
					birth: "05-10-1997",
					gender: "Female",
					school: "Lorem Ipsum Academy",
					classgrade: "T2499C",
					email: " Lorem.ipsum@Gmail.com",
					twitter: " @Loremipsum",
					address: "Lorem Ipsum is simply dummy text of the printing"
				},
				{
					name: "Nicholas Jenna",
					phonenumb: "+841282588734",
					studentcode: "QNR3267",
					birth: "01-11-1997",
					gender: "Male",
					school: "Lorem Ipsum Academy",
					classgrade: "T2499C",
					email: " Lorem.ipsum@Gmail.com",
					twitter: " @Loremipsum",
					address: "Lorem Ipsum is simply dummy text of the printing"
				},
				
			];
	
	res.send(contacts);
});

var server = app.listen(1997, function () {
  console.log("Ung dung Node.js dang hoat dong");
});