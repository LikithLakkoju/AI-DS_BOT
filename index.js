const TelegramBot = require('node-telegram-bot-api');
const token = process.env.BOT_API_KEY;
const bot = new TelegramBot(token, {polling: true});
const request = require('request');
const express = require('express');
const app = express();

require('dotenv').config();


bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "Hello "+msg.chat.first_name, {
    "reply_markup": {
        "keyboard": [["I SEM","II SEM"],["III SEM" ,"IV SEM"],["V SEM","VI SEM"], ["VII SEM","VIII SEM"]]
        }
    });   
    });

bot.on('message', function(msg){
    console.log(process.env.BOT_API_KEY);
    if (msg.text=== "hi") {
    bot.sendMessage(msg.chat.id,"Hello dear user");
    } 
    
    var sem_1 = "I SEM";
    if (msg.text.indexOf(sem_1) === 0) {
        bot.sendMessage(msg.chat.id, "<b> I SEM SUBJECTS</b> : \n 1. COMPUTATIONAL THINKING & PROGRAMMING \n 2.APPLIED CHEMISTRY \n 3.MATHEMATICS-I (LINEAR ALGEBRA & CALCULUS) \n 4.COMMUNICATIVE ENGLISH \n 5.ELEMENTS OF ELECTRICAL AND ELECTRONICS ENGINEERING \n <b>LABS</b> : \n 1.ENGLISH COMMUNICATION SKILLS LAB \n 2.COMPUTATIONAL THINKING & PROGRAMMING LAB \n 3.APPLIED CHEMISTRY LAB",{parse_mode : "HTML"});
    }
    var sem_1 = "II SEM";
    if (msg.text.indexOf(sem_1) === 0) {
        bot.sendMessage(msg.chat.id, "<b> II SEM SUBJECTS</b> : \n 1. MATHEMATICS-II (VECTOR CALCULUS & TRANSFORM CALCULUS) \n 2.DIGITAL LOGIC DESIGN \n 3. APPLIED PHYSICS \n 4.PROGRAMMING FOR PROBLEM SOLVING \n <b>LABS</b> : \n 1.ADVANCED PYTHON PROGRAMMING LAB \n 2.APPLIED PHYSICS LAB \n 3.COMPUTER ENGINEERING WORKSHOP LAB \n 4.PROGRAMMING FOR PROBLEM SOLVING LAB",{parse_mode : "HTML"});
    }
    var sem_1 = "III SEM";
    if (msg.text.indexOf(sem_1) === 0) {
        bot.sendMessage(msg.chat.id, "<b> III SEM SUBJECTS</b> : \n 1. Data Structures \n 2.Database Management Systems \n 3.Object Oriented Programming through Java \n 4.Discrete Mathematical Structures \n 5.Probability & Statistics \n 6.Constitution of India \n 7. Web Application Development Using Full Stack - Module-I \n <b>LABS :</b> \n 1.Data Structures Lab \n 2.Object Oriented Programming through Java Lab \n 3.Database Management Systems Lab",{parse_mode : "HTML"});
    }
    var sem_1 = "IV SEM";
    if (msg.text.indexOf(sem_1) === 0) {
        bot.sendMessage(msg.chat.id, "<b> IV SEM SUBJECTS</b> : \n 1.Software Engineering \n 2. Operating Systems \n 3.Introduction to Artificial Intelligence & data Science \n 4.Critical Reading and Creative Writing \n 5.Universal Human Values \n 6.Data warehousing and Mining \n 7.Web Application Development Using Full Stack-Module - II <b>LABS</b> : \n 1.OS Lab \n 2.Data Mining using Python Lab \n 3.AI & DS Lab",{parse_mode : "HTML"});
    }
    var sem_1 = "V SEM";
    if (msg.text.indexOf(sem_1) === 0) {
        bot.sendMessage(msg.chat.id, "<b> V SEM SUBJECTS</b> : \n 1. DESIGN & ANALYSIS OF ALGORITHMS \n 2.COMPUTER ORGANISATION \n 3.MACHINE LEARNING \n 4.WEB TECHNOLOGIES \n 5.R PROGRAMMING \n 6.QANTATIVE APTITUDE AND LOGICAL REASONING \n <b>LABS</b> : \n 1.WEB TECHNOLIGIES LAB \n 2.MACHINE LEARNING LAB \n 3.COMPETETIVE CODING",{parse_mode : "HTML"});
    }
    var sem_1 ="VI SEM";
    if(msg.text.indexOf(sem_1)===0){
        bot.sendMessage(msg.chat.id , "Doesn't Exist");
    }
    var sem_1 ="VII SEM";
    if(msg.text.indexOf(sem_1)===0){
        bot.sendMessage(msg.chat.id , "Doesn't Exist");
    }
    var sem_1 ="VIII SEM";
    if(msg.text.indexOf(sem_1)===0){
        bot.sendMessage(msg.chat.id , "Doesn't Exist");
    }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log(`Server is running at port ${PORT}`);
});