import * as React from "react";
import {
  Dialog,
  DialogContent,
  Slide,
  TextField,
  Button,
  Tabs,
  Tab,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { postData } from "../../api";
import toast, { Toaster } from "react-hot-toast";
import { useContext, useState } from "react";
import { mycontext } from "../../App";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AuthDialog({ open, setOpen }) {
  const [tab, setTab] = useState(0);
  const [error, setError] = useState("");
  const context = useContext(mycontext)
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    Firstname: "",
    Lastname: "",
    phonenumber: "",
    Email: "",
    password: "",
  });

  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await postData("/client/create", formData);
      toast.success("singup successfully")
      setFormData({ Firstname: "", Lastname: "", phonenumber: "", Email: "", password: "" })
      setOpen(false);
    } catch (err) {
      setError(err.response?.data?.msg);
      console.log(err.response?.data?.msg)
    }
    setLoading(false);
  };

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await postData("/client/loginuser", {
        Email: formData.Email,
        password: formData.password,
      });
      toast.success("Login successfully!")
      context.setislogin(true)
      localStorage.setItem("islogin", true)
      localStorage.setItem("username", res.user.id);
      setOpen(false);
      setFormData({ Firstname: "", Lastname: "", phonenumber: "", Email: "", password: "", })
    } catch (err) {
      setError(err.response?.data?.msg || "Login failed!");
      console.log(err)
    }
    setLoading(false);
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        keepMounted
        PaperProps={{
          sx: {
            borderRadius: "16px",
            paddingX: "10px",
            paddingTop: "10px",
            backgroundColor: "#faf7f2",
            position: "relative",
          },
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 10,
            top: 10,
            color: "#E09F40",
            "&:hover": { color: "#a88747" },
          }}
        >
          <CloseIcon />
        </IconButton>

        <div className="px-4 py-4 md:w-[450px]">
          <Tabs
            value={tab}
            onChange={(e, newVal) => setTab(newVal)}
            centered
            sx={{
              "& .MuiTab-root": { textTransform: "none", fontWeight: 600 },
              "& .Mui-selected": { color: "#E09F40 !important" },
              "& .MuiTabs-indicator": { backgroundColor: "#E09F40" },
            }}
          >
            <Tab label="Login" />
            <Tab label="Register" />
          </Tabs>

          <DialogContent>
            {error && <p className="text-red-500">{error}</p>}

            {tab === 0 && (
              <div className="flex flex-col gap-4 mt-4">
                <TextField
                  label="Email"
                  name="Email"
                  fullWidth
                  variant="outlined"
                  value={formData.Email}
                  onChange={handleChange}
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
                />
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  fullWidth
                  variant="outlined"
                  value={formData.password}
                  onChange={handleChange}
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
                />
                {/* <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: "#c19b5a",
                    borderRadius: "10px",
                    py: 1.2,
                    fontSize: "16px",
                    textTransform: "none",
                    "&:hover": { backgroundColor: "#a88747" },
                  }}
                  onClick={handleLogin}
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </Button> */}
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    zIndex: 1,
                    backgroundColor: "#E09F40",
                    color: "#fff",
                    fontWeight: 600,
                    borderRadius: "10px",
                    py: 1.2,
                    fontSize: "16px",
                    textTransform: "none",

                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: 0,
                      height: "50%",
                      backgroundColor: "#713722",
                      transition: "width .3s cubic-bezier(.785,.135,.15,.86)",
                      zIndex: -1
                    },

                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      width: 0,
                      height: "50%",
                      backgroundColor: "#713722",
                      transition: "width .3s cubic-bezier(.785,.135,.15,.86)",
                      zIndex: -1
                    },

                    "&:hover": {
                      backgroundColor: "#E09F40"
                    },

                    "&:hover::before": {
                      width: "100%"
                    },

                    "&:hover::after": {
                      width: "100%"
                    }
                  }}
                  onClick={handleLogin}
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </Button>
              </div>
            )}

            {tab === 1 && (
              <div className="flex flex-col gap-4 mt-4">
                <TextField
                  label="First Name"
                  name="Firstname"
                  fullWidth
                  variant="outlined"
                  value={formData.Firstname}
                  onChange={handleChange}
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
                />
                <TextField
                  label="Last Name"
                  name="Lastname"
                  fullWidth
                  variant="outlined"
                  value={formData.Lastname}
                  onChange={handleChange}
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
                />
                <TextField
                  label="Phone Number"
                  name="phonenumber"
                  fullWidth
                  variant="outlined"
                  value={formData.phonenumber}
                  onChange={handleChange}
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
                />
                <TextField
                  label="Email"
                  name="Email"
                  fullWidth
                  variant="outlined"
                  value={formData.Email}
                  onChange={handleChange}
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
                />
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  fullWidth
                  variant="outlined"
                  value={formData.password}
                  onChange={handleChange}
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
                />
                {/* <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: "#c19b5a",
                    borderRadius: "10px",
                    py: 1.2,
                    fontSize: "16px",
                    textTransform: "none",
                    "&:hover": { backgroundColor: "#a88747" },
                  }}
                  onClick={handleRegister}
                  disabled={loading}
                >
                  {loading ? "Registering..." : "Register"}
                </Button> */}
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    zIndex: 1,
                    backgroundColor: "#E09F40",
                    color: "#fff",
                    fontWeight: 600,
                    borderRadius: "10px",
                    py: 1.2,
                    fontSize: "16px",
                    textTransform: "none",

                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: 0,
                      height: "50%",
                      backgroundColor: "#713722",
                      transition: "width .3s cubic-bezier(.785,.135,.15,.86)",
                      zIndex: -1
                    },

                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      width: 0,
                      height: "50%",
                      backgroundColor: "#713722",
                      transition: "width .3s cubic-bezier(.785,.135,.15,.86)",
                      zIndex: -1
                    },

                    "&:hover": {
                      backgroundColor: "#E09F40"
                    },

                    "&:hover::before": {
                      width: "100%"
                    },

                    "&:hover::after": {
                      width: "100%"
                    },

                    "& *": { position: "relative", zIndex: 2 }
                  }}
                  onClick={handleRegister}
                  disabled={loading}
                >
                  {loading ? "Registering..." : "Register"}
                </Button>
              </div>
            )}
          </DialogContent>
        </div>
      </Dialog>
    </>
  );
}
