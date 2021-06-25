import firebase from '../lib/firebase'

export const addUser = async (authUser:any) =>{
  const response = await firebase
    .firestore()
    .collection('Users')
    .doc(authUser.uid as string)
    .set({...authUser},{merge:true})
  return response
}

export const addQuiz = async (quizData) => {
  let response = await firebase.firestore().collection('quiz').add(quizData);
  return response;
};

export const getAllQuiz = async () => {
  const snapshot = await firebase.firestore().collection('quiz').get();
  const quiz = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  // console.log(quiz);
  
  return quiz;
};

export const getAllUsers = async () => {
  const snapshot = await firebase.firestore().collection('Users').get();
  const users = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  // console.log(users);
  
  return users;
}
export const getSingleQuiz = async (quizId) => {
  const snapshot = await firebase
    .firestore()
    .collection('quiz')
    .doc(String(quizId))
    .get();
  const quizData = snapshot.exists ? JSON.stringify(snapshot.data()) : null;
  return quizData;
};

export const addAnswer = async (data) => {
  const response = await firebase.firestore().collection('answer').add(data);
  return response;
};

export const getAnswer = async (answerId) => {
  const answerSnapshot = await firebase
    .firestore()
    .collection('answer')
    .doc(String(answerId))
    .get();
  let answerData = answerSnapshot.exists
    ? JSON.stringify(answerSnapshot.data())
    : null;
  return answerData;
};