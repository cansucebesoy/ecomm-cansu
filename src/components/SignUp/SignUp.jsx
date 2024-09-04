import { Button } from "@/components/ui/button";
import { useState } from "react";
import { apiClient } from "@/services/apiClient";
import { StoreFields } from "../StoreFields/StoreFields";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const formDataInitial = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  role_id: "",
  store: {
    name: "",
    phone: "",
    tax_no: "",
    bank_account: "",
  },
};

export const SignUp = () => {
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: async () => {
      try {
        const response = await apiClient.get("/roles");
        setRoles(response.data);
        formDataInitial.role_id = 3;
      } catch (e) {
        console.error("Error fetching roles:", error);
      }

      return formDataInitial;
    },
    mode: "onBlur",
  });

  const role_id = watch("role_id");

  const formSubmit = async (data) => {
    setLoading(true);
    const { confirmPassword, ...dataWithoutConfirmPassword } = data;
    try {
      await apiClient.post("/signup", dataWithoutConfirmPassword);
      toast.success(
        "You need to click the link in your email to activate your account!"
      );
      history.push("/");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
    console.log("form submitted:", dataWithoutConfirmPassword);
  };

  const password = watch("password");
  //   const formData = watch();

  return (
    <div className="flex justify-center items-center ">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2">
        <h2 className="text-lg font-bold mb-4">Sign Up</h2>
        {/* <pre>{JSON.stringify(formData, null, 2)}</pre> */}

        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.name && "border-red-500"
              }`}
              id="name"
              type="text"
              placeholder="Gloria"
              {...register("name", {
                required: "Name field cannot be empty",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters long",
                },
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-xs italic">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.email && "border-red-500"
              }`}
              type="email"
              id="email"
              placeholder="gloriapritchett@example.com"
              {...register("email", {
                required: "Email field is required",
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/gm,
                  message: "Please enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.password && "border-red-500"
              }`}
              type="password"
              id="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password field is required",
                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gm,
                  message:
                    "Password must be at least 8 characters long and include numbers, lowercase letters, uppercase letters, and special characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirm"
            >
              Confirm Password
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.confirmPassword && "border-red-500"
              }`}
              type="password"
              id="confirm"
              placeholder="Re-enter your password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs italic">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="role_id"
            >
              Role
            </label>
            <select
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              id="role_id"
              {...register("role_id")}
            >
              {roles.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.name}
                </option>
              ))}
            </select>
          </div>
          {role_id === "2" && (
            <StoreFields
              register={register}
              errors={errors}
              formDataInitial={formDataInitial}
            />
          )}
          <Button
            type="submit"
            disabled={!isValid}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              (!isValid || loading) && "opacity-50 cursor-not-allowed"
            }`}
          >
            {loading ? <Spinner animation="border" /> : "Submit"}
          </Button>
        </form>
      </div>
    </div>
  );
};
//   return (
//     <div className="">
//       <form onSubmit={handleSubmit(formSubmit)}>
//         <div>
//           <label htmlFor="name">Name</label>
//           <input
//             id="name"
//             type="text"
//             placeholder="Gloria"
//             {...register("name", {
//               required: "isim alanı boş bırakılamaz",
//               minLength: {
//                 value: 3,
//                 message: "Name must be at least 3 characters long",
//               },
//             })}
//           />
//           {errors.name && <p>{errors.name.message}</p>}
//         </div>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             placeholder="gloriapritchett@example.com"
//             {...register("email", {
//               required: "e-posta alanı zorunlu",
//               pattern: {
//                 value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/gm,
//                 message: "Please enter a valid email address",
//               },
//             })}
//           />
//           {errors.email && <p>{errors.email.message}</p>}
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             placeholder="Enter your password"
//             {...register("password", {
//               required: "zorunlu",
//               pattern: {
//                 value:
//                   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gm,
//                 message:
//                   "Password must be at least 8 characters long and include numbers, lowercase letters, uppercase letters, and special characters",
//               },
//             })}
//           />
//           {errors.password && <p>{errors.password.message}</p>}
//         </div>
//         <div>
//           <label htmlFor="confirm">Confirm Password</label>
//           <input
//             type="password"
//             id="confirm"
//             placeholder="Re-enter your password"
//             {...register("confirmPassword", {
//               required: "Please confirm your password",
//               validate: (
//                 value //custom validation
//               ) => value === password || "Passwords do not match",
//             })}
//           />
//           {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
//         </div>
//         <div>
//           <label htmlFor="role" className="sr-only">
//             Role
//           </label>
//           <select id="role" {...register("role")}>
//             <option selected>Customer</option>
//             <option>Store</option>
//             <option>Executive</option>
//           </select>
//         </div>
//         <Button type="submit" disabled={!isValid}>
//           Submit
//         </Button>
//       </form>
//     </div>
//   );
// };
