export const StoreFields = ({ register, errors, formDataInitial }) => {
  return (
    <>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="storeName"
        >
          Store Name
        </label>
        <input
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.store?.name && "border-red-500"
          }`}
          id="storeName"
          type="text"
          placeholder="Store Name"
          {...register("store.name", {
            required: "Store Name field is required",
            minLength: {
              value: 3,
              message: "Store Name must be at least 3 characters long",
            },
          })}
        />
        {errors.store?.name && (
          <p className="text-red-500 text-xs italic">
            {errors.store?.name.message}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="storePhone"
        >
          Store Phone
        </label>
        <input
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.store?.phone && "border-red-500"
          }`}
          id="storePhone"
          type="text"
          placeholder="Store Phone"
          {...register("store.phone", {
            required: "Store Phone field is required",
            pattern: {
              value: /^(?:\+90|0)?5\d{9}$/,
              message: "Please enter a valid Türkiye phone number",
            },
          })}
        />
        {errors.store?.phone && (
          <p className="text-red-500 text-xs italic">
            {errors.store?.phone.message}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="storeTaxId"
        >
          Store Tax ID
        </label>
        <input
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.store?.tax_no && "border-red-500"
          }`}
          id="storeTaxId"
          type="text"
          placeholder="Store Tax ID"
          {...register("store.tax_no", {
            required: "Store Tax ID field is required",
            pattern: {
              value: /^T\d{4}V\d{6}$/,
              message: "Store Tax ID must match the pattern TXXXXVXXXXXX",
            },
          })}
        />
        {errors.store?.tax_no && (
          <p className="text-red-500 text-xs italic">
            {errors.store?.tax_no.message}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="storeBankAccount"
        >
          Store Bank Account
        </label>
        <input
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.store?.bank_account && "border-red-500"
          }`}
          id="storeBankAccount"
          type="text"
          placeholder="Store Bank Account"
          {...register("store.bank_account", {
            required: "Store Bank Account field is required",
            pattern: {
              value: /^[A-Z]{2}\d{2}[A-Z0-9]{1,30}$/,
              message: "Please enter a valid IBAN address",
            },
          })}
        />
        {errors.store?.bank_account && (
          <p className="text-red-500 text-xs italic">
            {errors.store?.bank_account.message}
          </p>
        )}
      </div>
    </>
  );
};
