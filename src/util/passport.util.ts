import passport from "passport";
import { Strategy } from "passport-google-oauth20";
import { config } from "dotenv";

config();

passport.use(
	new Strategy(
		{
			clientID: process.env.clientId,
			clientSecret: process.env.clientSecret,
			callbackURL: process.env.callbackURL,
			scope: ["profile", "email"],
		},
		function (accessToken, refreshToken, profile, done) {
			console.log(accessToken);
			console.log(refreshToken);
			console.log(profile);
			return done(null, profile);
		}
	)
);

passport.serializeUser(function (user, done) {
	done(null, user);
});

passport.deserializeUser(function (user, done) {
	done(null, user);
});

// async function validateUser(userDetails: UserDocumentType) {
// 	const user = await Userdata.findOne({
// 		email: userDetails.email,
// 	});
// 	if (user) return user;
// 	console.log("No user found... Creatingf....");

// 	await Userdata.create({
// 		email: userDetails.email,
// 		username: userDetails.username,
// 	}).then(() => console.log("Created user " + userDetails.username));
// }
