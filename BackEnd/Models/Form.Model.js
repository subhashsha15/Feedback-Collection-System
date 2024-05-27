const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'Asia/Kolkata',
    timeZoneName: 'short'
  };
const timestamp = new Date().toLocaleString('en-US', options);

const formSchema = new mongoose.Schema({
    formTitle: { type: String, required: true },
    fields: [
        {
            label: String,
            value: mongoose.Schema.Types.Mixed,
        }
    ],
    submittedAt: { type: Date, default: Date.now }
});

const Form = mongoose.model('Form', formSchema);
module.exports = Form;