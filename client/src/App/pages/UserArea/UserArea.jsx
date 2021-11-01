import React, {useEffect} from 'react';
import UserAreaTemplate from './UserAreaTemplate'
import {useDispatch, useSelector} from 'react-redux'
import {useRouter} from '../../../Common/utils/hooks/useRouter.hook'
import {
    getUserAction, getUserCollectionAction,
    subscribeOnUserAction,
    unSubscribeOnUserAction
} from '../../../Store/actions/action'
import {Loading} from '../../../Common/components/Loading/Loading'


const UserArea = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const {user, userCollection, countUserCollection} = useSelector((state) => state.userAreaPageReducer)
    const userId = router.match.params.id

    useEffect(() => {
        dispatch(getUserAction(userId))
        dispatch(getUserCollectionAction(userId))
    }, [])

    // ПОДПИСКА и ОТПИСКА
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
                              countUserCollection={countUserCollection}
                              user={user}/>
        </>
    );
};

export default UserArea;