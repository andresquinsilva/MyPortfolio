const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name:     { type: String, required: true, trim: true },
    email:    { type: String, required: true, trim: true, lowercase: true, unique: true },
    password: { type: String, required: true },
    created:  { type: Date, default: Date.now },
    updated:  { type: Date, default: Date.now }
  },
  { timestamps: false }
);

UserSchema.pre('save', function(next){ this.updated = new Date(); next(); });
UserSchema.pre('findOneAndUpdate', function(next){ this.set({ updated: new Date() }); next(); });

module.exports = mongoose.model('User', UserSchema);
