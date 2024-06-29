const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now },
    endedAt: { type: Date },
    duration: { type: Number }, // Duration in seconds
});

sessionSchema.pre('save', function (next) {
    if (this.endedAt && !this.duration) {
        this.duration = (this.endedAt - this.createdAt) / 1000; // Calculate duration in seconds
    }
    next();
});

const Session = mongoose.model('Session', sessionSchema);
module.exports = Session;
