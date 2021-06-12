// import React from "react";
// import PhoneNumber from "react-phone-number-input";
// import TextField from "@material-ui/core/TextField";
// import { useField } from 'formik';

// import "react-phone-number-input/style.css";
// import "./PhoneTextField.css";


// const PhoneTextField = ({name, ...otherProps}) => {
//     const [meta, field] = useField(name);

//     const configTextField = {
//       ...field,
//       ...otherProps,
//       fullWidth: true,
//       variant: "outlined",
//     };

//     if (meta && meta.touched && meta.error) {
//       configTextField.error = true;
//       configTextField.helperText = meta.error;
//     }


//     return (
//       <div>
//         <PhoneNumber
//           {...configTextField}
//           international
//           countrySelectProps={{ unicodeFlags: true }}
//           name={name}
//           inputComponent={PhoneNumberTextField}
//         />
//       </div>
//     );
      
// }

// class PhoneNumberTextField extends React.Component  {
    
//   render() {
//       console.log(this.props)
//         return (
//           <TextField {...this.props}  />
//         );        
//     }
// };

// export default PhoneTextField;