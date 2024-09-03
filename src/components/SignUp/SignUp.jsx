import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

const formDataInitial = {
  name: "",
  email: "",
  password: "",
  role: "Customer",
};
export const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: formDataInitial,
    mode: "all",
  });

  const formSubmit = (formData) => {
    console.log("form submitted:", formData);

    //axios.post();
  };
  const password = watch("password");

  return (
    <div className="">
      <form onSubmit={handleSubmit(formSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Gloria"
            {...register("name", {
              required: "isim alanı boş bırakılamaz",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters long",
              },
            })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="gloriapritchett@example.com"
            {...register("email", {
              required: "e-posta alanı zorunlu",
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/gm,
                message: "Please enter a valid email address",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            {...register("password", {
              required: "zorunlu",
              pattern: {
                value:
                  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gm,
                message:
                  "Password must be at least 8 characters long and include numbers, lowercase letters, uppercase letters, and special characters",
              },
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div>
          <label htmlFor="confirm">Confirm Password</label>
          <input
            type="password"
            id="confirm"
            placeholder="Re-enter your password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (
                value //custom validation
              ) => value === password || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        </div>
        <div>
          <label htmlFor="role" className="sr-only">
            Role
          </label>
          <select id="role" {...register("role")}>
            <option selected>Customer</option>
            <option>Store</option>
            <option>Executive</option>
          </select>
        </div>
        <Button type="submit" disabled={!isValid}>
          Submit
        </Button>
      </form>
    </div>
  );
};
