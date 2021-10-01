import React, {useEffect} from 'react';
import UserAreaTemplate from "./UserAreaTemplate";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "../../../Common/utils/hooks/useRouter.hook";
import {
    getSubscribeCollectionAction,
    getUserAction,
    subscribeOnUserAction,
    unSubscribeOnUserAction
} from "../../../Store/actions/action";
import {Loading} from "../../../Common/components/Loading/Loading";


const UserArea = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const {user} = useSelector((state) => state.userAreaPageReducer)


    const {allCollection} = useSelector(state => state.collectionReducer)
    const userId = router.match.params.id

    // TODO переделать фильтрацию на сервер
    const userCollection = allCollection.filter(item => item.owner === userId)

    useEffect(() => {
        dispatch(getUserAction(userId))
    }, [])

    const subscribeOnUser = () => {
        dispatch(subscribeOnUserAction(userId))
    }

    const unSubscribeOnUser = () => {
        dispatch(unSubscribeOnUserAction(userId))
    }

    if(!user) {
        return (
            <div>
                <Loading/>
            </div>
        )
    }

    return (
        <>
            <UserAreaTemplate subscribeOnUser={subscribeOnUser}
                              unSubscribeOnUser={unSubscribeOnUser}
                              userCollection={userCollection}
                              user={user}/>
        </>
    );
};

export default UserArea;