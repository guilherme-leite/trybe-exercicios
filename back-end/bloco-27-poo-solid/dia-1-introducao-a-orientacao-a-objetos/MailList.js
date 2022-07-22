import Email from './Email';
export default class MailList {
    constructor(mailList = []) {
        this.mailList = mailList;
    }
    get all() {
        return this.mailList;
    }
    getByEmailFrom(mailAddress) {
        return this.mailList.filter((mail) => mail.from === mailAddress);
    }
    getBySubject(mailSubject) {
        return this.mailList.filter((mail) => mail.subject.indexOf(mailSubject) !== -1);
    }
    addEmail(newMail) {
        this.mailList.push(newMail);
    }
    removeEmail(mailToRemove) {
        this.mailList = this.mailList.filter((mail) => mail !== mailToRemove);
    }
}
// Para testar
const email1 = new Email('me@personalmail.com', 'friend@personalmail.com', 'Car wash', 'There\'s a new car wash in town. Did you know?');
const email2 = new Email('friend@personalmail.com', 'me@personalmail.com', 'Reply - Car wash', 'Great! My car is really dirty. How much do they charge?');
const email3 = new Email('me@personalmail.com', 'friend@personalmail.com', 'Reply - Reply - Car wash', '$5.00, and you get a free polishing cloth');
const email4 = new Email('me@companymail.com', 'ceo@companymail.com', 'Day off monday', `Next Tuesday is a holiday.
  Are we going to work on Monday?`);
const email5 = new Email('ceo@companymail.com', 'me@companymail.com', 'Reply - Day off monday', 'The entire company will have a day off on monday =D');
const personalMailList = new MailList([email1, email2, email3]);
const professionalMailList = new MailList([email4, email5]);
console.log('------ personalMailList.getByEmailFrom(\'me@personalmail.com\'):');
personalMailList.getByEmailFrom('me@personalmail.com').forEach((mail) => console.log(mail.content));
const email6 = new Email('me@personalmail.com', 'friend2@personalmail.com', 'Day off monday', `Oh yes!
   My boss says we\'ll have Monday off.
   Want to go to the movies?`);
personalMailList.addEmail(email6);
personalMailList.addEmail(email5); // Adicionado erroneamente
console.log('------ personalMailList.getBySubject(\'Day off\'):');
personalMailList.getBySubject('Day off').forEach((mail) => console.log(mail.content));
personalMailList.removeEmail(email5);
console.log('------ professionalMailList.all:');
professionalMailList.all.forEach((mail) => console.log(mail.content));
console.log('------ personalMailList.all:');
personalMailList.all.forEach((mail) => console.log(mail.content));
