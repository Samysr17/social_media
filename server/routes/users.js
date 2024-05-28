import express from "express"
import {
    getuser,
    getUserFriends,
    addRemoveFriend
} from "../controllers/users.js"
import {verifytoken} from "../middleware/Auth.js"

const router=express.Router();

router.get("/:id",verifytoken,getuser);
router.get("/:id/friends",verifytoken,getUserFriends);

router.patch("/:id/:friendId",verifytoken,addRemoveFriend);

export default router;