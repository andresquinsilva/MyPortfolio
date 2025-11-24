/**
 * File: app.js
 * Student: Andres Quintero
 * StudentID: 301466379
 * Date: 2025-09-23
 * Description: Express + EJS setup for Portfolio site
 */

import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session from 'express-session';
import flash from 'connect-flash';
import helmet from 'helmet';
import dotenv from 'dotenv';

import indexRouter from './routes/index.js';

dotenv.config();

const app = express();

// Default locals so all views have site + page available
app.locals.site = { title: 'Andres Quintero — Portfolio' };
app.use((req, res, next) => {
  res.locals.page = '';
  next();
});

// view engine setup
app.set('views', path.resolve('views'));
app.set('view engine', 'ejs');

// security best-practices
app.use(helmet());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.resolve('public')));

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


// Sessions + flash (optional, used for contact form feedback)
app.use(session({
  secret: process.env.SESSION_SECRET || 'express-portfolio-secret',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 } // 1 hour
}));
app.use(flash());

// Expose flash messages to all views
app.use((req, res, next) => {
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  next();
});

// Routes
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('partials/error', {
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  });
});

require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');
const { connectDB } = require('./config/db');
const apiRoutes = require('./routes/api/index.routes');

app.use('/api', apiRoutes);

connectDB(process.env.MONGODB_URI).catch(err => {
  console.error('DB connection failed:', err.message);
  process.exit(1);
});



export default app;
