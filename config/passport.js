import dotenv from "dotenv";
dotenv.config();

import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";

passport.use(new GitHubStrategy(
  {
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/github/callback"
  },
  (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
  }
));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

console.log("CLIENT:", process.env.GITHUB_CLIENT_ID);
console.log("SECRET:", process.env.GITHUB_CLIENT_SECRET);

export default passport;