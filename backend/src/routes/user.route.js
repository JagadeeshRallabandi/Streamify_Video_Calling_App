import express from "express"

const router = express.Router();

router.get("/",getRecommendedUsers)
router.get("/friends",getMyFriends)