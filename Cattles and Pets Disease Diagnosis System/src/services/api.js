import axios from 'axios';



const BASE_URL = `https://animed-backend.onrender.com`;

export const signup = async (inputs) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/v1/users/signup`,
      {
        name: inputs.name,
        email: inputs.email,
        role: inputs.role,
        password: inputs.password,
        passwordConfirm: inputs.passwordConfirm,
      },
      {
        withCredentials: true,
      }
    );

    return response;

  } catch (err) {
    throw new Error(err.response?.data?.message || 'Signup failed');
  }
};


export const userDetailsRegister = async (inputs) => {
  try {

    const response = await axios.post(
      `${BASE_URL}/api/v1/users/userDetailsRegister`,
      {
        Name: inputs.Name,
        contactNumber: inputs.contactNumber,
        telephoneNumber: inputs.telephoneNumber,
        contactEmail: inputs.contactEmail,
        Address: inputs.Address,
        photo: inputs.photo || null,
      },
      { withCredentials: true }
    );

    return response;
  } catch (error) {

    throw new Error(error);
  }
};


export const vetDoctorDetailsRegister = async (inputs) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/v1/users/vetDoctorDetailsRegister`,
      {
        fullName: inputs.fullName,
        email: inputs.email,
        phoneNumber: inputs.phoneNumber,
        licenseNumber: inputs.licenseNumber,
        specialization: inputs.specialization,
        experience: inputs.experience,
        clinicName: inputs.clinicName,
        clinicAddress: inputs.clinicAddress,
        preferredLanguage: inputs.preferredLanguage,
      },
      {

        withCredentials: true,
      }
    );

    return response;

  } catch (error) {

    throw new Error(error);

  }
};
