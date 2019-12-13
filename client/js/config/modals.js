import AsyncStorage from '@react-native-community/async-storage';

export const queryViewer = async () => {
  try {
    const value = await AsyncStorage.getItem('user');
    return JSON.parse(value);
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const createViewer = async viewer => {
  try {
    return await AsyncStorage.setItem(
      `user`,
      JSON.stringify({id: viewer.user.id, token: viewer.token}),
    );
  } catch (error) {
    console.log(error);
    return new Error(error);
  }
};

export const deleteViewer = async () => {
  try {
    return await AsyncStorage.removeItem(`user`);
  } catch (error) {
    console.log(error);
    return new Error(error);
  }
};

export const queryOnBoarding = async () => {
  try {
    await AsyncStorage.getItem('onBoardingComplete');
    return JSON.parse(value);
  } catch (error) {
    console.log(error);
    return new error(error);
  }
};

export const onBoardingSet = async () => {
  try {
    await AsyncStorage.setItem(onBoardingComplete, JSON.stringify(true));
    return true;
  } catch (error) {
    return new Error(error);
  }
};
