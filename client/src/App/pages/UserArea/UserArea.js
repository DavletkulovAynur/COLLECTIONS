import React, {useEffect} from 'react';
import UserAreaTemplate from "./UserAreaTemplate";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "../../../Common/utils/hooks/useRouter.hook";
import {getUserAction} from "../../../Redux/actions/action";


const UserArea = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const {user} = useSelector((state) => state.userAreaPageReducer)
    const userId = router.match.params.id


    useEffect(() => {
        dispatch(getUserAction(userId))
    }, [])

    if(!user) {
        return (
            <div>
                LOADER
            </div>
        )
    }
    return (
        <>
            <UserAreaTemplate user={user}/>
        </>
    );
};

export default UserArea;