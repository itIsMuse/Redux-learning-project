const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');
const navigate = useNavigate(); // React Router

const handleSubmit = async (e) => {
  e.preventDefault();

  const backendUrl = 'https://backend.com/login'; // Replace with actual API

  const userData = { email, password };

  try {
    const response = await fetch(backendUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    const data = await response.json(); // Convert response to JSON

    if (response.ok) {
      // Step 1: Store token (if backend sends one)
      localStorage.setItem('token', data.token); 

      // Step 2: Fetch user's saved data (optional)
      const userResponse = await fetch(`https://backend.com/user/${data.userId}`, {
        headers: { "Authorization": `Bearer ${data.token}` }
      });
      const userData = await userResponse.json();

      console.log("User Data:", userData);

      // Step 3: Redirect user
      navigate('/dashboard'); // Change to the page you want
    } else {
      setError(data.message || "Invalid credentials");
    }
  } catch (error) {
    console.error("Login Error:", error);
    setError("Something went wrong. Please try again.");
  }
};
