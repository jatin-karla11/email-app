import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import EmailIcon from '@material-ui/icons/Email';
import emailjs from "emailjs-com";
import Autocomplete from '@material-ui/lab/Autocomplete';
// import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    display:"flex",
    flexDirection:"column",
    
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor:"#607D8B",
    color:"white"
  },
  subject:{
    minWidth: "100%",
  },
  PhoneInput:{
    
  }
}));

export default function SignIn() {
  const classes = useStyles();
  const [value, setValue] = useState();
  const [subject, setSubject] = useState();

  function sendMail(e){
    e.preventDefault();
    console.log(value);
    emailjs.sendForm('service_e5usrmu', 'template_v5wxljq', e.target, 'user_xroQr6ZIIWa9kk1Frng9z')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
            <EmailIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">
          Send Email Web-App!
        </Typography>
        <form onSubmit={sendMail} className={classes.form} noValidate>
          
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="name"
            label="Name"
            type="text"
            id="name"
            autoComplete="name"
            autoFocus
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            
          /><br></br>
          <PhoneInput
          className={classes.PhoneInput}
            placeholder="Enter phone number"
            country="in"
            inputProps={{
              
              required: true,
              countryCodeEditable:false
            }}
            
            value={value}
            name="phone"
            onChange={setValue}
            containerStyle={{
              
            }}
            inputStyle={{
              width:"100%",
              height:"50px"
            }}
            />
          <br></br>
          <Autocomplete
            className={classes.subject}
            
            id="combo-box-demo"
            options={subjects}
            getOptionLabel={(option) => option.title}
            style={{ width: 300 }}
            renderInput={(params) => <TextField
              name="subject"
              value={subject}
              onChange={setSubject}
              {...params} label="Combo box" variant="outlined" />}
    />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >
            Send!
          </Button>
          
        </form>
      </div>
    </Container>
    
  );
}

const subjects = [
  { title: 'Maths'},
  { title: 'Chemistry'},
  { title: 'Social Science'},
  { title: 'Science'},
  { title: 'Engineering Drawing'},
  { title: 'Applied Statistics'},
  { title: 'Discrete Maths'},
  { title: 'General Knowledge'},
  { title: 'Moral Science'},
  { title: 'Computer Science'},
  { title: 'Information Technology'},
  { title: 'Digital Communication'},
  { title: 'Computer Networks'},
  { title: 'Principles of Management'},
  { title: 'Operating Systems'},
  { title: 'Database Managemnet System'},
  { title: 'SQL'},
  { title: 'Theory of Computation'},
  { title: 'Physics'},

];