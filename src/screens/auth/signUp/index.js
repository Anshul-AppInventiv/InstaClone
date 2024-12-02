import React, {useState} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import InputBox from '../../../components/InputBox';
import CustomButton from '../../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {validateSignup, signupInitialValue} from '../utils';
import {styles} from './styles';

const Signup = () => {
  const navigation = useNavigation();
  const [values, setValues] = useState(signupInitialValue);
  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setValues({
      ...values,
      [field]: value,
    });
  };

  const handleSignup = () => {
    const validationErrors = validateSignup(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log(values);
      // navigate or handle signup here
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Text style={styles.text}>What's your mobile number</Text>

        <InputBox
          placeholder={'Mobile Number'}
          onChangeText={value => handleInputChange('mobileNumber', value)}
          value={values.mobileNumber}
          errors={errors.mobileNumber}
          keyboardType={'numeric'}
          maxLength={10}
        />
        <CustomButton buttonTitle={'Sign up'} onPress={handleSignup} />
        <TouchableOpacity style={styles.signUpWithEmailButton}>
          <Text style={styles.signUpWithEmailText}>Sign up with email</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.loginButton}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
