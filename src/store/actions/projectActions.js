export const createProject = (project) => {
    return (dispatch, getState, {getFireBase, getFirestore}) => {
        const firestore = getFirestore()
        const profile = getState().firebase.profile
        const uid = getState().firebase.auth.uid
        firestore.collection('projects').add({
            title: project.title,
            content: project.content,
            userRead: { username: project.username, read: false},
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

export const readProject = (project) => {
    return (dispatch, getState, {getFireBase, getFirestore}) => {
        const firestore = getFirestore()
        const username = getState().firebase.profile.username
        if (project[0].userRead.username === username && project[0].userRead.read === false){

            firestore.collection('projects').doc(project[1]).update({
                userRead: { username: project[0].userRead.username, read: true}
            }).then(() => {
                dispatch({ type: 'READ_PROJECT', project });
            }).catch((err) => {
                dispatch({ type: 'READ_PROJECT_ERROR', err });
            })
        }
    }
};
