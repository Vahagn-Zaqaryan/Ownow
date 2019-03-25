export const createProject = (project) => {
    return (dispatch, getState, {getFireBase, getFirestore}) => {
        const firestore = getFirestore()
        const profile = getState().firebase.profile
        const uid = getState().firebase.auth.uid
        firestore.collection('projects').add({
            ...project,
            firstName: profile.firstName,
            lastName: profile.lastName,
            uid: uid,
            timestamp: new Date()
        }).then( () => {
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        })
    }
};
