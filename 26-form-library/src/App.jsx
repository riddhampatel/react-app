import { useForm } from "react-hook-form";
import "./index.css";

export default function App() {
  const {register, handleSubmit, watch, formState: { errors },} = useForm();

  const onSubmit = (data) => {
    alert("Sign-up successful!");
    console.log(data);
  };

  const password = watch("password");

  return (
    <div className="form-container">
      <h2>📝 Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Full Name */}
        <input
          {...register("fullName", { required: "Full name is required" })}
          placeholder="Full Name"
        />
        {errors.fullName && <p>{errors.fullName.message}</p>}

        {/* Email */}
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email",
            },
          })}
          placeholder="Email"
        />
        {errors.email && <p>{errors.email.message}</p>}

        {/* Password */}
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Min length is 6 characters",
            },
          })}
          placeholder="Password"
        />
        {errors.password && <p>{errors.password.message}</p>}

        {/* Confirm Password */}
        <input
          type="password"
          {...register("confirmPassword", {
            validate: (value) =>
              value === password || "Passwords do not match",
          })}
          placeholder="Confirm Password"
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
